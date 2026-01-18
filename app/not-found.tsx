import Link from "next/link"

import MainLayout from "@/components/templates/main-layout"

const NotFound = () => {
  return (
    <MainLayout>
      <div className="text-center">
        Page not exist. Return to{" "}
        <Link className="text-red-500 hover:brightness-110" href={"/"}>
          main page.
        </Link>
      </div>
    </MainLayout>
  )
}

export default NotFound
