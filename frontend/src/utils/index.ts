import { ethers } from 'ethers'
import { toast } from 'react-toastify'
export const formatBalance = (rawBalance: string) => {
  return (parseInt(rawBalance) / 1000000000000000000).toFixed(10)
}

export const formatChainAsNum = (chainIdHex: string) => {
  return parseInt(chainIdHex)
}

export const formatAddress = (addr: string) => {
  return `${addr.substring(0, 8)}...`
}

export const chainIdName = (hash: string) => {
  switch (hash) {
    case '0xe708':
      return 'Linea'
    case '0x1':
      return 'Ethereum'
    case '0x5':
      return 'Goerli'
    case '0x38':
      return 'BNB'
    case '0x89':
      return 'Polygon'
    case '0xa869':
      return 'Optimism'
    case '0xa4b1':
      return 'Arbitrum'
    case '0x2':
      return 'Bitcoin'
    case '0xa4ec':
      return 'Celo'
  }
}

export const chainIdIcon = (hash: string) => {
  switch (hash) {
    case '0x1':
      return '/images/ethereum-eth-logo.png'
    case '0x5':
      return 'Goerli'
    case '0x38':
      return '/images/bnb-bnb-logo.png'
    case '0x89':
      return '/images/polygon-matic-logo.png'
    case '0xa869':
      return '/images/optimism-ethereum-op-logo.png'
    case '0xa4b1':
      return '/images/arbitrum-arb-logo.png'
    case '0x2':
      return '/images/bitcoin-btc-logo.png'
    case '0xa4ec':
      return '/images/celo-celo-logo.png'
  }
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

export const checkTransactionStatus = async (
  transactionHash: string,
  callback?: () => void
) => {
  const transaction = localStorage.getItem('transactionResponse')

  if (transaction) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window?.ethereum)
    const receipt = await provider.getTransactionReceipt(transactionHash)
    try {
      if (receipt && receipt.blockNumber) {
        // Транзакция была успешно подтверждена
        notify('Transaction confirmed')
        localStorage.removeItem('transactionResponse')
        if (callback) {
          callback()
        }
      }
      // else {
      //   // Транзакция еще не была подтверждена
      //   console.log('Транзакция еще не подтверждена')
      // }
    } catch (error) {
      console.error('ERROR:', error)
    }
  }
}
