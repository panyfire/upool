import styled from 'styled-components'

export const CardWrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 3);
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient( to right, rgba(154, 106, 255, 0.8), rgba(251, 204, 114, 0.8) ) 1;
`

export const CardTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardMiddle = styled.div`
  margin: 40px 0;
  padding: 8px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.25);
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient( to right, rgba(85, 248, 241, 1), rgba(255, 164, 255, 1)) 1;
  
`
