import React from 'react'
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

  return (
    <GradientBackground>
      <LoaderWrapper isLoad={Boolean(wallet?.accounts?.length) && isLoading}>
        <HeaderLayout>
          <Banner />
          <StakeListing />
          <Layout>
            <Footer />
          </Layout>
        </HeaderLayout>
      </LoaderWrapper>
    </GradientBackground>
  )
}
