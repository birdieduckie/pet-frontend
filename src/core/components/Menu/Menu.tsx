import { FC } from 'react'

import { User } from '../User/User'

import { Container } from './styled'

interface MenuProps {
  text: string
}

export const Menu: FC<MenuProps> = ({ text }) => {
  return (
    <>
      <Container> {text}</Container>
      <User text='User'></User>
    </>
  )
}
