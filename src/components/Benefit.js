import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Check } from '../images/icon-check.svg'

const Benefit = ({ benefitText }) => {
  return (
    <Wrapper>
      <Check />
      <Text>{benefitText}</Text>
    </Wrapper>
  )
}

const Text = styled.span`
  margin-left: 10px;
  color: hsl(225, 20%, 60%);
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export default Benefit
