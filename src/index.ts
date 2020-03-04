/* eslint-disable import/first */
require('dotenv').config()

import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'
import cookieParser from 'cookie-parser'
import { Query } from './resolvers/Query'
import { Mutation } from './resolvers/Mutation'
import { Trip } from './resolvers/Trip'
import { User } from './resolvers/User'
import { get_cookie } from './util/auth'

const resolvers = {
  Query,
  Mutation,
  Trip,
  User,
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  // Need to provide custom context so the response is available for setting cookies
  // => resolvers can set cookies through context.response.cookie()
  context: ({ request, response, ...rest }) => ({
    request,
    response,
    prisma,
    ...rest
  }),
})

// Get the user ID from the 'token' cookie in the request and set it in the request
// => resolvers have access to the user ID through context.request.user_id
server.express.use(cookieParser())
server.express.use(get_cookie)

// TODO: Update the token expiration date on every(?) request
// TODO: Safe options?
const opts = {
  cors: {
    credentials: true,
    origin: ['http://localhost:4000', 'http://localhost:3000']
  }
}
server.start(opts, () => console.log('Server is running on http://localhost:4000'))
