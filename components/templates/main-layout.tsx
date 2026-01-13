import * as React from "react"

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="font-league-spartan flex min-h-screen items-center justify-center bg-(--color-main-bg) p-6 transition-colors duration-300">
      {children}
    </main>
  )
}

export default MainLayout
