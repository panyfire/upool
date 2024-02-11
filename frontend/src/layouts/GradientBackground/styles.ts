import styled from 'styled-components'

export const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #000003;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const PinkELement = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 1000px;
  background: linear-gradient(
    177deg,
    rgba(154, 106, 255, 0.4) 0%,
    rgba(252, 154, 252, 0.4) 100%
  );
  filter: blur(250px);
  pointer-events: none;
`

export const BlueELement = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 1000px;
  background: linear-gradient(
    250deg,
    rgba(0, 53, 255, 0.3) 0%,
    rgba(85, 248, 241, 0.3) 92.72%
  );
  filter: blur(250px);
  pointer-events: none;
`
