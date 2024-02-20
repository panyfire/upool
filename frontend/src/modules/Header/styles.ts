import styled from 'styled-components'
import { device } from 'ui'

export const HeaderStyled = styled.menu`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Additional = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  position: relative;
`

export const Dropdowns = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px
`

export const MenuDrop = styled.div`
  position: absolute;
  bottom: -170px;
  background: rgba(255, 255, 255, 0.08);
  z-index: 100;
  right: -20px;
`
export const MeniListDrop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const MenuItemDrop = styled.div`
  padding: 15px 12px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center; 
  padding: 0 16px;
  & p {
    @media ${device.tabletL} {
      display: none;
    }
  }
`
