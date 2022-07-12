import { FC } from 'react'

import { UserInfo } from '../UserInfo/UserInfo'

import { Container } from './styled'

interface CommentProps {
  text: string
}

// const Avatar: FC = () => {
//   return <Userpic></Userpic>
// }

export const Comment: FC<CommentProps> = ({ text }) => {
  return (
    <>
      <UserInfo name='kqefo'></UserInfo>
      <Container>{text}</Container>
    </>
  )
}
