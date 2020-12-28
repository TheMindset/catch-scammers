import { Application } from 'express'
import express = require('express')

import * as bodyParser from 'body-parser'
import * as dotenv from 'dotenv'
import * as winston from 'winston'
import { logger } from 'express-winston'

import { getAdsStatusRouter } from './routes/getAdsStatus'

dotenv.config()

const app: Application = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  next()
})

app.use('/', getAdsStatusRouter)

app.use(
  logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.colorize(), winston.format.json()),
    meta: true,
    expressFormat: true,
  })
)


app.set('port', process.env.PORT || 3000)

export default app
