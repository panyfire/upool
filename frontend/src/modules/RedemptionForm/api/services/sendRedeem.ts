import service from 'helpers/axios'

export const SendRedeemID = {
  get: (transactionId: string | number) =>
    service.get(
      `http://upool.dev.stand/api/transaction/redeem/${transactionId}`
    ),
}
