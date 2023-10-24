import React, { FC } from 'react'
import { DropDown, Icon, Text, DropDownChainList } from 'ui'
import { Additional, Dropdowns, HeaderStyled, Menu } from './styles'
import { useMetaMask } from 'hooks/useMetaMask'
import { chainIdName } from 'utils'

export const Header: FC = () => {
  const { wallet } = useMetaMask()
  console.log(wallet)
  return (
    <HeaderStyled>
      <Text text={'LOGO'} type={'h2'} />
      <Menu>
        <Additional>
          <Icon size={'32'} name={'lang'} />
          <Icon size={'32'} name={'settings'} />
        </Additional>
        <Dropdowns>
          {wallet?.accounts?.length && (
            <>
              <DropDownChainList
                text={chainIdName(`${wallet.chainId}`)}
                icon={undefined}
              />
              <DropDown
                text={`${wallet.accounts[0].slice(0, 6)}...`}
                icon={undefined}
              />
            </>
          )}
        </Dropdowns>
      </Menu>
    </HeaderStyled>
  )
}
