import styled from 'styled-components'
import { grayColor, whiteColor } from 'ui/colors'

export const ButtonStyled = styled.button`
  padding: 21px 22px;
  height: 58px;
  position: relative;
  border: none;
  cursor: pointer;
  width: 308px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${grayColor};
  background:
    linear-gradient(135deg, transparent 0, ${grayColor} 0) top left,
    linear-gradient(-135deg, #9a6aff 0px, ${grayColor} 0) top right,
    linear-gradient(-45deg, transparent 10px, ${grayColor} 0) bottom right,
    linear-gradient(45deg, #9a6aff 0, ${grayColor} 0) bottom left;
  background-size: 50% 50%;
  background-repeat: no-repeat;
  p {
    color: ${whiteColor};
    font-family: 'GP Meduim', serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-transform: uppercase;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
