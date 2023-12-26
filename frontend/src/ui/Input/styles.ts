import styled from 'styled-components'

export const InputStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
`

export const Field = styled.input`
  width: 100%;
  padding: 11px 14px;
  height: 100%;
  background: rgba(255, 255, 255, 0.08);
  color: white;
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
  color: white;
`

export const BtnMaxWrapper = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  cursor: pointer;
`
