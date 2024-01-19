import service from 'helpers/axios'

export const SendRedeemID = {
  send: (data: { transactionId: string; wallet: string }) =>
    data &&
    service.post(
      `http://upool.dev.stand/api/transaction/redeem/${data.transactionId}`,
      { wallet: data.wallet }
    ),
}
