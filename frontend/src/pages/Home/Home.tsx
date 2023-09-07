import React from 'react'
import { GradientBackground } from 'layouts/GradientBackground'
import {Header, Banner, StakeListing} from 'modules'
import { useMetaMask } from 'hooks/useMetaMask'

export const Home = () => {
  const { wallet } = useMetaMask()
  console.log(wallet)
  return (
    <GradientBackground>
      <Header />
      <Banner />
      <StakeListing />
    </GradientBackground>
  )
}
