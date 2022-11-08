import * as yup from 'yup'

yup.setLocale({
  mixed: {
    required: 'Preencha todos os campos!',
  },
})

let tutorSchema = yup.object().shape({
  name: yup.string().required(),
})

let animalSchema = yup.object().shape({
  name: yup.string().required(),
  breed: yup.string().required(),
  tutorId: yup.number().required().positive().integer(),
})

let addressSchema = yup.object().shape({
  name: yup.string().required(),
  tutorId: yup.number().required().positive().integer(),
})

let contactSchema = yup.object().shape({
  phone: yup.string().required(),
  tutorId: yup.number().required().positive().integer(),
})

export default {
  tutorSchema,
  animalSchema,
  addressSchema,
  contactSchema,
}
