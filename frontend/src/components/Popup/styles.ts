import styled from 'styled-components'
import head from 'img/headPop.png'

export const PopupStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
`

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 3, 0.41);
  backdrop-filter: blur(30px);
  z-index: -1;
`

export const ChildrenWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

export const PopupContainer = styled.div`
  position: relative;
  width: 387px;
  height: calc(100% - 20px);
  background: rgba(14, 13, 24, 0.9);
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(
      to right,
      rgba(154, 106, 255, 1),
      rgba(251, 204, 114, 1)
    )
    1;
`

export const Head = styled.div`
  padding-top: 70px;
  width: 100%;
  height: 62px;
  content: '';
  background: url(${head}) no-repeat;
  background-size: contain;
`

export const FormWrapper = styled.div`
  padding-top: 70px;
  width: 100%;
  height: 100%;
`
