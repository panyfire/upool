import React, { FC } from 'react'
import { Field, InputContainer, InputStyled, Label } from './styles'
import { Text } from 'ui'
import { InputProps } from './types'

export const Input: FC<InputProps> = (props) => {
  const { onChange, name, label, maxLength,  ...other } = props

  return (
    <InputStyled>
      <Label htmlFor={name}>
        <Text text={label} type="label" />
      </Label>
      <InputContainer>
        <Field maxLength={maxLength} name={name} onChange={onChange} {...other}  />
      </InputContainer>
    </InputStyled>
  )
}
