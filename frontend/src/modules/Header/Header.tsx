import React, { FC } from 'react'
import { DropDown, Icon, Text } from 'ui'
import { Additional, Dropdowns, HeaderStyled, Menu } from './styles'
import { useMetaMask } from 'hooks/useMetaMask'

export const Header: FC = () => {
  const { wallet } = useMetaMask()
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
              <DropDown text={'Ethereum'} icon={undefined} />
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
