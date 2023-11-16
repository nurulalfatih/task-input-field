import Navbar from "@component/navbar/navbar"
import "@styles/global.css"

export const metadata = {
  title: 'Input Field App',
  description: 'Banner',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>

    </html>
  )
}