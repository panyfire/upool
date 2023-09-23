import styled from 'styled-components'

export const RangeSliderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const RangeSlider = styled.input`
  width: 100%;
  -webkit-appearance: none;
  height: 7px;
  background: grey;
  border-radius: 5px;
  background-color: #86f3ff;
  background-repeat: no-repeat;
  //&::-webkit-slider-thumb:hover {
  //  box-shadow: #d46a6a50 0px 0px 0px 8px;
  //}
  &::-webkit-slider-thumb:active {
    //box-shadow: #d46a6a50 0px 0px 0px 11px;
    transition:
      box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      left 350ms cubic- bezier(0.4, 0, 0.2, 1) 0ms,
      bottom 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  &::-webkit-slider-thumb {
    transition: background 0.3s ease-in-out;
  }
`

export const RangeSliderValue = styled.div`
  text-align: center;
  color: white;
`
