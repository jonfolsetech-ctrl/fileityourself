import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { readUsers, verifyPassword } from '@/lib/auth'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Check for master admin account
        if (
          credentials.email === process.env.MASTER_ADMIN_EMAIL &&
          credentials.password === process.env.MASTER_ADMIN_PASSWORD
        ) {
          return {
            id: 'master-admin',
            email: process.env.MASTER_ADMIN_EMAIL!,
            name: 'Master Admin',
            plan: 'admin',
            role: 'admin',
            stripeCustomerId: null,
          }
        }

        const users = await readUsers()
        const user = users.find((u: any) => u.email === credentials.email)

        if (!user) {
          return null
        }

        const isValid = await verifyPassword(credentials.password, user.password)

        if (!isValid) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          plan: user.plan,
          role: user.role || 'user',
          stripeCustomerId: user.stripeCustomerId,
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.plan = (user as any).plan
        token.role = (user as any).role
        token.stripeCustomerId = (user as any).stripeCustomerId
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).plan = token.plan;
        (session.user as any).role = token.role;
        (session.user as any).stripeCustomerId = token.stripeCustomerId
      }
      return session
    }
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
