import { FC } from 'react'
import { useSelector } from 'react-redux'

import { Comment } from '../Comment/Comment'

// import { getPostById } from 'store/posts/postSlice'

import { Container, Head, LikeB, Likes, Img, Text, Body } from './styled'
import { User } from '../User/User'
import { nanoid } from '@reduxjs/toolkit'

interface PostProps {
  id: string
  text: string
  img: string
  likes: number
  publishDate: string
  owner?: string
}

export const Post: FC<PostProps> = ({ text, img, likes }) => {
  // const post = useSelector(state => getPostById(state, id))
  const id = nanoid()
  return (
    <Container>
      <Head>
        <User id='1' username='жопа' avatar='' />
      </Head>
      <Img src={img}></Img>
      <Likes>
        <LikeB />
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
