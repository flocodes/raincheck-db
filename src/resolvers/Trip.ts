import { Context } from 'graphql-yoga/dist/types'

export const Trip = {

  async user ({ id }: any, args: any, context: Context) {
    return context.prisma.trip({ id }).user()
  },
}
