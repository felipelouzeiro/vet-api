import { Router } from 'express'
import CAnimal from '../controller/animal'

const routers = Router()
routers.post('/', CAnimal.createAnimal)
routers.get('/', CAnimal.listAnimals)
routers.get('/:id', CAnimal.updateAnimal)
routers.put('/:id', CAnimal.deleteAnimal)

export default routers
