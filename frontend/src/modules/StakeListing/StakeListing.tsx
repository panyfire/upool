import React, {FC} from 'react'
import {Layout, StakeCard} from "components";
import {ListingWrapper} from "./styles";

export const StakeListing: FC = () => {
  return(
      <Layout>
      <ListingWrapper>
          <StakeCard tittle={'ETH'} preTittle={'Stake ETH'} minAPR={'10'} maxAPR={'88'} onClick={() => console.log('123123')}  />
          <StakeCard tittle={'ETH'} preTittle={'Stake ETH'} minAPR={'10'} maxAPR={'88'} onClick={() => console.log('123123')}  />
          <StakeCard tittle={'ETH'} preTittle={'Stake ETH'} minAPR={'10'} maxAPR={'88'} onClick={() => console.log('123123')}  />
          <StakeCard tittle={'ETH'} preTittle={'Stake ETH'} minAPR={'10'} maxAPR={'88'} onClick={() => console.log('123123')}  />
          <StakeCard tittle={'ETH'} preTittle={'Stake ETH'} minAPR={'10'} maxAPR={'88'} onClick={() => console.log('123123')}  />
      </ListingWrapper>
      </Layout>
  )
}
