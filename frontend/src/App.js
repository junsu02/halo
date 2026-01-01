import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import IdeaInputPage from './components/IdeaInput';
import PrototypeSimulatorPage from './components/PrototypeSimulator';
import MarketResearchPage from './components/MarketResearch';
// Helper component to highlight active link
const NavLink = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    return (_jsx("li", { children: _jsx(Link, { to: to, className: isActive ? 'active' : '', children: children }) }));
};
function App() {
    return (_jsx(Router, { children: _jsxs("div", { className: "App", children: [_jsxs("header", { className: "App-header", children: [_jsx(Link, { to: "/", style: { textDecoration: 'none' }, children: _jsx("div", { className: "brand-logo", children: "Halo" }) }), _jsx("nav", { children: _jsxs("ul", { children: [_jsx(NavLink, { to: "/", children: "\uD648" }), _jsx(NavLink, { to: "/idea", children: "\uC544\uC774\uB514\uC5B4 \uC785\uB825" }), _jsx(NavLink, { to: "/market", children: "\uC2DC\uC7A5 \uD0D0\uC0C9" }), _jsx(NavLink, { to: "/prototype", children: "\uD504\uB85C\uD1A0\uD0C0\uC785" })] }) })] }), _jsx("main", { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/idea", element: _jsx(IdeaInputPage, {}) }), _jsx(Route, { path: "/market", element: _jsx(MarketResearchPage, {}) }), _jsx(Route, { path: "/prototype", element: _jsx(PrototypeSimulatorPage, {}) })] }) })] }) }));
}
export default App;
