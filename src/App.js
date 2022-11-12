import logo from './logo.svg';
import Homecard from './Components/Homecard.jsx';
import Hero from './Components/Hero.jsx';
import './App.css';
import Programscard from './Components/Programscard';
import Formancard from './Components/Formancard';


function App() {
  
  return (
    <div className="App"> 
    <Hero />
    <Programscard/>
    </div>
  );
}

export default App;
