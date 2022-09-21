import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'

import { useAppDispatch } from 'store/store'

import { Button } from 'components/shared/Button/Button'
import { Input } from 'components/shared/Input/Input'

import { createUser } from 'store/users/userSlice'

import { Back, Container, Field } from './styled'

import User from 'assets/user.svg'

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
    handleCreateUser(data.username)
  }
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleCreateUser = (username: string) => {
    const id = nanoid()
    const img = User
    const createdAt = Date().toString()
    dispatch(createUser({ id, username, img, createdAt }))
    navigate('/', { replace: true })
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
