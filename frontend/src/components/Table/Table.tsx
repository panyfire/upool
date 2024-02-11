import React, { FC, useState } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { StakeButton } from 'ui'
import { TableWrapper, TableHead, TableBody, TrHead, Img } from './styles'
import { TTAble, ProfileTableData } from './types'
import { Popup } from 'components'
import { RedemptionForm } from 'modules/RedemptionForm'

const columnHelper = createColumnHelper<TTAble>()

export const Table: FC<ProfileTableData> = ({ dataTable, refetch }) => {
  const [data, setData] = useState<TTAble>({})
  const [stakeModalStatus, setStakeModal] = useState(false)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const arr = dataTable?.data?.data?.transactions?.length
    ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      dataTable?.data?.data?.transactions
    : []

  const columns = [
    columnHelper.accessor('asset.coinIconUrl', {
      header: () => '',
      cell: (info) => (
        <div>
          <Img src={`${info.renderValue()}`} alt={''} />
        </div>
      ),
    }),
    columnHelper.accessor('asset.coinName', {
      header: () => 'Asset',
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('totalAmount', {
      header: () => 'Total Amount',
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('realTimeApr', {
      header: () => 'Real-Time APR',
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('duration', {
      header: () => <span>Duration</span>,
    }),
    columnHelper.accessor('startLocking', {
      header: 'Start locking',
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('endLocking', {
      header: 'End locking',
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('expectedProfit', {
      header: 'Expected profit',
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('totalExpectedProfit', {
      header: 'Total expected profit',
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('redeem', {
      header: ' ',
      cell: () => {
        return <></>
      },
    }),
  ]

  const table = useReactTable({
    data: arr,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
  return (
    <TableWrapper>
      <TableHead>
        {table.getHeaderGroups().map((headerGroup) => (
          <TrHead key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </TrHead>
        ))}
      </TableHead>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <>
            <TrHead key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <>
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                </>
              ))}
              { (
                <div style={{ position: 'absolute', right: 0 }}>
                  <StakeButton
                    onClick={() => {
                      setData(row.original)
                      if (refetch) refetch()
                      setStakeModal(true)
                    }}
                    style={{ width: 125, height: 40 }}
                    text="REDEEM"
                  />
                </div>
              )}
            </TrHead>
            {stakeModalStatus && (
              <Popup
                status={stakeModalStatus}
                title={`Redemption ETH`}
                onClick={() => {
                  setStakeModal(false)
                  setData({})
                }}
              >
                <RedemptionForm
                  id={Number(data.id)}
                  amount={0}
                  totalAmount={String(data.totalAmount)}
                  duration={String(data.duration)}
                  endLocking={String(data.endLocking)}
                  popupCallback={setStakeModal}
                  refetch={refetch}
                />
              </Popup>
            )}
          </>
        ))}
      </TableBody>
    </TableWrapper>
  )
}
