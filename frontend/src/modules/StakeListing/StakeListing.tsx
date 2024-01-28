import React, { FC, useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { StakeForm } from 'modules'
import { useMetaMask } from 'hooks/useMetaMask'
import { Layout } from 'layouts/Layout'
import { Popup, StakeCard } from 'components'
import { useGetStakeList } from 'modules/StakeListing/api/hooks'
import { ItemWrapper, ListingWrapper } from './styles'
import { chainIdName } from 'utils'
// import { LoaderWrapper } from 'layouts/LoaderWrapper'

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

  useEffect(() => {
    // dataResponse.refetch()
  }, [wallet.chainId, dataResponse.data])

  return (
    // <LoaderWrapper isLoad={dataResponse.isLoading || !wallet}>
      <Layout>
        <ListingWrapper>
          {dataResponse.data && Array.isArray(dataResponse.data) ? (
            dataResponse.data.map((e: TResponse, i: number) => {
              return (
                <ItemWrapper key={i}>
                  <StakeCard
                    iconCoinUrl={e.iconCoinUrl}
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
                      status={stakeModalStatus}
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
            <>{!dataResponse?.data?.data?.length && ' No Data'} )</>
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
    // </LoaderWrapper>
  )
}
