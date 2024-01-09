import React from 'react'
import { GradientBackground } from 'layouts/GradientBackground'
import { Banner, StakeListing } from 'modules'
import { HeaderLayout } from 'layouts/HeaderLayout'
import { LoaderWrapper } from 'layouts/LoaderWrapper'
import { useMetaMask } from 'hooks/useMetaMask'
import { useGetStakeList } from 'modules/StakeListing/api/hooks'

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
        </HeaderLayout>
      </LoaderWrapper>
    </GradientBackground>
  )
}
