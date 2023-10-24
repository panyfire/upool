import React, { FC } from 'react'
import {
  BtnMaxWrapper,
  Field,
  InputContainer,
  InputStyled,
  Label,
} from './styles'
import { Text } from 'ui'
import { InputProps } from './types'

export const Input: FC<InputProps> = (props) => {
  const { onChange, name, label, ...other } = props
  // const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>
  //   onChange(e.target.value)

  return (
    <InputStyled>
      <Label htmlFor={name}>
        <Text text={label} type="label" />
      </Label>
      <InputContainer>
        <Field name={name} {...other} onChange={onChange} />
        <BtnMaxWrapper>
          <Text text="Max" type="value" />
        </BtnMaxWrapper>
      </InputContainer>
    </InputStyled>
  )
}
