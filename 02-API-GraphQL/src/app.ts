import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from "@apollo/server/standalone"

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
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
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

startStandaloneServer(server, {
  listen: {
    port: 3010
  }
})
  .then(({ url }) => console.log(`Magic happens at: ${url}`))
  .catch((err) => console.log(`Something went wrong when lauching server: ${err}`))

