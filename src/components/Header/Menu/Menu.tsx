import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from 'components/shared/Button/Button'

import { Container } from './styled'

interface MenuProps {}

export const Menu: FC<MenuProps> = () => {
  const navigate = useNavigate()
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const handleClick = () => {
    console.log('zhopa')
  }

  const handleLogClick = () => {
    navigate('/login', { replace: true })
  }
  return (
    <Container>
      <Button onClick={handleClick} variant='inline'>
        Профиль
      </Button>
      <Button onClick={handleLogClick} variant='danger'>
        Войти
      </Button>
    </Container>
  )
}
