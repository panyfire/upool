import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContentWrapper, FooterWrapper, LinksWrapper } from './styles'
import { Text } from 'ui'

export const Footer: FC = () => {
  const navigate = useNavigate()

  const handleClick = (type: string) => {
    switch (type) {
      case 'FAQ':
        return navigate('/faq')
      case 'Privacy':
        return navigate('/privacy-policy')
      case 'Trademark':
        return navigate('/trademark')
      case 'Security':
        return navigate('/security')
    }
  }

  return (
    <FooterWrapper>
      <ContentWrapper>
        <LinksWrapper>
          <div onClick={() => handleClick('FAQ')}>
            <Text text={'FAQ'} type={'default'} />
          </div>
          <div onClick={() => handleClick('Privacy')}>
            <Text text={'Privacy Policy'} type={'default'} />
          </div>
          <div onClick={() => handleClick('Trademark')}>
            <Text text={'Trademark'} type={'default'} />
          </div>
          <div onClick={() => handleClick('Security')}>
            <Text text={'Security'} type={'default'} />
          </div>
        </LinksWrapper>
        <div>LOGO</div>
      </ContentWrapper>
    </FooterWrapper>
  )
}
