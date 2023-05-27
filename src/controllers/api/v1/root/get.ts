import { RequestHandler } from 'express'

/**
 * Health check endpoint
 */
export const getRoot: RequestHandler = (req, res) => {
  res.status(200).json({
    test: 'true'
  })
}
