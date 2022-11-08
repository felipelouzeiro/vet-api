import { RequestHandler } from 'express'

import { Animal } from '../database/models/ModelAnimal'

const createAnimal: RequestHandler = async (req, res, next) => {
  let animal = await Animal.create({ ...req.body })
  return res
    .status(201)
    .json({ message: 'Animal cadastrado com sucesso!', data: animal })
}

const listAnimals: RequestHandler = async (req, res, next) => {
  const animals: Animal[] = await Animal.findAll()
  return res.status(200).json({ message: 'Animais', data: animals })
}

const deleteAnimal: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  let deletedAnimal: Animal | null = await Animal.findByPk(id)

  await Animal.destroy({ where: { id } })
  return res
    .status(200)
    .json({ message: 'Cadastrado de animal deletado!', data: deletedAnimal })
}

const updateAnimal: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  let updatedAnimal: Animal | null = await Animal.findByPk(id)

  await Animal.update({ ...req.body }, { where: { id } })
  return res
    .status(200)
    .json({ message: 'Cadastrado de animal atualizado!', data: updatedAnimal })
}

export default {
  createAnimal,
  listAnimals,
  updateAnimal,
  deleteAnimal,
}
