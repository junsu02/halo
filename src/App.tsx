import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import IdeaInputPage from './components/IdeaInput';
import PrototypeSimulatorPage from './components/PrototypeSimulator';
import MarketResearchPage from './components/MarketResearch';

// Helper component to highlight active link
const NavLink = ({ to, children }: { to: string, children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <li>
      <Link to={to} className={isActive ? 'active' : ''}>
        {children}
      </Link>
    </li>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="brand-logo">Halo</div>
          </Link>
          <nav>
            <ul>
              <NavLink to="/">홈</NavLink>
              <NavLink to="/idea">아이디어 입력</NavLink>
              <NavLink to="/market">시장 탐색</NavLink>
              <NavLink to="/prototype">프로토타입</NavLink>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/idea" element={<IdeaInputPage />} />
            <Route path="/market" element={<MarketResearchPage />} />
            <Route path="/prototype" element={<PrototypeSimulatorPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;