# Master Admin Setup

## Master Admin Credentials

A master admin account with full system access has been configured.

### Current Credentials (Development)
- **Email**: `admin@fileityourself.com`
- **Password**: `FileItAdmin2025!`

⚠️ **IMPORTANT**: These are DEVELOPMENT credentials only. For production, set different values in AWS Amplify environment variables:
- `MASTER_ADMIN_EMAIL`
- `MASTER_ADMIN_PASSWORD`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`

### Admin Access
1. Navigate to [/login](/login)
2. Login with the master admin credentials
3. You'll be automatically redirected to the Admin Dashboard at [/admin](/admin)

### Admin Dashboard Features
- 📊 **System Statistics**: View total users, active plans, and premium users
- 👥 **User Management**: See all registered users and their details
- 📦 **Plan Overview**: Monitor subscription plans and status
- 🔐 **Full Access**: Admin role bypasses all permission checks

### Security Notes
1. Master admin credentials are stored in environment variables (`.env` file locally)
2. The `.env` file is excluded from git via `.gitignore`
3. User data is stored in `data/users.json` (also excluded from git)
4. Always use strong, unique passwords in production
5. For Amplify deployment, add environment variables in the Amplify Console

### Setting Up Production Environment Variables in AWS Amplify

1. Go to AWS Amplify Console
2. Select your app
3. Go to "Environment variables" in the left sidebar
4. Add these variables:
   - `MASTER_ADMIN_EMAIL` - Your admin email
   - `MASTER_ADMIN_PASSWORD` - Strong password (at least 16 characters)
   - `NEXTAUTH_SECRET` - Generate with: `openssl rand -base64 32`
   - `NEXTAUTH_URL` - Your production URL (e.g., https://yourapp.amplifyapp.com)
   - Add your Stripe keys as well

### How Authentication Works
1. When you login with admin credentials, NextAuth checks if the email/password match the environment variables
2. If they match, you're logged in as the master admin with full access
3. Regular users are authenticated against the `data/users.json` file
4. Admin users can access `/admin` dashboard, while regular users go to `/portal`

### Testing Admin Access
1. Ensure development server is running: `npm run dev`
2. Visit http://localhost:3000/login
3. Enter admin credentials
4. You should be redirected to the admin dashboard


