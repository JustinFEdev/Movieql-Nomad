import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

// const graphqlYoga = require("graphql-yoga");
console.log("Hello");

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});

server.start(() => console.log("Graphql Server is Running!"));
