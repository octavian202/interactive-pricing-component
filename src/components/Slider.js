import React from 'react'
import styled from 'styled-components'

const Slider = ({ value, setValue }) => {
  return (
    <Wrapper>
      <RangeInput
        type='range'
        min='0'
        max='32'
        step='0.1'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  grid-area: slider;
`

const RangeInput = styled.input`
  width: 100%;
  height: 20px;
`

export default Slider
