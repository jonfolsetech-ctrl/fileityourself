export default function Success() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem', textAlign: 'center' }}>
      <div style={{
        background: 'white',
        padding: '3rem',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#1a365d' }}>
          Payment Successful!
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#718096', marginBottom: '2rem' }}>
          Thank you for your purchase. You now have instant access to the FileItYourself workbook.
        </p>
        <div style={{
          background: '#f7fafc',
          padding: '2rem',
          borderRadius: '8px',
          marginBottom: '2rem',
          textAlign: 'left'
        }}>
          <h2 style={{ color: '#1a365d', marginBottom: '1rem' }}>Next Steps:</h2>
          <ol style={{ color: '#4a5568', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
            <li>Check your email for a confirmation receipt</li>
            <li>Download your workbook materials from the link in your email</li>
            <li>Review the step-by-step instructions</li>
            <li>Start filing your legal motions with confidence</li>
          </ol>
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="/" style={{
            background: '#667eea',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}>
            Return to Home
          </a>
        </div>
      </div>
    </main>
  )
}
