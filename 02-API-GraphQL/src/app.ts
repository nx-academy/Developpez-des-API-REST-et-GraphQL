import { ApolloServer } from 'apollo-server'

const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`

type Book = {
  title: string
  author: string
}

const books: Book[] = [
  {
    title: "The Awakening",
    author: "Kate Chopin"
  },
  {
    title: "City of Glass",
    author: "Paul Auster"
  }
]

const resolvers = {
  Query: {
    books: () => books
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen({ port: 3010 }).then(({ url }) => console.log(`Magic happens at ${url}`))

