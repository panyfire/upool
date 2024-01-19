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
      return 'Linea Mainnet'
    case '0x1':
      return 'Ethereum Mainnet'
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
  }
}

