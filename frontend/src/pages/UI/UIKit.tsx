import React, { FC, useState } from 'react'
import { Text, Button, BorderContainer, Input } from 'ui'
import { Popup } from 'components'

export const UIKit: FC = () => {
    const [open, setOpen] = useState<boolean>(false)
    console.log('open', open)
    return (
        <div style={{display: 'flex', gap: 30, flexDirection: 'column'}}>
            <Text text='Hello Motherfucker' type='h1' />
            <Text text='Hello Motherfucker' type='h2' />
            <Text text='Hello Motherfucker' type='title' />
            <Text text='Hello Motherfucker' type='pre-title' />
            <Text text='Hello Motherfucker' type='default' />
            <Text text='Hello Motherfucker' type='value' />
            <Button text='Connect Wallet' />
            <BorderContainer>123</BorderContainer>
            <Input />

            <div onClick={() => setOpen(true)} style={{color: 'white'}}>OPEN POP-UP</div>
            {open && <Popup><Text text='Hello Motherfucker' type='value' /></Popup>}
        </div>
    )
}
