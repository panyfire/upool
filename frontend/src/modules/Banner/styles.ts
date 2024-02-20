import styled from 'styled-components'
import { device } from 'ui'

export const BannerWrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 0 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  @media ${device.laptopL} {
    padding: 50px 0 50px;
  }
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  justify-content: space-between;
`

export const ImgWprap = styled.img`
  display: none;
  @media ${device.laptopMinL} {
    display: block;
  }
`

export const BannerSection = styled.section`
  position: relative;
`

export const Connect = styled.section`
  display: flex;
  gap: 20px
`
