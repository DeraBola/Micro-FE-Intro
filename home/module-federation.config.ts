export const mfConfig = {
  name: "home",
  filename: "remoteEntry.js", // ✅ Ensure this is here
  remotes: {
    home: "home@http://localhost:3000/remoteEntry.js",
    pdp: "pdp@http://localhost:3001/remoteEntry.js",
    cart: "cart@http://localhost:3002/remoteEntry.js",
  },
  exposes: {
    "./Header": "./src/components/Header.tsx",
    "./Footer": "./src/components/Footer.tsx",
    "./tailwind": "./src/index.css", // ✅ Explicitly expose styles
    "./products": "./src/products.ts"
  },
  shared: ["react", "react-dom"],
  "tailwindcss": { singleton: true, requiredVersion: false },  // ✅ Ensure only one instance
};
