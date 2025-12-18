'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    } else if (status === 'authenticated') {
      const user = session?.user as any
      if (user?.role !== 'admin') {
        router.push('/portal')
      } else {
        loadUsers()
      }
    }
  }, [status, session, router])

  const loadUsers = async () => {
    try {
      const response = await fetch('/api/admin/users')
      const data = await response.json()
      setUsers(data.users || [])
      setLoading(false)
    } catch (error) {
      console.error('Failed to load users:', error)
      setLoading(false)
    }
  }

  if (status === 'loading' || loading) {
    return (
      <main style={{ maxWidth: '1400px', margin: '4rem auto', padding: '2rem', textAlign: 'center' }}>
        <p>Loading...</p>
      </main>
    )
  }

  if (!session) {
    return null
  }

  const user = session.user as any

  return (
    <main style={{ maxWidth: '1400px', margin: '2rem auto', padding: '2rem' }}>
      {/* Admin Header */}
      <div style={{
        background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
        color: 'white',
        padding: '2rem',
        borderRadius: '12px',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔐 Master Admin Dashboard</h1>
          <p style={{ opacity: 0.9 }}>Full system access - {user.email}</p>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          style={{
            background: 'white',
            color: '#dc2626',
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

      {/* Quick Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          background: 'white',
          padding: '1.5rem',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👥</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a365d' }}>{users.length}</div>
          <div style={{ color: '#718096' }}>Total Users</div>
        </div>
        <div style={{
          background: 'white',
          padding: '1.5rem',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📦</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a365d' }}>
            {users.filter(u => u.plan && u.plan !== 'none').length}
          </div>
          <div style={{ color: '#718096' }}>Active Plans</div>
        </div>
        <div style={{
          background: 'white',
          padding: '1.5rem',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💰</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a365d' }}>
            {users.filter(u => u.plan === 'Premium').length}
          </div>
          <div style={{ color: '#718096' }}>Premium Users</div>
        </div>
      </div>

      {/* Users Table */}
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#1a365d', marginBottom: '1.5rem' }}>All Users</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                <th style={{ padding: '1rem', textAlign: 'left', color: '#4a5568' }}>Name</th>
                <th style={{ padding: '1rem', textAlign: 'left', color: '#4a5568' }}>Email</th>
                <th style={{ padding: '1rem', textAlign: 'left', color: '#4a5568' }}>Plan</th>
                <th style={{ padding: '1rem', textAlign: 'left', color: '#4a5568' }}>Joined</th>
                <th style={{ padding: '1rem', textAlign: 'left', color: '#4a5568' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={u.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1rem', color: '#1a365d' }}>{u.name}</td>
                  <td style={{ padding: '1rem', color: '#4a5568' }}>{u.email}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{
                      background: u.plan && u.plan !== 'none' ? '#667eea' : '#e2e8f0',
                      color: u.plan && u.plan !== 'none' ? 'white' : '#4a5568',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}>
                      {u.plan || 'No plan'}
                    </span>
                  </td>
                  <td style={{ padding: '1rem', color: '#718096', fontSize: '0.875rem' }}>
                    {new Date(u.createdAt).toLocaleDateString()}
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <button style={{
                      background: '#f7fafc',
                      border: '1px solid #e2e8f0',
                      padding: '0.5rem 1rem',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      color: '#4a5568',
                      fontSize: '0.875rem'
                    }}>
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ padding: '2rem', textAlign: 'center', color: '#718096' }}>
                    No users registered yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginTop: '2rem'
      }}>
        <h2 style={{ color: '#1a365d', marginBottom: '1.5rem' }}>Quick Actions</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="/portal"
            style={{
              background: '#667eea',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            View Customer Portal
          </a>
          <a
            href="/pricing"
            style={{
              background: '#f7fafc',
              color: '#1a365d',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500',
              border: '2px solid #e2e8f0'
            }}
          >
            View Pricing Page
          </a>
        </div>
      </div>
    </main>
  )
}
