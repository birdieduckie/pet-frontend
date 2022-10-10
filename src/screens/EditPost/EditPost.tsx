import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

import { Input } from 'components/shared/Input/Input'
import { Button } from 'components/shared/Button/Button'

import { editPostRequest } from 'store/posts/postSlice'
import { useAppDispatch } from 'store/store'

import { Back, Container, Field } from './styled'

interface EditPostForm {
  text: string
}

export const EditPost: FC = () => {
  const { register, handleSubmit } = useForm<EditPostForm>()

  const { id } = useParams()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<EditPostForm> = data => {
    console.log(data)
    handleEditPost(data.text)
  }

  const handleEditPost = (text: string) => {
    console.log({ id, text })

    dispatch(editPostRequest({ id, text, navigate }))
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
