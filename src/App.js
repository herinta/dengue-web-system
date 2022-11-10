import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';

import { Routes, Route} from "react-router-dom";
import Survey from './pages/Survey';
import Maps from './pages/Maps';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/survey" element={<Survey/>} />
        <Route path="/maps" element={<Maps/>} />
      </Routes>
    </div>
  );
}

export default App;
