import React, { FC, useState } from 'react'
import { StakeForm } from 'modules'
import { Layout } from 'layouts/Layout'
import { Popup, StakeCard } from 'components'
import { ListingWrapper } from './styles'

export const StakeListing: FC = () => {
  const [stakeModal, setStakeModal] = useState(false)
  return (
    <>
      <Layout>
        <ListingWrapper>
          <StakeCard
            tittle={'ETH'}
            preTittle={'Stake ETH'}
            minAPR={'10'}
            maxAPR={'88'}
            onClick={() => setStakeModal(true)}
          />
          <StakeCard
            tittle={'ETH'}
            preTittle={'Stake ETH'}
            minAPR={'10'}
            maxAPR={'88'}
            onClick={() => console.log('123123')}
          />
          <StakeCard
            tittle={'ETH'}
            preTittle={'Stake ETH'}
            minAPR={'10'}
            maxAPR={'88'}
            onClick={() => console.log('123123')}
          />
          <StakeCard
            tittle={'ETH'}
            preTittle={'Stake ETH'}
            minAPR={'10'}
            maxAPR={'88'}
            onClick={() => console.log('123123')}
          />
          <StakeCard
            tittle={'ETH'}
            preTittle={'Stake ETH'}
            minAPR={'10'}
            maxAPR={'88'}
            onClick={() => setStakeModal(true)}
          />
        </ListingWrapper>
      </Layout>
      {stakeModal && (
        <Popup
          // children={'undefined'}
          onClick={() => setStakeModal(false)}
        >
          <StakeForm />
        </Popup>
      )}
    </>
  )
}
