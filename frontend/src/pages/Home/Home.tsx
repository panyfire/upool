import React from 'react'
import { GradientBackground } from 'layouts/GradientBackground'
import { Header, Banner } from 'modules'
import { useMetaMask } from 'hooks/useMetaMask'
// import {Navigation} from "components/Navigation";
// import {MetaMaskAuth} from "modules/MetamaskAuth/MetaMaskAuth";

export const Home = () => {
  const { wallet } = useMetaMask()
  console.log(wallet)
  return (
    <GradientBackground>
      <Header />
      <Banner />

      {/*<Navigation />*/}
    </GradientBackground>
  )
}
