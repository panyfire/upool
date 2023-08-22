import styled from 'styled-components'
import { whiteColor, brightBlueColor, blackColor } from 'ui/colors'

export const TextCSS = styled.p`
  color: ${whiteColor};
  &.default {
    font-size: 16px;
    font-style: normal;
    font-family: 'GP Meduim', serif;
  }
  &.h1 {
    font-size: 55px;
    font-style: normal;
    font-weight: 400;
    line-height: 44px;
    font-family: 'GP Bold', serif;
  }
  &.h2 {
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 44px; /* 125.714% */
    font-family: 'GP Bold', serif;
  }
  &.title {
    color: ${brightBlueColor};
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 176% */
    font-family: 'GP Meduim', serif;
  }
  &.preTitle {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 244.444% */
    text-transform: uppercase;
    font-family: 'GP Meduim', serif;
  }
  &.btn {
    font-family: 'GP Meduim', serif;
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
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
  &.value {
    color: ${brightBlueColor};
    font-family: 'GP Meduim', serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 200% */
    text-transform: uppercase;
  }
`
