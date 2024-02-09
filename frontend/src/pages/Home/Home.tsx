import React, { useEffect } from 'react'
import { checkTransactionStatus } from 'utils'
import { GradientBackground } from 'layouts/GradientBackground'
import { Banner, Footer, StakeListing } from 'modules'
import { HeaderLayout } from 'layouts/HeaderLayout'
import { Layout } from 'layouts/Layout'

export const Home = () => {
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
      <HeaderLayout>
        <Banner />
        <StakeListing />
        <div style={{ marginBottom: 100 }}>
          <Layout>
            <Footer />
          </Layout>
        </div>
      </HeaderLayout>
    </GradientBackground>
  )
}
