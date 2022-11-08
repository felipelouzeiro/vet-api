import { RequestHandler } from 'express'

import { Address } from '../database/models/ModelAddress'

const createAddress: RequestHandler = async (req, res, next) => {
  let newAddress = await Address.create({ ...req.body })
  return res
    .status(201)
    .json({ message: 'Novo endereço cadastrado!', data: newAddress })
}

const deleteAddress: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  let deletedAddress: Address | null = await Address.findByPk(id)

  await Address.destroy({ where: { id } })
  return res
    .status(200)
    .json({ message: 'Endereço deletado!', data: deletedAddress })
}

const updateAddress: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  let updatedAddress: Address | null = await Address.findByPk(id)

  await Address.update({ ...req.body }, { where: { id } })
  return res
    .status(200)
    .json({ message: 'Endereço atualizado!', data: updatedAddress })
}

export default {
  createAddress,
  updateAddress,
  deleteAddress,
}
