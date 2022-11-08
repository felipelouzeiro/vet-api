import { RequestHandler } from 'express'

import { Address } from '../database/models/ModelAddress'
import schemas from '../services/schemas'

const createAddress: RequestHandler = async (req, res, next) => {
  try {
    schemas.addressSchema.validate(req.body)
    let newAddress = await Address.create({ ...req.body })

    return res
      .status(201)
      .json({ message: 'Novo endereço cadastrado!', data: newAddress })
  } catch (error) {
    next(error)
  }
}

const deleteAddress: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  try {
    let deletedAddress: Address | null = await Address.findByPk(id)

    await Address.destroy({ where: { id } })
    return res
      .status(200)
      .json({ message: 'Endereço deletado!', data: deletedAddress })
  } catch (error) {
    next(error)
  }
}

const updateAddress: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  try {
    let updatedAddress: Address | null = await Address.findByPk(id)
    await schemas.addressSchema.validate(req.body)

    if (updatedAddress) {
      await Address.update({ ...req.body }, { where: { id } })
      return res
        .status(200)
        .json({ message: 'Endereço atualizado!', data: updatedAddress })
    } else {
      throw 'Usuário ou endereço não cadastrado!'
    }
  } catch (error) {
    next(error)
  }
}

export default {
  createAddress,
  updateAddress,
  deleteAddress,
}
