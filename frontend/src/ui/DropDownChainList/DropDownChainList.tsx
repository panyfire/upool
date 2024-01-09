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
    {
      chainName: 'Ethereum Mainnet',
      id: '0x1',
      nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://mainnet.infura.io/v3/02792ae49747452b85ca01aa16981682'],
      blockExplorerUrls: ['https://etherscan.io'],
      iconUrls: ['https://path.to.your.icon.eth'],
    },
    {
      chainName: 'Bitcoin',
      id: '0x2',
      nativeCurrency: {
        name: 'Bitcoin',
        symbol: 'BTC',
        decimals: 8,
      },
      rpcUrls: ['https://bitcoin-mainnet.infura.io/v3/YOUR_INFURA_KEY'],
      blockExplorerUrls: ['https://blockchain.info'],
      iconUrls: ['https://path.to.your.icon.btc'],
    },
    {
      chainName: 'Arbitrum',
      id: '0xa4b1',
      nativeCurrency: {
        name: 'Arbitrum',
        symbol: 'ARB',
        decimals: 18,
      },
      rpcUrls: ['https://arbitrum-mainnet.infura.io/v3/02792ae49747452b85ca01aa16981682'],
      blockExplorerUrls: ['https://arbiscan.io'],
      iconUrls: ['https://path.to.your.icon.arb'],
    },
    {
      chainName: 'Optimism',
      id: '0xa869',
      nativeCurrency: {
        name: 'Optimism',
        symbol: 'OP',
        decimals: 18,
      },
      rpcUrls: ['https://optimism-goerli.infura.io/v3/02792ae49747452b85ca01aa16981682'],
      blockExplorerUrls: ['https://optimistic.etherscan.io'],
      iconUrls: ['https://path.to.your.icon.op'],
    },
    {
      chainName: 'Polygon',
      id: '0x89',
      nativeCurrency: {
        name: 'Polygon',
        symbol: 'MATIC',
        decimals: 18,
      },
      rpcUrls: [
        'https://polygon-mainnet.infura.io/v3/02792ae49747452b85ca01aa16981682',
        'https://matic-mainnet.chainstacklabs.com',
      ],
      blockExplorerUrls: ['https://polygonscan.com'],
      iconUrls: ['https://path.to.your.icon.matic'],
    },
    {
      chainName: 'BNB',
      id: '0x38',
      nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18,
      },
      rpcUrls: ['https://bsc-dataseed.binance.org'],
      blockExplorerUrls: ['https://bscscan.com'],
      iconUrls: ['https://path.to.your.icon.bnb'],
    },
    {
      chainName: 'Linea Mainnet',
      id: '0xe708',
      nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: [
        'https://linea-mainnet.infura.io/v3/02792ae49747452b85ca01aa16981682',
      ], // List of RPC endpoints
      blockExplorerUrls: ['https://etherscan.io'], // List of block explorer URLs,
      iconUrls: ['https://path.to.your.icon.eth'],
    },
    {
      chainName: 'Goerli',
      id: '0x5',
      nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: [
        'https://goerli.infura.io/v3/02792ae49747452b85ca01aa16981682',
      ], // List of RPC endpoints
      blockExplorerUrls: ['https://etherscan.io'], // List of block explorer URLs,
      iconUrls: ['https://path.to.your.icon.eth'],
    },
  ]

  type InactiveCurrency = {
    name?: string
    symbol?: string
    decimals?: number | undefined
  }

  const handleChangeChainId = async (
    chainId: string,
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
      setValue(chainId)
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
                    console.log(e.id)
                    handleChangeChainId(
                      e.id,
                      e.chainName,
                      e.nativeCurrency,
                      e.rpcUrls,
                      e.blockExplorerUrls,
                      e.iconUrls
                    ).then(() => setOpen(false))
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
