export const mfConfig = {
  name: "cart",
  filename: "remoteEntry.js", // ✅ Ensure this is here
  remotes: {
    home: "home@http://localhost:3000/remoteEntry.js",
    pdp: "pdp@http://localhost:3001/remoteEntry.js",
    cart: "cart@http://localhost:3002/remoteEntry.js",
  },
  exposes: {
    "./cart": "./src/cart.ts",
    "./Login": "./src/Login.tsx",
    "./MiniCart": "./src/MiniCart.tsx",
    "./CartContent": "./src/CartContent.tsx",
  },
  shared: ["react", "react-dom"],
};
