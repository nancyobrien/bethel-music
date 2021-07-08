const { Pool } = require("pg");
const { host, user, database, password, port } = require("./config");
const { get } = require("./axit");
const { formatDate } = require("./utils");

// Create a pool instance and pass in our config, which we set in our env vars
const pool = new Pool({
  host,
  user,
  database,
  password,
  port,
});

async function callAPI(url) {
  const results = await get(url)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log(
        "Get Plans Error: ",
        err.message,
        err.response.data.errors[0].detail
      );
    });
  return results;
}

async function executeQuery(query, params = []) {
  let response;
  try {
    response = await pool.query(query, params);
    return response?.rows;
  } catch (error) {
    // handle error
    // do not throw anything
  }
}

async function getVenues() {
  let response;
  try {
    response = await executeQuery("Select * FROM venues");
    return response;
  } catch (error) {
    // handle error
    // do not throw anything
  }
}

async function addPlan(planData, venue) {
  const query =
    "INSERT INTO plans (pco_id, plan_date, url, venue_id) VALUES ($1, $2, $3, $4)";

  const res = await executeQuery(query, [
    planData.id,
    planData.attributes.sort_date,
    planData.attributes.planning_center_url,
    venue.id,
  ]);
}

async function getPlans() {
  let venues = [];
  const recordsPerPage = 50;
  try {
    venues = await getVenues();

    let report = [];
    for (const venue of venues) {
      const url = `https://api.planningcenteronline.com/services/v2/service_types/${venue.pco_id}/plans?offset=${venue.last_confirmed_offset}&per_page=${recordsPerPage}`;
      const plans = await callAPI(url);
      for (const plan of plans) {
        await addPlan(plan, venue);
      }
      const newOffset =
        venue.last_confirmed_offset + Math.min(recordsPerPage, plans.length);
      await executeQuery(
        "update venues set last_confirmed_offset = $1 where id = $2",
        [newOffset, venue.id]
      );
      report.push(`plans fetched to ${newOffset} for ${venue.name}`);
    }

    return report;
  } catch (error) {
    // handle error
    // do not throw anything
  }
}

async function getIncompletePlans(invalidCutoff) {
  let plans;

  const formattedDate = formatDate(invalidCutoff);

  const query = `Select p.*, v.pco_id as venue_pco_id \
  from plans p inner join venues v on p.venue_id = v.id \
  WHERE p.isInvalid = FALSE and (p.id NOT IN (SELECT plan_id FROM plan_song) OR p.plan_date > '${formattedDate}' ) limit 75`;

  try {
    plans = await executeQuery(query);
    return plans;
  } catch (error) {
    // handle error
    // do not throw anything
  }
}

async function getPlanItems() {
  const now = new Date();
  const invalidCutoff = now.setDate(now.getDate() - 21);
  const plans = await getIncompletePlans(invalidCutoff);
  console.log(plans);
  const report = [];
  if (plans.length) {
    for (const plan of plans) {
      console.log(plan, plan.plan_date);
      const planDate = new Date(plan.plan_date);
      console.log("Gettings data for date: ", formatDate(planDate));
      const url = `https://api.planningcenteronline.com/services/v2/service_types/${plan.venue_pco_id}/plans/${plan.pco_id}/items`;

      const planSongsData = await callAPI(url);
      const songs = planSongsData.filter(
        (plan_song) =>
          !!plan_song.relationships.song?.data?.id &&
          plan_song.relationships.song?.data?.id !== "0"
      );

      if (songs.length === 0 && planDate < invalidCutoff) {
        const invalidUpdate = "update plans set isInvalid = TRUE where id = $1";
        await executeQuery(invalidUpdate, [plan.id]);
      } else {
        const res_pcoIDs = await executeQuery("Select pco_id from plan_song");
        const pcoIDs = res_pcoIDs?.map((r) => r.pco_id);
        const newSongs = songs.filter((s) => pcoIDs.includes());

        const insertQuery =
          "INSERT INTO plan_song (pco_id, url, plan_id, song_id, song_key, description, slot, no_leader_found) \
              select $1, $2, $3, s.id, $5, $6, $7, $8 from songs s where s.pco_id = $4";

        for (song in newSongs) {
          await stubSong(song);
          await executeQuery(insertQuery, [
            song.id,
            song.links.self,
            plan.id,
            song.relationships.song?.data?.id,
            song.attributes.key_name,
            song.attributes.description?.substring(0, 500),
            idx + 1,
            !song.attributes.description,
          ]);
          report.push(`inserted ${song.attributes.title}`);
        }

        if (newSongs.length === 0) {
          report.push("no new song items found");
        }
      }
    }
  } else {
    report.push("All plans up to date");
  }
}

async function testing() {
  let venues = [];
  const recordsPerPage = 50;
  try {
    venues = await getVenues();

    let report = [];
    for (const venue of venues) {
      const url = `https://api.planningcenteronline.com/services/v2/service_types/${venue.pco_id}/plans?offset=${venue.last_confirmed_offset}&per_page=${recordsPerPage}`;
      const plans = await callAPI(url);
      for (const plan of plans) {
        await addPlan(plan, venue);
      }
      // planData = planData.concat(plans);
      const newOffset =
        venue.last_confirmed_offset + Math.min(recordsPerPage, plans.length);
      await pool.query(
        "update venues set last_confirmed_offset = $1 where id = $2",
        [newOffset, venue.id]
      );
      report.push(`plans fetched to ${newOffset} for ${venue.name}`);
    }

    return report;
  } catch (error) {
    // handle error
    // do not throw anything
  }
}

module.exports = {
  getVenues: async () => {
    return getPlans();
  },
  getPlanItems: async () => {
    return getPlanItems();
  },
  testing: async () => {
    return testing();
  },
};
