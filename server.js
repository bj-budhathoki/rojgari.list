const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });
const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");
const Job = require("./models/Job");
const PORT = 4000;
const app = express();

//connect data base
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    reconnectTries: 86400
  })
  .then(() => console.log("database connected"))
  .catch(err => console.log(err));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    Job
  }),
  playground: {
    endpoint: `http://localhost:4000/graphql`,
    settings: {
      "editor.theme": "dark"
    }
  }
});
server.applyMiddleware({ app });

app.listen(PORT, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
