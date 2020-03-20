var express = require('express');
var graphqlHttp = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'hello world' };

var app = express();
app.use('/graphql', graphqlHttp({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

var port = 3000;
app.listen(port, '0.0.0.0', () => console.log(`Now browse to localhost:${port}/graphql`));