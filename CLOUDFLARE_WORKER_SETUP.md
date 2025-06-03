# Cloudflare Worker Setup for IP-based Language Detection

This guide explains how to set up the Cloudflare Worker for automatic language detection based on visitor's country.

## Setup Instructions

### 1. Access Cloudflare Dashboard
- Log into your Cloudflare dashboard
- Navigate to your domain (diecastmexico.com)
- Go to **Workers & Pages** section

### 2. Create a New Worker
- Click **Create application**
- Choose **Create Worker**
- Give it a name like `country-detection` or `language-detector`

### 3. Deploy the Worker Code
- Replace the default worker code with the contents of `cloudflare-worker.js`
- Click **Save and Deploy**

### 4. Set up Worker Route
- Go to **Workers & Pages** > **Overview**
- Click on your worker name
- Go to **Settings** > **Triggers**
- Click **Add route**
- Add route: `diecastmexico.com/*`
- Select your zone from the dropdown
- Click **Save**

### 5. Test the Implementation
- Visit your website
- Open browser developer tools > Application/Storage > Cookies
- Look for a cookie named `cf-country` with your country code
- The website should automatically display in Spanish for Mexican visitors (MX) and English for others

## How It Works

1. **Cloudflare Worker**: Intercepts all requests to your domain
2. **Country Detection**: Uses `request.cf.country` to get visitor's country code
3. **Cookie Setting**: Sets a `cf-country` cookie with the detected country
4. **Gatsby Integration**: Your site reads this cookie to determine language preference

## Cookie Details
- **Name**: `cf-country`
- **Value**: Two-letter country code (e.g., "MX", "US", "CA")
- **Expires**: 30 days
- **Security**: Secure, SameSite=Lax

## Fallback Behavior
If the Cloudflare Worker or cookie is not available, the site will:
1. Check for saved language preference in localStorage
2. Fall back to browser language detection
3. Default to English if detection fails

## Debugging
- Check the `X-Visitor-Country` header in network requests for country detection
- Monitor the `cf-country` cookie in browser developer tools
- Worker execution logs are available in Cloudflare dashboard