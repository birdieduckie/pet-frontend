import { FC } from 'react'

import { useAppDispatch } from 'hooks/store'
import { createPost } from 'store/posts/postSlice'

import { UserInfo } from '../UserInfo/UserInfo'

import { Container, Create } from './styled'

interface MenuProps {
  text: string
}

export const Menu: FC<MenuProps> = ({ text }) => {
  const dispatch = useAppDispatch()

  const setPost = () => dispatch(createPost)

  return (
    <>
      <Container>
        {text}
        <Create onClick={setPost}></Create>
        <UserInfo name='User'></UserInfo>
      </Container>
    </>
  )
}
