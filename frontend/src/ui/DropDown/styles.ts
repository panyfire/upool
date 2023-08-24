import styled from 'styled-components'

export const ButtonStyled = styled.button`
  padding: 10px 20px;
  height: 58px;
  position: relative;
  cursor: pointer;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(
      to right,
      rgba(154, 106, 255, 0.8),
      rgba(251, 204, 114, 0.8)
    )
    1;
`

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const IconWrapper = styled.div`
  &.isActive {
    transform: rotate(180deg);
  }
`

export const Menu = styled.menu`
  position: absolute;
  bottom: -140px;
  width: 100%;
  background: rgba(255, 255, 255, 0.08);
`
export const MeniList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const MenuItem = styled.div`
  padding: 15px 12px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
