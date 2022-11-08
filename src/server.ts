import * as dotenv from 'dotenv'
dotenv.config()
import express, {
  NextFunction,
  Response,
  Request,
  ErrorRequestHandler,
} from 'express'
import { urlencoded, json } from 'body-parser'
import routers from './routes'
import connection from './database/config'

const PORT = process.env.PORT

const app = express()

app.use(json())

app.use(urlencoded({ extended: true }))

app.use('/', routers)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message })
})

connection
  .sync()
  .then(() => {
    console.info('Banco de dados sincronizado.')
  })
  .catch((err) => {
    console.error('Erro ao sincronizar banco de dados.', err)
  })

app.listen(PORT, () => console.info(`Listening on localhost:${PORT}`))
