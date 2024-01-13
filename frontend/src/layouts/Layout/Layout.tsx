import React, { FC, ReactElement } from 'react'
import { ContentWrapper } from './styles'

export type IChildren = {
  children: string | JSX.Element | JSX.Element[] | ReactElement
}

export const Layout: FC<IChildren> = ({ children }) => {
  return (
    <ContentWrapper>
      {children}
    </ContentWrapper>
  )
}
