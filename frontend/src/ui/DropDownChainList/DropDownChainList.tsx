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
import { useMetaMask } from 'hooks/useMetaMask'
import { chainIdIcon } from 'utils'
import { toast } from 'react-toastify'

export const DropDownChainList: FC<IButton> = (props) => {
  const { text, ...other } = props
  const [open, setOpen] = useState<boolean>(false)
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
      chainId: '0xa4b1',
      chainName: 'Arbitrum One',
      nativeCurrency: {
        name: 'Arbitrum Token',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://arbitrum-mainnet.infura.io/'],
      blockExplorerUrls: ['https://explorer.arbitrum.io'],
      iconUrls: ['https://path.to.your.icon.arb'],
    },
    // {
    //   chainId: '0x420',
    //   chainName: 'Optimism',
    //   nativeCurrency: {
    //     name: 'Optimism Ether',
    //     symbol: 'OETH',
    //     decimals: 18,
    //   },
    //   rpcUrls: ['https://mainnet.optimism.io'],
    //   blockExplorerUrls: ['https://optimistic.etherscan.io/'],
    //   iconUrls: ['https://path.to.your.icon.op'],
    // },
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
    // {
    //   chainId: '0x5',
    //   chainName: 'Goerli',
    //   nativeCurrency: {
    //     name: 'Ether',
    //     symbol: 'ETH',
    //     decimals: 18,
    //   },
    //   rpcUrls: ['https://goerli.infura.io/v3/02792ae49747452b85ca01aa16981682'],
    //   blockExplorerUrls: ['https://etherscan.io'],
    //   iconUrls: ['https://path.to.your.icon.eth'],
    // },
    // {
    //   chainId: '97',
    //   chainName: 'BNB Chain Testnet',
    //   nativeCurrency: {
    //     name: 'BNB Chain Testnet',
    //     symbol: 'tBNB',
    //     decimals: 18,
    //   },
    //   rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
    //   blockExplorerUrls: ['https://testnet.bscscan.com'],
    //   iconUrls: ['https://path.to.your.icon.bnb'],
    // },
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
                  onClick={() => {
                    handleChangeChainId(
                      e.chainId,
                      e.chainName,
                      e.nativeCurrency,
                      e.rpcUrls,
                      e.blockExplorerUrls,
                      e.iconUrls
                    ).catch((e) => {console.log('123123123', e)})
                  }}
                  key={i}
                >
                  <Text text={e.chainName} type={'default'} />
                </MenuItem>
              )
            })}
          </MeniList>
        </Menu>
      )}
    </div>
  )
}
