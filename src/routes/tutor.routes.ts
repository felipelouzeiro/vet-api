import { Router } from 'express'

import CTutor from '../controller/tutor'
import CAddress from '../controller/address'
import CContact from '../controller/contact'

const routers = Router()
routers.post('/', CTutor.createTutor)
routers.get('/', CTutor.listTutors)
routers.get('/:id', CTutor.findByTutor)
routers.put('/:id', CTutor.updateTutor)
routers.delete('/:id', CTutor.deleteTutor)

routers.post('/address', CAddress.createAddress)
routers.get('/address/:id', CAddress.updateAddress)
routers.put('/address/:id', CAddress.deleteAddress)

routers.delete('/contact', CContact.createContact)
routers.put('/contact/:id', CContact.updateContact)
routers.delete('/contact/:id', CContact.deleteContact)

export default routers
