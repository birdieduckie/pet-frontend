import styled from 'styled-components'

import { Button } from 'core/shared/Button/Button'

export const Container = styled.div`
  display: flex;
  justify-self: stretch;
  justify-content: space-between;
  height: 20%;
  width: 100%;
  background: red;

  /* @media screen and (max-width: 600px) {
    width: 100%;
  } */
`

export const Create: typeof Button = styled(Button)`
  display: flex;
  background: yellow;
  cursor: pointer;
`
