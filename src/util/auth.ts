import * as jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

declare global {
  namespace Express {
    export interface Request {
      userId?: string
    }
  }
}

export const APP_SECRET = process.env.APP_SECRET || 'INVALID_SECRET'
if (APP_SECRET === 'INVALID_SECRET') {
  throw new Error('Environment variable "APP_SECRET" must be set.')
}

export function setCookie (response: Response, userId: string) {
  const expiration = new Date()
  expiration.setDate(expiration.getDate() + 1)
  response.cookie('token', jwt.sign(userId, APP_SECRET), {
    httpOnly: true,
    expires: expiration
  })
}

export function updateCookie (request: Request, response: Response, next: NextFunction) {
  if (!request.userId) return next()
  setCookie(response, request.userId)
  next()
}

export function getCookie (request: Request, response: Response, next: NextFunction) {
  const token = request.cookies.token
  if (token) {
    try {
      const userId = jwt.verify(token, APP_SECRET) as string
      if (!userId) {
        console.log('Could not extract user ID from token')
        return next()
      }
      request.userId = userId
    } catch (err) {
      console.log(err)
    }
  } else {
    console.log('No token in request')
  }
  next()
}

export function removeCookie (response: Response) {
  response.cookie('token', '', { expires: new Date(0) })
}
