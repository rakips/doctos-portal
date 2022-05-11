
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import NotFound from './Pages/Shared/NotFound';
import Appointment from './Pages/Appointment/Appointment';


function App() {
  return (
    <div className="Apps px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

    </div>
  );
}

export default App;
