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
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <Providers>
          <nav style={{
            background: '#1a365d',
            color: 'white',
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold', flex: '1 1 100%', textAlign: 'center' }} className="nav-logo">
              FileItYourself
            </a>
            <div style={{ display: 'flex', gap: '1rem', flex: '1 1 100%', justifyContent: 'center', flexWrap: 'wrap' }} className="nav-links">
              <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
              <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
              <a href="/pricing" style={{ color: 'white', textDecoration: 'none' }}>Pricing</a>
              <a href="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</a>
            </div>
          </nav>
          <style jsx global>{`
            @media (min-width: 769px) {
              .nav-logo {
                flex: 0 1 auto !important;
                text-align: left !important;
              }
              .nav-links {
                flex: 0 1 auto !important;
              }
            }
          `}</style>
          {children}
          <footer style={{
            background: '#f7fafc',
            padding: '1.5rem 1rem',
            textAlign: 'center',
            marginTop: '4rem',
            borderTop: '1px solid #e2e8f0'
          }}>
            <p style={{ margin: 0, color: '#718096', fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
              © 2025 FileItYourself. Louisiana DIY Legal Documents.
            </p>
          </footer>
        </Providers>
      </body>
    </html>
  )
}
