import styled from 'styled-components'

export const StyledInput = styled.input`
  min-width: 240px;
  padding: 10px 14px;
  font-size: 15px;
  background: #ffffff;
  border: 2px solid #dedee3;
  border-radius: 4px;
  color: #0a0d1f;
  &:focus {
    outline: none;
    border: 2px solid #4375f8;
    color: #0a0d1f;
  }
  &::placeholder {
    color: #dedee3;
  }
`
