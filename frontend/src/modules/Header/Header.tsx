import React, { FC } from 'react'
import { DropDown, Text, DropDownChainList, AnimatedButton } from 'ui'
import { Dropdowns, HeaderStyled, LogoWrapper, Menu } from './styles'
import { useMetaMask } from 'hooks/useMetaMask'
import { chainIdName } from 'utils'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logo from 'img/logo.png'

export const Header: FC = () => {
  const { wallet, connectMetaMask } = useMetaMask()
  return (
    <HeaderStyled>
      <LogoWrapper>
        <img src={logo} width={40} alt="" />
        <Text text="SafetyStaking" type="h2" />
      </LogoWrapper>
      <Menu>
        {wallet.chainId ? (
          <Dropdowns>
            <DropDownChainList
              text={chainIdName(`${wallet.chainId}`)}
              icon={undefined}
            />
            <DropDown
              text={`${wallet.accounts[0].slice(0, 6)}...`}
              icon={undefined}
            />
          </Dropdowns>
        ) : (
          <AnimatedButton
            isAnimated={false}
            onClick={connectMetaMask}
            text="Connect Wallet"
          />
        )}
      </Menu>
    </HeaderStyled>
  )
}
