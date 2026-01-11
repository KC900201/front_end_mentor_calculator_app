export type State = {
  currentOperand: string | null
  previousOperand: string | null
  operation: string | null
  overwrite?: boolean
}

export type Action =
  | { type: "ADD_DIGIT"; payload: string }
  | { type: "CHOOSE_OPERATION"; payload: string }
  | { type: "CLEAR" }
  | { type: "DELETE" }
  | { type: "EVALUATE" }
