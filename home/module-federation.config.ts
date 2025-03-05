export const mfConfig = {
  name: "home",
  filename: "remoteEntry.js", // ✅ Ensure this is here
  exposes: {
    "./Header": "./src/components/Header.tsx",
    "./Footer": "./src/components/Footer.tsx",
    "./tailwind": "./src/index.css", // ✅ Explicitly expose styles
    "./products": "./src/products.ts"
  },
  shared: ["react", "react-dom"],
  "tailwindcss": { singleton: true, requiredVersion: false },  // ✅ Ensure only one instance
};
