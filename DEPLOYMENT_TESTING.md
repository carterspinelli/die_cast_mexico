# Testing Your Deployed Site

## Quick Verification Steps

### 1. Test Basic Site Loading
Visit: https://diecastmexico.com/
- Site should load without "Not Found" errors
- Navigation should work (Home, Contact, etc.)
- Both English and Spanish versions should be accessible

### 2. Test Language Detection System

**Method A: Browser Developer Tools**
1. Open https://diecastmexico.com/ in incognito/private mode
2. Open Developer Tools (F12)
3. Go to Application tab → Cookies
4. Look for cookie named `cf-country` with your country code
5. Check if language matches your location (MX = Spanish, others = English)

**Method B: Check Network Headers**
1. Open Developer Tools → Network tab
2. Refresh the page
3. Click on the main document request
4. Check Response Headers for:
   - `x-visitor-country: [YOUR_COUNTRY]`
   - `set-cookie: cf-country=[YOUR_COUNTRY]`

### 3. Test Language Switching
1. Use the language selector in the navigation
2. Verify it switches between English and Spanish
3. Check that the URL changes (/ for English, /es/ for Spanish)
4. Refresh the page - it should remember your selection

### 4. Test Cloudflare Worker Integration

**Option 1: Direct Worker Test**
Visit: https://country-detection.carter-spinelli.workers.dev/
- Should show: "Worker is working! Country detected: [YOUR_COUNTRY]"

**Option 2: Check Main Site Headers**
```bash
curl -I https://diecastmexico.com/
```
Look for country detection headers in the response.

## Expected Behavior

- **Mexican visitors (MX)**: Should see Spanish content automatically
- **Other countries**: Should see English content
- **Manual selection**: Should override automatic detection
- **Return visits**: Should remember user's language preference

## Troubleshooting

**If language detection isn't working:**
1. Clear all cookies and try again
2. Check if Cloudflare Worker route is configured: `diecastmexico.com/*`
3. Verify the worker is deployed and responding

**If static site shows "Not Found":**
1. Check that deployment used static hosting configuration
2. Verify build script `./build-for-static.sh` was used
3. Confirm `_redirects` file exists in public directory

## Manual Testing Commands

Test country detection:
```bash
curl -H "CF-IPCountry: MX" https://diecastmexico.com/
curl -H "CF-IPCountry: US" https://diecastmexico.com/
```

Test different pages:
- https://diecastmexico.com/ (English home)
- https://diecastmexico.com/es/ (Spanish home)
- https://diecastmexico.com/contact/ (English contact)
- https://diecastmexico.com/es/contact/ (Spanish contact)

All URLs should load without errors and display appropriate content.