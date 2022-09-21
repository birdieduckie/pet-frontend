import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from 'store/store'

import { Button } from 'components/shared/Button/Button'
import { Input } from 'components/shared/Input/Input'

import { Back, Container, Field } from './styled'

interface SignInForm {
  userName: string
  password: string
}

export const SignIn: FC = () => {
  const { register, handleSubmit } = useForm<SignInForm>()
  const onSubmit: SubmitHandler<SignInForm> = data => console.log(data)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const toSignUp = () => {
    navigate('/signup', { replace: true })
  }

  return (
    <Back>
      <Container onSubmit={handleSubmit(onSubmit)}>
        Мы вас не узнали!
        <Field>
          Ваш никнейм
          <Input {...register('userName')} />
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
