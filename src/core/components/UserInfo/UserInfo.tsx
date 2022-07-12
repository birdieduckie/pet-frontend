import { FC } from 'react'

import { Container, Userpic } from './styled'

interface UserInfoProps {
  name: string
}

const Avatar: FC = () => {
  return <Userpic></Userpic>
}

export const UserInfo: FC<UserInfoProps> = ({ name }) => {
  return (
    <>
      <Avatar></Avatar>
      <Container>{name}</Container>
    </>
  )
}
