import React, { FC, useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { StakeForm } from 'modules'
import { useMetaMask } from 'hooks/useMetaMask'
import { Layout } from 'layouts/Layout'
import { LoaderWrapper } from 'layouts/LoaderWrapper'
import { Popup, StakeCard } from 'components'
import { useGetStakeList } from 'modules/StakeListing/api/hooks'
import { Text } from 'ui'
import { ItemWrapper, ListingWrapper } from './styles'
import { chainIdName } from 'utils'

type TResponse = {
  nameCoin: string
  iconCoinUrl: string
  subHeader: string
  duration: number
  durations: { type: string; value: string }[]
  apr: number
  expectedRoi: number
  maxArpPercent: string
  minArpPercent: string
  percents: string[]
  id: number
  amount: string
}

export const StakeListing: FC = () => {
  const [stakeModalStatus, setStakeModal] = useState(false)
  const { wallet, connectMetaMask } = useMetaMask()

  const dataResponse = useGetStakeList(`${wallet?.chainId}` || '')

  const { data, isLoading } = dataResponse

  useEffect(() => {
    dataResponse.refetch()
  }, [wallet.chainId, data])

  return (
    <>
      <LoaderWrapper isLoad={isLoading}>
        <Layout>
          <ListingWrapper>
            {Array.isArray(data) && data.length ? (
              data.map((e: TResponse, i: number) => {
                return (
                  <ItemWrapper key={i}>
                    <StakeCard
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

                    {stakeModalStatus && (
                      <Popup
                        title={chainIdName(`${wallet.chainId}`)}
                        onClick={() => setStakeModal(false)}
                      >
                        <StakeForm
                          id={e.id}
                          duration={e.duration}
                          durations={e.durations}
                          apr={e.apr}
                          expectedRoi={String(e.expectedRoi)}
                          maxArpPercent={e.maxArpPercent}
                          minArpPercent={e.minArpPercent}
                          percents={e.percents}
                          rangeValue={'25'}
                          amount={String(e.amount)}
                          errorStatus={false}
                          startLocking={''}
                          endLocking={''}
                          popUpCallback={() => setStakeModal(false)}
                        />
                      </Popup>
                    )}
                  </ItemWrapper>
                )
              })
            ) : (
              <Text type={'h3'} text={'No Data'} />
            )}
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
      </LoaderWrapper>
    </>
  )
}
