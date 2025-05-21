# Local Setup Instructions

To run this Die Cast Mexico website locally on your machine, follow these steps:

## Setting Up Your Local Environment

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd die_cast_mexico
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx gatsby develop
   ```
   
   > **Important**: The `npm run develop` command wasn't working because it's not defined in the package.json. However, you can directly use `npx gatsby develop` instead, which calls the Gatsby CLI directly.

4. **View the site**
   The site will be available at:
   ```
   http://localhost:8000
   ```
   
   GraphiQL (Gatsby's GraphQL IDE) will be available at:
   ```
   http://localhost:8000/___graphql
   ```

## Building for Production

To create a production build:

```bash
npx gatsby build
```

To serve the production build locally:

```bash
npx gatsby serve
```

## Common Issues and Fixes

### Port Already in Use
If port 8000 is already in use, you can specify a different port:

```bash
npx gatsby develop -p 9000
```

### "Missing script: develop" Error
If you see this error, it means the package.json doesn't have the script defined. Use the npx command instead:

```bash
npx gatsby develop
```

### Cache-Related Issues
If you encounter strange behavior, try clearing Gatsby's cache:

```bash
npx gatsby clean
```

## Environment Variables

If the site requires any API keys or environment variables, create a `.env.development` file in the root directory with the required variables:

```
# Example .env.development file
GATSBY_API_URL=https://example.com/api
```

## Notes on Dependencies

The site uses:
- Gatsby 4.x
- React 17.x
- Styled Components
- AOS animations

When updating dependencies, be mindful of version compatibility.