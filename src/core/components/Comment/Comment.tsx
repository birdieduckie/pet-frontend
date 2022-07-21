import { FC } from 'react'

import { UserInfo } from '../User/User'

import { Container } from './styled'

interface CommentProps {
  text: string
  // like: number
}

export const Comment: FC<CommentProps> = ({ text }) => {
  return (
    <>
      <UserInfo userName='kqefo' userPic='none'></UserInfo>
      <Container>{text}</Container>
    </>
  )
}
