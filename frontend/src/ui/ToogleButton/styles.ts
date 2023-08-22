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
  outline: none;

  //background: linear-gradient(135deg, transparent 10px, transparent 0) top left,
  //linear-gradient(-135deg, transparent 0px, transparent 0) top right,
  //linear-gradient(-45deg, transparent 10px, transparent 0) bottom right,
  //linear-gradient(45deg, transparent 0, transparent 0) bottom left;
  //background-size: 50% 50%;
  //background-repeat: no-repeat;
  &:before {
    content: '';
    position: absolute;
    top: 0; right: 0;
    border-top: 100px solid black;
    border-left: 56px solid transparent;
    width: 0;
    transform: rotate(90deg);
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`

export const IconWrapper = styled.div`
  &.isActive {
    transform: rotate(180deg);
  }
`
