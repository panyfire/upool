import styled from 'styled-components'
import { grayColor } from 'ui/colors'
import wallet from 'img/wallet.png'

export const BackgroundAnimation = styled.div`
  position: absolute;
  top: 0;
  opacity: 0.3;
  z-index: -1;
  transition: all 0.3s ease-in-out;
`

export const ButtonStyled = styled.button`
  width: 190px;
  height: 58px;
  background: url(${wallet});
  // background: ${grayColor};
  // background: linear-gradient(135deg, transparent 0, #FBCC72 0) top left,
  // linear-gradient(-135deg, #9A6AFF 0px, #FBCC72 0) top right,
  // linear-gradient(-45deg, transparent 10px, #9A6AFF 0) bottom right,
  // linear-gradient(45deg, #9A6AFF 0, #9A6AFF 0) bottom left;
  // background-size: 50% 50%;
  // background-repeat: no-repeat;
  // position: relative;
  // border: none;
  // cursor: pointer;
  &:hover ${BackgroundAnimation} {
    transform: translate(5%, 35%);
    transition: all 0.3s ease-in-out;
    opacity: 1;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Element = styled.div`
  position: absolute;
  right: 0;
  bottom: -20px;
  border: 20px solid transparent;
  border-right: 20px solid black;
  border-bottom: 20px solid black;
  pointer-events: all;
`
