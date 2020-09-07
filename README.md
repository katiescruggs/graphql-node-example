# Graphql Example
## Description
This is a super simple example of a graphQL API with Node and Express, using the NPM package [express-graphql](https://www.npmjs.com/package/express-graphql).

Created for purposes of demonstartion for a Denver Startup Week talk. [Click here for slides](https://docs.google.com/presentation/d/1X3nZqNzjebUaZsYOOS9rs0EPBhVnW_3Kgc3s8QEWYww/edit?usp=sharing).

## To start the app
1. Run `npm start`.
1. Go to `localhost:4000` to see that the server is running.
1. Go to `localhost:4000/graphql` for the GraphQL Interface, where you can run queries.

## Queries
To easily run queries, go to `localhost:4000/graphql`.

```
{ hello }
```
returns world.

```
{ error }
```
throws an error.

## Mutations
```
mutation {
  setMessage(message:"your string here")
}
```
returns the string. This is where a database update or create would be if this were a real mutation.