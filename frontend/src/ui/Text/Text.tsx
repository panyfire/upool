import React, { FC } from 'react'
import clsx from 'clsx'
import { IText } from './types'
import { TextCSS } from './styles'

export const Text: FC<IText> = (props) => {
  const { text, type, ...other } = props
  return (
    <TextCSS
      className={clsx({
        default: type === 'default',
        h1: type === 'h1',
        h2: type === 'h2',
        h3: type === 'h3',
        h4: type === 'h4',
        preTitle: type === 'pre-title',
        btn: type === 'btn',
        label: type === 'label',
        value: type === 'value',
        alert: type === 'alert',
        note: type === 'note',
          card: type === 'card',
      })}
      {...other}
    >
      {text}
    </TextCSS>
  )
}
