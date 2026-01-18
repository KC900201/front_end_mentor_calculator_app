import * as React from "react"

import { Button } from "@/components/ui/button"

interface NumKeyButtonProps {
  children: React.ReactNode
  onClick: () => void
  variant?: "primary" | "secondary" | "accent"
  className?: string
}

const NumKeyButton = ({
  children,
  variant,
  className,
  onClick,
}: NumKeyButtonProps) => {
  return (
    <Button
      variant={variant}
      type="button"
      className={className}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default NumKeyButton
