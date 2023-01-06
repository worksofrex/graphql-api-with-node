const { GraphQLSchema } = require('graphql')
const { RootQueryType } = require('../gq-types/RootQueryType')
const RootMutationType = require('../mutations/RootMutationType')


module.exports.schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
})