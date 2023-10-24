import { AxiosResponse } from 'axios'
import { Dispatch, ReactElement, SetStateAction } from 'react'

export type ErrorHandlingType = [
  error: AxiosResponse | undefined,
  setError: Dispatch<SetStateAction<AxiosResponse | undefined>>,
]

export interface ProviderProps {
  children: ReactElement
}
