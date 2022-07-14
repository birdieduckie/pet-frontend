import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { useAppDispatch } from 'hooks/store'

import { createPost } from 'store/posts/postSlice'

interface NewPost {
  name: string
  text: string
  contact: string
}

export const NewPost: FC = () => {
  const { register, handleSubmit, watch } = useForm<NewPost>()

  const onSubmit: SubmitHandler<NewPost> = data => console.log(data)

  const dispatch = useAppDispatch()

  const values = watch(['name', 'text', 'contact'])

  const setPost = () => {
    dispatch(createPost(...values))
  }

  console.log(values)
  return (
    <form onSubmit={handleSubmit(onSubmit, setPost)}>
      <label>Как вас зовут?</label>
      <input {...register('name')} />
      <label>Опишите, что произошло</label>
      <input
        placeholder='Нашли больного котенка, потеряли животное...'
        {...register('text')}
      />
      <label>Как с вами связаться?</label>
      <input
        placeholder='Номер телефона, почта, WhatsApp...'
        {...register('contact')}
      />
      <input type='submit' onClick={setPost} />
    </form>
  )
}
