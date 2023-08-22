import React, { FC, ReactNode } from 'react'
import {BorderStyled} from './styles'

export const BorderContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <BorderStyled>
      {/*<Corner />*/}
      {/*  <GradientBorder />*/}
        <div>iofgnkjdnfgnsdlnlkdfnglndfg</div>
      {children}
    </BorderStyled>
  )
}
