import React, { FC } from 'react'
import { DropDown, Text, DropDownChainList, AnimatedButton } from 'ui'
import { Dropdowns, HeaderStyled, LogoWrapper, Menu } from './styles'
import { useMetaMask } from 'hooks/useMetaMask'
import { useGetStakeList } from 'modules/StakeListing/api/hooks'
import { chainIdName } from 'utils'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logo from 'img/logo.png'

export const Header: FC = () => {
  const { wallet, isConnecting, connectMetaMask } = useMetaMask()
  const dataResponse = useGetStakeList(`${wallet?.chainId}` || '')
  const { isLoading } = dataResponse

  return (
    <HeaderStyled>
      <LogoWrapper>
        <img src={logo} width={70} alt="" />
        <Text text="SafetyStaking" type="h2" />
      </LogoWrapper>
      <Menu>
        {wallet?.accounts?.length ? (
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
          <>
            {!wallet?.accounts?.length && !isLoading && !isConnecting && (
              <AnimatedButton onClick={connectMetaMask} text="Connect Wallet" />
            )}
          </>
        )}
      </Menu>
    </HeaderStyled>
  )
}
