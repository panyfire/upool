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
  laptopLM: '1600px',
  laptopM: '1920px',
  desktop: '2560px',
}

export const device = {
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
  laptopMinL: `(min-width: ${size.laptopL})`,
  laptopLM: `(max-width: ${size.laptopLM})`,
  laptopM: `(max-width: ${size.laptopM})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
}

export { AnimatedButton } from './AnimatedButton'
export { StakeButton } from './StakeButton'
export { ConfirmButton } from './ConfirmButton'
export { DropDown } from './DropDown'
export { Text } from './Text'
export { BorderContainer } from './Border'
export { Input } from './Input'
export { Icon } from './Icon'
export { InputRange } from './InputRange'
export { DropDownChainList } from './DropDownChainList'


