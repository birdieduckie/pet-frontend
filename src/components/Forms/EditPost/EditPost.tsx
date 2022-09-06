import { useAppDispatch } from 'hooks/store'
import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Input } from 'components/shared/Input/Input'

interface EditPost {
  id: string
  text: string
}

export const EditPost: FC = () => {
  const { register, handleSubmit, watch } = useForm<EditPost>()

  const onSubmit: SubmitHandler<EditPost> = data => console.log(data)

  const values = watch(['id', 'text'])

  console.log(values)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label></label>
      <Input {...register('text')} />
      <input type='submit' />
    </form>
  )
}