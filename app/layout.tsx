import Providers from './providers'

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
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <Providers>
          <nav style={{
            background: '#1a365d',
            color: 'white',
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
              FileItYourself
            </a>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
              <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
              <a href="/pricing" style={{ color: 'white', textDecoration: 'none' }}>Pricing</a>
              <a href="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</a>
            </div>
          </nav>
          {children}
          <footer style={{
            background: '#f7fafc',
            padding: '2rem',
            textAlign: 'center',
            marginTop: '4rem',
            borderTop: '1px solid #e2e8f0'
          }}>
            <p style={{ margin: 0, color: '#718096' }}>
              © 2025 FileItYourself. Louisiana DIY Legal Documents.
            </p>
          </footer>
        </Providers>
      </body>
    </html>
  )
}
