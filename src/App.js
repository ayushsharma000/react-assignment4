// import './App.css';
import Home from './Home';
import Contact from './Contact';
import Student from './Student'; 
import Navbar from './Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/contact" element={<Contact />} /> 
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;