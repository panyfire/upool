import React, { FC } from 'react'
import { StakeButton, Text } from 'ui'
import {
  CardMiddle,
  CardTitle,
  CardTop,
  CardValues,
  CardWrapper,
} from './styles'

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-comment
// @ts-ignore
import img from 'img/ETC.png'

type IStakeCard = {
  tittle: string
  preTittle: string
  minAPR: string
  maxAPR: string
  onClick: () => void
  disabled?: boolean
}

export const StakeCard: FC<IStakeCard> = (props) => {
  const { tittle, preTittle, minAPR, maxAPR, onClick, disabled } = props

  return (
    <CardWrapper>
      <CardTop>
        <CardTitle>
          <Text text={tittle ?? ''} type={'h2'} />
          <Text text={preTittle ?? ''} type={'note'} />
        </CardTitle>
        <img src={img} alt="ETC" />
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
