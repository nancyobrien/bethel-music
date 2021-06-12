const db = require("./db");
const { get } = require("./axit");

const venuesData = [
  { name: "Pasco", pco_name: "West Pasco Sunday Services" },
  { name: "Richland", pco_name: "LIVE VENUE" },
];

function insertData(name, pco_id) {
  /* const query = "INSERT INTO venues (name, pco_id) VALUES ($1, $2)";
  // Connect to the db instance
  db.connect((err, client, done) => {
    if (err) throw err;
    try {
      // For each line we run the insert query with the row providing the column values
      client.query(query, [name, pco_id], (err, res) => {
        if (err) {
          // We can just console.log any errors
          console.log(err.stack);
        } else {
          console.log("inserted " + res.rowCount + " row:", { name, pco_id });
        }
      });
    } finally {
      done();
    }
  }); */
}

function getVenues() {
  const query = "Select * FROM venues";
  let results = {};
  db.connect((err, client, done) => {
    if (err) throw err;
    try {
      client.query(query, [], (err, res) => {
        if (err) {
          // We can just console.log any errors
          console.log(err.stack);
        } else {
          return res;
        }
      });
    } finally {
      done();
    }
  });
}

function getPlans(venueID) {
  get(
    `https://api.planningcenteronline.com/services/v2/service_types/${venueID}/plans?offset=0`
  )
    .then((res) => {
      const services = res.data.data;

      console.log(services.length);
    })
    .catch((err) => {
      console.log("Error: ", err.message);
    });
}

module.exports = {
  getVenues: () => {
    return getVenues();
  },
  getPlans: (venue) => {
    return fetchData(venue);
  },
};
