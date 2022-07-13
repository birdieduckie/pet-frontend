import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface PostForm {
  text: string
}

export const PostForm: FC = () => {
  const { register, handleSubmit } = useForm<PostForm>()
  const onSubmit: SubmitHandler<PostForm> = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Что нового?</label>
      <input {...register('text')} />
      <input type='submit' />
    </form>
  )
}
