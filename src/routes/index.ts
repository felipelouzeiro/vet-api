import { Router } from 'express'
import routerTutors from './tutor.routes'

const routers = Router()
routers.use('/tutors', routerTutors)

export default routers
