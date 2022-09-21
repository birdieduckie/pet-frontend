import { FC } from 'react'

import { useAppDispatch } from 'store/store'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

import { Input } from 'components/shared/Input/Input'
import { editPost } from 'store/posts/postSlice'

import { Back, Container, Field } from './styled'
import { Button } from 'components/shared/Button/Button'

interface EditPostForm {
  text: string
}

export const EditPost: FC = () => {
  const { register, handleSubmit } = useForm<EditPostForm>()

  const { id } = useParams<{ id: string }>()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<EditPostForm> = data => {
    console.log(data)
    handleEditPost(data.text)
  }

  const handleEditPost = (text: string) => {
    console.log({ id, text })

    dispatch(editPost({ id, changes: { text } }))
    navigate('/', { replace: true })
  }

  return (
    <Back>
      <Container onSubmit={handleSubmit(onSubmit)}>
        <label></label>
        <Input type='text' {...register('text')} />
        <Button type='submit' />
      </Container>
    </Back>
  )
}
