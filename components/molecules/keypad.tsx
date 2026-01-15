import React from "react"

import NumKeyButton from "@/components/atoms/numkey-button"
import { type Action } from "@/types/calculations"

interface KeypadProps {
  dispatch: React.Dispatch<Action>
}

const Keypad = ({ dispatch }: KeypadProps) => {
  return (
    <div className="grid grid-cols-4 gap-6 rounded-xl bg-(--color-toggle-bg) p-6">
      {/* Top row */}
      <NumKeyButton
        onClick={() => dispatch({ type: "ADD_DIGIT", payload: "7" })}
      >
        7
      </NumKeyButton>
      <NumKeyButton
        onClick={() => dispatch({ type: "ADD_DIGIT", payload: "8" })}
      >
        8
      </NumKeyButton>
      <NumKeyButton
        onClick={() => dispatch({ type: "ADD_DIGIT", payload: "9" })}
      >
        9
      </NumKeyButton>
      <NumKeyButton
        variant="secondary"
        onClick={() => dispatch({ type: "DELETE" })}
      >
        DEL
      </NumKeyButton>
      {/* Second row */}
      <NumKeyButton
        onClick={() => dispatch({ type: "ADD_DIGIT", payload: "4" })}
      >
        4
      </NumKeyButton>
      <NumKeyButton
        onClick={() => dispatch({ type: "ADD_DIGIT", payload: "5" })}
      >
        5
      </NumKeyButton>
      <NumKeyButton
        onClick={() => dispatch({ type: "ADD_DIGIT", payload: "6" })}
      >
        6
      </NumKeyButton>
      <NumKeyButton
        className="pb-3"
        onClick={() => dispatch({ type: "CHOOSE_OPERATION", payload: "+" })}
      >
        +
      </NumKeyButton>
      {/* 3rd row */}
      <NumKeyButton
        onClick={() => dispatch({ type: "ADD_DIGIT", payload: "1" })}
      >
        1
      </NumKeyButton>
      <NumKeyButton
        onClick={() => dispatch({ type: "ADD_DIGIT", payload: "2" })}
      >
        2
      </NumKeyButton>
      <NumKeyButton
        onClick={() => dispatch({ type: "ADD_DIGIT", payload: "3" })}
      >
        3
      </NumKeyButton>
      <NumKeyButton
        className="pb-3"
        onClick={() => dispatch({ type: "CHOOSE_OPERATION", payload: "-" })}
      >
        -
      </NumKeyButton>
      {/* 4th row */}
      <NumKeyButton
        onClick={() => dispatch({ type: "ADD_DIGIT", payload: "." })}
      >
        .
      </NumKeyButton>
      <NumKeyButton
        onClick={() => dispatch({ type: "ADD_DIGIT", payload: "0" })}
      >
        0
      </NumKeyButton>
      <NumKeyButton
        onClick={() => dispatch({ type: "CHOOSE_OPERATION", payload: "/" })}
      >
        /
      </NumKeyButton>
      <NumKeyButton
        className="pb-3 text-xl"
        onClick={() => dispatch({ type: "CHOOSE_OPERATION", payload: "x" })}
      >
        x
      </NumKeyButton>
      {/* Botton row */}
      <NumKeyButton
        variant="secondary"
        className="col-span-2 text-[20px]"
        onClick={() => {
          dispatch({ type: "CLEAR" })
        }}
      >
        RESET
      </NumKeyButton>
      <NumKeyButton
        variant="accent"
        className="col-span-2"
        onClick={() => {
          dispatch({ type: "EVALUATE" })
        }}
      >
        =
      </NumKeyButton>
    </div>
  )
}

export default Keypad
