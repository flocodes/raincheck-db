import { createError } from 'apollo-errors'

export const NotAuthenticatedError = createError('NotAuthenticated', {
  message: 'You must be authenticated to access this resource'
})
