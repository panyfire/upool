import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { IButton } from './types'
import { useMetaMask } from 'hooks/useMetaMask'
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
  const { handleLogout } = useMetaMask()

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
            <MenuItem onClick={handleLogout}>
              <Text text={`Disconnect`} type={'default'} />
              <Icon size={'32'} name={'exit'} />
            </MenuItem>
          </MeniList>
        </Menu>
      )}
    </div>
  )
}
