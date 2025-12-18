export default function Home() {
  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
      {/* Hero Section */}
      <section style={{
        textAlign: 'center',
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '12px',
        color: 'white',
        marginBottom: '3rem',
        position: 'relative'
      }}>
        <div style={{
          background: '#ef4444',
          color: 'white',
          padding: '0.75rem 2rem',
          borderRadius: '25px',
          display: 'inline-block',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          marginBottom: '1.5rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
        }}>
          🎉 SALE: Premium Package Now $74.99 (Save $74!)
        </div>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>
          File Your Own Legal Motions
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem', opacity: 0.95 }}>
          Louisiana DIY Divorce & Custody Motions Workbook
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
          Save thousands in legal fees with our step-by-step guided workbook for Louisiana family law motions
        </p>
        <a href="/pricing" style={{
          background: 'white',
          color: '#667eea',
          padding: '1rem 3rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          display: 'inline-block',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s'
        }}>
          Get Instant Access
        </a>
      </section>

      {/* Features Section */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#1a365d' }}>
          What's Included
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {[
            {
              title: 'Motion Templates',
              desc: 'Pre-formatted legal motions for divorce and custody cases',
              icon: '📄'
            },
            {
              title: 'Step-by-Step Guidance',
              desc: 'Clear instructions for filling out each form correctly',
              icon: '📋'
            },
            {
              title: 'Filing Instructions',
              desc: 'How to file your documents with Louisiana courts',
              icon: '⚖️'
            },
            {
              title: 'Legal Terminology',
              desc: 'Plain English explanations of legal terms and procedures',
              icon: '📚'
            },
            {
              title: 'Sample Documents',
              desc: 'Real examples to guide your filing process',
              icon: '✍️'
            },
            {
              title: 'Instant Download',
              desc: 'Immediate access to all materials after purchase',
              icon: '⚡'
            }
          ].map((feature, i) => (
            <div key={i} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#1a365d' }}>{feature.title}</h3>
              <p style={{ color: '#718096', lineHeight: '1.6' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        textAlign: 'center',
        padding: '3rem 2rem',
        background: '#f7fafc',
        borderRadius: '12px'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1a365d' }}>
          Ready to Take Control?
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#718096', marginBottom: '2rem' }}>
          Join hundreds of Louisianans who've successfully filed their own motions
        </p>
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
          View Pricing Options
        </a>
      </section>
    </main>
  )
}