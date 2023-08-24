import React, { FC } from 'react'
import {
  PopupStyled,
  Background,
  Container,
  ChildrenWrapper,
  PopupContainer,
  FormWrapper,
  Head,
} from './styles'
import { IconProperties } from './types'
import { Text } from 'ui'

export const Popup: FC<IconProperties> = (props) => {
  const { children, onClick, title } = props
  return (
    <PopupStyled>
      <Container>
        <Background />
        <ChildrenWrapper onClick={onClick}>
          <PopupContainer>
            <Head />
            <Text text={title} type={'h3'} />
            <FormWrapper>{children}</FormWrapper>
          </PopupContainer>
        </ChildrenWrapper>
      </Container>
    </PopupStyled>
  )
}
