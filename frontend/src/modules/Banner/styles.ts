import styled from 'styled-components'
import { device } from 'ui'

export const BannerWrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  justify-content: space-between;
`

export const ImgWprap = styled.img`
  width: 40%;
  @media ${device.tabletL} {
    display: none;
  }
`

export const BannerSection = styled.section`
  //background: linear-gradient(90deg, rgba(255, 255, 255, 0.05) 5.79%, rgba(255, 255, 255, 0.00) 100.64%);
`
