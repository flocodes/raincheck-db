import { Context } from 'graphql-yoga/dist/types'

export const User = {
  async trips ({ id }: any, args: any, context: Context) {
    return context.prisma.user({ id }).trips()
  },
}
