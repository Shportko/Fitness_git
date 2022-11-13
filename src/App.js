import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import RowRadioButtonsGroup from './Components/Programscard';
import Hero from './Components/Hero';
import Homecard from './Components/Homecard';
import SimplePaper from './Components/Formancard';



function App() {
  return (
    <div className="App">
     <Hero/> 
     <Routes>
     <Route path="/" element={<Homecard />} />
     <Route path="programsforman" element={<SimplePaper />} />
     <Route path="programs" element={<RowRadioButtonsGroup />} />
     </Routes>
    </div>
  );
}


export default App;
