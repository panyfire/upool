import React from 'react'
import { GradientBackground } from 'layouts/GradientBackground'
import { Banner, StakeListing } from 'modules'
import { HeaderLayout } from 'layouts/HeaderLayout'

export const Home = () => {
  return (
    <GradientBackground>
      <HeaderLayout>
        <Banner />
        <StakeListing />
      </HeaderLayout>
    </GradientBackground>
  )
}
