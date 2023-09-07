import { ReactNode } from 'react'
export type IButton = {
  text?: string
  icon: ReactNode
  status?: boolean
} & React.ComponentPropsWithoutRef<'button'>
