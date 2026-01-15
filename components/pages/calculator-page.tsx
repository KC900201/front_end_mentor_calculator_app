"use client"

import Calculator from "@/components/organisms/calculator"
import MainLayout from "@/components/templates/main-layout"
import { useCalculator } from "@/contexts/calculator_context"

/**
 *
 * @returns a Calculator Page UI component
 */

const CalculatorPage = () => {
  const { currentOperand, previousOperand, dispatch } = useCalculator()

  const formatOperand = (operand: string | null) => {
    return operand === null ? "0" : operand
  }

  return (
    <MainLayout>
      <Calculator
        displayValue={formatOperand(currentOperand || previousOperand)}
        dispatch={dispatch}
      />
    </MainLayout>
  )
}

export default CalculatorPage
