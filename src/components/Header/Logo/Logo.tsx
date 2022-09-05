import { FC } from 'react'
import { Name } from './styled'
import Cat from 'assets/cat.svg'
import { Container } from './styled'

interface LogoProps {}

export const Logo: FC<LogoProps> = () => {
  return (
    <Container>
      <Cat />
      <Name> Мои кошки </Name>
    </Container>
  )
}
