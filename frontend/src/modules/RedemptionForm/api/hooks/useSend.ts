import { useQuery } from 'react-query'
import { SendRedeemID } from '../services'

export const useSend = (transactionId: string | number) => {
    return useQuery('SendRedeem', () => SendRedeemID.get(`${transactionId}`), { enabled: !!transactionId })
}
