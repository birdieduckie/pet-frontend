import { FC } from 'react'

import { Container } from './styled'

interface UserProps {
  id: string
  userName: string
  firstName: string
  lastName: string
  userPic: string
  email: string
  phone: string
  password: string
}

export const User: FC<UserProps> = ({ userName }) => {
  return <Container>{userName}</Container>
}
