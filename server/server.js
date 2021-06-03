require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const graphql = require("graphql");
const { Client } = require("pg");
const joinMonster = require("join-monster").default;
const { db } = require("./pgAdaptor");

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
    pco_id: { type: graphql.GraphQLString },
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
    pco_id: { type: graphql.GraphQLString },
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
    pco_id: { type: graphql.GraphQLString },
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
    pco_id: { type: graphql.GraphQLString },
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
    pco_id: { type: graphql.GraphQLString },
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
app.listen(4000);
