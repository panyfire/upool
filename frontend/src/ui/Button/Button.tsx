import React, { FC } from 'react'
import { IButton } from './types'
import { Text } from 'ui'
import { ButtonStyled, ButtonWrapper, Element, BackgroundAnimation } from './styles'

export const Button: FC<IButton> = (props) => {
    const { text, eventClick, disableStatus } = props

    return (
        <ButtonStyled onClick={eventClick} disabled={disableStatus} {...props}>
            <ButtonWrapper>
                <Element />
                <Text text={text} type='btn' />
                <BackgroundAnimation >
                    <svg xmlns="http://www.w3.org/2000/svg" width="192" height="62" viewBox="0 0 192 62" fill="none">
                        <path d="M191.5 1H1V61H176L191.5 44.5V1Z" stroke="white"/>
                    </svg>
                </BackgroundAnimation>
            </ButtonWrapper>
        </ButtonStyled>
    )
}
