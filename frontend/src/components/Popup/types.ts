import { ReactNode } from 'react'

export type IconProperties = {
  children?: ReactNode | string
  onClick?: () => void
  title?: string
}
