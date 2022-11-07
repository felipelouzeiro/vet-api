import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'

const PORT = process.env.PORT

const app = express()

app.listen(PORT, () => console.info(`Listening on localhost:${PORT}`))
