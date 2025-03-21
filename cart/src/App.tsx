import ReactDOM from "react-dom/client";

import "./index.css";
import "remixicon/fonts/remixicon.css";
import Header from "home/Header";
import Footer from "home/Footer";
import CartContent from "./CardContent";

const App = () => (
  <div className="mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      <CartContent />
    </div>
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);