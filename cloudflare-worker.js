/**
 * Cloudflare Worker for IP-based country detection
 * This worker sets a cookie with the visitor's country code
 * for automatic language detection on Die Cast Mexico website
 */

export default {
  async fetch(request, env, ctx) {
    // Get the country code from Cloudflare's CF object
    const country = request.cf?.country || 'US'; // Default to US if country is not available
    
    // Fetch the original response
    const response = await fetch(request);
    
    // Clone the response so we can modify headers
    const newResponse = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers
    });
    
    // Set the country cookie
    // Cookie expires in 30 days, secure, and httpOnly for security
    const cookieValue = `cf-country=${country}; Max-Age=2592000; Path=/; Secure; SameSite=Lax`;
    
    // Add the Set-Cookie header
    newResponse.headers.set('Set-Cookie', cookieValue);
    
    // Optional: Add country as a custom header for debugging
    newResponse.headers.set('X-Visitor-Country', country);
    
    return newResponse;
  }
};