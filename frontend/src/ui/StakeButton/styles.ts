import styled from 'styled-components'

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
  background: #9A6AFF;
  background: linear-gradient(135deg, transparent 10px, #FBCC72 0) top left,
  linear-gradient(-135deg, #9A6AFF 0px, #FBCC72 0) top right,
  linear-gradient(-45deg, transparent 10px, #FBCC72 0) bottom right,
  linear-gradient(45deg, #9A6AFF 0, #FBCC72 0) bottom left;
  background-size: 50% 50%;
  background-repeat: no-repeat;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
