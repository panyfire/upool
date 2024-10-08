import styled from 'styled-components'
import { device } from 'ui'

export const CardWrapper = styled.div`
  padding: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  --background-color: #131313;
  --border-color: linear-gradient(
    to top right,
    rgb(31, 199, 212),
    rgb(255, 84, 176)
  );
  --border-width: 0.2em;
  --edge-size: 1em;
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
  @media ${device.tablet} {
    width: 100%;
  }
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

export const CardTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const CardTitle = styled.div`
  width: 100%;
  & p:nth-child(1) {
    margin-bottom: 20px;
  }
`

export const CoinIcon = styled.img`
  width: 56px;
  height: 56px;
  object-fit: contain;
`

export const CardValues = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const CardMiddle = styled.div`
  margin: 40px 0;
  position: relative;
  padding: 8px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  --background-color: #060606;
  --border-color: linear-gradient(
    to top right,
    rgb(31, 199, 212),
    rgb(255, 84, 176)
  );
  --border-width: 0.1em;
  --edge-size: 1em;
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
