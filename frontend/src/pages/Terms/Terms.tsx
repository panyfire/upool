import React, { FC } from 'react'
import { ContentWrapper } from './styles'
import { Layout } from 'layouts/Layout'
import { GradientBackground } from 'layouts/GradientBackground'
import { LoaderWrapper } from 'layouts/LoaderWrapper'
import { HeaderLayout } from 'layouts/HeaderLayout'
import { useMetaMask } from 'hooks/useMetaMask'
import { useGetStakeList } from 'modules/StakeListing/api/hooks'
import { Footer } from 'modules'

export const Terms: FC = () => {
  const { wallet } = useMetaMask()
  const dataResponse = useGetStakeList(`${wallet?.chainId}` || '')
  const { isLoading } = dataResponse
  return (
    <GradientBackground>
      <LoaderWrapper isLoad={Boolean(wallet?.accounts?.length) && isLoading}>
        <HeaderLayout>
          <Layout>
            <ContentWrapper></ContentWrapper>
          </Layout>
        </HeaderLayout>
      </LoaderWrapper>
      <div style={{marginBottom: 50}}>
        <Layout>
          <Footer />
        </Layout>
      </div>

    </GradientBackground>
  )
}
