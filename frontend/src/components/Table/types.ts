export type Profile12 = {
  coinIconUrl: string
  coinName: string
}

export type TTAble = {
  id?: number
  asset?: Profile12
  totalAmount?: string
  realTimeApr?: number
  duration?: number
  startLocking?: string
  endLocking?: string
  totalExpectedProfit?: number
  expectedProfit?: number
  redeem?: boolean
}

export type ProfileTableData = {
  transactions?: TTAble[] | unknown
  totalProfitProfile?: number
  totalLockedProfile?: number
  status?: boolean
  dataTable?: TTAble[] | undefined | unknown
}
