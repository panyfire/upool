import styled from 'styled-components'
import { device } from 'ui'

export const ListingWrapper = styled.section`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
`

export const ItemWrapper = styled.div`
  width: calc(100% / 3 - 40px);
  @media ${device.laptop} {
    width: calc(100% / 2 - 40px);
  }
  @media ${device.tablet} {
    width: 100%;
  }
`

export const ImageWrapper = styled.div`
  position: absolute;
  bottom: -50%;
  left: -20%;
  display: none;
  @media ${device.laptopMinL} {
    display: block;
  }
`
