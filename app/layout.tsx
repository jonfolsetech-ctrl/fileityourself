import Providers from './providers'
import './globals.css'

export const metadata = {
  title: 'FileItYourself - Louisiana DIY Legal Motions',
  description: 'Louisiana DIY Divorce & Custody Motions Workbook',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <nav className="top-nav">
            <a href="/" className="logo">
              FileItYourself
            </a>
            <div className="nav-links">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/pricing">Pricing</a>
              <a href="/login">Login</a>
            </div>
          </nav>
          {children}
          <footer className="footer">
            <p>
              © 2025 FileItYourself. Louisiana DIY Legal Documents.
            </p>
          </footer>
        </Providers>
      </body>
    </html>
  )
}
