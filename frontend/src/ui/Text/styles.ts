import styled from 'styled-components'
import { whiteColor, brightBlueColor, blackColor } from 'ui/colors'

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
  }
  &.h2 {
    font-size: 40px;
    font-weight: 400;
    line-height: 44px;
    font-family: 'GP Bold', serif;
  }
  &.h3 {
    font-size: 35px;
    font-weight: 400;
    line-height: 44px;
    font-family: 'GP Bold', serif;
  }
  &.h4 {
    color: ${brightBlueColor};
    font-family: 'GP Bold', serif;
    font-size: 25px;
    font-weight: 700;
    line-height: 44px;
  }
  &.h41 {
    color: ${whiteColor};
    font-family: 'GP Bold', serif;
    font-size: 25px;
    font-weight: 700;
    line-height: 44px;
  }
  &.preTitle {
    font-size: 18px;
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
  &.popupTitle {
    color: #1a1329;
    font-family: 'GP Bold', serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    text-transform: uppercase;
  }
`
