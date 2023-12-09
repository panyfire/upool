import styled from 'styled-components'

export const ButtonStyled = styled.button`
  padding: 21px 22px;
  height: 58px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  --background-color: rgba(255, 255, 255, 0.08);
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
  &:disabled,
  &[disabled]{
    opacity: 0.7;
    cursor: not-allowed;
  }
  p {
    color: white;
    font-family: 'GP Meduim', serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-transform: uppercase;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
