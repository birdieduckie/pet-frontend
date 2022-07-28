import styled from 'styled-components'
// import { css } from 'styled-components'

// import { Button } from 'core/shared/Button/Button'

// import like from '../../../assets/like.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 50%;
  /* margin: 0 5px 5px 5px; */
  background: white;
  border-radius: 2px;
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
  width: 100%;
  height: 15%;

  background: purple;
`
