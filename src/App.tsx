import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import IdeaInputPage from './components/IdeaInputPage';
import PrototypeSimulatorPage from './components/PrototypeSimulatorPage';
import MarketResearchPage from './components/MarketResearchPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>스타트업 프로토타입 빌더</h1>
          <nav>
            <ul>
              <li><Link to="/">홈</Link></li>
              <li><Link to="/idea">아이디어 입력</Link></li>
              <li><Link to="/prototype">프로토타입 시뮬레이터</Link></li>
              <li><Link to="/market">시장 조사</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/idea" element={<IdeaInputPage />} />
            <Route path="/prototype" element={<PrototypeSimulatorPage />} />
            <Route path="/market" element={<MarketResearchPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;