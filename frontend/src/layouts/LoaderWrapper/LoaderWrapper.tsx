import React, { FC, ReactNode } from 'react'
import {Icon} from "ui";

type ILoader= {
    isLoad: boolean,
    children: ReactNode
}

const Loader = () => {
  return (
    <div style={{ position: 'relative', width: '100px', height: '100px' }}>
      <Icon name={'load'} />
    </div>
  )
}

export const LoaderWrapper: FC<ILoader> = ({ isLoad, children }) => (
  <div style={{ position: 'relative' }}>
    <div
      style={{
        width: '100%',
        // height: '100vh',
        opacity: isLoad ? 0.25 : 1,
        pointerEvents: isLoad ? 'none' : undefined,
        transition: '.3s',
      }}
    >
      {children}
    </div>
    {isLoad ? (
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          left: 0,
          top: 0,
        }}
      >
        <div style={{ position: 'relative', display: 'inline-flex' }}>
          <Loader />
        </div>
      </div>
    ) : (
      ''
    )}
  </div>
)
