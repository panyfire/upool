import React, { FC, ChangeEvent } from 'react'
import { RangeSlider, RangeSliderValue, RangeSliderWrapper } from './styles'

type RangeSlider = {
  min: number
  max: number
  onChange: (e:  ChangeEvent<HTMLInputElement> ) => void,
  value: number | string
  name: string
}

export const InputRange: FC<RangeSlider> = (props) => {
  const { min = 0, max, onChange, value, name, ...other } = props

  const getBackgroundSize = () => {
    if (value) {
      return {
        backgroundSize: `${(Number(value) * 10) / max}% 100%`,
      }
    }
  }

  return (
    <RangeSliderWrapper>
      <RangeSlider
        type="range"
        min={min}
        max={max}
        name={name}
        step={1}
        onChange={onChange}
        value={value}
        style={getBackgroundSize()}
        {...other}
      />
      <RangeSliderValue>{`${Number(value)}%`}</RangeSliderValue>
    </RangeSliderWrapper>
  )
}
