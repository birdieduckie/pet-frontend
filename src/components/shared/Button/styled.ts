import styled, { css } from 'styled-components'

import Like from '../../../assets/like.svg'

import { ButtonProps } from './Button'

export const StyledButton = styled.button<ButtonProps>`
  min-width: 110px;
  padding: 12px 16px;
  border: 0;
  border-radius: 4px;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  cursor: pointer;

  ${p =>
    p.variant === 'primary' &&
    css`
      background: #4375f8;
      &:hover {
        background: #2156e4;
      }
      &:active {
        background: #2156e4;
        color: #90abf1;
      }
      &:disabled {
        background: #dedee3;
      }
    `};

  ${p =>
    p.variant === 'danger' &&
    css`
      background: #f9674e;
      &:hover {
        background: #f45034;
      }
      &:active {
        background: #f45034;
        color: #f9a799;
      }
      &:disabled {
        background: #fab4a8;
      }
    `};

  ${p =>
    p.variant === 'inline' &&
    css`
      background: white;
      color: black;
      &:hover {
        color: red;
      }
      &:active {
        color: #737d8c;
      }
      &:disabled {
        color: #8f97a3;
      }
    `};
  ${p =>
    p.variant === 'like' &&
    css`
      background: url(${Like});
      color: black;
      border: 2px solid black;

      &:active {
        color: red;
      }
    `};
`
