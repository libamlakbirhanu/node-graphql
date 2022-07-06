const express = require("express");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");

const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolvers");

require("dotenv").config({ path: __dirname + "/.env" });

const app = express();
const PORT = 5000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
    customFormatErrorFn(err) {
      if (!err.originalError) {
        return err;
      }

      return err.originalError;
    },
  })
);

mongoose
  .connect(process.env.mongo_uri)
  .then(() => {
    console.log("database connected successfully");
    app.listen(PORT, () => console.log("server started successfully"));
  })
  .catch((err) => console.log(err));
