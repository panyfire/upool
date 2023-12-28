import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MetaMaskContextProvider } from 'hooks/useMetaMask'
import { QueryContext } from 'context'
import { Home, Error, Profile } from 'pages'
import 'react-toastify/dist/ReactToastify.css'

export const App: FC = () => {
  return (
    <MetaMaskContextProvider>
      <QueryContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </QueryContext>
    </MetaMaskContextProvider>
  )
}
