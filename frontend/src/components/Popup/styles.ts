import styled from 'styled-components'

export const PopupStyled = styled.div`
  top: 0;
  right: 0;
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
  --background-color: #060606;
  --border-color: linear-gradient(to bottom right, #f3c3c6, #b0fec7);
  --border-width: 0.1em;
  --edge-size: 1em;
  cursor: pointer;
  background: var(--background-color);
  border: 0;
  isolation: isolate;
  place-content: center;
  clip-path: polygon(
    var(--edge-size) 0,
    100% 0,
    100% calc(100% - var(--edge-size)),
    calc(100% - var(--edge-size)) 100%,
    0 100%,
    0 var(--edge-size)
  );
  transition: color 250ms;
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--border-color);
    z-index: -2;
  }
  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--background-color);
    z-index: -1;
    clip-path: polygon(
      // top left 1
      var(--border-width) calc(var(--edge-size) + var(--border-width) * 0.5),
      // top left 2
      calc(var(--edge-size) + var(--border-width) * 0.5) var(--border-width),
      // top right
      calc(100% - var(--border-width)) var(--border-width),
      //bottom right - 1
      calc(100% - var(--border-width))
        calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5)),
      // bottom right - 2
      calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5))
        calc(100% - var(--border-width)),
      // bottom left
      calc(var(--border-width)) calc(100% - var(--border-width))
    );
    transition: clip-path 500ms;
  }
`

export const Head = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  height: 62px;
  --background-color: #060606;
  --border-color: linear-gradient(to bottom right, #f3c3c6, #b0fec7);
  --border-width: 7.1em;
  --edge-size: 1em;
  cursor: pointer;
  background: var(--background-color);
  border: 0;
  isolation: isolate;
  place-content: center;
  clip-path: polygon(
    var(--edge-size) 0,
    100% 0,
    100% calc(100% - var(--edge-size)),
    calc(105% - var(--edge-size)) 100%,
    0 100%,
    0 var(--edge-size)
  );
  transition: color 250ms;
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--border-color);
    z-index: -2;
  }
  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--background-color);
    z-index: -1;
    clip-path: polygon(
      // top left 1
      var(--border-width) calc(var(--edge-size) + var(--border-width) * 0.5),
      // top left 2
      calc(var(--edge-size) + var(--border-width) * 0.5) var(--border-width),
      // top right
      calc(100% - var(--border-width)) var(--border-width),
      //bottom right - 1
      calc(100% - var(--border-width))
        calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5)),
      // bottom right - 2
      calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5))
        calc(100% - var(--border-width)),
      // bottom left
      calc(var(--border-width)) calc(100% - var(--border-width))
    );
    transition: clip-path 500ms;
  }
`

export const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px;
`

export const CloseIcon = styled.div`
  & svg path {
    fill: #1a1329;
  }
`
