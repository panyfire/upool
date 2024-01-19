import styled from 'styled-components'
// import { device } from 'ui'

export const FooterWrapper = styled.div`
  margin-top: 80px;
  width: 100%;
  border-top: 1px solid #383241;
  color: white;
`

export const ContentWrapper = styled.menu`
  margin-top: 30px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
`

export const LinksWrapper = styled.div`
  display: flex;
  gap: 100px;
  cursor: pointer;
  & p {
    transition: all .3s ease-in-out;
  }
  & p:hover {
    color: #A5A5A5;
    cursor: pointer;
  }
`
