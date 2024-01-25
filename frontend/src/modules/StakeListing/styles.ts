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
  @media ${device.tabletL} {
    width: 100%;
  }
`
