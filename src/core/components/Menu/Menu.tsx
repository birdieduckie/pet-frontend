import { FC } from 'react'

import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'hooks/store'

import { getPostRequest } from 'store/posts/postSlice'

import { UserInfo } from '../User/User'
import { Button } from 'core/shared/Button/Button'

import { Container } from './styled'

interface MenuProps {
  text: string
}

export const Menu: FC<MenuProps> = ({ text }) => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const handleClick = () => {
    navigate('/newpost', { replace: true })
  }

  const getPosts = () => dispatch(getPostRequest)
  return (
    <>
      <Container>
        {text}
        <Button onClick={getPosts}>Загрузить посты</Button>
        <Button onClick={handleClick}>Новый пост</Button>

        <UserInfo userName='User' userPic='none'></UserInfo>
      </Container>
    </>
  )
}
