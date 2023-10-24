import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Text } from 'ui'
import { GradientBackground } from 'layouts/GradientBackground'
import { HeaderLayout } from 'layouts/HeaderLayout'
import { useMetaMask } from 'hooks/useMetaMask'
import { Layout } from 'layouts/Layout'
import { Table, WalletInfo } from 'components'
import { WalletsContainer } from './styles'


export const Profile = () => {
  const { wallet,  } = useMetaMask()
  const navigate = useNavigate();

  useEffect(() => {
    if (!wallet?.accounts.length) {
      navigate('/')
    }
  }, [wallet])

  return (
    <HeaderLayout>
      <GradientBackground>
        <Layout>
          <div>
            <Text text={'YOUR ADRESS'} type={'h4'} />
            <Text text={wallet?.accounts[0]} type={'h41'} />
            <WalletsContainer>
              <WalletInfo
                title="LOCKERD"
                value="0.0000000 BTC"
                convertValue="≈ $0.00"
              />
              <WalletInfo
                title="Total Profit"
                value="0.0000000 BTC"
                convertValue="≈ $0.00"
              />
              <WalletInfo
                title="Last Day Profit"
                value="0.0000000 BTC"
                convertValue="≈ $0.00"
              />
            </WalletsContainer>
            <Table />
          </div>
        </Layout>
      </GradientBackground>
    </HeaderLayout>
  )
}
