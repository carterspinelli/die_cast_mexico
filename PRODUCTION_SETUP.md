# Production Setup for Die Cast Mexico

## Cloudflare Worker Configuration for diecastmexico.com

### Step 1: Deploy the Worker to Your Domain

1. Log into your Cloudflare dashboard
2. Navigate to Workers & Pages
3. Find your existing worker: `country-detection`
4. Go to Settings > Triggers
5. Add Custom Domain: `diecastmexico.com/api/country-detection`

### Step 2: Configure Worker Route

Add this route in your Cloudflare dashboard:
```
diecastmexico.com/api/country-detection
```

This will make the worker accessible at:
`https://diecastmexico.com/api/country-detection`

### Step 3: Verify Worker Response

The worker should return:
- Header: `X-Visitor-Country: [COUNTRY_CODE]`
- Cookie: `cf-country=[COUNTRY_CODE]`
- Body: `Worker is working! Country detected: [COUNTRY_CODE]`

### Step 4: Test Language Detection

**For Mexican visitors:**
- Visit `https://diecastmexico.com/` → Should redirect to `/es/` or show Spanish content
- Direct visit to `https://diecastmexico.com/es/` → Shows Spanish content immediately

**For non-Mexican visitors:**
- Visit `https://diecastmexico.com/` → Shows English content
- Visit `https://diecastmexico.com/es/` → Shows Spanish content (manual override)

### Alternative: Headers-Based Detection

If the worker route configuration doesn't work immediately, the system will fall back to:
1. Browser language detection
2. Manual language selection
3. localStorage preference storage

### Troubleshooting

**Worker not responding:**
- Check Cloudflare dashboard for worker errors
- Verify the custom domain is properly configured
- Test the worker directly at: `https://country-detection.carter-spinelli.workers.dev/`

**Language detection not working:**
- Open browser Developer Tools
- Check Network tab for `/api/country-detection` requests
- Verify cookies are being set with `cf-country` value
- Check console for any JavaScript errors

**Immediate URL-based detection:**
The system now prioritizes URL paths:
- `/es/` or `/es` → Always Spanish
- `/en/` → Always English  
- `/` → Detected based on location (MX=Spanish, others=English)