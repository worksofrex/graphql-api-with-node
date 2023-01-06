const { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString, GraphQLList, GraphQLScalarType } = require("graphql");
const BookType = require("./BookType");
const { books } = require("../data/data");
 

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'The author who writes books',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        
    })
})


module.exports = { AuthorType }