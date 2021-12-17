const resolvers = {
    Query: {
        // returns an array of Tracks that will be used to populate
        tracksFromHome: (_, __, { dataSources }) =>
            dataSources.trackAPI.getTracksForHome(),
        // get a single track id, for the track page
        track: (_, { id }, { dataSources }) =>
            dataSources.trackAPI.getTrack(id)
    },
    Mutation: {
        // increment a tracks's numberOfViews
        incrementTrackViews: async (_, { id }, { dataSources }) => {
            try {
                const track = await dataSources.trackAPI.incrementTrackViews(id);
                return {
                    code: 200,
                    success: true,
                    message: `Successfully incremented number of views for track ${id}`,
                    track
                }
            } catch (err) {
                return {
                    code: err.extensions.response.status,
                    success: false,
                    message: err.extensions.response.body,
                    track: null
                }
            }
        }
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