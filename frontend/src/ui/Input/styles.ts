import styled from 'styled-components'
import { whiteColor } from 'ui/colors'


export const InputStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const InputContainer = styled.div`
  position: relative;
`


export const Field = styled.input`
  width: 100%;
  padding: 11px 14px;
  height: 40px;
  background: rgba(255, 255, 255, 0.08);
  color: ${whiteColor};
  font-size: 12px;
  font-weight: 500;
`

export const Label = styled.label`
  color: ${whiteColor};
`

export const BtnMaxWrapper = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  cursor: pointer;
`
