import service from 'helpers/axios'

type TAb = {
  amount: number | string
  totalAmount: number | string
  duration: number | string
  endLocking: string | number
  id: number | string
  popupCallback?: (e: boolean) => void
  transactionId?: string
  wallet?: string
}

export const SendRedeemID = {
  send: (data: TAb) =>
    data &&
    service.post(`http://upool.dev.stand/api/transaction/redeem/${data.id}`, {
      wallet: data.wallet,
    }),
}
