import { RequestHandler } from 'express'

import { Contact } from '../database/models/ModelContact'

const createContact: RequestHandler = async (req, res, next) => {
  let newContact = await Contact.create({ ...req.body })
  return res
    .status(201)
    .json({ message: 'Novo contato cadastrado!', data: newContact })
}

const deleteContact: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  let deletedContact: Contact | null = await Contact.findByPk(id)

  await Contact.destroy({ where: { id } })
  return res
    .status(200)
    .json({ message: 'Contato deletado!', data: deletedContact })
}

const updateContact: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  let updatedContact: Contact | null = await Contact.findByPk(id)

  await Contact.update({ ...req.body }, { where: { id } })
  return res
    .status(200)
    .json({ message: 'Contato atualizado!', data: updatedContact })
}

export default {
  createContact,
  updateContact,
  deleteContact,
}
