import React, { FC } from 'react'
import { Text } from 'ui'
import { WalletContainer } from './styles'

type IWallet = {
  title: string
  value: string
  convertValue: string
}

export const WalletInfo: FC<IWallet> = (props) => {
  const { title, convertValue, value } = props

  return (
    <WalletContainer>
      <Text type={'preTitle'} text={title} />
      <Text type={'h4'} text={value} />
      <Text type={'h41'} text={convertValue} />
    </WalletContainer>
  )
}
