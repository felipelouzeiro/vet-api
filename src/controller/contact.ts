import { RequestHandler } from 'express'

import { Contact } from '../database/models/ModelContact'
import schemas from '../services/schemas/index'
import schema from '../services/schemas/index'

const createContact: RequestHandler = async (req, res, next) => {
  try {
    await schema.contactSchema.validate(req.body)
    let newContact = await Contact.create({ ...req.body })

    return res
      .status(201)
      .json({ message: 'Novo contato cadastrado!', data: newContact })
  } catch (err) {
    next(err)
  }
}

const deleteContact: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  try {
    let deletedContact: Contact | null = await Contact.findByPk(id)

    await Contact.destroy({ where: { id } })
    return res
      .status(200)
      .json({ message: 'Contato deletado!', data: deletedContact })
  } catch (error) {
    next(error)
  }
}

const updateContact: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  try {
    await schemas.contactSchema.validate(req.body)
    let updatedContact: Contact | null = await Contact.findByPk(id)

    if (updatedContact) {
      await Contact.update({ ...req.body }, { where: { id } })
      return res
        .status(200)
        .json({ message: 'Contato atualizado!', data: updatedContact })
    } else {
      throw 'Usuário ou contato não cadastrado!'
    }
  } catch (error) {
    next(error)
  }
}

export default {
  createContact,
  updateContact,
  deleteContact,
}
