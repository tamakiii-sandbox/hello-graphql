var express = require('express');
var graphqlHttp = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    human(id: ID): Human
    humans: [Human]
  }
  type Human {
    id: ID!
    name: String
    friends: [Human!]
  }
`);

class Loader {
  constructor(rows) {
    this.rows = rows;
  }

  finds(ids) {
    return ids.map(id => this.rows.find(row => row.id === id));
  }
}

class Human {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.friends = row.friends;
  }

  setLoader(loader) {
    this.loader = loader;
  }

  getLoader() {
    return this.loader;
  }

  toResponse() {
    if (!this.getLoader()) {
      throw new Error('Loader not found');
    }

    return {
      id: this.id,
      name: this.name,
      friends: this.loader.finds(this.friends),
    };
  }
}

var humans = [
  new Human({
    id: 1,
    name: 'Luke Skywalker',
    friends: [],
  }),
  new Human({
    id: 2,
    name: 'Han Solo',
    friends: [1, 3],
  }),
  new Human({
    id: 3,
    name: 'R2-D2',
    friends: [1, 2],
  })
];

var loader = new Loader(humans);
humans.forEach(h => h.setLoader(loader));

var root = {
  human: (params, request, query) => {
    console.log(params, request, query);
    if (!params.id) {
      throw new Error("Bad Request");
    }
    var id = parseInt(params.id);
    var human = humans.find(human => human.id === id);
    if (!human) {
      throw new Error("Not found");
    }
    return human.toResponse();
  },
  humans: () => humans.map(human => human.toResponse()),
};

var app = express();
app.use('/graphql', graphqlHttp({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

var port = 3000;
app.listen(port, '0.0.0.0', () => console.log(`Now browse to localhost:${port}/graphql`));