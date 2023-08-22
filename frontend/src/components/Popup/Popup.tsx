import React, { FC } from 'react'
import { PopupStyled, Background, Container, ChildrenWrapper } from './styles'
import { IconProperties } from './types'

export const Popup: FC<IconProperties> = (props) => {
  const { children, onClick } = props
  return (
    <PopupStyled>
      <Container>
        <Background />
        <ChildrenWrapper onClick={onClick}>{children}</ChildrenWrapper>
      </Container>
    </PopupStyled>
  )
}
