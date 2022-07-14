import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface SignUp {
  userName: string
  phone: string
  email: string
}

export const SignUp: FC = () => {
  const { register, handleSubmit } = useForm<SignUp>()
  const onSubmit: SubmitHandler<SignUp> = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Как вас зовут?</label>
      <input {...register('userName')} />
      <label>Номер телефона</label>
      <input {...register('phone')} />
      <label>E-mail</label>
      <input {...register('email')} />
      <input type='submit' />
    </form>
  )
}
