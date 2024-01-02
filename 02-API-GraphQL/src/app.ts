import { ApolloServer, gql } from 'apollo-server'

import { dataSource } from "./config/dataSource"
import { Bookmark } from "./entity/bookmark.entity"

dataSource
  .initialize()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Failed to connect to database", err));

const typeDefs = gql`
  type Bookmark {
    id: Int
    name: String
    description: String 
  }

  type Author {
    id: Int
    name: String
  }

  type Query {
    bookmarks: [Bookmark]
  }
`


const resolvers = {
  Query: {
    bookmarks: async () => {
      const data = await dataSource.getRepository(Bookmark).find()

      console.log(data)
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen({ port: 3010 }).then(({ url }) => console.log(`Magic happens at ${url}`))

