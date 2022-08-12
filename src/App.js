import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Coin from './components/Coin';
import CryptoList from './components/CryptoList';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/coin/:id" element={<Coin />} />
          <Route path="/" element={<CryptoList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
