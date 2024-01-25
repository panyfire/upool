import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { useMetaMask } from 'hooks/useMetaMask'
import { checkTransactionStatus } from 'utils'
import { useGetTableData } from 'modules/ProfileTable/api/hooks'
import { ConfirmButton, Icon, Text } from 'ui'
import { GradientBackground } from 'layouts/GradientBackground'
import { HeaderLayout } from 'layouts/HeaderLayout'
import { Layout } from 'layouts/Layout'
import { Table, WalletInfo } from 'components'
import { WalletContainer, WalletsContainer } from './styles'
import { LoaderWrapper } from 'layouts/LoaderWrapper'
import { BackLink, BtnWrapper } from '../styles'

export const Profile = () => {
  const { wallet } = useMetaMask()
  const tableData = wallet
    ? useGetTableData(String(wallet?.accounts[0]), String(wallet?.chainId))
    : null
  const navigate = useNavigate()

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const { data, refetch } = tableData

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
  const transactionResponse = localStorage.getItem('transactionResponse')

  useEffect(() => {
    const interval = setTimeout(() => {
      if (transactionResponse !== 'null' && tableData) {
        checkTransactionStatus(String(transactionResponse), tableData.refetch)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [transactionResponse, tableData])

  return wallet && tableData ? (
    <LoaderWrapper isLoad={tableData.isLoading || !wallet.accounts?.length}>
      <HeaderLayout>
        <GradientBackground>
          <Layout>
            <div style={{ marginTop: 70 }}>
              <BackLink>
                <BtnWrapper>
                  <ConfirmButton
                    onClick={() => navigate('/')}
                    text={'to home'}
                  />
                </BtnWrapper>
                <Text text={'YOUR ADDRESS'} type={'h4'} />
              </BackLink>
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
                  value={
                    `${table?.totalLockedProfile || 'wait...'}` || 'No data'
                  }
                  convertValue={
                    `${table?.totalLockedProfileInUseInUsd || 'wait...'}` ||
                    'No data'
                  }
                />
                <WalletInfo
                  title="TOTAL PROFIT"
                  value={
                    `${table?.totalProfitProfile || 'wait...'}` || 'No data'
                  }
                  convertValue={
                    `${table?.totalProfitProfileInUsd || 'wait...'}` ||
                    'No data'
                  }
                />
              </WalletsContainer>
              <div>
                {!tableData?.isLoading &&
                data?.data?.transactions?.length > 0 ? (
                  <Table
                    refetch={() => refetch()}
                    dataTable={tableData}
                  />
                ) : (
                  !tableData?.isLoading && (
                    <Text type={'h3'} color={'white'} text={'Loading'} />
                  )
                )}
                {!tableData?.isLoading &&
                  data?.data?.transactions?.length === 0 && (
                    <Text type={'h3'} color={'white'} text={'No data'} />
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
