import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { Input } from 'components/shared/Input/Input'

import { Back, Container, Field } from './styled'

interface NewPost {
  id: undefined
  owner: string
  text: string
  img: string
}

export const NewPost: FC<NewPost> = () => {
  const { register, handleSubmit, watch } = useForm<NewPost>()

  const onSubmit: SubmitHandler<NewPost> = data => console.log(data)

  const values = watch(['owner', 'text', 'img'])

  // const dispatch = useAppDispatch()
  // const navigate = useNavigate()

  const addPost = () => {
    console.log('add post')
    // dispatch(createPost(...values))
    // navigate('/')
  }

  console.log(values)
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
          <Input type='file' {...register('img')} />
        </Field>

        <input type='submit' onClick={addPost} />
      </Container>
    </Back>
  )
}
