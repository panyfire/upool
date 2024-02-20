import React, { FC } from 'react'
import { Text } from 'ui'
import { LockOverviewStyles, LockOverviewStylesItem, Wrapper } from './styles'

type TAb = {
  nameCoin?: string
  iconCoinUrl?: string
  subHeader?: string
  duration: number
  durations: { type: string; value: string }[]
  apr: number
  expectedRoi: string
  maxArpPercent: string
  minArpPercent: string
  percents: string[]
  rangeValue: string
  amount: string
  startLocking: Date | string
  endLocking: Date | string
}

export const LockOverview: FC<TAb> = (props) => {
  const { expectedRoi, duration, apr, amount, startLocking, endLocking } = props
  return (
    <Wrapper>
      <Text text={'lock overview '} type={'popUpPreTitle'} />
      <LockOverviewStyles>
        <LockOverviewStylesItem>
          <Text text={'ETH to be locked'} type={'popUpValue'} />
          <Text
            text={amount === '0' ? '0' : amount.substring(0, 12)}
            type={'value'}
          />
        </LockOverviewStylesItem>
        <LockOverviewStylesItem>
          <Text text={'apr'} type={'popUpValue'} />
          <Text text={`${apr}%`} type={'value'} />
        </LockOverviewStylesItem>
        <LockOverviewStylesItem>
          <Text text={'duration'} type={'popUpValue'} />
          <Text text={`${duration} DAY`} type={'value'} />
        </LockOverviewStylesItem>
        <LockOverviewStylesItem>
          <Text text={'Start locking'} type={'popUpValue'} />
          <Text text={`${startLocking}`} type={'value'} />
        </LockOverviewStylesItem>
        <LockOverviewStylesItem>
          <Text text={'end locking'} type={'popUpValue'} />
          <Text text={`${endLocking}`} type={'value'} />
        </LockOverviewStylesItem>
        <LockOverviewStylesItem>
          <Text text={'expected roi'} type={'popUpValue'} />
          <Text
            text={String(expectedRoi) === '0' ? '$0' : String(expectedRoi).substring(0, 12)
            }
            type={'value'}
          />
        </LockOverviewStylesItem>
      </LockOverviewStyles>
    </Wrapper>
  )
}
