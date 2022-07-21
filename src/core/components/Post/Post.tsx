import { FC } from 'react'

import { UserInfo } from '../User/User'
import { Comment } from '../Comment/Comment'

import { Container, Head } from './styled'

interface PostProps {
  id: string
  text: string
  image: string
  likes: number
  // tags
  publishDate: Date
  // owner: typeof UserInfo  или Юзер? пока не очень понимаю
}

export const Post: FC<PostProps> = ({ id, text }) => {
  return (
    <Container>
      <Head>
        {id}
        <UserInfo userName='fdjel' userPic='none'></UserInfo>
      </Head>
      {text}

      {/* <Like></Like> */}
      <Comment text='Nice!'></Comment>
    </Container>
  )
}
