import { Context } from 'graphql-yoga/dist/types'
import { fwdGeocode, revGeocode } from '../util/here'
import { NotAuthenticatedError } from '../util/errors'

export const Query = {
  //
  // Database
  //

  // Get info of the logged in user
  async me (parent: any, args: any, context: Context) {
    const id = context.request.userId
    if (!id) throw new NotAuthenticatedError()
    return context.prisma.user({ id })
  },

  // Get a trip of the logged in user
  // Throw an error when a user tries to read someone else's trips
  async trip (parent: any, args: any, context: Context) {
    const userId = context.request.userId
    const [trip, user] = await Promise.all([
      context.prisma.trip({ id: args.id }),
      context.prisma.trip({ id: args.id }).user()
    ])
    if (user.id !== userId) throw new Error('Cannot read the trips of other users')
    return trip
  },

  //
  // HERE Maps
  //

  // Perform forward geocoding
  async geocode (parent: any, args: any, context: Context) {
    const userId = context.request.userId
    if (!userId) throw new Error('Must be authenticated to perform geocoding')
    return fwdGeocode(args.query)
  },

  // Perform reverse geocoding
  async rgeocode (parent: any, args: any, context: Context) {
    const userId = context.request.userId
    if (!userId) throw new Error('Must be authenticated to perform geocoding')
    return revGeocode(args.lat, args.lon)
  }
}
