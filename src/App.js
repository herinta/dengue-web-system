import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';

import { Routes, Route} from "react-router-dom";
import Survey from './pages/Survey';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/survey" element={<Survey/>} />
      </Routes>
    </div>
  );
}

export default App;
