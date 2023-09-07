import styled from 'styled-components'

export const ButtonStyled = styled.button`
  height: 58px;
  position: relative;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  --background-color: #060606;
  --border-color: linear-gradient(to bottom right, #F3C3C6, #B0FEC7);
  --border-width: 0.1em;
  --edge-size: 1em;
  cursor: pointer;
  background: var(--background-color);
  padding: 0.5em 1.5em;
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
      content: "";
      position: absolute;
      inset: 0;
      background: var(--border-color);
      z-index: -2;
  }
  &:after {
    content: "";
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

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const IconWrapper = styled.div`
  &.isActive {
    transform: rotate(180deg);
  }
`

export const Menu = styled.div`
  position: absolute;
  bottom: -140px;
  width: 100%;
  background: rgba(255, 255, 255, 0.08);
`
export const MeniList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const MenuItem = styled.div`
  padding: 15px 12px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
