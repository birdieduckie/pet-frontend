import { FC } from 'react'
// import { useNavigate } from 'react-router-dom'

import { Button } from 'components/shared/Button/Button'

import { Container } from './styled'

interface MenuProps {}

export const Menu: FC<MenuProps> = () => {
  // const navigate = useNavigate()

  const handleClick = () => {
    console.log('жопа')
  }
  return (
    <Container>
      <Button onClick={handleClick} variant='inline'>
        Профиль
      </Button>
      <Button onClick={handleClick} variant='danger'>
        Выйти
      </Button>
    </Container>
  )
}
