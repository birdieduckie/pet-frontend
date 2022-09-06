import styled, { css } from 'styled-components'

import Like from 'assets/like.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 80%;
  /* margin: 0 5px 5px 5px; */

  border: 1px solid lightgrey;
  border-radius: 5px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

export const Head = styled.div`
  display: flex;
  padding: 10px;
`

export const LikeB = styled(Like)`
  display: flex;
  width: 30px;
  height: 30px;
  margin: 0 5px;
`

export const Img = styled.img`
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
