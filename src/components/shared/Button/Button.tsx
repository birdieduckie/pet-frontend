import { FC } from 'react'

import { StyledButton } from './styled'

export interface ButtonProps {
  variant?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  children?: any
  type?: any
}

export const Button: FC<ButtonProps> = ({
  onClick,
  children,
  variant,
  type
}) => {
  return (
    <StyledButton type={type} variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  )
}
