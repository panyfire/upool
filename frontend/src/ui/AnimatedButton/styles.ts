import styled from 'styled-components'

export const BackgroundAnimation = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  opacity: 1;
  z-index: 2;
  transition: all 0.3s ease-in-out;
`

export const Wrapper = styled.div`
  &:hover ${BackgroundAnimation} {
    top: 0;
    left: 0;
    opacity: 0;
  }
`

export const ButtonStyled = styled.button`
  padding: 14px 12px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  --background-color: linear-gradient(160deg, #f3c3c6 10%, #b0fec7 85%);
  --border-width: 0.5em;
  --edge-size: 1.25em;
  cursor: pointer;
  background: var(--background-color);
  border: 0;
  position: relative;
  isolation: isolate;
  place-content: center;
  clip-path: polygon(
    var(--edge-size) -90%,
    100% 0,
    100% calc(100% - var(--edge-size)),
    calc(100% - var(--edge-size)) 100%,
    0 100%,
    -10% var(--edge-size)
  );
  transition: all 250ms ease-in;
  &.isAnimated {
    height: 44px;
    width: 154px;
    padding: 12px 14px;
    & p {
      letter-spacing: 0.48px;
      font-size: 16px;
      font-weight: 400;
      line-height: 16px;
      text-transform: none;
    }
  }
  &:hover {
    background: linear-gradient(160deg, #f3c3c6 20%, #b0fec7 105%);;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.48px;
  & p {
    letter-spacing: 0.48px;
  }
`
