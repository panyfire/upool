import { MouseEventHandler } from 'react'
export type IButton = {
  text: string
  eventClick?: MouseEventHandler<HTMLButtonElement> | any
  disableStatus?: boolean
}
