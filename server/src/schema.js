const { gql } = require('apollo-server')


const typeDefs = gql`
    type Query {
        "return list of non-nullable tracks from the homepage grid"
        tracksFromHome: [Track!]!
        "return a single track"
        track(id: ID!): Track
    }

    type Mutation {
        incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
    }

    type IncrementTrackViewsResponse {
        "Similar to HTTP status code, represents the status of the mutation"
        code: Int!
        "Indicates whether the mutation was successful"
        success: Boolean!
        "Human-readable message for the UI"
        message: String!
        "Newly updated track after a successful mutation"
        track: Track
    }

    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        id: ID!
        "The track's title"
        title: String!
        "The track's main author"
        author: Author!
        "The track's main illustration to display in track card or track page detail"
        thumbnail: String
        "The track's approximate length to complete, in minutes"
        length: Int
        "The number of modules this track contains"
        modulesCount: Int
        "The track's complete description, can be in markdown format"
        description: String
        "the number of times a track has been viewed"
        numberOfViews: Int
        "The track's complete array of Modules"
        modules: [Module!]!
    }

    "A module is a single unit of teaching. Multiple Modules compose a Track"
    type Module {
        id: ID!
        "The tile of the module"
        title: String!
        "The lenght of module in minutes"
        length: Int
    }

    "Author of a complete Track or a Module"
    type Author {
        id: ID!
        name: String!
        photo: String
    }
`

module.exports = typeDefs