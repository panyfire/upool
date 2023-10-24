import React, { FC, useState } from 'react'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import { StakeForm } from 'modules'
import { useMetaMask } from 'hooks/useMetaMask'
import { Layout } from 'layouts/Layout'
import { Popup, StakeCard } from 'components'
import { ListingWrapper } from './styles'
import { useGetStakeList } from 'modules/StakeListing/api/hooks'

export const StakeListing: FC = () => {
  const [stakeModal, setStakeModal] = useState(false)
  const { wallet, connectMetaMask } = useMetaMask()
    console.log(wallet.chainId)
  const a = !!wallet && useGetStakeList(`${wallet.chainId}`)

  console.log(a, 'Statat')

  return (
    <>
      <Layout>
        <ListingWrapper>
          <StakeCard
            tittle={'ETH'}
            preTittle={'Stake ETH'}
            minAPR={'10'}
            maxAPR={'88'}
            onClick={() => {
              wallet?.accounts?.length ? setStakeModal(true) : connectMetaMask()
            }}
            // disabled={wallet?.error}
          />
          <StakeCard
            tittle={'ETH'}
            preTittle={'Stake ETH'}
            minAPR={'10'}
            maxAPR={'88'}
            onClick={() => {
              wallet?.accounts?.length ? setStakeModal(true) : connectMetaMask()
            }}
            // disabled={wallet?.error}
          />
          <StakeCard
            tittle={'ETH'}
            preTittle={'Stake ETH'}
            minAPR={'10'}
            maxAPR={'88'}
            onClick={() => {
              wallet?.accounts?.length ? setStakeModal(true) : connectMetaMask()
            }}
            disabled={wallet.error}
          />
          <StakeCard
            tittle={'ETH'}
            preTittle={'Stake ETH'}
            minAPR={'10'}
            maxAPR={'88'}
            onClick={() => {
              wallet?.accounts?.length ? setStakeModal(true) : connectMetaMask()
            }}
            disabled={wallet?.error}
          />
          <StakeCard
            tittle={'ETH'}
            preTittle={'Stake ETH'}
            minAPR={'10'}
            maxAPR={'88'}
            onClick={() => {
              wallet?.accounts?.length ? setStakeModal(true) : connectMetaMask()
            }}
            disabled={wallet?.error}
          />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </ListingWrapper>
      </Layout>
      {stakeModal && (
        <Popup
          // children={'undefined'}
          onClick={() => setStakeModal(false)}
        >
          <StakeForm amount={0} rangeValue={0} duration={0} />
        </Popup>
      )}
    </>
  )
}
