import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MetaMaskContextProvider } from 'hooks/useMetaMask'
import { QueryContext } from 'context'
import {
  Home,
  Error,
  Profile,
  FAQ,
  Trademark,
  PrivacyPolicy,
  Security,
} from 'pages'
import 'react-toastify/dist/ReactToastify.css'

export const App: FC = () => {
  return (
    <MetaMaskContextProvider>
      <QueryContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/trademark" element={<Trademark />} />
            <Route path="/security" element={<Security />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </QueryContext>
    </MetaMaskContextProvider>
  )
}
