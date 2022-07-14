import { FC } from 'react'

import { UserInfo } from '../UserInfo/UserInfo'
import { Comment } from '../Comment/Comment'

import { Container, Head } from './styled'

interface PostProps {
  text: string
}

export const Post: FC<PostProps> = ({ text }) => {
  return (
    <Container>
      <Head>
        <UserInfo name='fdjel'></UserInfo>
      </Head>

      {text}
      {/* <Like></Like> */}
      <Comment text='Nice!'></Comment>
    </Container>
  )
}
