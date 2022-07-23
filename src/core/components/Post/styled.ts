import styled from 'styled-components'
import { css } from 'styled-components'

import { Button } from 'core/shared/Button/Button'

// import like from '../../../assets/like.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 5px 5px 5px;
  background: white;
  border: solid black;
  @media screen and (max-width: 600px) {
    width: 80%;
  }
`

// export const Like: typeof Button = styled(Button)`
//   ${p =>
//     p.type === 'like' &&
//     css`
//       background: center / contain no-repeat url(${like});
//     `};
// `

export const Head = styled.div`
  display: flex;
  height: 15%;
  background: purple;
`
