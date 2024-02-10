import React, { FC, useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { StakeForm } from 'modules'
import { useMetaMask } from 'hooks/useMetaMask'
import { Layout } from 'layouts/Layout'
import { LoaderWrapper } from 'layouts/LoaderWrapper'
import { Popup, StakeCard } from 'components'
import { useGetStakeList } from 'modules/StakeListing/api/hooks'
import { ItemWrapper, ListingWrapper, ImageWrapper } from './styles'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import img2 from 'img/banner2.png'

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
  const [data, setData] = useState<TResponse>({} as TResponse)
  console.log(dataResponse)
  const a = dataResponse.status !== 'error'
  useEffect(() => {
    dataResponse.refetch()
  }, [wallet.chainId])

  return (
    <LoaderWrapper isLoad={dataResponse.isLoading && !wallet}>
      <Layout>
        <ListingWrapper>
          <ImageWrapper>
            <img src={img2} alt={'banner-decor'} />
          </ImageWrapper>
          {Array.isArray(dataResponse.data) &&
            dataResponse.data.length && a ?
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
                        durations={data.durations}
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
            }): 'NO DATA'}
          )
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
  )
}
