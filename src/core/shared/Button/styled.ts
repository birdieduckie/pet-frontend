import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  min-width: 110px;
  padding: 12px 16px;
  border: 0;
  border-radius: 4px;
  background: pink;
  font-size: 15px;
  cursor: pointer;

  ${p =>
    p.type === 'button' &&
    css`
      background: #4375f8;
      &:hover {
        background: #2156e4;
      }
      &:active {
        background: #2156e4;
        color: #90abf1;
      }
    `};

  ${p =>
    p.type === 'reset' &&
    css`
      background: #f9674e;
      &:hover {
        background: #f45034;
      }
      &:active {
        background: #f45034;
        color: #f9a799;
      }
    `};
`
