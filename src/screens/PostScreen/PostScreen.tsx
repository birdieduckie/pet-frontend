import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'store/store'
import { postRequested, postsSelectors } from 'store/posts/postSlice'

import { Header } from 'components/Header/Header'
import { Post } from 'components/Post/Post'

import { Container, Head, Screen } from './styled'

interface PostScreenProps {}

interface MyParams {
  id: string
}

export const PostScreen: FC<PostScreenProps> = () => {
  const dispatch = useAppDispatch()

  const { id } = useParams<keyof MyParams>() as MyParams

  const post = useAppSelector(state =>
    postsSelectors.selectById(state.posts, id)
  )

  useEffect(() => {
    if (!post) {
      dispatch(postRequested(id))
    }
  }, [dispatch, id, post])

  return (
    <Container>
      <Head>
        <Header />
      </Head>
      <Screen>
        {post ? (
          <Post
            id={post._id}
            text={post.text}
            img={post.img}
            likes={post.likes}
            createdAt={post.createdAt}
            owner={post.owner}
          />
        ) : (
          'puk'
        )}
      </Screen>
    </Container>
  )
}
