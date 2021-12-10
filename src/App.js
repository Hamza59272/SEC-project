import Navbar from './components/Navbar';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css'
import Home from './Home';
import AvailableOrgans from './AvailableOrgans';
import Kidney from './Kidney';
import Stomach from './Stomach';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="available-organs" element={<AvailableOrgans />} /> 
          <Route path="available-organs/kidney" element={<Kidney />} />
          <Route path="available-organs/stomach" element={<Stomach />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;