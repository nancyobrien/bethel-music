const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const graphql = require("graphql");
const { Client } = require("pg");
const joinMonster = require("join-monster");

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "ndoPostSqlPwd@2",
  database: "pcomusic",
});
client.connect();

var Venue = new graphql.GraphQLObjectType({
  name: "Venue",
  fields: () => ({
    id: { type: graphql.GraphQLInt },
    name: { type: graphql.GraphQLString },
    pcoID: { type: graphql.GraphQLString },
  }),
});

Venue._typeConfig = {
  sqlTable: "venues",
  uniqueKey: "id",
};

var Song = new graphql.GraphQLObjectType({
  name: "Song",
  fields: () => ({
    id: { type: graphql.GraphQLInt },
    title: { type: graphql.GraphQLString },
    pcoID: { type: graphql.GraphQLString },
    author: { type: graphql.GraphQLString },
    archive: { type: graphql.GraphQLBoolean },
    is_christmas: { type: graphql.GraphQLBoolean },
    default_slot: { type: graphql.GraphQLInt },
  }),
});

Song._typeConfig = {
  sqlTable: "songs",
  uniqueKey: "id",
};

const Leader = new graphql.GraphQLObjectType({
  name: "Leader",
  fields: () => ({
    id: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString },
    pcoID: { type: graphql.GraphQLString },
  }),
});

Leader._typeConfig = {
  sqlTable: "leaders",
  uniqueKey: "id",
};

var PlanSong = new graphql.GraphQLObjectType({
  name: "PlanSong",
  fields: () => ({
    id: { type: graphql.GraphQLInt },
    pcoID: { type: graphql.GraphQLString },
    song_key: { type: graphql.GraphQLString },
    slot: { type: graphql.GraphQLInt },
    plan: {
      type: graphql.GraphQLList(Plan),
      sqlJoin: (planSongTable, planTable, args) =>
        `${planSongTable}.plan_id = ${planTable}.id`,
    },
    song: {
      type: graphql.GraphQLList(Song),
      sqlJoin: (planSongTable, songTable, args) =>
        `${planSongTable}.song_id = ${songTable}.id`,
    },
    leader: {
      type: graphql.GraphQLList(Leader),
      sqlJoin: (planSongTable, leaderTable, args) =>
        `${planSongTable}.leader_id = ${leaderTable}.id`,
    },
  }),
});

PlanSong._typeConfig = {
  sqlTable: "plan_song",
  uniqueKey: "id",
};

var Plan = new graphql.GraphQLObjectType({
  name: "Plan",
  fields: () => ({
    id: { type: graphql.GraphQLInt },
    plan_date: { type: graphql.GraphQLString },
    pcoID: { type: graphql.GraphQLString },
    venue: {
      type: graphql.GraphQLList(Venue),
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

Plan._typeConfig = {
  sqlTable: "plans",
  uniqueKey: "id",
};
//test
const QueryRoot = new graphql.GraphQLObjectType({
  name: "Query",
  fields: () => ({
    hello: {
      type: graphql.GraphQLString,
      resolve: () => "Hello world!",
    },
    venues: {
      type: new graphql.GraphQLList(Venue),
    },
    plans: {
      type: new graphql.GraphQLList(Plan),
      resolve: (parent, args, context, resolveInfo) => {
        return joinMonster.default(resolveInfo, {}, (sql) => {
          return client.query(sql);
        });
      },
    },
    plan: {
      type: Plan,
      args: { id: { type: graphql.GraphQLNonNull(graphql.GraphQLInt) } },
      where: (planTable, args, context) => `${planTable}.id = ${args.id}`,
      resolve: (parent, args, context, resolveInfo) => {
        return joinMonster.default(resolveInfo, {}, (sql) => {
          return client.query(sql);
        });
      },
    },
    //...
  }),
});

const schema = new graphql.GraphQLSchema({ query: QueryRoot });

const app = express();
app.use(
  "/api",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(4000);
