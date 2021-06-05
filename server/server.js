require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const graphql = require("graphql");
const { Client } = require("pg");
const joinMonster = require("join-monster").default;
const axios = require("axios");
const btoa = require("btoa");

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
    name: { type: graphql.GraphQLString },
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

var PlanSong = new graphql.GraphQLObjectType({
  name: "PlanSong",
  fields: () => ({
    id: { type: graphql.GraphQLInt },
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
      sqlJoin: (planSongTable, planTable, args) =>
        `${planSongTable}.plan_id = ${planTable}.id`,
    },
    song: {
      type: Song,
      sqlJoin: (planSongTable, songTable, args) =>
        `${planSongTable}.song_id = ${songTable}.id`,
    },
    leader: {
      type: Leader,
      sqlJoin: (planSongTable, leaderTable, args) =>
        `${planSongTable}.leader_id = ${leaderTable}.id`,
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
    plan_date: { type: graphql.GraphQLString },
    pcoID: {
      type: graphql.GraphQLString,
      extensions: {
        joinMonster: { sqlColumn: "pco_id" },
      },
    },
    venue: {
      type: Venue,
      sqlJoin: (planTable, venueTable, args) =>
        `${planTable}.venue_id = ${venueTable}.id`,
    },
    songs: {
      type: graphql.GraphQLList(PlanSong),
      sqlJoin: (planTable, planSongTable, args) =>
        `${planTable}.id = ${planSongTable}.plan_id`,
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
      resolve: (parent, args, context, resolveInfo) => {
        return joinMonster(resolveInfo, {}, (sql) => {
          return client.query(sql);
        });
      },
    },
    venue: {
      type: Venue,
      args: { id: { type: graphql.GraphQLID } },
      where: (venueTable, args, context) => `${venueTable}.id = ${args.id}`,
      resolve: (parent, args, context, resolveInfo) => {
        return joinMonster(resolveInfo, {}, (sql) => {
          return client.query(sql);
        });
      },
    },
    plans: {
      type: new graphql.GraphQLList(Plan),
      resolve: (parent, args, context, resolveInfo) => {
        return joinMonster(resolveInfo, {}, (sql) => {
          return client.query(sql);
        });
      },
    },
    plan: {
      type: Plan,
      args: { id: { type: graphql.GraphQLNonNull(graphql.GraphQLInt) } },
      where: (planTable, args, context) => `${planTable}.id = ${args.id}`,
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

  var username = process.env.PCO_USER;
  var password = process.env.PCO_KEY;

  axios
    .get("https://api.planningcenteronline.com/services/v2/service_types", {
      withCredentials: true,
      auth: {
        username,
        password,
      },
    })
    .then((res) => {
      const headerDate =
        res.headers && res.headers.date ? res.headers.date : "no response date";
      console.log("Status Code:", res.status);
      console.log("Date in Response header:", headerDate);
      console.log(res.data.data.length);
    })
    .catch((err) => {
      console.log("Error: ", err.message);
    });
});

app.listen(4000);
