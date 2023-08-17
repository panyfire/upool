import styled from 'styled-components'
import { orangeGradient } from 'ui/colors'

export const BackgroundAnimation = styled.div`
  position: absolute;
  top: 0;
  opacity: 0.3;
  z-index: -1;
  transition: all .3s ease-in-out;
`

export const ButtonStyled = styled.button`
  padding: 21px 22px;
  width: 190px;
  height: 58px;
  background: ${orangeGradient};
  position: relative;
  border: none;
  cursor: pointer;
  &:hover ${BackgroundAnimation}  {
    transform: translate(5%, 35%);
    transition: all .3s ease-in-out;
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

