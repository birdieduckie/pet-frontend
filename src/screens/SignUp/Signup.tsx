import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from 'store/store'

import { Button } from 'components/shared/Button/Button'
import { Input } from 'components/shared/Input/Input'

import { createUserRequest } from 'store/users/userSlice'

import { Back, Container, Field } from './styled'

interface SignUpForm {
  username: string
  phone: string
  email: string
  password: string
}

export const SignUp: FC = () => {
  const { register, handleSubmit } = useForm<SignUpForm>()
  const onSubmit: SubmitHandler<SignUpForm> = data => {
    console.log(data)
    handleCreateUser(data.username, data.phone, data.email, data.password)
  }
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleCreateUser = (
    username: string,
    phone: string,
    email: string,
    password: string
  ) => {
    const avatar =
      'https://www.rd.com/wp-content/uploads/2018/05/shutterstock_464300804.jpg'

    dispatch(
      createUserRequest({ username, phone, email, password, avatar, navigate })
    )
  }
  return (
    <Back>
      <Container onSubmit={handleSubmit(onSubmit)}>
        <Field>
          Придумайте никнейм!
          <Input {...register('username')} />
        </Field>
        <Field>
          Номер телефона
          <Input {...register('phone')} />
        </Field>
        <Field>
          E-mail
          <Input {...register('email')} />
        </Field>
        <Field>
          Пароль
          <Input placeholder='Не менее 8 символов' {...register('password')} />
        </Field>
        <Button type='submit' />
      </Container>
    </Back>
  )
}
