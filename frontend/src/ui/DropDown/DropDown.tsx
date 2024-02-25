import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { useMobileDisplaySize } from 'hooks/useMobileDisplaySize'
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
import { toast } from 'react-toastify'

const notify = (text: string) =>
  toast(text, {
    position: 'bottom-right',
    autoClose: 3500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  })

export const DropDown: FC<IButton> = (props) => {
  const { text, ...other } = props
  const [open, setOpen] = useState<boolean>(false)
  const { width } = useMobileDisplaySize()

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
      notify(`${error}`)
    }
  }

  return (
    <div
      onMouseLeave={() => {
        setOpen(false)
      }}
      style={{ position: 'relative' }}
    >
      <ButtonStyled {...other}>
        <ButtonWrapper
          onMouseEnter={() => {
            setOpen(true)
          }}
        >
          <Icon size={'32'} name="wallet" />
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
                {width > 920 && <Text text={'My Wallet'} type={'default'} />}
                <Icon size={'32'} name={'user'} />
              </MenuItem>
            </Link>
            <MenuItem onClick={() => handleLogout().then(() => setOpen(false))}>
              <div onClick={handleLogout}>
                {width > 920 && <Text text="Disconnect" type="default" />}
              </div>
              <Icon size="32" name="exit" />
            </MenuItem>
          </MeniList>
        </Menu>
      )}
    </div>
  )
}
