import { useQuery } from 'react-query'
import { TableData } from '../services'

export const useGetTableData = (walletId: string, chainId: string) => {
    return useQuery('TableData', () => TableData.get(`${walletId}`, chainId), {
      enabled: !!walletId && !!chainId,
    })
}
