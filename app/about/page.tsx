export default function About() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 2rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#1a365d', textAlign: 'center' }}>
        About FileItYourself
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#718096', textAlign: 'center', marginBottom: '3rem' }}>
        Empowering Louisianans to Navigate Family Law
      </p>

      <section style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '2rem'
      }}>
        <h2 style={{ color: '#1a365d', marginBottom: '1rem' }}>Our Mission</h2>
        <p style={{ color: '#4a5568', lineHeight: '1.8', marginBottom: '1rem' }}>
          Legal representation can be prohibitively expensive, especially during already stressful family law proceedings. 
          FileItYourself was created to help Louisiana residents take control of their legal matters by providing 
          professional-quality templates and guidance at an affordable price.
        </p>
        <p style={{ color: '#4a5568', lineHeight: '1.8' }}>
          We believe that everyone deserves access to justice, and that understanding your legal options shouldn't 
          require thousands of dollars in attorney fees.
        </p>
      </section>

      <section style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '2rem'
      }}>
        <h2 style={{ color: '#1a365d', marginBottom: '1rem' }}>What We Offer</h2>
        <p style={{ color: '#4a5568', lineHeight: '1.8', marginBottom: '1rem' }}>
          Our comprehensive workbook includes:
        </p>
        <ul style={{ color: '#4a5568', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
          <li>Motion templates specifically formatted for Louisiana courts</li>
          <li>Step-by-step instructions for completing each document</li>
          <li>Plain English explanations of legal terminology</li>
          <li>Filing instructions and courthouse procedures</li>
          <li>Sample completed documents for reference</li>
        </ul>
      </section>

      <section style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '2rem'
      }}>
        <h2 style={{ color: '#1a365d', marginBottom: '1rem' }}>Louisiana-Specific</h2>
        <p style={{ color: '#4a5568', lineHeight: '1.8' }}>
          Louisiana has unique legal requirements based on civil law rather than common law. Our templates are 
          specifically designed for Louisiana courts and comply with state-specific filing requirements, formatting 
          guidelines, and procedural rules.
        </p>
      </section>

      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '2rem',
        borderRadius: '12px',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>Important Disclaimer</h2>
        <p style={{ lineHeight: '1.8', opacity: 0.95 }}>
          FileItYourself provides legal document templates and educational materials. We are not a law firm and 
          do not provide legal advice. For complex cases or specific legal questions, we recommend consulting 
          with a licensed Louisiana attorney.
        </p>
      </section>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a href="/pricing" style={{
          background: '#667eea',
          color: 'white',
          padding: '1rem 3rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          display: 'inline-block'
        }}>
          Get Started Today
        </a>
      </div>
    </main>
  )
}
