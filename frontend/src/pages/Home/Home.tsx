import React, { useEffect } from 'react'
import { checkTransactionStatus } from 'utils'
import { GradientBackground } from 'layouts/GradientBackground'
import { Banner, Footer, StakeListing } from 'modules'
import { HeaderLayout } from 'layouts/HeaderLayout'
import { LoaderWrapper } from 'layouts/LoaderWrapper'
import { useMetaMask } from 'hooks/useMetaMask'
import { useGetStakeList } from 'modules/StakeListing/api/hooks'
import { Layout } from 'layouts/Layout'

export const Home = () => {
  const { wallet } = useMetaMask()
  const dataResponse = useGetStakeList(`${wallet?.chainId}` || '')
  const { isLoading } = dataResponse
  const transactionResponse = localStorage.getItem('transactionResponse')

  useEffect(() => {
    const interval = setTimeout(() => {
      if (transactionResponse !== 'null') {
        checkTransactionStatus(String(transactionResponse))
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [transactionResponse])

  return (
    <GradientBackground>
      <LoaderWrapper isLoad={Boolean(wallet?.accounts?.length) && isLoading}>
        <HeaderLayout>
          <Banner />
          <StakeListing />
          <div style={{ marginBottom: 100 }}>
            <Layout>
              <Footer />
            </Layout>
          </div>
        </HeaderLayout>
      </LoaderWrapper>
    </GradientBackground>
  )
}
