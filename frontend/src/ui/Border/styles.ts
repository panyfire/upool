import styled from 'styled-components'
import { brightBlueColor } from 'ui/colors'

export const BorderStyled = styled.div`
  width: 400px;
  height: 500px;
  border: 1px solid ${brightBlueColor};
  background: transparent;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: -1px; left: -1px;
    border-top: 80px solid black;
    border-right: 80px solid black;
    width: 0;
  }
  &:after {
    content: "";
    position: absolute;
    left: -20px;
    top: 40px;
    width: 117px; 
    height: 1px;
    background: ${brightBlueColor};
    transform: rotate(135deg);
  }
`

export const Corner = styled.div`
  &::before {
    content: '';
    position: absolute;
    bottom: -1px; right: -1px;
    border-bottom: 80px solid black;
    border-left: 80px solid black;
    width: 0;
  }
  &:after {
    content: "";
    position: absolute;
    right: -20px;
    bottom: 40px;
    width: 117px; 
    height: 1px;
    background: ${brightBlueColor};
    transform: rotate(135deg);
  }
`

