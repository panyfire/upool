import { AxiosError, AxiosResponse } from 'axios'
import {
  MutationCache,
  QueryCache,
  QueryClient,
  UseMutationResult,
  UseQueryResult,
} from 'react-query'

let queryClient: QueryClient | undefined

export type UseQuery<T> = UseQueryResult<T, AxiosError>
export type UseMutate<
  TVariables,
  TData = unknown,
  TContext = unknown,
  TError = AxiosError,
> = UseMutationResult<TData, TError, TVariables, TContext>

export const getQueryClient = (errorHandle: (error?: AxiosResponse) => void) => {
  if (queryClient) {
    return queryClient
  }
  const onError = (error: unknown) => {
    const response = (error as AxiosError).response
    errorHandle(response)
  }

  queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false, retry } },
    queryCache: new QueryCache({ onError }),
    mutationCache: new MutationCache({ onError }),
  })
  return queryClient
}

const retry = (count: number, error: unknown) => {
  const status = (error as AxiosError).response?.status
  switch (status) {
    case 401:
    case 403:
      return false
    default:
      return count < 2
  }
}
