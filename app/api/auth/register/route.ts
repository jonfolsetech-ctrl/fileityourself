import { NextResponse } from 'next/server'
import { hashPassword, readUsers, writeUsers } from '@/lib/auth'

export async function POST(req: Request) {
  try {
    const { email, password, name, plan, stripeCustomerId, sessionId } = await req.json()

    if (!email || !password || !name) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const users = await readUsers()
    
    // Check if user already exists
    const existingUser = users.find((u: any) => u.email === email)
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await hashPassword(password)

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      email,
      password: hashedPassword,
      name,
      plan: plan || 'none',
      stripeCustomerId: stripeCustomerId || null,
      sessionId: sessionId || null,
      createdAt: new Date().toISOString(),
    }

    users.push(newUser)
    await writeUsers(users)

    return NextResponse.json({ 
      message: 'User created successfully',
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        plan: newUser.plan,
      }
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
