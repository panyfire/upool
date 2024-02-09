import React, { FC } from 'react'
import { StakeButton, Text } from 'ui'
import {
  CardMiddle,
  CardTitle,
  CardTop,
  CardValues,
  CardWrapper,
  CoinIcon,
} from './styles'

type IStakeCard = {
  tittle: string
  preTittle: string
  minAPR: string
  maxAPR: string
  onClick: () => void
  disabled?: boolean
  iconCoinUrl: string
}

export const StakeCard: FC<IStakeCard> = (props) => {
  const { tittle, preTittle, minAPR, maxAPR, onClick, disabled, iconCoinUrl } =
    props
  return (
    <CardWrapper>
      <CardTop>
        <CardTitle>
          <Text text={tittle ?? ''} type={'h2'} />
          <Text text={preTittle ?? ''} type={'note'} />
        </CardTitle>
        <CoinIcon src={iconCoinUrl ?? 'images/bnb-bnb-logo.png'} alt={tittle} />
      </CardTop>
      <CardMiddle>
        <CardValues>
          <Text text={'Min APR'} type={'card'} />
          <Text text={`${minAPR}%`} type={'card'} />
        </CardValues>
        <CardValues>
          <Text text={'Max APR'} type={'card'} />
          <Text text={`${maxAPR}%`} type={'card'} />
        </CardValues>
      </CardMiddle>
      <div>
        <StakeButton disabled={disabled} onClick={onClick} text={'Stake'} />
      </div>
    </CardWrapper>
  )
}
