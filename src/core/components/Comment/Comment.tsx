import { FC } from 'react'

import { UserInfo } from '../User/UserInfo/UserInfo'

import { Container } from './styled'

interface CommentProps {
  text: string
  // like: number
}

export const Comment: FC<CommentProps> = ({ text }) => {
  const showUser = () => {
    console.log(UserInfo)
  }

  return (
    <>
      <UserInfo userName='kqefo' userPic='none' onClick={showUser}></UserInfo>
      <Container>{text}</Container>
    </>
  )
}
