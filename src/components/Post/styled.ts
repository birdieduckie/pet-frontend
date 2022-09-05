import styled, { css } from 'styled-components'

import Like from 'assets/like.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: min-content;
  width: 80%;
  /* margin: 0 5px 5px 5px; */

  border: 1px solid lightgrey;
  border-radius: 5px;

  /* @media screen and (max-width: 600px) {
    width: 80%;
  } */
`

export const Head = styled.div`
  display: flex;
  width: 80%;
  margin: 5px 0 0 5px;
`

export const LikeB = styled(Like)`
  display: flex;
  width: 20px;
  height: 20px;
  margin: 0 5px;
`

export const Img = styled.img`
  display: flex;
  max-height: 70%;
`
export const Text = styled.div`
  display: flex;
  font-family: 'Open Sans', sans-serif;
`

export const Body = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
`
export const Likes = styled.div`
  display: flex;
  padding: 5px;
  font-family: 'Open Sans', sans-serif;
`
