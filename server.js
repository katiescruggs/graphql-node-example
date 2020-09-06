const express = require("express");
const graphqlHTTP = require("express-graphql");
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");

const app = express();

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Root",
    fields: {
      hello: {
        description: "Querying 'hello' will return 'world'",
        type: GraphQLString,
        resolve() {
          return "world";
        },
      },
      error: {
        description: "This query just throws an error",
        type: GraphQLString,
        resolve() {
          throw new Error("Item with ID 1 not found");
        }
      },
      aThing: {
        description: "Querying 'aThing' will return the thing",
        type: new GraphQLObjectType({
          name: "aThing",
          fields: {
            ID: { type: GraphQLInt },
            Title: { type: GraphQLString },
            Description: { type: GraphQLString }
          }
        }),
        args: {
          one: { type: GraphQLString} ,
          two: { type: GraphQLString },
          three: { type: GraphQLString }
        },
        resolve(_, args) {
          console.log("args", args);
          return {
            ID: 1,
            Title: "This is a title",
            Description: "This is a description of the thing"
          };
        }
      }
    },
  }),
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.get("/", (req, res) => res.send("GraphQL is running"));

app.listen(4000, () => {
  console.log("Super Simple GraphQL is listening at port 4000")
});
