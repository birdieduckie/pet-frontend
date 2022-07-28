import { FC, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'hooks/store'

import { getPostRequest } from 'store/posts/postSlice'

import { UserInfo } from '../User/UserInfo/UserInfo'
import { Menu } from './Menu/Menu'
import { Button } from 'core/shared/Button/Button'

import { Container } from './styled'

interface HeaderProps {
  text: string
}

export const Header: FC<HeaderProps> = ({ text }) => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const [isShown, setIsShown] = useState(false)

  const showMenu = () => {
    setIsShown(current => !current)
  }

  const handleClick = () => {
    navigate('/newpost', { replace: true })
  }

  const getPosts = () => dispatch(getPostRequest)
  return (
    <>
      <Container>
        {text}

        <Button type='download' onClick={getPosts}>
          Загрузить посты
        </Button>
        <Button type='add' onClick={handleClick}>
          Новый пост
        </Button>

        <UserInfo userName='User' userPic='none' onClick={showMenu}></UserInfo>
        {isShown && <Menu></Menu>}
      </Container>
    </>
  )
}
