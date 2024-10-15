import React from "react"

import Footer from "@modules/layout/template/footer"
import Nav from "@modules/layout/template/nav"

const Layout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div>
      <Nav />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
