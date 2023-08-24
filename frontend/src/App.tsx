import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UIKit, Home, Error, Profile } from 'pages'

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ui" element={<UIKit />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
