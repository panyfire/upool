import React, { FC } from 'react'
import { RangeSlider, RangeSliderValue, RangeSliderWrapper } from './styles'

type RangeSlider = {
  min: number
  max: number
  onChange: (e: number) => void
  value: number | string
}

export const InputRange: FC<RangeSlider> = (props) => {
  const { min = 0, max, onChange, value, ...other } = props

  const getBackgroundSize = () => {
    if (value) {
      return {
        backgroundSize: `${(Number(value) * 100) / max}% 100%`,
      }
    }
  }

  return (
    <RangeSliderWrapper>
      <RangeSlider
        type="range"
        min={min}
        max={max}
        onChange={(e) => onChange(Number(e.target.value))}
        value={value}
        style={getBackgroundSize()}
        {...other}
      />
      <RangeSliderValue>{`${Number(value) * 10}%`}</RangeSliderValue>
    </RangeSliderWrapper>
  )
}
