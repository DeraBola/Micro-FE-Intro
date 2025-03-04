import ReactDOM from "react-dom/client";

import "./index.css";
import "home/tailwind"; 

import Header from "home/Header";
import Footer from "home/Footer";


const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
  <Header/>
  <div className="my-10 text-red-700">PDP Page Content</div>
  <Footer/>
</div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);