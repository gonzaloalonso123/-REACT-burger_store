import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MenuScreen from './components/MenuScreen';
import NavBar from './components/NavBar';


function App() {
  return (
   <>
   <Router>
    <NavBar />
    <Routes>
      <Route path = "/menu" element = {<MenuScreen/>} />
      <Route path = "/cart" element = {<MenuScreen/>} />
      <Route path = "/contact" element = {<MenuScreen/>} />
    </Routes>
   </Router>
   </>
  );
}

export default App;
