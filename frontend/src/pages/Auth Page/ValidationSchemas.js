import { object, string } from 'yup'

export const signUpValidationSchema = object({
    username: string().min(4).required(),
    email: string().email().required(),
    password: string().min(8).required(),
    confirmPassword: string().min(8).required()
})