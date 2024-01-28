import React, { FC } from 'react'
import { Text } from 'ui'
import { Layout } from 'layouts/Layout'
import { BannerContent, BannerSection, BannerWrapper, ImgWprap } from './styles'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import img from 'img/banner.png'

export const Banner: FC = () => {

  return (
    <BannerSection>
      <Layout>
        <BannerWrapper>
          <div>
            <Text text={'Super Pools'} type={'h1'} />
            <BannerContent>
              <div style={{ marginTop: 20 }}>
                <Text text={'Just stake some tokens to earn.'} type={'h3'} />
                <Text text={'High APR, low risk.'} type={'h3'} />
              </div>
            </BannerContent>
          </div>
          <ImgWprap src={img} alt={'banner'} />
        </BannerWrapper>
      </Layout>
    </BannerSection>
  )
}
