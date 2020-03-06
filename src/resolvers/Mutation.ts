import bcrypt from 'bcryptjs'
import { Context } from 'graphql-yoga/dist/types'
import { setCookie, removeCookie } from '../util/auth'

export const Mutation = {

  async signup (parent: any, args: any, context: Context) {
    const password = await bcrypt.hash(args.password, 10)
    const user = await context.prisma.createUser({ ...args, password })
    setCookie(context, user.id)
    return { user }
  },

  async login (parent: any, args: any, context: Context) {
    const user = await context.prisma.user({ email: args.email })
    if (!user) {
      throw new Error('No such user found')
    }
    const valid = await bcrypt.compare(args.password, user.password)
    if (!valid) {
      throw new Error('Invalid password')
    }
    setCookie(context, user.id)
    return { user }
  },

  async logout (parent: any, args: any, context: Context) {
    removeCookie(context)
    return true
  },

  async createTrip (parent: any, args: any, context: Context) {
    args.user = { connect: { id: context.request.userId } }
    setCookie(context, context.request.userId)
    return context.prisma.createTrip(args)
  },

  async updateTrip (parent: any, args: any, context: Context) {
    const id = args.id
    delete args.id
    setCookie(context, context.request.userId)
    return context.prisma.updateTrip({ data: args, where: { id } })
  },

  // Delete a trip.
  // Throw an error if a trip with the specified ID does not exist, and when a user tries to delete someone else's trips
  async deleteTrip (parent: any, args: any, context: Context) {
    const userId = context.request.userId
    const trip = await context.prisma.trip({ id: args.id })
    if (!trip) {
      throw new Error(`No trip with ID ${args.id}`)
    }
    const user = await context.prisma.trip({ id: args.id }).user()
    if (user.id !== userId) {
      throw new Error('Cannot delete other users\' trips')
    }
    setCookie(context, userId)
    return context.prisma.deleteTrip({ id: args.id })
  }
}
