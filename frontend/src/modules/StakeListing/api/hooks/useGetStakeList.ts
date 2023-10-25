import { useQuery } from 'react-query'
import { StakeList } from '../services'

export const useGetStakeList = (chainId: string) =>
  useQuery('StakeList', () => StakeList.get(chainId))
