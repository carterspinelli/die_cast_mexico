# Die Cast Mexico Website

A bilingual (Spanish/English) Gatsby.js website for Die Cast Mexico, delivering a sophisticated multilingual industrial manufacturing presentation with advanced interactive design and smooth, intelligent animations.

## Technologies Used

- Gatsby.js
- React
- Framer Motion
- AOS Animations
- Internationalization (i18n)
- Radix UI Components
- Styled Components
- Responsive Interaction Design

## Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/die-cast-mexico.git
   cd die-cast-mexico
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run develop
   # or
   yarn develop
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To preview the production build locally:

```bash
npm run serve
# or
yarn serve
```

## Folder Structure

- `/src`: Source code
  - `/components`: React components
  - `/context`: Context providers (including LanguageContext)
  - `/data`: Static data and translations
  - `/images`: Images used in the site
  - `/pages`: Page components
  - `/utils`: Utility functions

## Languages

The site supports both English and Spanish languages. Language switching is handled by the custom language context.

## Animation

The site uses AOS (Animate On Scroll) for smooth animations. Configuration can be found in the Layout component.

## Customization

To customize the site:

1. Edit content in `/src/data/translations` for multilingual text
2. Modify styles in component files (styled-components)
3. Update images in the `/static/images` directory