import React, { FC, useState } from 'react'
import { DropDown, Icon, Text, DropDownChainList } from 'ui'
import {
  Additional,
  Dropdowns,
  HeaderStyled,
  MeniListDrop,
  Menu,
  MenuDrop,
  MenuItemDrop,
} from './styles'
import { useMetaMask } from 'hooks/useMetaMask'
import { chainIdName } from 'utils'

export const Header: FC = () => {
  const { wallet } = useMetaMask()
  const [open, setOpen] = useState(false)

  const toggleStatus = (status: boolean, func: (status: boolean) => void) => func(!status)

  return (
    <HeaderStyled>
      <Text text={'LOGO'} type={'h2'} />
      <Menu>
        <Additional>
          <div onClick={() => toggleStatus(open, setOpen)}>
            <Icon size={'24'} name={'lang'} />
          </div>
          {open && (
            <MenuDrop>
              <MeniListDrop>
                <MenuItemDrop onClick={() => toggleStatus(open, setOpen)}>
                  <Text text={'ENG'} type={'default'} />
                </MenuItemDrop>
                <MenuItemDrop onClick={() => toggleStatus(open, setOpen)}>
                  <Text text={'DAU'} type={'default'} />
                </MenuItemDrop>
                <MenuItemDrop onClick={() => toggleStatus(open, setOpen)}>
                  <Text text={'FRA'} type={'default'} />
                </MenuItemDrop>
              </MeniListDrop>
            </MenuDrop>
          )}
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
