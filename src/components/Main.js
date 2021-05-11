import React, { useState } from 'react'
import styled from 'styled-components'
import Benefit from './Benefit'
import Slider from './Slider'
import Toggler from './Toggler'

const benefits = ['Unlimited websites', '100% data ownership', 'Email reports']

const Main = () => {
  const [side, setSide] = useState('left')
  const [value, setValue] = useState(15)

  const showValue = (value) => {
    let values = `${value}`.split('.')

    return `${values[0]}.${values[1] || 0}0`
  }

  return (
    <Wrapper>
      <CTA>
        <Info>100k pageviews</Info>
        <Pricing>
          <Price>${showValue(value)} </Price>
          <TimeSpan> / {side === 'left' ? 'monthly' : 'yearly'}</TimeSpan>
        </Pricing>
        <Slider value={value} setValue={setValue} />
        <BillingType>
          Monthly Billing <Toggler side={side} setSide={setSide} /> Yearly
          Billing
          <Discount>25%</Discount>
        </BillingType>
      </CTA>
      <Start>
        <Benefits>
          {benefits.map((benefit, idx) => {
            return <Benefit benefitText={benefit} key={idx} />
          })}
        </Benefits>
        <StartButton>Start my trial</StartButton>
      </Start>
    </Wrapper>
  )
}

const StartButton = styled.button`
  width: 170px;
  height: 50px;
  background-color: hsl(227, 35%, 25%);
  color: white;
  border: none;
  border-radius: 100px;
  cursor: pointer;
`

const Benefits = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const Start = styled.div`
  box-sizing: border-box;
  height: 150px;
  padding: 2em 3.5em;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Discount = styled.p`
  position: absolute;
  left: 62%;
  color: hsl(15, 100%, 70%);
  background-color: hsl(14, 92%, 95%);
  display: block;
  padding: 2px 8px 2px;
  border-radius: 10px;

  &:after {
    content: ' discount';
  }
`

const BillingType = styled.div`
  grid-area: billing;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CTA = styled.div`
  padding: 1em 3em;
  width: 600px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 130px);
  align-items: center;
  border-bottom: 1px solid hsl(224, 65%, 95%);

  grid-template-areas:
    'info pricing'
    'slider slider'
    'billing billing';
`

const Pricing = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  grid-area: pricing;
  justify-self: end;
`

const Price = styled.p`
  font-size: 3rem;
  font-weight: 800;
`

const TimeSpan = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  color: hsl(225, 20%, 60%);
  margin-left: 6px;
`

const Info = styled.p`
  color: hsl(225, 20%, 60%);
  display: block;
  width: max-content;
  font-size: 1.3rem;
  font-weight: 800;
  grid-area: info;
  text-transform: uppercase;
`

const Wrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0 20px 60px gray;
`

export default Main
