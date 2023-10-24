import { AxiosResponse } from 'axios'
import React, { createContext, useContext, useState, FC } from 'react'
import { ErrorHandlingType, ProviderProps } from './types'

const ErrorHandling = createContext<ErrorHandlingType>([undefined, (value) => value])

export const useErrorContext = () => useContext(ErrorHandling)

export const ErrorContext: FC<ProviderProps> = ({ children }) => {
  const errorState = useState<AxiosResponse>()
  return <ErrorHandling.Provider value={errorState}>{children}</ErrorHandling.Provider>
}
