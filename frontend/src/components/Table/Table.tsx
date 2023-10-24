import React, { FC } from 'react'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import {TableBody, TableHead, TableWrapper, TrHead} from "./styles";

type TTAble = {
  asset: string
  totalAmount: string
  realTimeAPR: number
  duration: number
  startLocking: string
  endLocking: string
  profitTheDay: number
  expectedProfit: number
}

const defaultData: TTAble[] = [
  {
    asset: 'bnb',
    totalAmount: '0.31717534 bnb',
    realTimeAPR: 30,
    duration: 90,
    startLocking: '05/07/2023',
    endLocking: '07/07/2023',
    profitTheDay: 0.31717534,
    expectedProfit: 0.31717534,
  },
  {
    asset: 'bnb',
    totalAmount: '0.31717534 bnb',
    realTimeAPR: 30,
    duration: 90,
    startLocking: '05/07/2023',
    endLocking: '07/07/2023',
    profitTheDay: 0.31717534,
    expectedProfit: 0.31717534,
  },
  {
    asset: 'bnb',
    totalAmount: '0.31717534 bnb',
    realTimeAPR: 30,
    duration: 90,
    startLocking: '05/07/2023',
    endLocking: '07/07/2023',
    profitTheDay: 0.31717534,
    expectedProfit: 0.31717534,
  },
]

const columnHelper = createColumnHelper<TTAble>()

const columns = [
  columnHelper.accessor('asset', {
    header: () => 'Asset',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.totalAmount, {
    id: 'totalAmount',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Total Amount</span>,
  }),
  columnHelper.accessor('realTimeAPR', {
    header: () => 'Real Time APR',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('duration', {
    header: () => <span>Duration</span>,
  }),
  columnHelper.accessor('startLocking', {
    header: 'Start Locking',
  }),
  columnHelper.accessor('endLocking', {
    header: 'End Locking',
  }),
  columnHelper.accessor('profitTheDay', {
    header: 'Profit The Day',
  }),
  columnHelper.accessor('expectedProfit', {
    header: 'Expected Profit',
  }),
]

export const Table: FC = () => {
  const [data] = React.useState(() => [...defaultData])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
  return (
    <div style={{ color: 'white' }} className="p-2">
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
            <TrHead key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </TrHead>
          ))}
        </TableBody>
      </TableWrapper>
      <div className="h-4" />
    </div>
  )
}
