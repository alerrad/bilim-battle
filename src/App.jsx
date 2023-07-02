import { BrowserRouter } from "react-router-dom";

// Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Pages wrapper
import Pages from "./pages/Pages";

// Main styles
import "./assets/styles/Main.scss";


export default function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Pages/>
      <Footer/>
    </BrowserRouter>
  )
}