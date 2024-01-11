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

export const AmountWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`

export const MaxBtn = styled.div`
  position: absolute;
  right: 11px;
  top: 50%;
`

export const FormBalance = styled.div`
  margin-top: 28px;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const TabValue = styled.div`
  color: #55f8f1;
  font-family: Montserrat, serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px;
`

export const TabListWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  & .react-tabs__tab {
    width: 60px;
    display: flex;
    justify-content: center;
    border-radius: 30px;
    border: 1px solid #55f8f1;
  }
  & .react-tabs__tab.react-tabs__tab--selected {
    border: 1px solid #55f8f1;
    background: #55f8f1;
    & p {
      color: black;
    }
  }
`

export const RangeWrapper = styled.div`
  margin-top: 33px;
`

export const DurationWrapper = styled.div`
  margin-top: 35px;
  .tablist__list_duration .react-tabs__tab {
    width: 60px;
    display: flex;
    justify-content: center;
    border-radius: 30px;
    border: 1px solid #55f8f1;
  }
  .tablist__list_duration .react-tabs__tab.react-tabs__tab--selected {
    width: 60px;
    display: flex;
    justify-content: center;
    border-radius: 30px;
    border: 1px solid #55f8f1;
  }
`

export const UnlocksWrapper = styled.div`
  display: flex;
  gap: 5px;
`
