import React, { FC, useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { StakeForm } from 'modules'
import { useMetaMask } from 'hooks/useMetaMask'
import { Layout } from 'layouts/Layout'
import { Popup, StakeCard } from 'components'
import { useGetStakeList } from 'modules/StakeListing/api/hooks'
import { Text } from 'ui'
import { ListingWrapper } from './styles'

type TResponse = {
  nameCoin: string
  iconCoinUrl: string
  subHeader: string
  duration: string
  durations: string[]
  apr: number
  coinToBeLocked: number
  expectedRoi: number
  maxArpPercent: string
  minArpPercent: string
  percents: string[]
  rangeValue: string
}

export const StakeListing: FC = () => {
  const [stakeModalStatus, setStakeModal] = useState(false)
  const { wallet, connectMetaMask } = useMetaMask()

  const dataResponse = useGetStakeList(`${wallet?.chainId}` || '')

  const { data } = dataResponse

  useEffect(() => {
    dataResponse.refetch()
  }, [wallet.chainId, data])

  console.log(data)

  return (
    <>
      <Layout>
        <ListingWrapper>
          {Array.isArray(data) && data.length ? (
            data.map((e: TResponse, i: number) => {
              return (
                <>
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

                  {stakeModalStatus && (
                    <Popup
                      // children={'undefined'}
                      onClick={() => setStakeModal(false)}
                    >
                      <StakeForm
                        duration={e.duration}
                        durations={e.durations}
                        apr={e.apr}
                        coinToBeLocked={e.coinToBeLocked}
                        expectedRoi={e.expectedRoi}
                        maxArpPercent={e.maxArpPercent}
                        minArpPercent={e.minArpPercent}
                        percents={e.percents}
                        rangeValue={e.rangeValue || '25'}
                        amount={0}
                        errorStatus={false}
                      />
                    </Popup>
                  )}
                </>
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
    </>
  )
}
