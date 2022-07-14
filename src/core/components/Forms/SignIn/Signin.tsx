import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface SignIn {
  userName: string
  password: string
}

export const SignIn: FC = () => {
  const { register, handleSubmit, watch } = useForm<SignIn>()
  const onSubmit: SubmitHandler<SignIn> = data => console.log(data)
  const values = watch(['userName', 'password'])

  console.log(values)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Ваш никнейм</label>
      <input {...register('userName')} />
      <label>Пароль</label>
      <input {...register('password')} />
      <input type='submit' />
    </form>
  )
}
