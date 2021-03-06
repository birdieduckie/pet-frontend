import { FC } from 'react'

import { StyledButton } from './styled'

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  children: any
}

export const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}
