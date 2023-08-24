import React, { FC } from 'react'
import { Icon, Text } from 'ui'
import { AlertStyled } from './styles'

export const Alert: FC = () => {
  return (
    <AlertStyled>
      <Icon size={'24'} name={'alert'} />
      <Text
        text={
          'Commission for Early Withdrawal of Tokens from Staking. Please note that there is a commission for early withdrawal of tokens from staking.'
        }
        type={'alert'}
      />
    </AlertStyled>
  )
}
