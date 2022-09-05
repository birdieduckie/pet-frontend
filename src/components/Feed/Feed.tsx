// import { useAppSelector } from 'hooks/store'
import { mockPosts } from './mock'
import { FC } from 'react'
import { Header } from '../Header/Header'
import { Post } from '../Post/Post'

import { Container, Posts } from './styled'

import kitten from 'assets/kitten.jpg'
import { User } from '../User/User'
interface FeedProps {}

export const Feed: FC<FeedProps> = () => {
  // const posts = useAppSelector(state => state.posts.posts)

  return (
    <Container>
      <Header />
      <Posts>
        {/* {mockPosts.map(post => ( */}
        <Post
          key='1'
          id='1'
          text='Помогите котенку найти дом'
          publishDate={Date()}
          img={kitten}
          likes={16}
          owner='жопа'
        />
        {/* ))} */}
      </Posts>
    </Container>
  )
}
