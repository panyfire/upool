import React, { useState } from 'react'
import { Icon, Input, Text, InputRange } from 'ui'
import { FormCoinInfo, FormTitle } from './styles'

export const StakeForm = () => {
  const [value, setValue] = useState('')
  const [range, setRange] = useState(0)

  return (
    <div>
      <FormTitle>
        <Text text={'LOCKED BALANCE'} type={'card'} />
        <FormCoinInfo>
          <Icon size={'32'} name={'wallet'} />
          <Text text={'ETC'} type={'card'} />
        </FormCoinInfo>
      </FormTitle>
      <div>
        <Input
          type={'text'}
          label={'Subscription amount'}
          value={value}
          name={'countStake'}
          placeholder={''}
          error={false}
          onChange={setValue}
        />
      </div>
      <FormCoinInfo>
        <Text text={'Balance :'} type={'label'} />
        <Text text={'0.38133365768695803875 '} type={'card'} />
      </FormCoinInfo>
      <div>
        <InputRange max={10} min={0} onChange={setRange} value={range} />
      </div>
    </div>
  )
}
