import { RequestHandler } from 'express'
import { Address } from '../database/models/ModelAddress'

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

export const findByTutor: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  let tutor: Tutor | null = await Tutor.findByPk(id)

  await Tutor.findOne({ where: { id }, include: [Address] })
  return res.status(200).json({ message: 'Tutor: ', data: tutor })
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
