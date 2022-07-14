import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface SignUp {
  userName: string
  phone: string
  email: string
  password: string
}

export const SignUp: FC = () => {
  const { register, handleSubmit, watch } = useForm<SignUp>()
  const onSubmit: SubmitHandler<SignUp> = data => console.log(data)
  const values = watch(['userName', 'phone', 'email'])

  console.log(values)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Придумайте никнейм!</label>
      <input {...register('userName')} />
      <label>Номер телефона</label>
      <input {...register('phone')} />
      <label>E-mail</label>
      <input {...register('email')} />
      <label>Пароль</label>
      <input placeholder='Не менее 8 символов' {...register('password')} />
      <input type='submit' />
    </form>
  )
}
