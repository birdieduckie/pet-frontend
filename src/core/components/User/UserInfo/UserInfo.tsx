import { FC } from 'react'

import { Container, Avatar } from './styled'

interface UserInfoProps {
  userName: string
  userPic: string
  onClick: any
}

export const UserInfo: FC<UserInfoProps> = ({ userName, userPic, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Avatar>{userPic}</Avatar>
      {userName}
    </Container>
  )
}
