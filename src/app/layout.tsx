import NavBar from "@/components/NavBar"
import "@/styles/globals.css"
import { Heebo } from "next/font/google"

const heebo = Heebo({ subsets: ["latin"] })

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={heebo.className}>
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  )
}

export default Layout
