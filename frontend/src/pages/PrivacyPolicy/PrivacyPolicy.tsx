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

export const PrivacyPolicy: FC = () => {
  const { wallet } = useMetaMask()
  const dataResponse = useGetStakeList(`${wallet?.chainId}` || '')
  const navigate = useNavigate()
  const { isLoading } = dataResponse
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
                title={'High Level Summary'}
                description={
                  'Uniswap Labs is an incorporated company based in the United States that operates https://app.uniswap.org/ among other products and services. Uniswap Labs complies with American laws and regulations.\n' +
                  'Uniswap Protocol is a censorship-resistant set of smart contracts deployed across various Layer 1 and Layer 2 chains. It is not governed by Uniswap Labs.\n' +
                  'Uniswap Labs does not collect and store personal data, such as first name, last name, street address, date of birth, email address, or IP address, in connection with your use of the Services.\n' +
                  'Uniswap Labs collects non-identifiable data, such as public on-chain data, and limited off-chain data like device type, browser version, etc. This is to help drive production vision, not track users.\n' +
                  'If you specifically sign up to receive emails from us, we will store your email address to allow us to send you those emails. You can unsubscribe at any time. We will not attempt to link your email address to your wallet address, IP address, or other personal data.\n' +
                  "Uniswap Labs continues to explore methods to further protect consumers' privacy, such as opt-out prompts, migrating to privacy-centric tooling and deploying proxies to anonymize network traffic.\n" +
                  'Users are empowered to explore client-side privacy techniques and tools.\n' +
                  'Any material changes to privacy will be reflected in an updated privacy policy.'
                }
              />
              <TextContent
                title={'Data We Collect'}
                description={
                  "Privacy is central to everything we do at the Company. And we've enshrined transparency as one of our Company values. Accordingly, we aspire to be transparent about what little data we do collect. We do not maintain user accounts and do not collect and store personal data, such as your name or internet protocol (“IP”) address. When you interact with the Services, we collect only:"
                }
              />
              <TextContent
                title={'How We Use Data'}
                description={
                  'We use the data we collect in accordance with your instructions, including any applicable terms in our Terms of Service, and as required by law. We may also use data for the following purposes:'
                }
              />
              <TextContent
                title={'How We Share Data'}
                description={
                  'With service providers. We may share your information with our service providers and vendors to assist us in providing, delivering, and improving the Services. For example, we may share your wallet address with service providers like Infura and Cloudflare to provide technical infrastructure services, your wallet address with blockchain analytics providers to detect, prevent, and mitigate financial crime and other illicit or harmful activities, and your activity on our social media pages with our analytics provider to learn more about you interact with us and the Services.'
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
