import styled from 'styled-components'
import { whiteColor, brightBlueColor, blackColor,  } from 'ui/colors'

const size = {
    mobileS: '320px',
    mobileSM: '350px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    tabletM: '824px',
    tabletL: '920px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
}
const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileSM: `(max-width: ${size.mobileSM})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    mobileLD: `(min-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    tabletM: `(max-width: ${size.tabletM})`,
    tabletL: `(max-width: ${size.tabletL})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`,
}

export const TextCSS = styled.p`
  color: ${whiteColor};
  font-style: normal;
  &.default {
    font-size: 16px;
    font-style: normal;
    font-family: 'GP Meduim', serif;
  }
  &.h1 {
    font-size: 55px;
    font-weight: 400;
    line-height: 44px;
    font-family: 'GP Bold', serif;
    @media ${device.tabletL} {
      font-size: 45px;
      line-height: 25px;
    }
    @media ${device.mobileL} {
      font-size: 36px;
      line-height: 20px;
    }
  }
  &.h2 {
    font-size: 40px;
    font-weight: 400;
    line-height: 44px;
    font-family: 'GP Bold', serif;
    @media ${device.tabletL} {
      font-size: 32px;
      line-height: 25px;
    }
    @media ${device.mobileL} {
      font-size: 25px;
      line-height: 20px;
    }
  }
  &.h3 {
    font-size: 35px;
    font-weight: 400;
    line-height: 44px;
    font-family: 'GP Bold', serif;
    @media ${device.tabletL} {
      font-size: 28px;
      line-height: 25px;
    }
    @media ${device.mobileL} {
      font-size: 25px;
      line-height: 25px;
    }
  }
  &.h4 {
    color: ${brightBlueColor};
    font-family: 'GP Bold', serif;
    font-size: 25px;
    font-weight: 700;
    line-height: 44px;
  }
  &.h41 {
    font-family: 'GP Bold', serif;
    font-size: 25px;
    font-weight: 700;
    line-height: 44px;
    color: rgba(255, 255, 255, 0.64);
  }
  &.preTitle {
    font-family: 'GP Meduim', serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 44px;
    text-transform: uppercase;
  }
  &.preTitleBold {
    font-family: 'GP Bold', serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 44px;
    text-transform: uppercase;
  }
  &.btn {
    color: ${blackColor};
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-transform: uppercase;
  }
  &.label {
    font-family: 'GP Meduim', serif;
    color: ${whiteColor};
    font-size: 12px;
    font-weight: 600;
    line-height: 24px;
  }
  &.value {
    color: ${brightBlueColor};
    font-family: 'GP Meduim', serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 24px;
    text-transform: uppercase;
  }
  &.alert {
    color: #ff7337;
    font-family: 'GP Meduim', sans-serif;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 14.5px;
  }
  &.note {
    color: #a5a5a5;
    font-family: 'GP Meduim', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    text-transform: capitalize;
  }
  &.card {
    color: #55f8f1;
    font-family: 'GP Meduim', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
  &.card2 {
    color: #55f8f1;
    font-family: 'GP Bold', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
  &.popupTitle {
    color: #1a1329;
    font-family: 'GP Bold', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    text-transform: uppercase;
  }
  &.popUpPreTitle {
    color: #86f3ff;
    font-family: 'GP Bold', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    text-transform: uppercase;
  }
  &.popUpValue {
    color: #a5a5a5;
    font-family: 'GP Bold', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 200% */
    text-transform: uppercase;
  }
`
