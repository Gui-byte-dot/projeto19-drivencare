import joi from 'joi';

export const userSchema = joi.object({
    username:joi.string().required().min(3),
    email:joi.string().required().min(3),
    password:joi.string().required().min(3),
    confirmPassword:joi.ref('password')
})

export const doctorSchema = joi.object({
    name:joi.string().required(),
    email: joi.string().email({ tlds: { allow: false } }).required(),
    password:joi.string().min(5).required(),
    location:joi.number().required(),
    speciality:joi.number().required()
})

export const patientSchema = joi.object({
    name:joi.string().required(),
    email: joi.string().email({ tlds: { allow: false } }).required(),
    password:joi.string().min(5).required(),
    telephone:joi.number().required()
})

