import React, { FC, ReactNode } from 'react'
import { BorderStyled, Corner } from './styles'

export const BorderContainer: FC<{ children: ReactNode }> = ({ children }) => {
    return <BorderStyled>
        <Corner />
        {children}
    </BorderStyled>
}
