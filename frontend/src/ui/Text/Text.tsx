import React, { FC } from 'react'
import clsx from 'clsx'
import { IText } from './types'
import { TextCSS } from './styles'

export const Text: FC<IText> = (props) => {
  const { text, type, color, ...other } = props
  return (
    <TextCSS
      style={{ color: color }}
      className={clsx({
        default: type === 'default',
        h1: type === 'h1',
        h2: type === 'h2',
        h3: type === 'h3',
        h4: type === 'h4',
        h41: type === 'h41',
        preTitle: type === 'preTitle',
        btn: type === 'btn',
        label: type === 'label',
        value: type === 'value',
        alert: type === 'alert',
        note: type === 'note',
        card: type === 'card',
        card2: type === 'card2',
        popupTitle: type === 'popupTitle',
        preTitleBold: type === 'preTitleBold',
        popUpPreTitle: type === 'popUpPreTitle',
        popUpValue: type === 'popUpValue',
      })}
      {...other}
    >
      {text}
    </TextCSS>
  )
}
