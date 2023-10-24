import React, { FC } from 'react'
import { QueryClientProvider } from 'react-query'
import { useErrorContext } from 'context'
import { getQueryClient } from 'helpers/queryclinet'
import { ProviderProps } from './types'

export const QueryContext: FC<ProviderProps> = ({ children }) => {
  const [, setError] = useErrorContext()
  const client = getQueryClient(setError)
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
