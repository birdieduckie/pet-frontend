import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { Input } from 'components/shared/Input/Input'

import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'store/store'
import { createPost } from 'store/posts/postSlice'

import Cat from 'assets/cattato.jpg'
import { Back, Container, Field } from './styled'
import { nanoid } from '@reduxjs/toolkit'

interface NewPostForm {
  id: string
  owner: string
  text: string
  img: string
  createdAt: string
}

export const NewPost: FC = () => {
  const { register, handleSubmit, watch } = useForm<NewPostForm>()

  const onSubmit: SubmitHandler<NewPostForm> = data => console.log(data)

  const [owner, text] = watch(['owner', 'text'])

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const addPost = () => {
    const id = nanoid()
    const img = Cat
    const createdAt = Date().toString()
    dispatch(createPost({ id, owner, text, img, createdAt }))
    navigate('/', { replace: true })
  }

  return (
    <Back>
      <Container onSubmit={handleSubmit(onSubmit)}>
        <Field>
          Как вас зовут?
          <Input {...register('owner')} />
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
          <img src={Cat} />
          {/* <img src={Cat} {...register('img')} /> */}
        </Field>

        <input type='submit' onClick={addPost} />
      </Container>
    </Back>
  )
}