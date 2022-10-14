import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from 'store/store'

import { Button } from 'components/shared/Button/Button'
import { Input } from 'components/shared/Input/Input'

import { Back, Container, Field } from './styled'
import { userLoginRequest } from 'store/users/userSlice'

interface SignInForm {
  username: string
  password: string
}

export const SignIn: FC = () => {
  const { register, handleSubmit } = useForm<SignInForm>()
  const onSubmit: SubmitHandler<SignInForm> = data => {
    console.log(data)
    handleLogin(data.username, data.password)
  }

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogin = (username: string, password: string) => {
    dispatch(userLoginRequest({ username, password, navigate }))
  }

  const toSignUp = () => {
    navigate('/signup', { replace: true })
  }

  return (
    <Back>
      <Container onSubmit={handleSubmit(onSubmit)}>
        Мы вас не узнали!
        <Field>
          Ваш никнейм
          <Input {...register('username')} />
        </Field>
        <Field>
          Пароль
          <Input {...register('password')} />
        </Field>
        <Button variant='inline' onClick={toSignUp}>
          Еще не с нами? Зарегистрируйтесь!
        </Button>
        <Button type='submit' />
      </Container>
    </Back>
  )
}
