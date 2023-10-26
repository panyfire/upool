import React, { FC, useState } from 'react'
import clsx from 'clsx'
import { IButton } from './types'
import { Icon, Text } from 'ui'
import {
  ButtonStyled,
  ButtonWrapper,
  IconWrapper,
  MeniList,
  Menu,
  MenuItem,
} from './styles'

export const DropDownChainList: FC<IButton> = (props) => {
  const { text, ...other } = props
  const [open, setOpen] = useState<boolean>(false)
  const [, setValue] = useState<string>('')

  const chainIDS = [
    { name: 'Ethereum Mainnet', id: '0x1' },
    { name: 'Linea Mainnet', id: '0xe708' },
    { name: 'Goerli', id: '0x5' },
  ]

  const handleChangeChainId = async (id: string) => {
    try {
      await window?.ethereum?.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: id }],
      })
      setValue(id)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div style={{ position: 'relative' }}>
      <ButtonStyled {...other}>
        <ButtonWrapper onClick={() => setOpen(!open)}>
          <Icon size={'24'} name="wallet" />
          <Text text={text ?? ''} type="default" />
          <IconWrapper className={clsx({ isActive: open })}>
            <Icon size={'24'} name={'arrowDown'} />
          </IconWrapper>
        </ButtonWrapper>
      </ButtonStyled>
      {open && (
        <Menu>
          <MeniList>
            {chainIDS.map((e, i) => {
              return (
                <MenuItem
                  onClick={() => {
                    handleChangeChainId(e.id).then(() => setOpen(false))
                  }}
                  key={i}
                >
                  <Text text={e.name} type={'default'} />
                </MenuItem>
              )
            })}
          </MeniList>
        </Menu>
      )}
    </div>
  )
}
