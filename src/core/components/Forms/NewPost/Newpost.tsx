import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface NewPost {
  userName: string
  text: string
  contact: string
}

export const NewPost: FC = () => {
  const { register, handleSubmit, watch } = useForm<NewPost>()

  const onSubmit: SubmitHandler<NewPost> = data => console.log(data)

  const values = watch(['userName', 'text', 'contact'])

  console.log(values)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Как вас зовут?</label>
      <input {...register('userName')} />
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
      <input type='submit' />
    </form>
  )
}
