import React, { FC, useState } from 'react'
import {
  Text,
  AnimatedButton,
  BorderContainer,
  Input,
  StakeButton,
  ConfirmButton,
  DropDown,
  Icon,
} from 'ui'
import { Alert, Popup } from 'components'
import { GradientBackground } from 'layouts/GradientBackground'

export const UIKit: FC = () => {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')

  return (
    <GradientBackground>
      <div style={{ display: 'flex', gap: 30, flexDirection: 'column' }}>
        <Text text="Hello Motherfucker" type="h1" />
        <Text text="Hello Motherfucker" type="h2" />
        <Text text="Hello Motherfucker" type="h3" />
        <Text text="Hello Motherfucker" type="h4" />
        <Text text="Hello Motherfucker" type="pre-title" />
        <Text text="Hello Motherfucker" type="default" />

        <Text text="Hello Motherfucker" type="value" />

        <div style={{ display: 'flex', gap: 30 }}>
          <AnimatedButton text="Connect Wallet" />
          <StakeButton text="Stack" />
          <ConfirmButton text="confirm" />
          <DropDown text="0x....F348" icon={undefined} />
        </div>
        <div style={{ display: 'flex', gap: 30 }}>
          <Icon name="close" viewBox={'0 0 14 14'} size={'16'} />
          <Icon name="copy" viewBox={'0 0 30 30'} size={'32'} />
          <Icon name="exit" viewBox={'0 0 24 24'} size={'32'} />
          <Icon name="lang" viewBox={'0 0 24 24'} size={'32'} />
          <Icon name="settings" viewBox={'0 0 24 24'} size={'32'} />
          <Icon name="user" viewBox={'0 0 24 24'} size={'32'} />
          <Icon name="arrowDown" viewBox={'0 0 24 24'} size={'32'} />
          <Icon name="wallet" viewBox={'0 0 24 24'} size={'24'} />
        </div>

        <BorderContainer>123</BorderContainer>
        <Input
          value={text}
          onChange={setText}
          type={'text'}
          label={''}
          name={''}
          placeholder={''}
          error={false}
        />

        <div onClick={() => setOpen(true)} style={{ color: 'white' }}>
          OPEN POP-UP
        </div>
        {open && (
          <Popup onClick={() => setOpen(false)} title={''}>
            <Text text="Hello Motherfucker" type="value" />
          </Popup>
        )}
        <Alert />
        {/*<div style={{ display: 'flex', gap: 60, width: '100%' }}>*/}
        {/*  <StakeCard />*/}
        {/*  <StakeCard />*/}
        {/*  <StakeCard />*/}
        {/*</div>*/}
      </div>
    </GradientBackground>
  )
}
