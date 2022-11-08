import { Router } from 'express'

import {
  createTutor,
  listTutors,
  deleteTutor,
  updateTutor,
  findByTutor,
} from '../controller/tutor'

const routers = Router()
routers.post('/', createTutor)
routers.get('/', listTutors)
routers.get('/:id', findByTutor)
routers.put('/:id', updateTutor)
routers.delete('/:id', deleteTutor)

routers.post('/address', createTutor)
routers.get('/address', listTutors)
routers.get('/address', findByTutor)

routers.put('/contact', updateTutor)
routers.delete('/contact', deleteTutor)
routers.delete('/contact', deleteTutor)

export default routers
