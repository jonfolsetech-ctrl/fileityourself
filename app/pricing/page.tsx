'use client'

import { useState } from 'react'

export default function Pricing() {
  const [loading, setLoading] = useState<string | null>(null)

  const handleCheckout = async (priceId: string, planName: string) => {
    setLoading(planName)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId, planName }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        alert('Error creating checkout session')
        setLoading(null)
      }
    } catch (error) {
      alert('Error creating checkout session')
      setLoading(null)
    }
  }

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
      <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '1rem', color: '#1a365d' }}>
        Choose Your Plan
      </h1>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#718096', marginBottom: '3rem' }}>
        One-time payment. Lifetime access. No subscriptions.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '12px', padding: '2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1a365d' }}>Basic</h2>
          <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#667eea', marginBottom: '1rem' }}>$49</div>
          <p style={{ color: '#718096', marginBottom: '2rem' }}>Perfect for simple cases</p>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', textAlign: 'left' }}>
            {['Basic motion templates', 'Filing instructions', 'Email support', 'Lifetime access'].map((feature, i) => (
              <li key={i} style={{ padding: '0.5rem 0', color: '#4a5568' }}>✓ {feature}</li>
            ))}
          </ul>
          <button onClick={() => handleCheckout(process.env.NEXT_PUBLIC_STRIPE_BASIC_PRICE_ID || 'price_basic', 'Basic')} disabled={loading !== null} style={{ width: '100%', background: loading === 'Basic' ? '#a0aec0' : '#667eea', color: 'white', border: 'none', padding: '1rem', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 'bold', cursor: loading === null ? 'pointer' : 'not-allowed' }}>
            {loading === 'Basic' ? 'Processing...' : 'Get Started'}
          </button>
        </div>

        <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', borderRadius: '12px', padding: '2rem', textAlign: 'center', position: 'relative', transform: 'scale(1.05)', boxShadow: '0 8px 16px rgba(0,0,0,0.2)' }}>
          <div style={{ position: 'absolute', top: '-12px', right: '20px', background: '#fbbf24', color: '#1a365d', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>MOST POPULAR</div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Pro</h2>
          <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>$99</div>
          <p style={{ opacity: 0.9, marginBottom: '2rem' }}>Everything you need</p>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', textAlign: 'left' }}>
            {['All motion templates', 'Step-by-step guidance', 'Sample filled documents', 'Priority email support', 'Legal terminology guide', 'Lifetime updates'].map((feature, i) => (
              <li key={i} style={{ padding: '0.5rem 0' }}>✓ {feature}</li>
            ))}
          </ul>
          <button onClick={() => handleCheckout(process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID || 'price_pro', 'Pro')} disabled={loading !== null} style={{ width: '100%', background: loading === 'Pro' ? '#d1d5db' : 'white', color: '#667eea', border: 'none', padding: '1rem', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 'bold', cursor: loading === null ? 'pointer' : 'not-allowed' }}>
            {loading === 'Pro' ? 'Processing...' : 'Get Started'}
          </button>
        </div>

        <div style={{ background: 'white', border: '2px solid #f59e0b', borderRadius: '12px', padding: '2rem', textAlign: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-12px', right: '20px', background: '#ef4444', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>ON SALE</div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1a365d' }}>Premium</h2>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ fontSize: '1.5rem', color: '#718096', textDecoration: 'line-through' }}>$149</div>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#ef4444' }}>$74.99</div>
          </div>
          <p style={{ color: '#718096', marginBottom: '2rem' }}>Complete peace of mind</p>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', textAlign: 'left' }}>
            {['Everything in Pro', 'Document review service', '30-min consultation', 'Phone support', 'Court procedure videos', 'Lifetime updates'].map((feature, i) => (
              <li key={i} style={{ padding: '0.5rem 0', color: '#4a5568' }}>✓ {feature}</li>
            ))}
          </ul>
          <button onClick={() => handleCheckout(process.env.NEXT_PUBLIC_STRIPE_PREMIUM_PRICE_ID || 'price_premium', 'Premium')} disabled={loading !== null} style={{ width: '100%', background: loading === 'Premium' ? '#a0aec0' : '#667eea', color: 'white', border: 'none', padding: '1rem', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 'bold', cursor: loading === null ? 'pointer' : 'not-allowed' }}>
            {loading === 'Premium' ? 'Processing...' : 'Get Started'}
          </button>
        </div>
      </div>

      <section style={{ marginTop: '4rem', maxWidth: '800px', margin: '4rem auto 0' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem', color: '#1a365d' }}>Frequently Asked Questions</h2>
        {[
          { q: 'Is this legally valid in Louisiana?', a: 'Yes! Our templates follow Louisiana state requirements and formatting guidelines.' },
          { q: 'Do I need a lawyer?', a: 'While we provide templates and guidance, complex cases may benefit from legal review. Our Premium plan includes a consultation.' },
          { q: 'What payment methods do you accept?', a: 'We accept all major credit cards and debit cards via secure Stripe payment processing.' },
          { q: 'Can I get a refund?', a: "Yes, we offer a 30-day money-back guarantee if you're not satisfied." }
        ].map((faq, i) => (
          <div key={i} style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#1a365d', marginBottom: '0.5rem' }}>{faq.q}</h3>
            <p style={{ color: '#718096', margin: 0 }}>{faq.a}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
