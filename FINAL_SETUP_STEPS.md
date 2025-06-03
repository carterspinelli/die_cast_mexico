# Final Setup Steps for Language Detection

## Current Status
✅ Cloudflare Worker is working and detecting countries correctly
✅ Updated language detection code is implemented
❌ Worker route needs to be configured for production domain

## Complete These Steps to Activate Language Detection:

### Step 1: Configure Cloudflare Worker Route
1. Go to Cloudflare Dashboard
2. Navigate to **Workers & Pages**
3. Click on your worker: **country-detection**
4. Go to **Settings** → **Triggers**
5. Click **Add Custom Domain**
6. Enter: `diecastmexico.com/api/country-detection`
7. Click **Add Custom Domain**

### Step 2: Deploy Updated Code
Your updated language detection system needs to be deployed. Run:
```bash
gatsby build
```
Then deploy to your static hosting.

### Step 3: Test the Complete System

**Test URLs after deployment:**
- `https://diecastmexico.com/` → Should detect location (MX=Spanish, others=English)
- `https://diecastmexico.com/es/` → Always shows Spanish
- `https://diecastmexico.com/api/country-detection` → Should return "Worker is working! Country detected: [COUNTRY]"

**Expected Behavior:**
- Mexican visitors to root (`/`) automatically redirect to `/es/`
- Non-Mexican visitors see English content on root (`/`)
- Anyone visiting `/es/` sees Spanish content immediately
- Language preference is saved for return visits

### Step 4: Verify in Browser
1. Open Developer Tools (F12)
2. Go to Application → Cookies
3. Look for `cf-country` cookie with your country code
4. Check Console for any JavaScript errors

## Troubleshooting

**If worker route doesn't work immediately:**
- The system includes fallback IP detection services
- URL-based detection (`/es/` = Spanish) works regardless
- Browser language detection as final fallback

**If redirects don't work:**
- Clear browser cache and cookies
- Test in incognito/private mode
- Check browser console for JavaScript errors

## Technical Details

The updated system uses:
1. **URL Priority**: `/es/` or `/es` = Spanish, `/en/` = English
2. **IP Detection**: Your Cloudflare Worker + fallback services  
3. **Saved Preferences**: localStorage remembers user choices
4. **Browser Language**: Final fallback for detection

Once you complete Step 1 (Cloudflare route configuration), Mexican visitors will automatically see Spanish content when visiting your homepage.