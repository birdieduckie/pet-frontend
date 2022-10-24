import { FC, useEffect } from 'react'
import { FixedSizeList as List } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'

import { Header } from 'components/Header/Header'

import { Post } from 'components/Post/Post'

import { Container, Head, Items } from './styled'
import { useAppDispatch, useAppSelector } from 'store/store'
import { postsSelectors, postsRequested } from 'store/posts/postSlice'

interface FeedProps {}

export const Feed: FC<FeedProps> = () => {
  const dispatch = useAppDispatch()

  const posts = useAppSelector(state => postsSelectors.selectAll(state.posts))

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(postsRequested())
    }
  }, [dispatch, posts])

  return (
    <Container>
      <Head>
        <Header />
      </Head>
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height - 1}
            width={width - 1}
            itemCount={posts.length}
            itemSize={height - 1}
          >
            {({ index, style }) => (
              <Items key={index} style={style}>
                <Post
                  key={posts[index]._id}
                  id={posts[index]._id}
                  text={posts[index].text}
                  img={posts[index].img}
                  likes={posts[index].likes}
                  createdAt={posts[index].createdAt}
                  owner={posts[index].owner}
                />
              </Items>
            )}
          </List>
        )}
      </AutoSizer>
    </Container>
  )
}
