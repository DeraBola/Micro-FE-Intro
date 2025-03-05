import ReactDOM from "react-dom/client";

import "./index.css";
import "home/tailwind"; 

import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "./components/PDPContent";


const App = () => (
  <div className="mx-auto max-w-6xl">
  <Header/>
  <div className="my-10"><PDPContent /></div>
  <Footer/>
</div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);