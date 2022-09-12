import styled, { css } from 'styled-components'

import Like from 'assets/like.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 0 15px 0;
  border: 1px solid lightgrey;
  border-radius: 5px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`

// export const LikeB = styled(Like)`
//   display: flex;
//   width: 30px;
//   height: 30px;
//   margin: 0 5px;
// `

export const Img = styled.img`
  display: flex;
  object-fit: cover;
  width: 100%;
`

export const ImgWrapper = styled.div`
  display: flex;
`

export const Text = styled.div`
  display: flex;
  font-family: 'Open Sans', sans-serif;
`

export const Body = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  padding: 0 10px;
`
export const Likes = styled.div`
  display: flex;
  padding: 10px;
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  font-weight: 500;
`
