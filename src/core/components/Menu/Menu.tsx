import { FC } from 'react'

import { useNavigate } from 'react-router-dom'

import { UserInfo } from '../UserInfo/UserInfo'
import { Button } from 'core/shared/Button/Button'

import { Container } from './styled'

interface MenuProps {
  text: string
}

export const Menu: FC<MenuProps> = ({ text }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/newpost', { replace: true })
  }

  return (
    <>
      <Container>
        {text}

        <Button onClick={handleClick}>Новый пост</Button>

        <UserInfo name='User'></UserInfo>
      </Container>
    </>
  )
}
