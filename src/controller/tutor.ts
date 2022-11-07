import { RequestHandler } from 'express'

import { Tutor } from '../database/models/ModelTutor'

export const createTutor: RequestHandler = async (req, res, next) => {
  let tutor = await Tutor.create({ ...req.body })
  return res
    .status(201)
    .json({ message: 'Tutor cadastrado com sucesso!', data: tutor })
}

export const listTutors: RequestHandler = async (req, res, next) => {
  const tutors: Tutor[] = await Tutor.findAll()
  return res.status(200).json({ message: 'Tutores: ', data: tutors })
}

export const deleteTutor: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  let deletedTutor: Tutor | null = await Tutor.findByPk(id)

  await Tutor.destroy({ where: { id } })
  return res
    .status(200)
    .json({ message: 'Cadastrado de tutor deletado!', data: deletedTutor })
}

export const updateTutor: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  let updatedTutor: Tutor | null = await Tutor.findByPk(id)

  await Tutor.update({ ...req.body }, { where: { id } })
  return res
    .status(200)
    .json({ message: 'Cadastrado de tutor atualizado!', data: updatedTutor })
}
