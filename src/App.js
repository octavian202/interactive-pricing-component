import React from 'react'
import styled, { css } from 'styled-components'
import Background from './components/Background'
import Main from './components/Main'

const App = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Simple, traffic-based pricing</Title>
        <Subtitle>
          Sign up for our 30-day trial. No credit card required.
        </Subtitle>
        <Background />
        <Inner>
          <Card>
            <Main />
          </Card>
        </Inner>
      </Container>
    </Wrapper>
  )
}

const mainTextTemplate = css`
  text-align: center;
  position: absolute;
  z-index: 3;
  left: 50%;
  transform: translateX(-50%);
`

const Title = styled.h1`
  ${mainTextTemplate}
  top: 30px;
`

const Subtitle = styled.h4`
  ${mainTextTemplate}
  top: 80px;
  font-weight: 600;
  color: hsl(225, 20%, 60%);
`

const Card = styled.div`
  background-color: white;
  transform: translateY(25%);
`

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`

const Container = styled.div`
  height: 800px;
  width: 100%;
  max-width: 1440px;
  position: relative;
  background-color: hsl(230, 100%, 99%);
`

const Inner = styled.div`
  display: grid;
  place-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

export default App
