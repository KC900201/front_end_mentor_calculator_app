"use client"

import {
  createContext,
  useContext,
  useReducer,
  type Dispatch,
  type ReactNode,
} from "react"

import type { Action, State } from "@/types/calculations"

interface CalculatorContextType {
  currentOperand: string | null
  previousOperand: string | null
  operation: string | null
  dispatch: Dispatch<Action>
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(
  undefined
)

function evaluate({
  currentOperand,
  previousOperand,
  operation,
}: State): string {
  const prev = parseFloat(previousOperand || "")
  const current = parseFloat(currentOperand || "")

  if (isNaN(prev) || isNaN(current)) return ""

  let computation = 0

  switch (operation) {
    case "+":
      computation = prev + current
      break
    case "-":
      computation = prev - current
      break
    case "x":
      computation = prev * current
      break
    case "/":
      computation = prev / current
      break
  }

  console.log("computation value: ", computation)

  return computation.toString()
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_DIGIT":
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: action.payload,
          overwrite: false,
        }
      }

      if (action.payload === "0" && state.currentOperand === "0") return state
      if (action.payload === "." && state.currentOperand?.includes("."))
        return state

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${action.payload}`,
      }
    case "CHOOSE_OPERATION":
      if (state.currentOperand == null && state.previousOperand == null)
        return state

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: action.payload,
        }
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: action.payload,
          previousOperand: state.currentOperand,
          currentOperand: null,
        }
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: action.payload,
        currentOperand: null,
      }
    case "CLEAR":
      return { currentOperand: null, previousOperand: null, operation: null }
    case "DELETE":
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: null,
          overwrite: false,
        }
      }

      if (state.currentOperand == null) return state

      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: null }
      }

      return { ...state, currentOperand: state.currentOperand.slice(0, -1) }
    case "EVALUATE":
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      }

    default:
      return state
  }
}

export const CalculatorProvider = ({ children }: { children: ReactNode }) => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    { currentOperand: null, previousOperand: null, operation: null }
  )

  return (
    <CalculatorContext.Provider
      value={{ currentOperand, previousOperand, operation, dispatch }}
    >
      {children}
    </CalculatorContext.Provider>
  )
}

export const useCalculator = () => {
  const context = useContext(CalculatorContext)

  if (context === undefined) {
    throw new Error("useCalculator muse be used within a CalculatorProvider")
  }

  return context
}
