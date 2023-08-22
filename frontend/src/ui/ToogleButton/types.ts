import { ReactNode } from 'react'
export interface IButton extends React.ComponentPropsWithoutRef<"button"> {
  text: string;
  icon: ReactNode
  status?: boolean
}
