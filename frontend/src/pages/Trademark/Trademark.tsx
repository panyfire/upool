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
import { BtnWrapper } from 'pages/Security/styles'
import { ConfirmButton } from 'ui'

export const Trademark: FC = () => {
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
                title={'Acceptable Uses'}
                description={
                  'Use Uniswap wordmarks in text to truthfully refer to and/or link to unmodified Uniswap smart contracts, protocols, interfaces, programs, products, services and technologies (“Uniswap software”).'
                }
              />
              <TextContent
                title={'When allowed, how can I use a Uniswap Labs?'}
                description={
                  'You must include a trademark attribution notice at the first or most prominent mention of the mark on a webpage, document or documentation, such as: “[Uniswap Labs trademark] is a trademark of Uniswap Labs.”'
                }
              />
              <TextContent
                title={'Unacceptable Uses'}
                description={
                  'Don’t imply our sponsorship of your products. Don’t use Uniswap Labs trademarks in a way that incorrectly implies affiliation with, sponsorship, endorsement, or approval by Uniswap Labs of your products or services. For example, please do not name your project compatible with Uniswap software Uni-[Something] or [Something]-swap.'
                }
              />

              <TextContent
                title={'Others’ Trademarks'}
                description={
                  'A note on others’ trademarks: Uniswap Labs manages one interface (among many) for accessing the Uniswap protocol, which it does NOT control. Without the involvement of Uniswap Labs, a third-party developer can use the Ethereum protocol to create a token that may implicate others’ trademarks or other rights and add that token to the Uniswap protocol. Uniswap Labs cannot prevent or block any actions related to the Uniswap protocol, however, if Uniswap Labs becomes aware of trademark misuse allegations, we will work with trademark owners to review the allegations and may remove content from the Uniswap Labs interface.'
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
