import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import "home/tailwind";

import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "./components/PDPContent";


const App = () => (
<BrowserRouter>
  <div className="mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      <Route path="/product/:id" element={<PDPContent />}>
      <PDPContent />
      </Route>
    </div>
    <Footer />
  </div>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);