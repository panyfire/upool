import service from 'helpers/axios'

export const StakeList = {
  get: (chainId: string) => service.get(`/stake?${chainId}`)
}
