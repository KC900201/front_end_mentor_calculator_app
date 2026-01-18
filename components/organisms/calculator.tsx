import React from "react"

import Display from "@/components/atoms/display"
import Header from "@/components/molecules/header"
import Keypad from "@/components/molecules/keypad"

import { type Action } from "@/types/calculations"

interface CalculatorProps {
  displayValue: string
  dispatch: React.Dispatch<Action>
}

const Calculator = ({ displayValue, dispatch }: CalculatorProps) => {
  return (
    <article className="w-full max-w-135">
      <Header />
      <Display value={displayValue} />
      <Keypad dispatch={dispatch} />
    </article>
  )
}

export default Calculator
