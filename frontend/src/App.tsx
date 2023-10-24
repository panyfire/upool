import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryContext } from 'context'
import { UIKit, Home, Error, Profile } from 'pages'
import { MetaMaskContextProvider } from 'hooks/useMetaMask'

export const App: FC = () => {
  return (
    <MetaMaskContextProvider>
      <QueryContext>
        <BrowserRouter>
          <Routes>
            <Route path="/ui" element={<UIKit />} />
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </QueryContext>
    </MetaMaskContextProvider>
  )
}
