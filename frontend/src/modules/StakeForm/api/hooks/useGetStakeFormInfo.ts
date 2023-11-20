import { useQuery, useMutation } from 'react-query'
import { StakeFormService } from '../services'

export const useGetStakeFormInfo = (id: string) =>
  useQuery('StakeList', () => StakeFormService.get(id))

export const useSendDataAfterSuccessTran = () =>
  useMutation('Send_StakeList', StakeFormService.send)
