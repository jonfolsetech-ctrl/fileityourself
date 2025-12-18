'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Portal() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    } else if (status === 'authenticated') {
      const user = session?.user as any
      // Redirect admin to admin dashboard
      if (user?.role === 'admin') {
        router.push('/admin')
      }
    }
  }, [status, session, router])

  if (status === 'loading') {
    return (
      <main style={{ maxWidth: '1200px', margin: '4rem auto', padding: '2rem', textAlign: 'center' }}>
        <p>Loading...</p>
      </main>
    )
  }

  if (!session) {
    return null
  }

  const user = session.user as any

  return (
    <main style={{ maxWidth: '1200px', margin: '2rem auto', padding: '2rem' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '2rem',
        borderRadius: '12px',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Welcome, {user.name}!</h1>
          <p style={{ opacity: 0.9 }}>Your Plan: <strong>{user.plan || 'No active plan'}</strong></p>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          style={{
            background: 'white',
            color: '#667eea',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>

      {/* Content Sections */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {/* Downloads */}
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#1a365d', marginBottom: '1rem', fontSize: '1.5rem' }}>📥 Your Downloads</h2>
          <p style={{ color: '#718096', marginBottom: '1.5rem' }}>Access your workbook materials</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a
              href="/workbook/FileItYourself_Workbook.txt"
              download
              style={{
                background: '#667eea',
                color: 'white',
                padding: '1rem',
                borderRadius: '8px',
                textDecoration: 'none',
                textAlign: 'center',
                fontWeight: '500'
              }}
            >
              📄 Download Workbook PDF
            </a>
            <a
              href="/workbook/templates.zip"
              download
              style={{
                background: '#667eea',
                color: 'white',
                padding: '1rem',
                borderRadius: '8px',
                textDecoration: 'none',
                textAlign: 'center',
                fontWeight: '500'
              }}
            >
              📋 Download Templates
            </a>
          </div>
        </div>

        {/* Resources */}
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#1a365d', marginBottom: '1rem', fontSize: '1.5rem' }}>📚 Resources</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ padding: '0.75rem 0', borderBottom: '1px solid #e2e8f0' }}>
              <a href="#" style={{ color: '#667eea', textDecoration: 'none' }}>Getting Started Guide</a>
            </li>
            <li style={{ padding: '0.75rem 0', borderBottom: '1px solid #e2e8f0' }}>
              <a href="#" style={{ color: '#667eea', textDecoration: 'none' }}>How to File in Louisiana</a>
            </li>
            <li style={{ padding: '0.75rem 0', borderBottom: '1px solid #e2e8f0' }}>
              <a href="#" style={{ color: '#667eea', textDecoration: 'none' }}>Legal Terms Glossary</a>
            </li>
            <li style={{ padding: '0.75rem 0' }}>
              <a href="#" style={{ color: '#667eea', textDecoration: 'none' }}>FAQ</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#1a365d', marginBottom: '1rem', fontSize: '1.5rem' }}>💬 Support</h2>
          <p style={{ color: '#718096', marginBottom: '1.5rem' }}>Need help? We're here for you.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a
              href="mailto:support@fileityourself.com"
              style={{
                background: '#f7fafc',
                color: '#1a365d',
                padding: '1rem',
                borderRadius: '8px',
                textDecoration: 'none',
                textAlign: 'center',
                fontWeight: '500',
                border: '2px solid #e2e8f0'
              }}
            >
              📧 Email Support
            </a>
            {(user.plan === 'Premium' || user.plan === 'Pro') && (
              <a
                href="#"
                style={{
                  background: '#f7fafc',
                  color: '#1a365d',
                  padding: '1rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  textAlign: 'center',
                  fontWeight: '500',
                  border: '2px solid #e2e8f0'
                }}
              >
                📞 Schedule Consultation
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Account Info */}
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginTop: '2rem'
      }}>
        <h2 style={{ color: '#1a365d', marginBottom: '1rem' }}>Account Information</h2>
        <div style={{ color: '#4a5568' }}>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Plan:</strong> {user.plan || 'No active plan'}</p>
        </div>
      </div>
    </main>
  )
}
