import { FC } from 'react'

import { Container, Avatar } from './styled'

interface UserProps {
  id: string
  userName: string
  firstName: string
  lastName: string
  userPic: string
  email: string
  phone: string
  // password: string
}

interface UserInfoProps {
  userName: string
  userPic: string
}
export const User: FC<UserProps> = ({ userName }) => {
  return <Container>{userName}</Container>
}

export const UserInfo: FC<UserInfoProps> = ({ userName, userPic }) => {
  return (
    <Container>
      <Avatar>{userPic}</Avatar>
      {userName}
    </Container>
  )
}
