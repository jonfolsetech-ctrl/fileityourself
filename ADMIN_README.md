# Master Admin Setup

## Master Admin Credentials

A master admin account with full system access has been configured.

### Default Credentials
- **Email**: `admin@fileityourself.com`
- **Password**: `Admin123!Master`

⚠️ **IMPORTANT**: Change these credentials in production by setting environment variables:
- `MASTER_ADMIN_EMAIL`
- `MASTER_ADMIN_PASSWORD`

### Admin Access
Login at `/login` with the master admin credentials to access:
- Admin Dashboard: `/admin`
- View all users
- See system statistics
- Full access to all features

### Security Notes
1. The master admin credentials are stored in environment variables
2. Never commit `.env.local` with production credentials
3. Change the default password immediately in production
4. Admin role bypasses all permission checks
5. User data is stored in `data/users.json` (excluded from git)
