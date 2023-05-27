import { ErrorRequestHandler } from 'express'

/**
 * 500 response & log when errors are raised.
 */
export const errorHandler: ErrorRequestHandler = (err, req, res) => {
  console.error(err)
  return res.status(500).json({
    message: `${err}`
  })
}
