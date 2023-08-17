import React, { FC, ReactNode } from 'react'
import { PopupStyled, Background, Container } from './styles'

export const Popup: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <PopupStyled>
            <Container>
                <Background />
                {children}
            </Container>
        </PopupStyled>

    )
}
