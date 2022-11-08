import { Router } from 'express'
import CAnimal from '../controller/animal'

const routers = Router()
routers.post('/', CAnimal.createAnimal)
routers.get('/', CAnimal.listAnimals)
routers.put('/:id', CAnimal.updateAnimal)
routers.delete('/:id', CAnimal.deleteAnimal)

export default routers
