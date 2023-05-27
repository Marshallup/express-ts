import { RequestHandler } from 'express'

/**
 * JSON 404 response
 */
export const notFoundRoute: RequestHandler = (req, res) => {
  return res.status(404).json({ message: 'not found' })
}
