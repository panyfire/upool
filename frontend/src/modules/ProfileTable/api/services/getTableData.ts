import service from 'helpers/axios'

export const TableData = {
  get: (walletId: string) =>
    service.get(`http://upool.dev.stand/api/transaction/get/${walletId}`),
}
