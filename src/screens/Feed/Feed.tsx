import { useAppDispatch, useAppSelector } from 'store/store'
import { FC, useEffect } from 'react'

import { postsReceived, postsSelectors } from 'store/posts/postSlice'

import { Header } from '../../components/Header/Header'
import { Post } from '../../components/Post/Post'
import { mockPosts } from './mock'

import { Container, Posts, Head } from './styled'

interface FeedProps {}

export const Feed: FC<FeedProps> = () => {
  const dispatch = useAppDispatch()

  const posts = useAppSelector(state => postsSelectors.selectAll(state.posts))

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(postsReceived(mockPosts))
    }
  }, [dispatch, posts])

  return (
    <Container>
      <Head>
        <Header />
      </Head>

      <Posts>
        {posts?.map(post => (
          <Post
            key={post.id}
            id={post.id}
            text={post.text}
            img={post.img}
            likes={post.likes}
            createdAt={post.createdAt}
            owner='жопа'
          />
        ))}
      </Posts>
    </Container>
  )
}
