import { RequestHandler } from 'express'

import { Tutor } from '../database/models/ModelTutor'

const createTutor: RequestHandler = async (req, res, next) => {
  try {
    let tutor = await Tutor.create({ ...req.body })
    return res
      .status(201)
      .json({ message: 'Tutor cadastrado com sucesso!', data: tutor })
  } catch (error) {
    next(error)
  }
}

const listTutors: RequestHandler = async (req, res, next) => {
  try {
    let tutors: Tutor[] = await Tutor.findAll()
    return res.status(200).json({ message: 'Tutores', data: tutors })
  } catch (error) {
    next(error)
  }
}

const findByTutor: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  try {
    let tutor = await Tutor.findOne({
      where: { id },
      include: [{ all: true }],
    })
    return res.status(200).json({ message: 'Tutor', data: tutor })
  } catch (error) {
    next(error)
  }
}

const deleteTutor: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  try {
    let deletedTutor: Tutor | null = await Tutor.findByPk(id)

    await Tutor.destroy({ where: { id } })
    return res
      .status(200)
      .json({ message: 'Cadastrado de tutor deletado!', data: deletedTutor })
  } catch (error) {
    next(error)
  }
}

const updateTutor: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  try {
    let updatedTutor: Tutor | null = await Tutor.findByPk(id)

    await Tutor.update({ ...req.body }, { where: { id } })
    return res
      .status(200)
      .json({ message: 'Cadastrado de tutor atualizado!', data: updatedTutor })
  } catch (error) {
    next(error)
  }
}

export default {
  listTutors,
  createTutor,
  updateTutor,
  findByTutor,
  deleteTutor,
}
