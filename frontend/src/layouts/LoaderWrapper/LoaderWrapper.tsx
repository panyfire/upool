import React, { FC, ReactNode } from 'react'

type ILoader= {
    isLoad: boolean,
    children: ReactNode
}

const Loader = () => {
  return (
    <div style={{ position: 'relative', width: '100px', height: '100px' }}>
      <svg
        width="100"
        height="100"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.143 4.64239C14.8136 2.96609 17.1864 2.96609 17.8569 4.64238L26.9029 27.2572C27.4284 28.5709 26.4609 30 25.0459 30H6.95406C5.53914 30 4.57162 28.5709 5.09711 27.2572L14.143 4.64239Z"
          fill="#16003D"
        />
        <path
          className={'123'}
          d="M16 24V2"
          stroke="white"
          strokeWidth="0.5"
          strokeLinecap="round"
        />
        <rect
          x="15.25"
          y="4.25"
          width="1.5"
          height="0.5"
          fill="white"
          stroke="white"
          strokeWidth="0.5"
        />
        <rect x="15" y="23" width="2" height="2" rx="1" fill="white" />
      </svg>
    </div>
  )
}

export const LoaderWrapper: FC<ILoader> = ({ isLoad, children }) => (
  <div style={{ position: 'relative' }}>
    <div
      style={{
        width: '100%',
        height: '100vh',
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
