var { GraphQLServer } = require('graphql-yoga');

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
    this.episodes = row.episodes;
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
      episodes: this.episodes,
    };
  }
}

var humans = [
  new Human({
    id: 1,
    name: 'Luke Skywalker',
    friends: [],
    episodes: [],
  }),
  new Human({
    id: 2,
    name: 'Han Solo',
    friends: [1, 3],
    episodes: [],
  }),
  new Human({
    id: 3,
    name: 'R2-D2',
    friends: [1, 2],
    episodes: [],
  })
];

var loader = new Loader(humans);
humans.forEach(h => h.setLoader(loader));

const resolvers = {
  Query: {
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
  }
}

const typeDefs = './src/schema.graphql';
const server = new GraphQLServer({ typeDefs, resolvers });

server.createHttpServer({})
  .listen(3000, '0.0.0.0', () => {
    console.log('Server started, listening on port 3000');
  });