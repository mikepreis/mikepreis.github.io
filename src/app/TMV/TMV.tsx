import React, { FunctionComponent } from 'react'
import styled, { css } from 'styled-components'

interface TMVProps {
    hasMemory: boolean
    expression: string
    value: string
}

export const StyledTMV = styled.input<TMVProps>`
  background-color: #C4D2D4;
  border: 1px solid #212121;
  color: #212121;
  grid-column-end: 2fr;
`

export const TMV: FunctionComponent<TMVProps> = ({hasMemory, expression, value}) => {
  return (
    <StyledTMV hasMemory={hasMemory} expression={expression} value={value}>

    </StyledTMV>
  )
}

export default TMV