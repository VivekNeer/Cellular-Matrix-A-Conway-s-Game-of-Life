import { Routes, Route } from "react-router-dom";
import CustomFooter from './components/CustomFooter';
import CustomNavbar from './components/CustomNavbar';
import Home from './pages/Home';
import Gallery from  './pages/Gallery';
import Registeration from  './pages/Regis';
import About from  './pages/About';
import Sign from  './pages/Sign';


const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <CustomNavbar/>
      <div className="flex-grow relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/regis" element={<Registeration />} />
          <Route path="/signin" element={<Sign />} />
        </Routes>
      </div>
      <CustomFooter />
    </div> 
  )
}

export default App