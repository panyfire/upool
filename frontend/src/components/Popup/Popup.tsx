import React, { FC } from 'react'
import {
  PopupStyled,
  Background,
  Container,
  ChildrenWrapper,
  PopupContainer,
  FormWrapper,
  Head,
  CloseIcon,
} from './styles'
import { IconProperties } from './types'
import { Icon, Text } from 'ui'


export const Popup: FC<IconProperties> = (props) => {
  const { children, onClick, title, status } = props
  return (
    <PopupStyled className={status ? 'isOpened' : 'isClosed'}>
      <Container>
        <Background onClick={onClick} />
        <ChildrenWrapper>
          <PopupContainer>
            <Head>
              <div style={{ width: '100%' }}>
                <Text text={title ? `LOCK ${title}` : ''} type={'popupTitle'} />
              </div>
              <CloseIcon onClick={onClick}>
                <Icon size={'24'} name={'close'} />
              </CloseIcon>
            </Head>
            {children && <FormWrapper>{children}</FormWrapper>}
          </PopupContainer>
        </ChildrenWrapper>
      </Container>
    </PopupStyled>
  )
}
