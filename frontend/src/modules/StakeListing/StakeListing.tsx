import React, { FC, useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { StakeForm } from 'modules'
import { useMetaMask } from 'hooks/useMetaMask'
import { Layout } from 'layouts/Layout'
import { Popup, StakeCard } from 'components'
import { ListingWrapper } from './styles'
import { useGetStakeList } from 'modules/StakeListing/api/hooks'

type TResponse = {
  nameCoin: string
  iconCoinUrl: string
  minArpPercent: string
  maxArpPercent: string
  subHeader: string
}

export const StakeListing: FC = () => {
  const [stakeModal, setStakeModal] = useState(false)
  const { wallet, connectMetaMask, isConnecting, hasProvider } = useMetaMask()

  const dataResponse = hasProvider
    ? useGetStakeList(`${wallet?.chainId}`)
    : useGetStakeList(``)

  const { data } = dataResponse

  console.log('isActiveUser', isConnecting)
  console.log('hasProvider', hasProvider)

  useEffect(() => {
    dataResponse.refetch()
  }, [wallet?.chainId])

  console.log(wallet.chainId)

  return (
    <>
      <Layout>
        <ListingWrapper>
          {Array.isArray(data) &&
            data.map((e: TResponse, i: number) => {
              return (
                <StakeCard
                  key={i}
                  tittle={e.nameCoin}
                  preTittle={e.subHeader}
                  minAPR={e.minArpPercent}
                  maxAPR={e.maxArpPercent}
                  onClick={() => {
                    wallet?.accounts?.length
                      ? setStakeModal(true)
                      : connectMetaMask()
                  }}
                  disabled={wallet?.error}
                />
              )
            })}
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
