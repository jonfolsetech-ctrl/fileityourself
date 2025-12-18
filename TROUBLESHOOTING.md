# Amplify Troubleshooting

## Issue: Build fails or pages don't load

### Solution 1: Verify Platform
1. Go to AWS Amplify Console
2. Click on your app
3. Go to **Hosting environments** 
4. Ensure "Amplify Hosting Compute" is selected (required for Next.js SSR)
5. If you see "Classic (S3 and CloudFront)", you need to migrate

### Solution 2: Check Build Settings
In Amplify Console → Build Settings:
- Ensure the amplify.yml is detected
- Node version should be 18.x or higher
- Check "Automatically detect and deploy SSR/SSG apps" is enabled

### Solution 3: Verify Environment Variables
All these must be set in Amplify Console → Environment Variables:
```
NEXTAUTH_SECRET
NEXTAUTH_URL
STRIPE_SECRET_KEY
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
NEXT_PUBLIC_SITE_URL
MASTER_ADMIN_EMAIL
MASTER_ADMIN_PASSWORD
```

### Solution 4: Check Build Logs
Common errors:
- **"Module not found"**: Missing dependencies - check package.json
- **"API route error"**: Environment variables not set
- **"Authentication error"**: NEXTAUTH_SECRET or NEXTAUTH_URL incorrect
- **"Build timeout"**: Try clearing cache in Amplify console

### Solution 5: Platform Migration (if needed)
If your app is on Classic hosting:
1. Contact AWS Support or
2. Create new Amplify app with Compute enabled
3. Connect same repository
4. Set environment variables
5. Deploy

## Manual Deployment Steps

If automatic deployment fails:

1. **Local build test**:
   ```bash
   npm ci
   npm run build
   npm start
   ```

2. **Check environment variables**:
   - Create `.env.local` with all required variables
   - Test authentication locally
   - Test Stripe checkout locally

3. **Verify Amplify settings**:
   - Build command: `npm run build`
   - Start command: `npm start`
   - Node version: 18.x

4. **Review build logs** in Amplify Console for specific errors

## Known Issues

### NextAuth requires server-side rendering
- Cannot use static export
- Must use Amplify Hosting Compute
- NEXTAUTH_URL must match your Amplify domain

### API Routes need compute
- All `/api/*` routes require SSR platform
- Classic hosting (S3) won't work
- Must enable Amplify Hosting Compute

### File-based storage limitation
- Current setup uses file system for user data
- Consider migrating to database (DynamoDB, RDS) for production
- File storage will reset on each deployment

## Contact Support

If issues persist:
1. Check Amplify Console → Build logs
2. Review specific error messages
3. Contact AWS Support with build ID
