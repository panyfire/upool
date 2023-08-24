import React, { FC, ReactNode } from 'react'
import { Background, PinkELement, BlueELement } from './styles'

export const GradientBackground: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <Background>
      <PinkELement />
      <BlueELement />
      {children}
    </Background>
  )
}
