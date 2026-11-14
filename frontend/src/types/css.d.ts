// Tells TypeScript that .css files can be imported.
// Next.js handles the CSS itself; this only stops the type checker
// from reporting `import "./globals.css"` as an unknown module.
declare module "*.css";
