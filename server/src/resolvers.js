const resolvers = {
    Query: {
        // returns an array of Tracks that will be used to populate
        tracksFromHome: (_, __, { dataSources }) => dataSources.trackAPI.getTracksForHome()
    },
    Track: {
        author: (parent, _, { dataSources }) => dataSources.trackAPI.getAuthor(parent.authorId)
    }
}


module.exports = resolvers;