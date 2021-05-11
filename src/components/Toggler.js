import React from 'react'
import styled from 'styled-components'

const Toggler = ({ side, setSide }) => {
  return (
    <Wrapper
      onClick={() =>
        setSide((prevSide) => (prevSide === 'left' ? 'right' : 'left'))
      }
    >
      <Fill side={side} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 10px 0;
  background-color: black;
  display: block;
  height: 25px;
  width: 60px;
  padding: 9px;
  border-radius: 1000px;
  cursor: pointer;
`

const Fill = styled.div`
  background-color: white;
  display: block;
  height: 25px;
  width: 25px;
  border-radius: 1000px;
  float: ${(props) => props.side};
`

export default Toggler
