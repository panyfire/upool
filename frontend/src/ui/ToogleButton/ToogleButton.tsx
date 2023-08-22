import React, { FC, useState } from 'react'
import clsx from 'clsx'
import { IButton } from './types'
import {Icon, Text} from 'ui'
import {
    ButtonStyled,
    ButtonWrapper, IconWrapper,
} from './styles'

export const ToogleButton: FC<IButton> = (props) => {
  const { text,  ...other } = props
    const [open, setOpen] = useState<boolean>(false)
    console.log('open',open)
  return (
    <ButtonStyled onClick={() => setOpen(!open)} {...other}>
      <ButtonWrapper>
          <Icon size={'24'} name='wallet' />
        <Text text={text} type="btn" />
          <IconWrapper className={clsx({isActive: open})} >
            <Icon size={'24'} name={'arrowDown'} />
          </IconWrapper>
      </ButtonWrapper>
    </ButtonStyled>
  )
}
