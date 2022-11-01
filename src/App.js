import logo from './logo.svg';
import './App.css';
import Navbar from './components/barnav';
import Cuerpo from './components/cuerpo'
import Footer from './components/footer.jsx'
import { Route, Link, Routes } from "react-router-dom";
import Info from './components/info';
import Ruta2 from './components/ruta2';
function App() {

  let objCss = {
    border: "5px dotted red",
    color: "white",
    background: "gray"
  };

  let objCss2 = {
    border: "5px dotted blue",
    color: "yellow",
    background: "black"
  }

  return (
    <div>
        <Navbar />
        <ul>
            <li>
                <Link to={"/ruta2"}>Ir a Ruta 2</Link>
                </li>
                <li>
                    <Link to={"/inicio"}>Ir a Home</Link>
                </li>
                <li>
                    <Link to={"/info"}>Ir a Info</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/inicio" element={<Cuerpo/>} />
                <Route path="/info" element={<Info objCss={objCss} />} />
                <Route path="/ruta2" element={<Ruta2 objCss2={objCss2} />} />
            </Routes>
        <Cuerpo />
        <Footer />
      </div>
  );
}

export default App;
