import React, { FC, useState, useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { StakeForm } from 'modules'
import { useMetaMask } from 'hooks/useMetaMask'
import { Layout } from 'layouts/Layout'
import { LoaderWrapper } from 'layouts/LoaderWrapper'
import { Popup, StakeCard } from 'components'
import { useGetStakeList } from 'modules/StakeListing/api/hooks'
import { Text } from 'ui'
import { ItemWrapper, ListingWrapper } from './styles'

type TResponse = {
  nameCoin: string
  iconCoinUrl: string
  subHeader: string
  duration: number
  aprData: { apr: string; duration: string }[]
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
  const dataResponse = useGetStakeList(
    wallet.chainId ? `${wallet.chainId}` : ''
  )
  const [data, setData] = useState<TResponse>({} as TResponse)
  const [error, setError] = useState<string | null>(null)
  const a = dataResponse.status === 'error' && dataResponse.error

  useEffect(() => {
    setError(null)
    if (wallet.chainId) {
      dataResponse.refetch()
    }
  }, [wallet.chainId])

  useEffect(() => {
    if (a && dataResponse?.data?.data?.length > 0) {
      setError('NO DATA')
    }
  }, [a])
  return (
    <Layout>
      <LoaderWrapper isLoad={dataResponse.isLoading && !wallet}>
        <ListingWrapper>
          {Array.isArray(dataResponse.data) &&
          dataResponse.data.length &&
          !error ? (
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
                      setData(e)
                      wallet?.accounts?.length
                        ? setStakeModal(true)
                        : connectMetaMask()
                    }}
                    disabled={wallet?.error}
                  />
                  {stakeModalStatus && data && (
                    <Popup
                      status={stakeModalStatus}
                      title={data.nameCoin}
                      onClick={() => setStakeModal(false)}
                    >
                      <StakeForm
                        id={data.id}
                        duration={data.duration}
                        aprData={data.aprData}
                        apr={data.apr}
                        expectedRoi={String(data.expectedRoi)}
                        maxArpPercent={data.maxArpPercent}
                        minArpPercent={data.minArpPercent}
                        percents={data.percents}
                        rangeValue={'25'}
                        amount={String(data.amount)}
                        errorStatus={false}
                        startLocking={''}
                        endLocking={''}
                        popUpCallback={() => setStakeModal(false)}
                        nameCoin={data.nameCoin}
                        iconCoinUrl={data.iconCoinUrl}
                      />
                    </Popup>
                  )}
                </ItemWrapper>
              )
            })
          ) : (
            <Text text={error ? error : ''} type={'h1'} />
          )}
        </ListingWrapper>
      </LoaderWrapper>
    </Layout>
  )
}
