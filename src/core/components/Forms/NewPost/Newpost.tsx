import { useAppDispatch } from 'hooks/store'
import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { createPost } from 'store/posts/postSlice'

interface NewPost {
  id: undefined
  userName: string
  text: string
  image: string
}

export const NewPost: FC = () => {
  const { register, handleSubmit, watch } = useForm<NewPost>()

  const onSubmit: SubmitHandler<NewPost> = data => console.log(data)

  const values = watch(['userName', 'text', 'image'])

  const dispatch = useAppDispatch()

  const addPost = () => dispatch(createPost(...values))

  console.log(values)
  return (
    <form onSubmit={handleSubmit(onSubmit, addPost)}>
      <label>Как вас зовут?</label>
      <input {...register('userName')} />
      <label>Опишите, что произошло</label>
      <input
        placeholder='Нашли больного котенка, потеряли животное...'
        {...register('text')}
      />
      <label>Фото животного</label>
      <input placeholder='Добавьте изображение' {...register('image')} />
      <input type='submit' onClick={addPost} />
    </form>
  )
}
