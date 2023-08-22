import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UIKit } from 'pages'

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UIKit />} />
        {/*<Route path='*' element={<Error text='Страница не найдена' />} />*/}
      </Routes>
    </BrowserRouter>
  )
}
