import styled from 'styled-components'
import img from 'img/stackbtn.png'

export const ButtonStyled = styled.button`
  padding: 21px 22px;
  height: 58px;
  position: relative;
  border: none;
  cursor: pointer;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${img}) center no-repeat;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
