const { ApolloServer } = require('apollo-server')
const { buildResolvers } = require('./resolver')
const { typeDefs } = require('./typedefs')
const { data } = require('./data')

const resolvers = buildResolvers(data)
const server = new ApolloServer({ typeDefs, resolvers });
server.listen(3000, '0.0.0.0').then(({ url }) => console.log(`🚀 ${url}`))