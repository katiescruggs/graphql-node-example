const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();

const schema = buildSchema(`
  type Query {
    hello: String,
    error: String,
  }

  type Mutation {
    setMessage(message: String): String,
  }
`);

const root = {
  hello: () => "world",
  error: () => { throw new Error("example error!") },
  setMessage: ({ message }) => message,
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);

app.get("/", (req, res) => res.send("GraphQL is running"));

app.listen(4000, () => {
  console.log("Super Simple GraphQL is listening at port 4000")
});
