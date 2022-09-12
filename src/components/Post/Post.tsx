import { FC, useState } from 'react'

import { useAppDispatch } from 'store/store'

// import { deletePost } from 'store/posts/postSlice'

import { User } from '../User/User'
import { Comment } from '../Comment/Comment'
import { Button } from 'components/shared/Button/Button'

// import { getPostById } from 'store/posts/postSlice'

import { Container, Head, Likes, Img, Text, Body, ImgWrapper } from './styled'

interface PostProps {
  id: string
  text: string
  img: string
  likes: number
  createdAt: string
  owner?: string
}

export const Post: FC<PostProps> = ({ id, text, img, likes }) => {
  // const post = useSelector(state => getPostById(state, id))
  const dispatch = useAppDispatch()

  const handleDeletePost = () => {
    // dispatch(deletePost(id))
    console.log('delete')
  }

  const handleClick = () => {
    console.log(likes)
  }

  return (
    <Container>
      <Head>
        <User id='1' username='жопа' avatar='' />
        <Button variant='inline' onClick={handleDeletePost}>
          Опции
        </Button>
      </Head>
      <ImgWrapper>
        <Img src={img}></Img>
      </ImgWrapper>
      <Likes>
        <Button variant='like' onClick={handleClick} />
        {likes}
      </Likes>
      <Body>
        <User id='1' username='жопа' avatar='' />
        {text}
      </Body>
      <Comment text='Какой хорошенький!'></Comment>
    </Container>
  )
}
