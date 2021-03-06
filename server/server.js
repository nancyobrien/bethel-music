require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const graphql = require("graphql");
const { Client } = require("pg");
const joinMonster = require("join-monster").default;
const db = require("./db");
const axios = require("axios");
const { get } = require("./axit");
const {
  getPlanItemsForID,
  getSong,
  getSongs,
  getLeaders,
  updateLeaders,
  findSongLeaders,
} = require("./processPCO");

const { getVenues, testing, getPlanItems } = require("./test");

const config = {
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
};

const client = new Client(config);
client.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected");
  }
});

var Venue = new graphql.GraphQLObjectType({
  name: "Venue",
  fields: () => ({
    id: { type: graphql.GraphQLInt },
    name: { type: graphql.GraphQLString },
    pcoID: {
      type: graphql.GraphQLString,
      extensions: {
        joinMonster: { sqlColumn: "pco_id" },
      },
    },
  }),
});

Venue.extensions = {
  joinMonster: {
    sqlTable: "venues",
    uniqueKey: "id",
  },
};

var Song = new graphql.GraphQLObjectType({
  name: "Song",
  fields: () => ({
    id: { type: graphql.GraphQLInt },
    title: { type: graphql.GraphQLString },
    pcoID: {
      type: graphql.GraphQLString,
      extensions: {
        joinMonster: { sqlColumn: "pco_id" },
      },
    },
    author: { type: graphql.GraphQLString },
    archive: { type: graphql.GraphQLBoolean },
    is_christmas: { type: graphql.GraphQLBoolean },
    default_slot: { type: graphql.GraphQLInt },
    ccliNumber: {
      type: graphql.GraphQLString,
      extensions: {
        joinMonster: { sqlColumn: "ccli_number" },
      },
    },
  }),
});

Song.extensions = {
  joinMonster: {
    sqlTable: "songs",
    uniqueKey: "id",
  },
};

const Leader = new graphql.GraphQLObjectType({
  name: "Leader",
  sqlTable: "leaders",
  fields: () => ({
    id: { type: graphql.GraphQLString },
    fullName: {
      type: graphql.GraphQLString,
      extensions: {
        joinMonster: { sqlColumn: "full_name" },
      },
    },
    pcoID: {
      type: graphql.GraphQLString,
      extensions: {
        joinMonster: { sqlColumn: "pco_id" },
      },
    },
  }),
});

Leader.extensions = {
  joinMonster: {
    sqlTable: "leaders",
    uniqueKey: "id",
  },
};

var PlanLeader = new graphql.GraphQLObjectType({
  name: "PlanLeader",
  fields: () => ({
    id: { type: graphql.GraphQLInt },
    pcoID: {
      type: graphql.GraphQLString,
      extensions: {
        joinMonster: { sqlColumn: "pco_id" },
      },
    },
    plan: {
      type: Plan,
      extensions: {
        joinMonster: {
          sqlJoin: (planLeaderTable, planTable, args) =>
            `${planLeaderTable}.plan_id = ${planTable}.id`,
        },
      },
    },
    leader: {
      type: Leader,
      extensions: {
        joinMonster: {
          sqlJoin: (planLeaderTable, leaderTable, args) =>
            `${planLeaderTable}.leader_id = ${leaderTable}.id`,
        },
      },
    },
  }),
});

PlanLeader.extensions = {
  joinMonster: {
    sqlTable: "plan_leader",
    uniqueKey: "id",
  },
};

var PlanSong = new graphql.GraphQLObjectType({
  name: "PlanSong",
  fields: () => ({
    id: { type: graphql.GraphQLInt },
    archived: { type: graphql.GraphQLBoolean },
    pcoID: {
      type: graphql.GraphQLString,
      extensions: {
        joinMonster: { sqlColumn: "pco_id" },
      },
    },
    song_key: { type: graphql.GraphQLString },
    slot: { type: graphql.GraphQLInt },
    plan: {
      type: Plan,
      extensions: {
        joinMonster: {
          sqlJoin: (planSongTable, planTable, args) =>
            `${planSongTable}.plan_id = ${planTable}.id`,
        },
      },
    },
    song: {
      type: Song,
      extensions: {
        joinMonster: {
          sqlJoin: (planSongTable, songTable, args) =>
            `${planSongTable}.song_id = ${songTable}.id`,
        },
      },
    },
    leader: {
      type: Leader,
      extensions: {
        joinMonster: {
          sqlJoin: (planSongTable, leaderTable, args) =>
            `${planSongTable}.leader_id = ${leaderTable}.id`,
        },
      },
    },
  }),
});

PlanSong.extensions = {
  joinMonster: {
    sqlTable: "plan_song",
    uniqueKey: "id",
  },
};

var Plan = new graphql.GraphQLObjectType({
  name: "Plan",

  fields: () => ({
    id: { type: graphql.GraphQLInt },
    url: { type: graphql.GraphQLString },
    archived: { type: graphql.GraphQLBoolean },
    planDate: {
      type: graphql.GraphQLFloat,
      extensions: {
        joinMonster: { sqlColumn: "plan_date" },
      },
    },
    pcoID: {
      type: graphql.GraphQLString,
      extensions: {
        joinMonster: { sqlColumn: "pco_id" },
      },
    },
    venue: {
      type: Venue,
      extensions: {
        joinMonster: {
          sqlJoin: (planTable, venueTable, args) =>
            `${planTable}.venue_id = ${venueTable}.id`,
        },
      },
    },
    songs: {
      type: graphql.GraphQLList(PlanSong),
      extensions: {
        joinMonster: {
          sqlJoin: (planTable, planSongTable, args) =>
            `${planTable}.id = ${planSongTable}.plan_id`,
        },
      },
    },
    leaders: {
      type: graphql.GraphQLList(PlanLeader),
      extensions: {
        joinMonster: {
          sqlJoin: (planTable, planLeaderTable, args) =>
            `${planTable}.id = ${planLeaderTable}.plan_id`,
        },
      },
    },
  }),
});

Plan.extensions = {
  joinMonster: {
    sqlTable: "plans",
    uniqueKey: "id",
  },
};

const QueryRoot = new graphql.GraphQLObjectType({
  name: "Query",
  fields: () => ({
    hello: {
      type: graphql.GraphQLString,
      resolve: () => "Hello world!",
    },
    venues: {
      type: new graphql.GraphQLList(Venue),
      extensions: {
        joinMonster: {
          where: (venueTable, args, context) =>
            `${venueTable}.archived = FALSE`,
        },
      },
      resolve: (parent, args, context, resolveInfo) => {
        return joinMonster(resolveInfo, {}, (sql) => {
          return client.query(sql);
        });
      },
    },
    venue: {
      type: Venue,
      args: { id: { type: graphql.GraphQLID } },

      extensions: {
        joinMonster: {
          where: (venueTable, args, context) => `${venueTable}.id = ${args.id}`,
        },
      },
      resolve: (parent, args, context, resolveInfo) => {
        return joinMonster(resolveInfo, {}, (sql) => {
          return client.query(sql);
        });
      },
    },
    plans: {
      type: new graphql.GraphQLList(Plan),
      args: { venueID: { type: graphql.GraphQLNonNull(graphql.GraphQLID) } },
      extensions: {
        joinMonster: {
          where: (planTable, args, context) => {
            return ` ${
              args.venueID ? `${planTable}.venue_id = ${args.venueID}` : ``
            }`;
          },
        },
      },
      resolve: (parent, args, context, resolveInfo) => {
        return joinMonster(resolveInfo, {}, (sql) => {
          return client.query(sql);
        });
      },
    },
    plan: {
      type: Plan,
      args: { id: { type: graphql.GraphQLNonNull(graphql.GraphQLInt) } },
      extensions: {
        joinMonster: {
          where: (planTable, args, context) => `${planTable}.id = ${args.id}`,
        },
      },
      resolve: (parent, args, context, resolveInfo) => {
        return joinMonster(resolveInfo, {}, (sql) => {
          return client.query(sql);
        });
      },
    },
    //...
  }),
});

const MutationRoot = new graphql.GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    archivePlanSong: {
      type: PlanSong,
      args: {
        id: { type: graphql.GraphQLNonNull(graphql.GraphQLInt) },
        archived: { type: graphql.GraphQLBoolean, defaultValue: true },
      },
      resolve: async (parent, args, context, resolveInfo) => {
        try {
          return (
            await client.query(
              "UPDATE plan_song set archived = $2 where id = $1 RETURNING *",
              [args.id, args.archived]
            )
          ).rows[0];
        } catch (err) {
          throw new Error("Failed to archive plan song");
        }
      },
    },
    archivePlan: {
      type: Plan,
      args: {
        id: { type: graphql.GraphQLNonNull(graphql.GraphQLInt) },
        archived: { type: graphql.GraphQLBoolean, defaultValue: true },
      },
      resolve: async (parent, args, context, resolveInfo) => {
        try {
          return (
            await client.query(
              "UPDATE plans set archived = $2 where id = $1 RETURNING *",
              [args.id, args.archived]
            )
          ).rows[0];
        } catch (err) {
          throw new Error("Failed to archive plan" + err.toString());
        }
      },
    },
    addVenue: {
      type: Venue,
      args: {
        name: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
        pco_id: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
      },
      resolve: async (parent, args, context, resolveInfo) => {
        try {
          return (
            await client.query(
              "INSERT INTO venues (name, pco_id) VALUES ($1, $2) RETURNING *",
              [args.name, args.pco_id]
            )
          ).rows[0];
        } catch (err) {
          throw new Error("Failed to insert new venue");
        }
      },
    },
    removeVenue: {
      type: Venue,
      args: {
        id: { type: graphql.GraphQLNonNull(graphql.GraphQLInt) },
      },
      resolve: async (parent, args, context, resolveInfo) => {
        try {
          return (
            await client.query("DELETE FROM venues WHERE id =$1", [args.id])
          ).rows[0];
        } catch (err) {
          throw new Error("Failed to remove venue");
        }
      },
    },
  }),
});

const schema = new graphql.GraphQLSchema({
  query: QueryRoot,
  mutation: MutationRoot,
});

const app = express();
app.use(
  "/api",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.use("/fetchData/:id", function(req, res, next) {
  console.log("Request Type:", req.method);
  next();
});

app.get("/test/:id", function(req, res, next) {
  res.send("xxx" + req.params.id);
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      const headerDate =
        res.headers && res.headers.date ? res.headers.date : "no response date";
      console.log("Status Code:", res.status);
      console.log("Date in Response header:", headerDate);

      const users = res.data;

      for (user of users) {
        console.log(`Got user with id: ${user.id}, name: ${user.name}`);
      }
    })
    .catch((err) => {
      console.log("Error: ", err.message);
    });
});

app.get("/fetchData/:id", function(req, res, next) {
  res.send("yyy" + req.params.id);
  const query = "Select * from venues";

  // Connect to the db instance
  db.connect((err, client, done) => {
    if (err) throw err;
    try {
      // For each line we run the insert query with the row providing the column values
      client.query(query, [], (err, res) => {
        if (err) {
          // We can just console.log any errors
          console.log(err.stack);
        } else {
          //console.log(res.rows);
          res.rows.forEach((row) => {
            console.log(`${row.pco_id}, ${row.name}`);
          });
        }
      });
    } finally {
      done();
    }
  });

  //const plansAPI = "https://api.planningcenteronline.com/services/v2/service_types/108692/plans?offset=500&per_page=5"
  get("https://api.planningcenteronline.com/services/v2/service_types")
    .then((res) => {
      const headerDate =
        res.headers && res.headers.date ? res.headers.date : "no response date";
      console.log("Status Code:", res.status);
      console.log("Date in Response header:", headerDate);
      console.log(res.data.data.length);
      const services = res.data.data;
      console.log(services.find((s) => s.attributes.name === "LIVE VENUE").id);
    })
    .catch((err) => {
      console.log("Error: ", err.message);
    });
});

app.get("/getVenues", async function(req, res, next) {
  const data = await getVenues();
  res.send(data);
});

app.get("/getPlanItems", async function(req, res, next) {
  const data = await getPlanItems();
  res.send(data);
});

app.get("/getPlanItemsForID/:venue_pco_id/:pco_id/", function(req, res, next) {
  const plan = getPlanItemsForID(req.params.venue_pco_id, req.params.pco_id);
  res.send(JSON.stringify(plan) + " x");
});

app.get("/getSongs", function(req, res, next) {
  getSongs();
  res.send("getSongs");
});

app.get("/getLeaders", function(req, res, next) {
  getLeaders();
  res.send("getLeaders");
});

app.get("/getSong/:pco_id", function(req, res, next) {
  const song = getSong(req.params.pco_id);
  res.send(JSON.stringify(song) + " x");
});

app.get("/updateLeaders", function(req, res, next) {
  updateLeaders();
  res.send("updateLeaders");
});

app.get("/findSongLeaders", function(req, res, next) {
  findSongLeaders();
  res.send("findSongLeaders");
});

app.get("/testing", async (req, res) => {
  const data = await testing();
  res.send(data);
});

app.listen(4000);
