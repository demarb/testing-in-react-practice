# Setup Vitest React Testing Steps taken

## Steps Taken:

1. Install @testing-library/react
2. Install @testing-library/jest-dom for added functionality like toBeInTheDocument
3. Install vitest
4. Install jsdom
5. Add to top of vite.config.js
   /// <reference types="vitest" />
   /// <reference types="vite/client" />
6. Add to vite config.js
   test: {
   globals: true,
   environment: 'jsdom',
   // setupFiles: './src/setupTests.js',
   // you might want to disable it, if you don't have tests that rely on CSS
   // since parsing CSS is slow
   // css: true,
   },
7. Add to package.json
   "test": "vitest"
8. Install msw; if you are doing mocking
9. npm install --save-dev jest jest-axe jest-environment-jsdom ; this is for accesibility testing. Some packages may already have been installed. Check taskslicr for example

## Shortcut install :

npm i @testing-library/react @testing-library/jest-dom vitest jsdom msw
npm install --save-dev jest jest-axe jest-environment-jsdom

## Types of Test Covered:

1. Basic Component Testing
2. Multiple Elements
3. Event Handlers
4. State Hooks
5. Async Function Calls- API - Mocking
6. Custom Hooks
7. Async Custom Hooks
8. Zustand State Management
