const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
// const mocks = require('./mocks')
const resolvers = require('./resolvers')
const TrackAPI = require('./datasources/track-api')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        trackAPI: new TrackAPI()
    })
})

server.listen({ port: process.env.PORT || 4000 }).then(() => {
    console.log(`    
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev`)
})