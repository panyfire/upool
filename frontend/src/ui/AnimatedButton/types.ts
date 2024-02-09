import React from 'react'

export type IButtonProps = {
  text: string
  isAnimated?: boolean
} & React.ComponentPropsWithoutRef<'button'>
