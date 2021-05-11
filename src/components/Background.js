import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Stars } from '../images/bg-pattern.svg'
import { ReactComponent as Circles } from '../images/pattern-circles.svg'

const Background = () => {
  return (
    <Wrapper>
      <Stars />
      <Over>
        <Circles />
      </Over>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const Over = styled.div`
  position: absolute;
  z-index: 2;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
`

export default Background
