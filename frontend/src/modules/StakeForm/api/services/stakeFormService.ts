import service from 'helpers/axios'

export const StakeFormService = {
  get: (id: string) =>
    service.get(`http://upool.dev.stand/api/staking/getail/${id}`),
  send: (data: unknown) =>
    service.post(`http://upool.dev.stand/api/transaction/add/`, data),
}
