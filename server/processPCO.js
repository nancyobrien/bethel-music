const db = require("./db");
const { get } = require("./axit");
const { sleep } = require("./utils");

const venuesData = [
  { name: "Pasco", pco_name: "West Pasco Sunday Services" },
  { name: "Richland", pco_name: "LIVE VENUE" },
];

function executeQuery(query, values, callback) {
  db.connect((err, client, done) => {
    if (err) throw err;
    try {
      client.query(query, values, callback);
    } finally {
      done();
    }
  });
}

function getVenues() {
  const query = "Select * FROM venues";
  let results = {};

  executeQuery(query, [], (err, res) => {
    if (err) {
      // We can just console.log any errors
      console.log(err.stack);
    } else {
      console.log("results rows", res.rows);
      //last_confirmed_offset
      res.rows.forEach((venue) => getPlans(venue));
    }
  });
}

function getPlans(venue, recordsPerPage = 90) {
  get(
    `https://api.planningcenteronline.com/services/v2/service_types/${venue.pco_id}/plans?offset=${venue.last_confirmed_offset}&per_page=${recordsPerPage}`
  )
    .then((res) => {
      const plans = res.data.data;
      const newOffset =
        venue.last_confirmed_offset + Math.min(recordsPerPage, plans.length);
      plans.forEach((plan) => addPlan(plan, venue));
      executeQuery(
        "update venues set last_confirmed_offset = $1 where id = $2",
        [newOffset, venue.id],
        () => {}
      );
      console.log("plans fetch to ", newOffset, " for ", venue.name);
    })
    .catch((err) => {
      console.log("Error: ", err.message);
    });
}

function addPlan(planData, venue) {
  const query =
    "INSERT INTO plans (pco_id, plan_date, url, venue_id) VALUES ($1, $2, $3, $4)";

  executeQuery(
    query,
    [
      planData.id,
      planData.attributes.sort_date,
      planData.attributes.planning_center_url,
      venue.id,
    ],
    (err, res) => {
      if (err) {
        // We can just console.log any errors
        console.log(err.stack);
      } else {
        //  console.log("inserted " + res.rowCount + " row:", { date: planData.attributes.sort_date, pco_id: planData.id });
      }
    }
  );
}

function stubSong(planSong) {
  const songQuery = "select * from songs where pco_id = $1";
  const songInsert = "INSERT INTO songs (pco_id, title) VALUES ($1, $2)";
  //check to see if the song already exists
  executeQuery(
    songQuery,
    [planSong.relationships.song?.data?.id],
    (err, res) => {
      if (err) {
        // We can just console.log any errors
        console.log(err.stack);
      } else {
        if (res.rows.length == 0) {
          executeQuery(
            songInsert,
            [planSong.relationships.song?.data?.id, planSong.attributes.title],
            (err, res) => {
              if (err) {
                // We can just console.log any errors
                if (
                  !err.message.includes(
                    "duplicate key value violates unique constraint"
                  )
                ) {
                  console.log(
                    planSong.attributes.title,
                    err.message,
                    err.stack
                  );
                }
              } else {
                //song added
              }
            }
          );
        } else {
          return res.rows[0].id;
        }
      }
    }
  );
}

function stubLeader(planLeader) {
  const leaderQuery = "select * from leaders where pco_id = $1";
  const leaderInsert = "INSERT INTO leaders (pco_id, name) VALUES ($1, $2)";
  //check to see if the song already exists
  executeQuery(
    leaderQuery,
    [planLeader.relationships.person?.data?.id],
    (err, res) => {
      if (err) {
        // We can just console.log any errors
        console.log(err.stack);
      } else {
        if (res.rows.length == 0) {
          executeQuery(
            leaderInsert,
            [
              planLeader.relationships.person?.data?.id,
              planLeader.attributes.name,
            ],
            (err, res) => {
              if (err) {
                // We can just console.log any errors
                console.log(planLeader.attributes.name, err.message, err.stack);
              } else {
                //person added
              }
            }
          );
        } else {
          return res.rows[0].id;
        }
      }
    }
  );
}

function getPlanItems() {
  const query =
    "Select p.*, v.pco_id as venue_pco_id \
    from plans p inner join venues v on p.venue_id = v.id \
    WHERE p.isInvalid = FALSE and p.id NOT IN (SELECT plan_id FROM plan_song) limit 75";

  executeQuery(query, [], (err, res) => {
    if (err) {
      // We can just console.log any errors
      console.log(err.stack);
    } else {
      if (res.rows.length) {
        res.rows.forEach((plan) => {
          get(
            `https://api.planningcenteronline.com/services/v2/service_types/${plan.venue_pco_id}/plans/${plan.pco_id}/items`
          )
            .then((res2) => {
              const songs = res2.data.data.filter(
                (plan_song) =>
                  !!plan_song.relationships.song?.data?.id &&
                  plan_song.relationships.song?.data?.id !== "0"
              );
              //TODO: only mark invalid if plan date is in the past. Future plans without songs just haven't been planned yet.
              if (songs.length === 0) {
                const invalidUpdate =
                  "update plans set isInvalid = TRUE where id = $1";
                executeQuery(invalidUpdate, [plan.id], () => {});
              } else {
                const query =
                  "INSERT INTO plan_song (pco_id, url, plan_id, song_id, song_key, description, slot) \
              select $1, $2, $3, s.id, $5, $6, $7 from songs s where s.pco_id = $4";

                songs.forEach((song, idx) => {
                  stubSong(song);
                  executeQuery(
                    query,
                    [
                      song.id,
                      song.links.self,
                      plan.id,
                      song.relationships.song?.data?.id,
                      song.attributes.key_name,
                      song.attributes.description?.substring(0, 500),
                      idx,
                    ],
                    (err, res) => {
                      if (err) {
                        // We can just console.log any errors
                        console.log(err.stack);
                      } else {
                        console.log("inserted " + song.attributes.title);
                      }
                    }
                  );
                });
              }
            })
            .catch((err) => {
              console.log("Error: ", err.message);
            });
        });
        //  sleep(20000); //PCO has a rate limit of 100 requests in 20 seconds, so wait before we go get more.
        // getPlanItems();
      } else {
        console.log("all done");
      }
    }
  });
}

function updateSong(pco_id) {
  const query =
    "update songs set url = $2,  copyright = $3, author = $4, ccli_number = $5, title = $6 where pco_id = $1";
  get(`https://api.planningcenteronline.com/services/v2/songs/${pco_id}`)
    .then((res) => {
      const attributes = res.data.data.attributes;
      const links = res.data.data.links;

      executeQuery(
        query,
        [
          pco_id,
          links.self,
          attributes.copyright?.substring(0, 500),
          attributes.author,
          attributes.ccli_number,
          attributes.title,
        ],
        (err, res) => {
          if (err) {
            // We can just console.log any errors
            console.log(err.stack);
          } else {
            console.log("updated " + attributes.title);
          }
        }
      );
    })
    .catch((err) => {
      console.log("Error: ", err.message);
    });
}

function updateIncompleteSongs() {
  const query = "Select * from songs WHERE url is NULL limit 90";

  executeQuery(query, [], (err, res) => {
    if (err) {
      // We can just console.log any errors
      console.log(err.stack);
    } else {
      if (res.rows.length) {
        res.rows.forEach((song) => {
          updateSong(song.pco_id);
        });
        // console.log("waiting");
        // sleep(1000); //PCO has a rate limit of 100 requests in 20 seconds, so wait before we go get more.
        // console.log("done waiting");
        // updateIncompleteSongs();
      } else {
        console.log("all done");
      }
    }
  });
}

function getLeaders() {
  const query =
    "Select p.*, v.pco_id as venue_pco_id \
    from plans p inner join venues v on p.venue_id = v.id \
    WHERE p.leadersFetched = FALSE limit 50";

  const validPositions = ["Worship Leader", "Co-worship leader", "Female bVox"];

  executeQuery(query, [], (err, res) => {
    if (err) {
      // We can just console.log any errors
      console.log(err.stack);
    } else {
      if (res.rows.length) {
        res.rows.forEach((plan) => {
          get(
            `https://api.planningcenteronline.com/services/v2/service_types/${plan.venue_pco_id}/plans/${plan.pco_id}/team_members`
          )
            .then((res2) => {
              const leaderFetchedUpdate =
                "update plans set leadersFetched = TRUE where id = $1";
              executeQuery(leaderFetchedUpdate, [plan.id], () => {});

              const leaders = res2.data.data.filter(
                (leader) =>
                  leader.type === "PlanPerson" &&
                  leader.relationships.person?.data?.id &&
                  validPositions.includes(leader.attributes?.team_position_name)
              );
              const query =
                "INSERT INTO plan_leader (pco_id, url, plan_id, leader_id) \
            select $1, $2, $3, leaders.id from leaders where leaders.pco_id = $4";
              console.log("leaderes", leaders.length);
              leaders.forEach((leader) => {
                stubLeader(leader);
                executeQuery(
                  query,
                  [
                    leader.id,
                    leader.links.self,
                    plan.id,
                    leader.relationships.person?.data?.id,
                  ],
                  (err, res) => {
                    if (err) {
                      // We can just console.log any errors
                      console.log(err.stack);
                    } else {
                      console.log("inserted " + leader.attributes.name);
                    }
                  }
                );
              });
            })
            .catch((err) => {
              console.log("Error: ", err.message);
            });
        });
      } else {
        console.log("all done");
      }
    }
  });
}

module.exports = {
  getVenues: () => {
    return getVenues();
  },
  getPlans: (venue) => {
    return getPlans(venue);
  },
  getPlanItems: () => {
    return getPlanItems();
  },
  getSong: (pco_id) => {
    return getSong(pco_id);
  },
  getSongs: () => {
    return updateIncompleteSongs();
  },
  getLeaders: () => {
    return getLeaders();
  },
};
