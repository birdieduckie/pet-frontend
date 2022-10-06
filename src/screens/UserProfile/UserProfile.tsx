import { FC } from 'react'

import { Container } from './styled'

interface UserProfileProps {
  id: string
  userName: string
  firstName: string
  lastName: string
  avatar?: string
  email: string
  phone?: string
  password: string
  registerDate: Date
}

export const UserProfile: FC<UserProfileProps> = ({ userName }) => {
  return <Container>{userName}</Container>
}
