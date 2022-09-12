import { FC } from 'react'

import { StyledButton } from './styled'

export interface ButtonProps {
  variant: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  children?: any
}

export const Button: FC<ButtonProps> = ({ onClick, children, variant }) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  )
}
