import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContentWrapper } from './styles'
import { Layout } from 'layouts/Layout'
import { GradientBackground } from 'layouts/GradientBackground'
import { LoaderWrapper } from 'layouts/LoaderWrapper'
import { HeaderLayout } from 'layouts/HeaderLayout'
import { useMetaMask } from 'hooks/useMetaMask'
import { useGetStakeList } from 'modules/StakeListing/api/hooks'
import { Footer } from 'modules'
import { TextContent } from 'components/TextContent'
import { ConfirmButton } from 'ui'
import { BtnWrapper } from './styles'

export const Security: FC = () => {
  const { wallet } = useMetaMask()
  const dataResponse = useGetStakeList(`${wallet?.chainId}` || '')
    const { isLoading } = dataResponse
  const navigate = useNavigate()
  return (
    <GradientBackground>
      <LoaderWrapper isLoad={Boolean(wallet?.accounts?.length) && isLoading}>
        <HeaderLayout>
          <Layout>
            <ContentWrapper>
              <BtnWrapper>
                <ConfirmButton onClick={() => navigate('/')} text={'Back'} />
              </BtnWrapper>
              <TextContent
                title={'Overview'}
                description={
                  'We recognize the importance of security throughout the Web3 ecosystem and are committed to building secure products. We take security seriously and are constantly working to improve our products and processes. We welcome the community to review our code and report any security issues they find.'
                }
              />
              <TextContent
                title={'Reporting a Vulnerability'}
                description={
                  'If you believe you have found a security vulnerability in any of our products or services, please report it to us via our Bug Bounty. '
                }
              />
            </ContentWrapper>
          </Layout>
        </HeaderLayout>
      </LoaderWrapper>
      <div style={{ marginBottom: 50 }}>
        <Layout>
          <Footer />
        </Layout>
      </div>

    </GradientBackground>
  )
}
