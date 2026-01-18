import { useTheme } from "@/contexts/theme_context"

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const themeOptions = [1, 2, 3]

  const toggleTheme = () => {
    const next = theme === "1" ? "2" : theme === "2" ? "3" : "1"
    setTheme(next)
  }

  return (
    <div className="flex items-end gap-6 text-(--color-text-display)">
      <span className="mb-1 text-xs font-bold tracking-widest">THEME</span>
      {/* Toggle */}
      <div className="relative">
        {/* toggle switch */}
        <div className="mb-1 flex justify-between px-1 text-xs font-bold">
          {themeOptions.map((optionValue) => (
            <span key={`option-${optionValue}`}>{optionValue}</span>
          ))}
        </div>
        <div
          className="relative h-6.5 w-17.5 cursor-pointer rounded-full bg-(--color-toggle-bg) p-1"
          onClick={toggleTheme}
        >
          <div
            className="absolute top-1.5 h-4 w-4 rounded-full bg-(--color-key-eq-bg) transition-all duration-300"
            style={{
              left: theme === "1" ? "5px" : theme === "2" ? "27px" : "49px",
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ThemeToggle
