import { FC, forwardRef } from 'react'
import { StyledInput } from './styled'

export const Input: FC<any> = forwardRef(({ children, ...props }, ref) => {
  return <StyledInput ref={ref} {...props} />
})
