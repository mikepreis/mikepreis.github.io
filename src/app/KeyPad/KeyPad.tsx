import React, { FunctionComponent, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import TMV from '../TMV/TMV'
import { Digit, Operator } from '../../lib/types'

interface PadProps {
  onDigitButtonClick: (digit: Digit) => void
  onPointButtonClick: () => void
  onOperatorButtonClick: (operator: Operator) => void
  onChangeSignButtonClick: () => void
  onEqualButtonClick: () => void
  onAllClearButtonClick: () => void
  onClearEntryButtonClick: () => void
  onMemoryRecallButtonClick: () => void
  onMemoryClearButtonClick: () => void
  onMemoryPlusButtonClick: () => void
  onMemoryMinusButtonClick: () => void
  onSecondButtonClick: () => void
}

const StyledPad = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 2%
`

export const KeyPad: FunctionComponent<PadProps> = ({
  onDigitButtonClick,
  onPointButtonClick,
  onOperatorButtonClick,
  onChangeSignButtonClick,
  onEqualButtonClick,
  onAllClearButtonClick,
  onClearEntryButtonClick,
  onMemoryRecallButtonClick,
  onMemoryClearButtonClick,
  onMemoryPlusButtonClick,
  onMemoryMinusButtonClick,
  onSecondButtonClick
}) => {
  const handleKeyDown = ({ keyCode, shiftKey }: KeyboardEvent) => {
    console.log(keyCode)
    if (keyCode >= 48 && keyCode <= 57 && !shiftKey) {
      onDigitButtonClick((keyCode - 48) as Digit)
    } else if ((keyCode >= 96 && keyCode <= 105)) {
      onDigitButtonClick((keyCode - 96) as Digit)
    } else if (keyCode === 107 || (keyCode === 187 && shiftKey)) {
      onOperatorButtonClick('+')
    } else if (keyCode === 109 || keyCode === 189) {
      onOperatorButtonClick('-')
    } else if (keyCode === 106 || (keyCode === 56 && shiftKey)) {
      onOperatorButtonClick('×')
    } else if (keyCode === 111 || keyCode === 191) {
      onOperatorButtonClick('÷')
    } else if (keyCode === 13 || (keyCode === 187 && !shiftKey)) {
      onEqualButtonClick()
    } else if (keyCode === 46) {
      onClearEntryButtonClick()
    } else if (keyCode === 27) {
      onAllClearButtonClick()
    } else if (keyCode === 78) {
      onChangeSignButtonClick()
    } else if (keyCode === 80) {
      onMemoryPlusButtonClick()
    } else if (keyCode === 81) {
      onMemoryMinusButtonClick()
    } else if (keyCode === 82) {
      onMemoryRecallButtonClick()
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown)
    return () => document.body.removeEventListener('keydown', handleKeyDown)
  })

  return (
    <StyledPad>
      <Button color="light-blue">
        P =
      </Button>
      <Button color="light-blue">
        
        </Button>
      <Button color="white">
        
      </Button>
      <Button color="white">

      </Button>
      <Button color="white">
   
      </Button>
      <Button  onClick={onAllClearButtonClick}>
        
      </Button>
      <Button >
        GEAR
      </Button>
      <Button color="light-blue">
        F =
      </Button >
      <Button color="light-blue" isLarge={true} >
        
      </Button>
      <Button color="red" onClick={onSecondButtonClick}>
        2nd
      </Button>
      <Button color="white">

      </Button>
      <Button color="white">
   
      </Button>
      <Button color="white">

      </Button>
      <Button color="dark-blue" onClick={() => onOperatorButtonClick('÷')}>
        ÷
      </Button>
      <Button color="light-blue">
        A =
      </Button>
      <Button color="light-blue" isLarge={true} >
        
      </Button>
      <Button color="white">
        
      </Button>
      <Button onClick={() => onDigitButtonClick(7)}>
        7
      </Button>
      <Button onClick={() => onDigitButtonClick(8)}>
        8
      </Button>
      <Button onClick={() => onDigitButtonClick(9)}>
        9
      </Button>
      <Button color="dark-blue" onClick={() => onOperatorButtonClick('×')}>
        ×
      </Button>
      <Button  color="light-blue">
        g =
      </Button>
      <Button  color="light-blue" isLarge={true}>
        
      </Button>
      <Button color="white">
        
      </Button>
      <Button onClick={() => onDigitButtonClick(4)}>
        4
      </Button>
      <Button onClick={() => onDigitButtonClick(5)}>
        5
      </Button>
      <Button onClick={() => onDigitButtonClick(6)}>
        6
      </Button>
      <Button color="dark-blue" onClick={() => onOperatorButtonClick('-')}>
        -
      </Button>
      <Button color="light-blue">
        n = 
      </Button>
      <Button color="light-blue" isLarge={true} >
   
      </Button>
      <Button color="white">
   
      </Button>
      <Button onClick={() => onDigitButtonClick(1)}>
        1
      </Button>
      <Button onClick={() => onDigitButtonClick(2)}>
        2
      </Button>
      <Button onClick={() => onDigitButtonClick(3)}>
        3
      </Button>
      <Button color="dark-blue" onClick={() => onOperatorButtonClick('+')}>
        +
      </Button>
      <Button color="light-blue">
        r = 
      </Button>
      <Button color="light-blue" isLarge={true} >
   
      </Button>
      <Button color="green">
        Solve
      </Button>
      <Button onClick={() => onDigitButtonClick(0)}>
        0
      </Button>
      <Button onClick={onPointButtonClick}>
        .
      </Button>
      <Button color="light-blue">
        INF
      </Button>
      <Button color="dark-blue" onClick={onEqualButtonClick}>
        =
      </Button>
    </StyledPad>
  )
}

export default KeyPad