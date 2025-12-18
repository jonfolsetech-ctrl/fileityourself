# AWS Amplify Deployment Guide

## Prerequisites

Before deploying, ensure you have:
- AWS Amplify account
- GitHub repository connected to Amplify
- Stripe account with API keys
- All environment variables ready

## Step 1: Enable SSR in Amplify

In your Amplify Console:
1. Go to **App Settings** → **Build settings**
2. Under **App build specification**, ensure **Next.js SSR** is enabled
3. If not available, go to **Hosting environment** and select **Amplify Hosting Compute**

## Step 2: Required Environment Variables

Set these in AWS Amplify Console → App Settings → Environment Variables:

### Required Variables
```
NEXTAUTH_SECRET=<generate with: openssl rand -base64 32>
NEXTAUTH_URL=https://your-amplify-app-url.amplifyapp.com
STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_live_your_stripe_publishable_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_stripe_publishable_key
NEXT_PUBLIC_SITE_URL=https://your-amplify-app-url.amplifyapp.com
```

### Stripe Price IDs
```
STRIPE_BASIC_PRICE_ID=price_xxxxxxxxxxxxx
STRIPE_PRO_PRICE_ID=price_xxxxxxxxxxxxx
STRIPE_PREMIUM_PRICE_ID=price_xxxxxxxxxxxxx
```

### Master Admin Account
```
MASTER_ADMIN_EMAIL=admin@fileityourself.com
MASTER_ADMIN_PASSWORD=<your-secure-password>
```

## Build Settings

The build is configured in `amplify.yml` with:
- Node.js 18.x
- Standalone Next.js output
- Image optimization disabled for compatibility

## Common Issues & Solutions

### Issue: Build fails with peer dependency errors
**Solution**: Using `npm ci --legacy-peer-deps` in amplify.yml

### Issue: Runtime errors with Next.js
**Solution**: Added `next.config.js` with standalone output

### Issue: Images not loading
**Solution**: Set `images.unoptimized: true` in next.config.js

### Issue: Authentication not working
**Solution**: Verify all environment variables are set, especially NEXTAUTH_SECRET and NEXTAUTH_URL

### Issue: 404 on dynamic routes
**Solution**: Ensure artifacts baseDirectory is set to `.next` in amplify.yml

## Deployment Checklist

- [ ] Set all environment variables in Amplify Console
- [ ] Generate secure NEXTAUTH_SECRET
- [ ] Update NEXTAUTH_URL with your Amplify URL
- [ ] Configure Stripe webhooks to point to Amplify URL
- [ ] Change MASTER_ADMIN_PASSWORD from default
- [ ] Test authentication flow
- [ ] Test Stripe checkout
- [ ] Verify admin dashboard access

## Post-Deployment

1. Test the site at your Amplify URL
2. Login with admin credentials at `/login`
3. Verify admin dashboard at `/admin`
4. Test customer registration at `/register`
5. Test Stripe checkout flow
