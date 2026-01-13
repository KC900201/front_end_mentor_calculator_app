import Label from "@/components/atoms/label"
import ThemeToggle from "@/components/atoms/theme-toggle"

const Header = () => {
  return (
    <header className="mb-8 flex items-end justify-between">
      <Label />
      <ThemeToggle />
    </header>
  )
}

export default Header
