export const mfConfig = {
  name: "pdp",
  filename: "remoteEntry.js", // ✅ Ensure this is here
  remotes: {
    home: "home@http://localhost:3000/remoteEntry.js",
  },
  exposes: {},
  shared: ["react", "react-dom"],
};
