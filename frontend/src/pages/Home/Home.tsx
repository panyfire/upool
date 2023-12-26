import React from 'react'
import { GradientBackground } from 'layouts/GradientBackground'
import { Banner, StakeListing } from 'modules'
import { HeaderLayout } from 'layouts/HeaderLayout'
import { toast } from 'react-toastify'

export const Home = () => {
  const notify = () =>
    toast('🦄 Wow so easy!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })
  return (
    <GradientBackground>
      <HeaderLayout>
        <div onClick={notify}>HELLLLLLLLLO</div>
        <Banner />
        <StakeListing />
      </HeaderLayout>
    </GradientBackground>
  )
}
