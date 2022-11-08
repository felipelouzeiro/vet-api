import { RequestHandler } from 'express'

import { Animal } from '../database/models/ModelAnimal'
import schemas from '../services/schemas'

const createAnimal: RequestHandler = async (req, res, next) => {
  try {
    await schemas.animalSchema.validate(req.body)

    let animal = await Animal.create({ ...req.body })
    return res
      .status(201)
      .json({ message: 'Animal cadastrado com sucesso!', data: animal })
  } catch (error) {
    next(error)
  }
}

const listAnimals: RequestHandler = async (req, res, next) => {
  try {
    const animals: Animal[] = await Animal.findAll()
    return res.status(200).json({ message: 'Animais', data: animals })
  } catch (error) {
    next(error)
  }
}

const deleteAnimal: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  try {
    let deletedAnimal: Animal | null = await Animal.findByPk(id)

    await Animal.destroy({ where: { id } })
    return res
      .status(200)
      .json({ message: 'Cadastrado de animal deletado!', data: deletedAnimal })
  } catch (error) {
    next(error)
  }
}

const updateAnimal: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  try {
    await schemas.animalSchema.validate(req.body)
    let updatedAnimal: Animal | null = await Animal.findByPk(id)

    if (updatedAnimal) {
      await Animal.update({ ...req.body }, { where: { id } })
      return res.status(200).json({
        message: 'Cadastrado de animal atualizado!',
        data: updatedAnimal,
      })
    } else {
      throw 'Animal não cadastrado!'
    }
  } catch (error) {
    next(error)
  }
}

export default {
  createAnimal,
  listAnimals,
  updateAnimal,
  deleteAnimal,
}
