import { Router } from 'express'
import {
  createAnimal,
  deleteAnimal,
  listAnimals,
  updateAnimal,
} from '../controller/animal'

const routers = Router()
routers.post('/', createAnimal)
routers.get('/', listAnimals)
routers.get('/:id', updateAnimal)
routers.put('/:id', deleteAnimal)

export default routers
