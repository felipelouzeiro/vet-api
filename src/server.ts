import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { urlencoded, json } from 'body-parser'
import routers from './routes'
import connection from './database/config'

const PORT = process.env.PORT
const a = process.env.PASSWORD
const d = process.env.DATABASE
const b = process.env.USER
console.info(a, b, d, PORT)

const app = express()

app.use(json())

app.use(urlencoded({ extended: true }))

app.use('/', routers)

connection
  .sync()
  .then(() => {
    console.info('Banco de dados sincronizado.')
  })
  .catch((err) => {
    console.error('Erro ao sincronizar banco de dados.', err)
  })

app.listen(PORT, () => console.info(`Listening on localhost:${PORT}`))
