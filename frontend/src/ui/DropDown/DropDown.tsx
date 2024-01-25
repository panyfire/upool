import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
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

export const DropDown: FC<IButton> = (props) => {
  const { text, ...other } = props
  const [open, setOpen] = useState<boolean>(false)

  const handleLogout = async () => {
    try {
      const provider = window?.ethereum
      if (provider) {
        await provider.request({
          method: 'wallet_requestPermissions',
          params: [
            {
              eth_accounts: {
                // Указываем пустой массив аккаунтов для блокировки
                // чтобы пользователь не видел свои аккаунты в виджете MetaMask
                // и не мог выбрать их для подтверждения транзакции
                accounts: [],
              },
            },
          ],
        })
      }
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
            <Link to="/profile" relative="route">
              <MenuItem>
                <Text text={'My Wallet'} type={'default'} />
                <Icon size={'32'} name={'user'} />
              </MenuItem>
            </Link>
            <MenuItem onClick={() => handleLogout().then(() => setOpen(false))}>
              <div onClick={() => handleLogout()}>
                <Text text="Disconnect" type="default" />
              </div>
              <Icon size="32" name="exit" />
            </MenuItem>
          </MeniList>
        </Menu>
      )}
    </div>
  )
}
