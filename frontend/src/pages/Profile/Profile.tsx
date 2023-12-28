import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useMetaMask } from 'hooks/useMetaMask'
import { useGetTableData } from 'modules/ProfileTable/api/hooks'
import { Icon, Text } from 'ui'
import { GradientBackground } from 'layouts/GradientBackground'
import { HeaderLayout } from 'layouts/HeaderLayout'
import { Layout } from 'layouts/Layout'
import { Table, WalletInfo } from 'components'
import { WalletContainer, WalletsContainer } from './styles'

export const Profile = () => {
  const { wallet } = useMetaMask()
  const tableData = wallet && useGetTableData(wallet?.accounts[0])

  const notify = (text: string) =>
    toast(text, {
      position: 'bottom-right',
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })

  const handleClick = () => {
    navigator.clipboard.writeText(wallet?.accounts[0])
    notify('Text is copy')
  }

  return wallet && tableData ? (
    <HeaderLayout>
      <GradientBackground>
        <Layout>
          <div style={{ marginTop: 70 }}>
            <Text text={'YOUR ADDRESS'} type={'h4'} />
            <WalletContainer>
              <Text color={'white'} text={wallet?.accounts[0]} type={'h41'} />
              <div onClick={handleClick}>
                <Icon name={'copy'} size={'32'} />
              </div>
            </WalletContainer>
            <WalletsContainer>
              <WalletInfo
                color={'#BEA0FD'}
                title="LOCKED"
                value={`${tableData?.data?.data?.totalLockedProfile} BTC`}
                convertValue="≈ $0.00"
              />
              <WalletInfo
                title="TOTAL PROFIT"
                value={`${tableData?.data?.data?.totalProfitProfile} BTC`}
                convertValue="≈ $0.00"
              />
              <WalletInfo
                title="LAST DAY PROFIT"
                value={`${tableData?.data?.data?.lastDay || 0} BTC`}
                convertValue="≈ $0.00"
              />
            </WalletsContainer>
            <div>
              <Table dataTable={tableData} />
            </div>
          </div>
        </Layout>
      </GradientBackground>
        <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    </HeaderLayout>
  ) : null
}
