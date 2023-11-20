import service from 'helpers/axios'

export const StakeFormService = {
  send: (data: unknown) =>
    service.post(`http://upool.dev.stand/api/transaction/add/`, data),
}
