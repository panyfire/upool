import React, { FC } from 'react'
import { IButton } from './types'
import { ButtonStyled, ButtonWrapper } from './styles'

export const ConfirmButton: FC<IButton> = (props) => {
  const { text, eventClick, disableStatus, ...other } = props

    return (
    <ButtonStyled onClick={eventClick} disabled={disableStatus} {...other}>
      <ButtonWrapper>
        <p>{text}</p>
      </ButtonWrapper>
    </ButtonStyled>
  )
}
