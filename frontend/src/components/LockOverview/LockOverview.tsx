import React, { FC } from 'react'
import { Text } from 'ui'
import { LockOverviewStyles, LockOverviewStylesItem, Wrapper } from './styles'

type TAb = {
    nameCoin?: string,
    iconCoinUrl?: string,
    subHeader?: string,
    duration: number,
    durations: { type: string; value: string }[],
    apr: number,
    coinToBeLocked: number,
    expectedRoi?: number,
    maxArpPercent: string,
    minArpPercent: string,
    percents: string[],
    rangeValue: string,
    amount: number,
}

export const LockOverview: FC<TAb> = (props) => {
  const { expectedRoi, duration, apr, coinToBeLocked } = props
  return (
    <Wrapper>
      <Text text={'lock overview '} type={'popUpPreTitle'} />
      <LockOverviewStyles>
        <LockOverviewStylesItem>
          <Text text={'ETH to be locked'} type={'popUpValue'} />
          <Text text={`${coinToBeLocked}`} type={'value'} />
        </LockOverviewStylesItem>
        <LockOverviewStylesItem>
          <Text text={'apr'} type={'popUpValue'} />
          <Text text={`${apr}`} type={'value'} />
        </LockOverviewStylesItem>
        <LockOverviewStylesItem>
          <Text text={'duration'} type={'popUpValue'} />
          <Text text={`${duration} D`} type={'value'} />
        </LockOverviewStylesItem>
        <LockOverviewStylesItem>
          <Text text={'Start locking'} type={'popUpValue'} />
          <Text text={'Jul 6th, 2023 22:26'} type={'value'} />
        </LockOverviewStylesItem>
        <LockOverviewStylesItem>
          <Text text={'end locking'} type={'popUpValue'} />
          <Text text={'Jul 6th, 2023 22:26'} type={'value'} />
        </LockOverviewStylesItem>
        <LockOverviewStylesItem>
          <Text text={'expected roi'} type={'popUpValue'} />
          <Text text={`$ ${Number(expectedRoi).toFixed(5)}`} type={'value'} />
        </LockOverviewStylesItem>
      </LockOverviewStyles>
    </Wrapper>
  )
}
