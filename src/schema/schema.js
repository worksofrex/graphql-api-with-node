const { GraphQLSchema } = require('graphql')
const { RootQueryType } = require('../gq-types/RootQueryType')


module.exports.schema = new GraphQLSchema({
    query: RootQueryType,
})