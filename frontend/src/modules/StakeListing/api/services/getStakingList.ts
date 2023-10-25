import service from 'helpers/axios'

export const StakeList = {
  get: (chainId: string) =>
      chainId ? service.get(`http://upool.dev.stand/api/staking/${chainId}`) :
          service.get(`http://upool.dev.stand/api/staking`)
}
