import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/route'
import { readUsers } from '@/lib/auth'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session || (session.user as any)?.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const users = await readUsers()
    
    // Remove password hashes from response
    const sanitizedUsers = users.map((user: any) => ({
      id: user.id,
      email: user.email,
      name: user.name,
      plan: user.plan,
      stripeCustomerId: user.stripeCustomerId,
      createdAt: user.createdAt,
    }))

    return NextResponse.json({ users: sanitizedUsers })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
