import { FC, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { User } from '../User/User'
import { Menu } from './Menu/Menu'
import { Button } from 'components/shared/Button/Button'
import { Logo } from './Logo/Logo'

import { Container } from './styled'
import photo from 'assets/photo.jpg'

export interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const navigate = useNavigate()

  const [isShown, setIsShown] = useState(false)

  const showMenu = () => {
    setIsShown(current => !current)
  }

  const handleClick = () => {
    navigate('/newpost', { replace: true })
  }

  const getPosts = () => console.log('get posts')
  return (
    <Container>
      <Logo></Logo>
      <Button variant='inline' onClick={getPosts}>
        Загрузить посты
      </Button>
      <Button variant='inline' onClick={handleClick}>
        Новый пост
      </Button>
      <Button variant='inline' onClick={showMenu}>
        <User id='1' username='user' avatar={photo}></User>
      </Button>
      {isShown && <Menu></Menu>}
    </Container>
  )
}
