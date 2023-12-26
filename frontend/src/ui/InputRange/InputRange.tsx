import React from 'react'
import { RangeSlider, RangeSliderValue, RangeSliderWrapper } from './styles'
type RangeSliderProps = {
  min: string
  max: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
}

export const InputRange: React.FC<RangeSliderProps> = ({
  min,
  max,
  value,
  onChange,
  name,
}) => {
  return (
    <RangeSliderWrapper>
      <RangeSlider
        type="range"
        min={min}
        step={1}
        max={max}
        value={value}
        onChange={onChange}
        name={name}
      />
      <RangeSliderValue>{`${Number(value)}%`}</RangeSliderValue>
    </RangeSliderWrapper>
  )
}
