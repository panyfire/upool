import React, { FC } from 'react'
import {StakeButton, Text} from 'ui'
import {CardMiddle, CardTop, CardValues, CardWrapper} from './styles'
// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-comment
// @ts-ignore
import img from 'img/ETC.png'

type IStakeCard = {
    tittle: string
    preTittle: string
    minAPR: string
    maxAPR: string
    onClick: () => void
}

export const StakeCard: FC<IStakeCard> = (props) => {
    const {tittle,preTittle, minAPR, maxAPR , onClick} = props
  return (
    <CardWrapper>
        <CardTop>
            <div>
                <Text text={tittle ?? ''} type={'h2'} />
                <Text text={preTittle ?? ''} type={'note'} />
            </div>
            <img src={img} alt="ETC"/>
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
        <StakeButton onClick={onClick} text={'Stake'} />
    </CardWrapper>
  )
}
