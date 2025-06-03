# Cloudflare Worker Setup for IP-based Language Detection

## Current Status
✅ Worker deployed at: https://country-detection.carter-spinelli.workers.dev/
✅ Country detection working (confirmed with headers)
✅ Gatsby integration implemented with fallback logic

## Required for Production

To enable automatic language detection on your live site, add this Worker route in Cloudflare:

**Route**: `diecastmexico.com/*`
**Worker**: country-detection

### Steps to Add Route:
1. Cloudflare Dashboard → Workers & Pages → country-detection
2. Settings → Triggers → Add route
3. Route: `diecastmexico.com/*`
4. Zone: diecastmexico.com
5. Save

## How the Integration Works

**Current Implementation**:
- Gatsby checks for existing `cf-country` cookie
- If no cookie exists, fetches from your deployed worker
- Sets language based on country (MX = Spanish, others = English)
- Falls back to browser language if detection fails

**Worker Response** (verified working):
```
x-visitor-country: US
set-cookie: cf-country=US; SameSite=Lax; Secure; Path=/; Max-Age=2592000
```

## Testing the Integration

Your site now includes robust language detection:
1. Respects user's saved preference
2. Reads Cloudflare Worker cookie
3. Fetches from worker if needed
4. Falls back to browser language

The static deployment configuration is ready with proper routing rules for client-side navigation.