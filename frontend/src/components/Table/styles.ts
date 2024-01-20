import styled from 'styled-components'

export const TableWrapper = styled.table`
  display: flex;
  flex-direction: column;
  color: white;
`

export const TableBody = styled.tbody`
  padding: 40px;
  border: 1px solid;
  border-top: none;
`

export const Img = styled.img`
  width:45px;
  height:45px;
  position: absolute;
  left: 0;
  top: 0;
`

export const TableHead = styled.thead`
  padding: 30px 40px;
  height: 78px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
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
    120% calc(100% - var(--edge-size)),
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

export const TrHead = styled.tr`
  position: relative;
  display: flex;
  justify-content: space-between;
  font-family: 'GP Meduim',serif;
  &:nth-child(1) {
    position: relative;
  }
  & th {
    color: #1A1329;
    font-family: 'GP Bold', serif;
    &:nth-child(1) {
      display: none
    }
  }
  & td {
    line-height:25px;
    &:nth-child(1) {
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  & td,th {
    width: 150px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`
