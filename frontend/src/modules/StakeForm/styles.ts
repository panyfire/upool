import styled from 'styled-components'

export const FormTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FormCoinInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const FormBalance = styled.div`
  margin-top: 28px;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const TabValue = styled.div`
  color: #55F8F1;
  font-family: Montserrat,serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px;
`

export const TabListWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  & .react-tabs__tab {
    padding: 3px 16px;
    border-radius: 30px;
    border: 1px solid #55F8F1;
  }
  & .react-tabs__tab.react-tabs__tab--selected {
    border: 1px solid #55F8F1;
    background: #55F8F1;
    & p {
      color: black;
    }
  }
`

export const RangeWrapper = styled.div`
  margin-top: 33px;
`
