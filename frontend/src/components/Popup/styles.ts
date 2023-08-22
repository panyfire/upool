import styled from 'styled-components'

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
