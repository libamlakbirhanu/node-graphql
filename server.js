const express = require("express");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolvers");

const app = express();
const PORT = 5000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
    formatError(err) {
      if (!err.originalError) {
        return err
      }

      return err.originalError
    }
  })
);

mongoose
  .connect(
    "mongodb+srv://libamlak:outcasted9044@graphql.hhmby.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("database connected successfully");
    app.listen(PORT, () => console.log("server started successfully"));
  });
