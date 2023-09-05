import styled from 'styled-components'

export const BackgroundAnimation = styled.div`
  position: absolute;
  top: 0;
  opacity: 0.3;
  z-index: -1;
  transition: all 0.3s ease-in-out;
`

export const ButtonStyled = styled.button`
  padding: 21px 22px;
  height: 58px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  --background-color: linear-gradient(180deg, #F3C3C6 0%, #B0FEC7 100%); 
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
  transition: color 250ms;
  &:hover ${BackgroundAnimation} {
    transform: translate(5%, 35%);
    transition: all 0.3s ease-in-out;
    opacity: 1;
    z-index: 10;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Element = styled.div`
  position: absolute;
  right: 0;
  bottom: -20px;
  border: 20px solid transparent;
  border-right: 20px solid black;
  border-bottom: 20px solid black;
  pointer-events: all;
`
