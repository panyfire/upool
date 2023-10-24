import React, { FC } from 'react'
import { IButton } from './types'
import { Text } from 'ui'
import { ButtonStyled, ButtonWrapper } from './styles'

export const StakeButton: FC<IButton> = (props) => {
  const { text, ...other } = props

  return (
    <ButtonStyled {...other}>
      <ButtonWrapper>
        <Text text={text} type="btn" />
      </ButtonWrapper>
    </ButtonStyled>
  )
}
