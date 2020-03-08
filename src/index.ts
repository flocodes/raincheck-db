/* eslint-disable import/first */
require('dotenv').config()

import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'
import cookieParser from 'cookie-parser'
import { Query } from './resolvers/Query'
import { Mutation } from './resolvers/Mutation'
import { Trip } from './resolvers/Trip'
import { User } from './resolvers/User'
import { getCookie, updateCookie } from './util/auth'
import { formatError } from 'apollo-errors'

const resolvers = {
  Query,
  Mutation,
  Trip,
  User,
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
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
// => resolvers have access to the user ID through context.request.userId
// Then set it again with updated expiration date
server.express.use(cookieParser())
server.express.use(getCookie)
server.express.use(updateCookie)

// TODO: Safe options?
const playground: false|string = (process.env.NODE_ENV === 'production') ? false : '/'
const origin = (process.env.NODE_ENV === 'production') ? process.env.FRONTEND_URI : ['http://localhost:4000', 'http://localhost:3000']
const opts = {
  cors: {
    credentials: true,
    origin: origin
  },
  playground,
  formatError
}
server.start(opts, () => console.log('Server is running on http://localhost:4000'))
