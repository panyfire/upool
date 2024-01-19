import { useQuery } from 'react-query'
import { TableData } from '../services'

export const useGetTableData = (walletId: string) => {
    return useQuery('TableData', () => TableData.get(`${walletId}`), { enabled: !!walletId })
}
