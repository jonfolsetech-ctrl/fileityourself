# Quick Admin Access Guide

## 🔐 Admin Login

**Development Credentials:**
- Email: `admin@fileityourself.com`
- Password: `FileItAdmin2025!`

**Access URL:** http://localhost:3000/login

---

## 🚀 Quick Start

1. **Start the server:**
   ```bash
   npm run dev
   ```

2. **Login as admin:**
   - Go to http://localhost:3000/login
   - Enter admin credentials
   - You'll be redirected to `/admin` dashboard

3. **Admin Dashboard Features:**
   - View all registered users
   - Monitor subscription plans
   - See system statistics
   - Access full system features

---

## 📋 Production Setup

For AWS Amplify, add these environment variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `MASTER_ADMIN_EMAIL` | Admin email address | admin@yourcompany.com |
| `MASTER_ADMIN_PASSWORD` | Strong admin password | Use 16+ chars with symbols |
| `NEXTAUTH_SECRET` | Auth encryption key | Generate with `openssl rand -base64 32` |
| `NEXTAUTH_URL` | Production URL | https://yourapp.amplifyapp.com |

**⚠️ IMPORTANT:** Never use development passwords in production!

---

## 🔧 Troubleshooting

**Can't login?**
- Check `.env` file exists in project root
- Verify credentials in `.env` file
- Restart dev server after changing `.env`

**Admin dashboard not loading?**
- Ensure you're logged in with admin account
- Check browser console for errors
- Verify NextAuth configuration

**Need to reset admin password?**
- Edit `.env` file
- Change `MASTER_ADMIN_PASSWORD` value
- Restart the server

---

## 📖 Full Documentation

See [ADMIN_README.md](ADMIN_README.md) for complete admin setup documentation.
