import styled from 'styled-components'
import { whiteColor } from 'ui/colors'

export const InputStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const InputContainer = styled.div`
  position: relative;
  width: 300px;
  height: 40px;
`

export const Field = styled.input`
  width: 100%;
  padding: 11px 14px;
  height: 100%;
  background: rgba(255, 255, 255, 0.08);
  color: ${whiteColor};
  font-size: 12px;
  font-weight: 500;
  font-family: 'GP Meduim', sans-serif;
  line-height: 24px;
  outline: none;
  border: none;
  &::placeholder {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    color: #a5a5a5;
  }
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
