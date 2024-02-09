import React, { FC } from 'react'
import { useMobileDisplaySize } from 'hooks/useMobileDisplaySize'
import { useMetaMask } from 'hooks/useMetaMask'
import { AnimatedButton, Text } from 'ui'
import { Layout } from 'layouts/Layout'
import {
  BannerContent,
  BannerSection,
  BannerWrapper,
  Connect,
  ImgWprap,
} from './styles'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import img from 'img/banner.png'

export const Banner: FC = () => {
  const { connectMetaMask, hasProvider } = useMetaMask()
  const { width } = useMobileDisplaySize()

  return (
    <BannerSection>
      <Layout>
        <BannerWrapper>
          <div>
            <div style={{ marginBottom: 5 }}>
              <Text text={'Super Pools'} type={'h1'} />
            </div>
            <BannerContent>
              <div style={{ marginTop: 20 }}>
                <Text text={'Just stake some tokens to earn.'} type={'h3'} />
                <Connect>
                  <Text text={'High APR, low risk.'} type={'h3'} />
                  {!hasProvider && width >= 1440 && (
                    <AnimatedButton
                      onClick={connectMetaMask}
                      text="Connect Wallet"
                      isAnimated
                    />
                  )}
                </Connect>
              </div>
            </BannerContent>
          </div>
          <ImgWprap src={img} alt={'banner'} />
        </BannerWrapper>
      </Layout>
    </BannerSection>
  )
}
