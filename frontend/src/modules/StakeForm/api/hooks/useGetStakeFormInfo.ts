import { useQuery } from 'react-query'
import { StakeFormService } from '../services'

export const useGetStakeFormInfo = (id: string) =>
  useQuery('StakeList', () => StakeFormService.get(id))
