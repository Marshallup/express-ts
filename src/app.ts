import express, { Express } from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import { ROOT_ROUTE } from './routes/root'
import { notFoundRoute } from 'middleware/fourOhFour'
import { errorHandler } from 'middleware/errorHandler'

dotenv.config()

const app: Express = express()

app.use(helmet())
app.use(morgan('tiny'))

app.use('/', ROOT_ROUTE)

// Apply error handling last
app.use(notFoundRoute)
app.use(errorHandler)

export { app }
