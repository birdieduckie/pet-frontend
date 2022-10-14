import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { Input } from 'components/shared/Input/Input'
import { Button } from 'components/shared/Button/Button'

import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'store/store'
import { createPostRequest } from 'store/posts/postSlice'

import { Back, Container, Field } from './styled'

interface NewPostForm {
  username: string
  text: string
  img: string
  createdAt: string
}

export const NewPost: FC = () => {
  const { register, handleSubmit } = useForm<NewPostForm>()

  const onSubmit: SubmitHandler<NewPostForm> = data => {
    console.log(data)
    addPost(data.text, data.username)
  }

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const addPost = (text: string, username: string) => {
    const createdAt = Date().toString()
    const img =
      'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-106649919-scaled-e1618860834581.jpg'
    dispatch(createPostRequest({ username, text, img, createdAt, navigate }))
  }

  return (
    <Back>
      <Container onSubmit={handleSubmit(onSubmit)}>
        <Field>
          Как вас зовут?
          <Input {...register('username')} />
        </Field>

        <Field>
          Опишите, что произошло
          <Input
            placeholder='Нашли больного котенка, потеряли животное...'
            {...register('text')}
          />
        </Field>

        <Field>
          Фото животного
          {/* <Input type='file' {...register('img')} /> */}
          <img
            src={
              'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-106649919-scaled-e1618860834581.jpg'
            }
            {...register('img')}
          />
          {/* <img src={Cat} {...register('img')} /> */}
        </Field>

        <Button type='submit' />
      </Container>
    </Back>
  )
}
