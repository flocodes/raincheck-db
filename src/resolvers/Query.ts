import { Context } from 'graphql-yoga/dist/types'
import { fwd_geocode, rev_geocode } from '../util/here'
import { set_cookie } from '../util/auth'

export const Query = {
  //
  // Database
  //

  // Get info of the logged in user
  async me (parent: any, args: any, context: Context) {
    const id = context.request.user_id
    console.log(id)
    set_cookie(context, id)
    return context.prisma.user({ id })
  },

  // Get a trip of the logged in user
  // Throw an error when a user tries to read someone else's trips
  async trip (parent: any, args: any, context: Context) {
    const userId = context.request.user_id
    const [trip, user] = await Promise.all([
      context.prisma.trip({ id: args.id }),
      context.prisma.trip({ id: args.id }).user()
    ])
    if (user.id !== userId) {
      throw new Error('Cannot read the trips of other users')
    }
    set_cookie(context, userId)
    return trip
  },

  //
  // HERE Maps
  //

  // Perform forward geocoding
  async geocode (parent: any, args: any, context: Context) {
    const userId = context.request.user_id
    if (!userId) {
      throw new Error('Must be authenticated to perform geocoding')
    }
    set_cookie(context, userId)
    return fwd_geocode(args.query)
  },

  // Perform reverse geocoding
  async rgeocode (parent: any, args: any, context: Context) {
    const userId = context.request.user_id
    if (!userId) {
      throw new Error('Must be authenticated to perform geocoding')
    }
    set_cookie(context, userId)
    return rev_geocode(args.lat, args.lon)
  }
}
