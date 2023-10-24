import React from 'react'
import { GradientBackground } from 'layouts/GradientBackground'
import { Banner, StakeListing } from 'modules'
import { useMetaMask } from 'hooks/useMetaMask'
import { HeaderLayout } from 'layouts/HeaderLayout'

export const Home = () => {
  const { wallet } = useMetaMask()
  console.log(wallet)
  return (
    <GradientBackground>
      <HeaderLayout>
        <Banner />
        <StakeListing />
      </HeaderLayout>
    </GradientBackground>
  )
}
