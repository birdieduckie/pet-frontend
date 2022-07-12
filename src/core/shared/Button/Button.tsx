import { FC } from 'react'

import { StyledButton } from './styled'

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: FC<ButtonProps> = () => {
  return <StyledButton></StyledButton>
}
