import * as dotenv from 'dotenv'
dotenv.config()

import { Sequelize } from 'sequelize-typescript'
import { Tutor } from './models/ModelTutor'
import { Animal } from './models/ModelAnimal'
import { Address } from './models/ModelAddress'
import { Contact } from './models/ModelContact'

const connection = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  logging: false,
  models: [Tutor, Animal, Address, Contact],
})

export default connection
