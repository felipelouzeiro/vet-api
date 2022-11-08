import { RequestHandler } from 'express'
import { Address } from '../database/models/ModelAddress'
import { Contact } from '../database/models/ModelContact'

import { Tutor } from '../database/models/ModelTutor'

const createTutor: RequestHandler = async (req, res, next) => {
  let tutor = await Tutor.create({ ...req.body })
  return res
    .status(201)
    .json({ message: 'Tutor cadastrado com sucesso!', data: tutor })
}

const listTutors: RequestHandler = async (req, res, next) => {
  const tutors: Tutor[] = await Tutor.findAll()
  return res.status(200).json({ message: 'Tutores: ', data: tutors })
}

const findByTutor: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  let tutor: Tutor | null = await Tutor.findByPk(id)

  await Tutor.findOne({ where: { id }, include: [Address] })
  return res.status(200).json({ message: 'Tutor: ', data: tutor })
}

const deleteTutor: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  let deletedTutor: Tutor | null = await Tutor.findByPk(id)

  await Tutor.destroy({ where: { id } })
  return res
    .status(200)
    .json({ message: 'Cadastrado de tutor deletado!', data: deletedTutor })
}

const updateTutor: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  let updatedTutor: Tutor | null = await Tutor.findByPk(id)

  await Tutor.update({ ...req.body }, { where: { id } })
  return res
    .status(200)
    .json({ message: 'Cadastrado de tutor atualizado!', data: updatedTutor })
}

export default {
  listTutors,
  createTutor,
  updateTutor,
  findByTutor,
  deleteTutor,
}
