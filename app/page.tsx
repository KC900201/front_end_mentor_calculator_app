import CalculatorPage from "@/components/pages/calculator-page"
import { CalculatorProvider, ThemeProvider } from "@/contexts"

export default function Home() {
  return (
    <CalculatorProvider>
      <ThemeProvider>
        <CalculatorPage />
      </ThemeProvider>
    </CalculatorProvider>
  )
}
