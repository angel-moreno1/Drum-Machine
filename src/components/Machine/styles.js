import styled from 'styled-components'
import { ButtonContainer } from '../Button/styles'

export const Main = styled.main`
  width: 50%;
  height: 60vh;
  margin: auto;
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 4rem
`

export const Drum = styled.section`
width: 100%;
height: 100%;
background-color: blue;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`

export const Display = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column
`