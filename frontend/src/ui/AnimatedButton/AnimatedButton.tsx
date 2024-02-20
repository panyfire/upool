import React, { FC } from 'react'
import { IButtonProps } from './types'
import { Text } from 'ui'
import {
  ButtonStyled,
  ButtonWrapper,
  BackgroundAnimation,
  Wrapper,
} from './styles'

export const AnimatedButton: FC<IButtonProps> = (props) => {
  const { text, isAnimated, ...other } = props
  return (
    <Wrapper style={{ position: 'relative' }}>
      <ButtonStyled className={!isAnimated ? 'isAnimated' : ''} {...other}>
        <ButtonWrapper>
          <Text color={'#000'} text={text} type="btn" />
        </ButtonWrapper>
      </ButtonStyled>
      {isAnimated && (
        <BackgroundAnimation>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="192"
            height="62"
            viewBox="0 0 192 62"
            fill="none"
          >
            <path d="M191.5 1H1V61H176L191.5 44.5V1Z" stroke="white" />
          </svg>
        </BackgroundAnimation>
      )}
    </Wrapper>
  )
}
