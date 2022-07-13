import { ChangeEvent, FC, useState } from 'react'

import { useAppDispatch } from 'hooks/store'
import { createPost } from 'store/posts/postSlice'

import { UserInfo } from '../UserInfo/UserInfo'
import { PostForm } from '../Forms/PostForm/PostForm'

import { Container, Create, Field } from './styled'

interface MenuProps {
  text: string
}

export const Menu: FC<MenuProps> = ({ text }) => {
  const dispatch = useAppDispatch()

  const [inputValue, setInputValue] = useState('')

  const handleSetInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const setPost = () => {
    if (inputValue.trim() !== '') {
      dispatch(createPost(inputValue))
    }
  }
  const handleEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      setPost()
      setInputValue('')
    }
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
        <Create onClick={setPost}></Create>
        <PostForm></PostForm>
        <UserInfo name='User'></UserInfo>
      </Container>
    </>
  )
}
