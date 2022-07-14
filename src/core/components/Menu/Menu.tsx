import { ChangeEvent, FC, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'hooks/store'
import { createPost } from 'store/posts/postSlice'

import { UserInfo } from '../UserInfo/UserInfo'
import { Button } from 'core/shared/Button/Button'

import { Container, Field } from './styled'

interface MenuProps {
  text: string
}

export const Menu: FC<MenuProps> = ({ text }) => {
  const dispatch = useAppDispatch()

  const [inputValue, setInputValue] = useState('')

  const handleSetInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  // const setPost = () => {
  //   if (inputValue.trim() !== '') {
  //     dispatch(createPost(inputValue))
  //   }
  // }
  const handleEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      setPost()
      setInputValue('')
    }
  }
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/newpost', { replace: true })
  }

  return (
    <>
      <Container>
        {text}
        <Field
          placeholder='Запостить...'
          onChange={handleSetInputValue}
          value={inputValue}
          onKeyDown={handleEnter}
        ></Field>
        <Button onClick={handleClick}>Новый пост</Button>

        <UserInfo name='User'></UserInfo>
      </Container>
    </>
  )
}
