import { Router } from 'express'
import routerTutors from './tutor.routes'
import routerAnimals from './animal.routes'

const routers = Router()
routers.use('/tutors', routerTutors)
routers.use('/animals', routerAnimals)

export default routers
