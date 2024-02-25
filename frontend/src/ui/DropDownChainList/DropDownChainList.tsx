import React, { FC, useState } from 'react'
import clsx from 'clsx'
import { toast } from 'react-toastify'
import { IButton } from './types'
import { Icon, Text } from 'ui'
import {
  ButtonStyled,
  ButtonWrapper,
  IconWrapper,
  MeniList,
  Menu,
  MenuItem,
  MenuItemInner,
} from './styles'
import { useMetaMask } from 'hooks/useMetaMask'
import { chainIdIcon } from 'utils'
import { useMobileDisplaySize } from 'hooks/useMobileDisplaySize'

export const DropDownChainList: FC<IButton> = (props) => {
  const { text, ...other } = props
  const [open, setOpen] = useState<boolean>(false)
  const { width } = useMobileDisplaySize()
  const { wallet } = useMetaMask()

  const chainIDS = [
    {
      chainId: '0x1',
      chainName: 'Ethereum Mainnet',
      nativeCurrency: {
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: [
        'https://mainnet.infura.io/v3/57a5dabf16174ee7bd85aae67ae76604',
      ],
      blockExplorerUrls: ['https://etherscan.io'],
      iconUrls: ['https://path.to.your.icon.eth'],
    },
    {
      chainId: '0x38',
      chainName: 'BNB Chain',
      nativeCurrency: {
        name: 'Binance Coin',
        symbol: 'BNB',
        decimals: 18,
      },
      rpcUrls: ['https://bsc-dataseed.binance.org/'],
      blockExplorerUrls: ['https://bscscan.com/blockExplorer'],
      iconUrls: ['https://path.to.your.icon.bnb'],
    },
    {
      chainId: '0xa4ec',
      chainName: 'Celo Mainnet',
      nativeCurrency: {
        name: 'Celo',
        symbol: 'CELO',
        decimals: 18,
      },
      rpcUrls: ['https://forno.celo.org'],
      blockExplorerUrls: ['https://celoscan.io/'],
      iconUrls: ['https://celoscan.io/images/CELO.png'],
    },
    {
      chainId: '0x89',
      chainName: 'Polygon Mainnet',
      nativeCurrency: {
        name: 'Polygon',
        symbol: 'MATIC',
        decimals: 18,
      },
      rpcUrls: ['https://polygon-bor-rpc.publicnode.com'],
      blockExplorerUrls: ['https://polygonscan.com/'],
      iconUrls: [
        'https://raw.githubusercontent.com/maticnetwork/polygon-assets/master/tokens/matic.svg/',
      ],
    },
  ]

  type InactiveCurrency = {
    name?: string
    symbol?: string
    decimals?: number | undefined
  }

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

  const handleChangeChainId = async (
    chainId: string | number,
    chainName: string,
    nativeCurrency: InactiveCurrency,
    rpcUrls: string[],
    blockExplorerUrls: string[],
    iconUrls: string[]
  ) => {
    try {
      await window?.ethereum?.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId,
            chainName,
            nativeCurrency,
            rpcUrls,
            blockExplorerUrls,
            iconUrls,
          },
        ],
      })
      await setOpen(false)
    } catch (error) {
      notify(`${error}`)
    }
  }

  return (
    <div onMouseLeave={() => setOpen(false)} style={{ position: 'relative' }}>
      <ButtonStyled {...other}>
        <ButtonWrapper onMouseEnter={() => setOpen(true)}>
          <img width={35} src={chainIdIcon(String(wallet.chainId))} alt="" />
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
                  key={i}
                  onClick={() => {
                    setOpen(false)
                    handleChangeChainId(
                      e.chainId,
                      e.chainName,
                      e.nativeCurrency,
                      e.rpcUrls,
                      e.blockExplorerUrls,
                      e.iconUrls
                    ).catch(() => {
                      notify(`could not to switch`)
                    })
                  }}
                >
                  <MenuItemInner>
                    {width > 920 && (
                      <Text text={e.chainName} type={'default'} />
                    )}
                    <img
                      width={25}
                      src={chainIdIcon(String(e.chainId))}
                      alt={e.chainName}
                    />
                  </MenuItemInner>
                </MenuItem>
              )
            })}
          </MeniList>
        </Menu>
      )}
    </div>
  )
}
