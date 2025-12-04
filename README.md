# FusionTech React Web Application

This is a modern React web application built with Vite, featuring a complete IT solutions company website with Home, About, Services, Portfolio, and Contact pages.

## 🚀 Features

### Core Functionality

- **Single Page Application (SPA)** - Fast navigation without page reloads using React Router
- **Responsive Design** - Mobile-first design that works on all devices
- **Smooth Animations** - AOS (Animate On Scroll) library integration
- **Form Validation** - Comprehensive client-side validation for contact form
- **Portfolio Filtering** - Interactive project filtering by category
- **Modal System** - Project detail modals with full information
- **Navigation** - Sticky header with scroll effects and mobile hamburger menu

### Pages Included

1. **Home** - Hero section, services preview, stats counter, tech stack showcase
2. **About** - Company story, timeline, mission/vision, values, team, awards
3. **Services** - Detailed service descriptions with technologies and features
4. **Portfolio** - Filterable project showcase with modals
5. **Contact** - Contact form with validation, contact information, FAQ section

## 🛠️ Technology Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **AOS** - Animate On Scroll library
- **Font Awesome** - Icon library
- **Google Fonts** - Poppins and Inter fonts

## 📦 Installation

1. Navigate to the project directory:

```bash
cd fusiontech-react
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit:

```
http://localhost:5173
```

(If port 5173 is in use, Vite will automatically use the next available port)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
fusiontech-react/
├── public/
│   └── images/           # Static images and assets
├── src/
│   ├── components/       # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   └── Contact.jsx
│   ├── data/            # Data files
│   │   └── projects.json
│   ├── styles/          # CSS files
│   │   └── style.css
│   ├── App.jsx          # Main app component with routing
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## ✨ Features Preserved from Original

All functionality from the original HTML/CSS/JavaScript website has been successfully migrated to React:

### Navigation

- ✅ Sticky navbar with scroll effects
- ✅ Mobile hamburger menu
- ✅ Active link highlighting
- ✅ Smooth scrolling
- ✅ Hide/show on scroll

### Home Page

- ✅ Animated hero section with floating tech icons
- ✅ Stats counter animation
- ✅ Services preview grid
- ✅ Why Choose Us section
- ✅ Technologies showcase
- ✅ CTA section

### About Page

- ✅ Company story
- ✅ Timeline visualization
- ✅ Mission & Vision cards
- ✅ Core values grid
- ✅ Leadership team section
- ✅ Awards & recognition
- ✅ Company statistics

### Services Page

- ✅ Service detail sections
- ✅ Feature lists
- ✅ Technology tags
- ✅ Development process timeline
- ✅ Alternating layouts

### Portfolio Page

- ✅ Project filtering by category
- ✅ Project cards with hover effects
- ✅ Modal popups with full project details
- ✅ Technology badges
- ✅ Client information
- ✅ Click-outside and ESC key to close modals

### Contact Page

- ✅ Full form validation
  - Required fields
  - Email format validation
  - Phone number validation
  - Character length validation
- ✅ Real-time error messages
- ✅ Success notification
- ✅ Contact information cards
- ✅ FAQ accordion
- ✅ Social media links

### Global Features

- ✅ Scroll-to-top on route change
- ✅ AOS animations throughout
- ✅ Consistent header/footer across pages
- ✅ Breadcrumb navigation
- ✅ Responsive design for all screen sizes

## 🎨 Styling

The application uses the original CSS file (`style.css`) which includes:

- Custom CSS variables for theming
- Responsive breakpoints
- Smooth transitions and animations
- Professional color scheme
- Modern typography

## 🚀 Deployment

To build for production:

```bash
npm run build
```

This creates an optimized build in the `dist` folder that can be deployed to any static hosting service like:

- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## 📝 Notes

- The contact form currently simulates submission (no backend integration)
- Portfolio project images use placeholders (add actual images to `public/images/projects/`)
- All external links are set to `#` (update with actual URLs)
- The app uses Font Awesome icons loaded from CDN in `index.html`

## 🔄 Migration Summary

This React version maintains 100% feature parity with the original static website while adding:

- Single Page Application benefits (faster navigation)
- Component reusability
- Better state management
- Modern React patterns (hooks, functional components)
- Easier maintainability and scalability
- Development experience improvements with Vite

## 📞 Support

For questions or issues, please contact the development team.

---

Built with ❤️ using React + Vite

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
