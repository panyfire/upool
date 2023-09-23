import React, { FC } from 'react'
import { AnimatedButton, Text } from 'ui'
import { Layout } from 'layouts/Layout'
import { useMetaMask } from 'hooks/useMetaMask'
import { BannerContent, BannerSection, BannerWrapper, ImgWprap } from './styles'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import img from 'img/banner.png'

export const Banner: FC = () => {
  const { connectMetaMask, wallet } = useMetaMask()
  return (
    <BannerSection>
      <Layout>
        <BannerWrapper>
          <Text text={'Super Pools'} type={'h1'} />
          <BannerContent>
            <div>
              <Text text={'Just stake some tokens to earn.'} type={'h3'} />
              <Text text={'High APR, low risk.'} type={'h3'} />
            </div>
            {!wallet?.accounts?.length && (
              <AnimatedButton
                onClick={connectMetaMask}
                text={'Connect Wallet'}
              />
            )}
          </BannerContent>
          <ImgWprap src={img} alt={'banner'} />
        </BannerWrapper>
      </Layout>
    </BannerSection>
  )
}
