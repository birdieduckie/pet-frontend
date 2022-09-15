import { FC } from 'react'

import { useAppDispatch } from 'store/store'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

import { Input } from 'components/shared/Input/Input'
import { editPost } from 'store/posts/postSlice'

interface EditPostForm {
  title: string
}

export const EditPost: FC = () => {
  const { register, handleSubmit } = useForm<EditPostForm>()

  const { id } = useParams<{ id: string }>()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<EditPostForm> = data => {
    // handleEditPost(text)
    console.log(data)
    handleEditPost(data.title)
  }

  const handleEditPost = (text: string) => {
    console.log({ id, text })

    dispatch(editPost({ id, changes: { text } }))
    navigate('/', { replace: true })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label></label>
      <Input type='text' {...register('title')} />
      <button type='submit' />
    </form>
  )
}
