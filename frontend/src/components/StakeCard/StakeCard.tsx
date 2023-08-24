import React, { FC } from 'react'
import {StakeButton, Text} from 'ui'
import {CardMiddle, CardTop, CardWrapper} from './styles'
import coin from 'img/color.png'

export const StakeCard: FC = () => {
  return (
    <CardWrapper>
        <CardTop>
            <div>
                <Text text={'ETH'} type={'h2'} />
                <Text text={'Stake ETH'} type={'note'} />
            </div>
            <img src={coin} alt=""/>
        </CardTop>
        <CardMiddle>
            <div>
                <Text text={'Min APR'} type={'card'} />
                <Text text={'10%'} type={'card'} />
            </div>
            <div>
                <Text text={'Max APR'} type={'card'} />
                <Text text={'88%'} type={'card'} />
            </div>
        </CardMiddle>
        <StakeButton text={'Stake'} />
    </CardWrapper>
  )
}
