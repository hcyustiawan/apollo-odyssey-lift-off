const resolvers = {
    Query: {
        // returns an array of Tracks that will be used to populate
        tracksFromHome: (_, __, { dataSources }) =>
            dataSources.trackAPI.getTracksForHome(),
        // get a single track id, for the track page
        track: (_, { id }, { dataSources }) =>
            dataSources.trackAPI.getTrack(id)
    },
    Track: {
        author: (parent, _, { dataSources }) =>
            dataSources.trackAPI.getAuthor(parent.authorId),
        modules: (parent, _, { dataSources }) =>
            dataSources.trackAPI.getTrackModules(parent.id)

    },
    Module: {

    }
}


module.exports = resolvers;