import { FC, useEffect, useState } from 'react'

import { User } from '../User/User'
import { Comment } from '../Comment/Comment'
import { Button } from 'components/shared/Button/Button'
import { PostMenu } from './PostMenu/PostMenu'

import { Container, Head, Likes, Img, Body, ImgWrapper } from './styled'
import { useAppDispatch, useAppSelector } from 'store/store'
import { userRequested, usersSelectors } from 'store/users/userSlice'

interface PostProps {
  id: string
  text: string
  img: string
  likes: number
  createdAt: string
  owner: string
}

export const Post: FC<PostProps> = ({ id, text, img, likes, owner }) => {
  const [isShown, setIsShown] = useState(false)

  const showMenu = () => {
    setIsShown(current => !current)
  }

  const dispatch = useAppDispatch()
  const user = useAppSelector(state =>
    usersSelectors.selectById(state.users, owner)
  )

  useEffect(() => {
    if (!user) {
      dispatch(userRequested(owner))
    }
  }, [dispatch, user, owner])

  const handleClick = () => {
    console.log(likes)
  }

  const username = user?.username
  const avatar = user?.avatar

  return (
    <Container>
      <Head>
        <User id={owner} username={username} avatar={avatar} />
        <Button variant='inline' onClick={showMenu}>
          Опции
        </Button>
        {isShown && <PostMenu id={id}></PostMenu>}
      </Head>
      <ImgWrapper>
        <Img src={img}></Img>
      </ImgWrapper>
      <Likes>
        <Button variant='like' onClick={handleClick} />
        {likes}
      </Likes>
      <Body>
        <User id={owner} username={username} avatar={avatar} />
        {text}
      </Body>
      <Comment
        id={'1'}
        text='Какой хорошенький!'
        author='жопа'
        publishDate='12.09.22'
      ></Comment>
    </Container>
  )
}
