import { FC } from 'react'

import { Container } from './styled'

interface UserProps {
  text: string
}

export const User: FC<UserProps> = ({ text }) => {
  return <Container>{text}</Container>
}
