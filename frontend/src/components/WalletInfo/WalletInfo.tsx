import React, { FC } from 'react'
import { Text } from 'ui'
import { WalletContainer } from './styles'

type IWallet = {
  title: string
  value: string | number
  convertValue?: string
  color?: string
}

export const WalletInfo: FC<IWallet> = (props) => {
  const { title, convertValue, value, color } = props

  return (
    <WalletContainer>
      <Text type={'preTitleBold'} text={`${title}`} />
      <Text color={color} type={'h4'} text={`${value}`} />
      {convertValue && <Text type={'h41'} text={`≈ $${convertValue}`} />}
    </WalletContainer>
  )
}
