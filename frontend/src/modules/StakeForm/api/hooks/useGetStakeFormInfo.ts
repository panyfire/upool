import { useMutation } from 'react-query'
import { StakeFormService } from '../services'

export const useSendDataAfterSuccessTran = () =>
  useMutation('Send_StakeList', StakeFormService.send)
