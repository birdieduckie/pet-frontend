import { FC } from 'react'
import { StyledInput } from './styled'

export const Input: FC<any> = ({ children, ...props }) => {
  return <StyledInput {...props} />
}
