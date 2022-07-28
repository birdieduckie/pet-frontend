import { FC } from 'react'

import { Container, Option } from './styled'

interface MenuProps {}

export const Menu: FC<MenuProps> = () => {
  return (
    <Container>
      <Option>Профиль</Option>
      <Option>Выйти</Option>
    </Container>
  )
}
