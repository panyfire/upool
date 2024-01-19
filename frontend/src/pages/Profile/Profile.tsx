import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { useMetaMask } from 'hooks/useMetaMask'
import { useGetTableData } from 'modules/ProfileTable/api/hooks'
import { ConfirmButton, Icon, Text } from 'ui'
import { GradientBackground } from 'layouts/GradientBackground'
import { HeaderLayout } from 'layouts/HeaderLayout'
import { Layout } from 'layouts/Layout'
import { Table, WalletInfo } from 'components'
import { WalletContainer, WalletsContainer } from './styles'
import { LoaderWrapper } from 'layouts/LoaderWrapper'
import { BtnWrapper } from '../styles'

export const Profile = () => {
  const { wallet } = useMetaMask()
  const tableData = wallet && useGetTableData(wallet?.accounts[0])
  console.log(tableData)
  const navigate = useNavigate()

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

  const table = tableData?.data?.data

  return wallet && tableData ? (
    <LoaderWrapper isLoad={tableData.isLoading || !wallet.accounts.length}>
      <HeaderLayout>
        <GradientBackground>
          <Layout>
            <div style={{ marginTop: 70 }}>
              <div>
                <Text text={'YOUR ADDRESS'} type={'h4'} />
                <BtnWrapper>
                  <ConfirmButton
                    onClick={() => navigate('/')}
                    text={'to home'}
                  />
                </BtnWrapper>
              </div>

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
                  value={`${table?.totalLockedProfile || 'wait...'}`}
                />
                <WalletInfo
                  title="TOTAL PROFIT"
                  value={`${table?.totalProfitProfile || 'wait...'}`}
                />
              </WalletsContainer>
              <div>
                {tableData?.data?.data.length ? (
                  <Table dataTable={tableData} />
                ) : (
                  <Text type={'h3'} text={'No data'} />
                )}
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
    </LoaderWrapper>
  ) : null
}
