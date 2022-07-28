import { FC } from 'react'

import { Avatar } from './styled'

interface UserInfoProps {
  userName: string
  userPic: string
  onClick: any
}

export const UserInfo: FC<UserInfoProps> = ({ userName, userPic, onClick }) => {
  return (
    <>
      <Avatar onClick={onClick}>{userPic}</Avatar>
      {userName}
    </>
  )
}
