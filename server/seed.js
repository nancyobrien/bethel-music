const db = require("./db");

const venuesData = [
  { name: "Pasco", pco_id: "108700" },
  { name: "Richland", pco_id: "108692" },
];

function insertData() {
  const query = "INSERT INTO venues (name, pco_id) VALUES ($1, $2)";
  // Connect to the db instance
  db.connect((err, client, done) => {
    if (err) throw err;
    try {
      // loop over the lines stored in the csv file
      venuesData.forEach((row) => {
        // For each line we run the insert query with the row providing the column values
        client.query(query, [row.name, row.pco_id], (err, res) => {
          if (err) {
            // We can just console.log any errors
            console.log(err.stack);
          } else {
            console.log("inserted " + res.rowCount + " row:", row);
          }
        });
      });
    } finally {
      done();
    }
  });
}

function seed() {
  insertData();
}

seed();
