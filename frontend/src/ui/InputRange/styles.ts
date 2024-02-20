import styled from 'styled-components'

export const RangeSliderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const RangeSlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  background: #595859;
  border-radius: 5px;
  outline: none;
  opacity: 1;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  &:disabled,
  &[disabled]{
    cursor: not-allowed;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 11px;
    height: 11px;
    background: red;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 11px;
    height: 11px;
    background: red;
    cursor: pointer;
  }
  &::-ms-thumb {
    width: 11px;
    height: 11px;
    background: red;
    cursor: pointer;
  }
  &::-webkit-slider-runnable-track, &::-moz-range-track, &::-ms-track  {
    width: 100%;
    height: 10px;
    cursor: pointer;
    background: red;
    border-radius: 5px;
  }



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
    background: red;
  }
`

export const RangeSliderValue = styled.div`
  margin-top: 10px;
  text-align: center;
  color: white;
`
