import styled from 'styled-components'

import User from 'assets/user.svg'

export const Avatar = styled(User)`
  display: flex;
  border: solid 1px lightgray;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin: 0 5px 0 0;
`
export const Container = styled.div`
  display: flex;
  padding: 5px;
`
export const Username = styled.div`
  display: flex;
  font-family: 'Montserrat';
`
