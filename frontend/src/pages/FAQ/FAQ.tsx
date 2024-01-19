import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import {ContentWrapper, BtnWrapper, LayFormType} from '../styles'
import { Layout } from 'layouts/Layout'
import { GradientBackground } from 'layouts/GradientBackground'
import { LoaderWrapper } from 'layouts/LoaderWrapper'
import { HeaderLayout } from 'layouts/HeaderLayout'
import { useMetaMask } from 'hooks/useMetaMask'
import { useGetStakeList } from 'modules/StakeListing/api/hooks'
import { Footer } from 'modules'
import { TextContent } from 'components/TextContent'
import { ConfirmButton } from 'ui'

export const FAQ: FC = () => {
  const { wallet } = useMetaMask()
  const dataResponse = useGetStakeList(`${wallet?.chainId}` || '')
  const { isLoading } = dataResponse
  const navigate = useNavigate()
  return (
    <GradientBackground>
      <LoaderWrapper isLoad={Boolean(wallet?.accounts?.length) && isLoading}>
        <HeaderLayout>

            <Layout>
              <LayFormType style={{ position: 'relative' }}>
                <ContentWrapper>
                  <BtnWrapper>
                    <ConfirmButton onClick={() => navigate('/')} text={'Back'} />
                  </BtnWrapper>
                  <TextContent
                    title={'What is Uniswap Protocol?'}
                    description={
                      'The Uniswap Protocol is an open-source protocol for providing liquidity and trading ERC20 tokens on Ethereum. It eliminates trusted intermediaries and unnecessary forms of rent extraction, allowing for safe, accessible, and efficient exchange activity. The protocol is non-upgradable and designed to be censorship resistant.\n' +
                      '\n' +
                      'The Uniswap Protocol and the Uniswap Interface were developed by Uniswap Labs.\n' +
                      '\n' +
                      'Check out the Introduction section of our docs for more info on the different roles played by Labs, the Interface, and the Protocol.'
                    }
                  />
                  <TextContent
                    title={'How do I use the Uniswap Protocol?'}
                    description={
                      'To create a new liquidity pool, provide liquidity, swap tokens, or vote on governance proposals, head over to the Uniswap Interface and connect a Web3 wallet. Remember, each transaction on Ethereum costs Ether (ETH). For a more detailed walkthrough, check out our Help Guides.\n' +
                      '\n' +
                      'If you’re a developer interested in building on top of the Uniswap Protocol, please refer to our extensive docs.'
                    }
                  />
                  <TextContent
                    title={'How does Uniswap Protocol work?'}
                    description={
                      'Uniswap is an automated market maker. In practical terms, it is a collection of smart contracts that define a standard way to create liquidity pools, provide liquidity, and swap assets.\n' +
                      '\n' +
                      'Each liquidity pool contains two assets. The pools keep track of aggregate liquidity reserves and the pre-defined pricing strategies set by liquidity providers. Reserves and prices are updated automatically every time someone trades. There is no central order book, no third-party custody, and no private order matching engine.\n' +
                      '\n' +
                      'Because reserves are automatically rebalanced after each trade, a Uniswap pool can always be used to buy or sell a token — unlike traditional exchanges, traders do not need to match with individual counterparties to complete a trade.\n' +
                      '\n' +
                      'For a more in-depth description, check out the Concepts from the documentation.'
                    }
                  />
                </ContentWrapper>

              </LayFormType>
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
