import { FC } from 'react'

import { UserInfo } from '../UserInfo/UserInfo'
import { Comment } from '../Comment/Comment'

import { Container, Head } from './styled'

interface PostProps {
  id: string
  text: string
  contact: string
}

export const Post: FC<PostProps> = ({ id, text, contact }) => {
  return (
    <Container>
      <Head>
        {id}
        <UserInfo name='fdjel'></UserInfo>
      </Head>
      {text}
      Contact: {contact}
      {/* <Like></Like> */}
      <Comment text='Nice!'></Comment>
    </Container>
  )
}
