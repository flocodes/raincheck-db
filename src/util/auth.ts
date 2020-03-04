import * as jwt from 'jsonwebtoken'
import { Context } from 'graphql-yoga/dist/types'
import { Request, Response, NextFunction } from 'express'

declare global {
  namespace Express {
    export interface Request {
      user_id?: string
    }
  }
}

export const APP_SECRET = process.env.APP_SECRET || 'INVALID_SECRET'
if (APP_SECRET === 'INVALID_SECRET') {
  throw new Error('Environment variable "APP_SECRET" must be set.')
}

export function set_cookie (context: Context, user_id: string) {
  if (!user_id) {
    console.log('User ID is required for the authentication cookie')
    return
  }
  // TODO: Safe options?
  const expiration = new Date()
  expiration.setDate(expiration.getDate() + 1)
  context.response.cookie('token', jwt.sign(user_id, APP_SECRET), {
    httpOnly: true,
    expires: expiration
  })
  context.response.cookie('loggedIn', 'true', {
    expires: expiration
  })
}

export function get_cookie (request: Request, response: Response, next: NextFunction) {
  const loggedIn = request.cookies.loggedIn
  if (loggedIn !== 'true') {
    console.log('Not logged in')
    return next()
  }
  const token = request.cookies.token
  if (token) {
    try {
      const user_id = jwt.verify(token, APP_SECRET) as string
      if (!user_id) {
        console.log('Could not extract user ID from token')
        return next()
      }
      request.user_id = user_id
    } catch (err) {
      console.log(err)
    }
  } else {
    console.log('No token in request')
  }
  next()
}

export function remove_cookie (context: Context) {
  context.response.cookie('token', '', { expires: new Date(0) })
  context.response.cookie('loggedIn', '', { expires: new Date(0) })
}
