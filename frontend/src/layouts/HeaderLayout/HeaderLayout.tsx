import React, { FC, ReactNode } from 'react'
import { Header } from 'modules'

export const HeaderLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
