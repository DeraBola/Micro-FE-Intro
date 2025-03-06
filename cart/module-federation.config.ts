export const mfConfig = {
  name: "cart",
  filename: "remoteEntry.js", // ✅ Ensure this is here
  remotes: {
    home: "home@http://localhost:3000/remoteEntry.js",
    pdp: "pdp@http://localhost:3000/remoteEntry.js",
    cart: "cart@http://localhost:3000/remoteEntry.js",
  },
  exposes: {
    "./cart": "./src/cart.js",
    "./Login": "./src/Login.jsx",
    "./MiniCart": "./src/MiniCart.jsx",
    "./CartContent": "./src/CartContent.jsx",
  },
  shared: ["react", "react-dom"],
};
