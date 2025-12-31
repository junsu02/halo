import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import IdeaInputPage from './components/IdeaInputPage';
import PrototypeSimulatorPage from './components/PrototypeSimulatorPage';
import MarketResearchPage from './components/MarketResearchPage';
function App() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);
    const handleLogin = (loggedInUser) => {
        setUser(loggedInUser);
    };
    const handleLogout = () => {
        auth.signOut();
    };
    if (!user) {
        return _jsx(Login, { onLogin: handleLogin });
    }
    return (_jsx(Router, { children: _jsxs("div", { className: "App", children: [_jsxs("header", { className: "App-header", children: [_jsx("h1", { children: "\uC2A4\uD0C0\uD2B8\uC5C5 \uD504\uB85C\uD1A0\uD0C0\uC785 \uBE4C\uB354" }), _jsx("nav", { children: _jsxs("ul", { children: [_jsx("li", { children: _jsx(Link, { to: "/", children: "\uD648" }) }), _jsx("li", { children: _jsx(Link, { to: "/idea", children: "\uC544\uC774\uB514\uC5B4 \uC785\uB825" }) }), _jsx("li", { children: _jsx(Link, { to: "/prototype", children: "\uD504\uB85C\uD1A0\uD0C0\uC785 \uC2DC\uBBAC\uB808\uC774\uD130" }) }), _jsx("li", { children: _jsx(Link, { to: "/market", children: "\uC2DC\uC7A5 \uC870\uC0AC" }) }), _jsx("li", { children: _jsx("button", { onClick: handleLogout, style: { background: 'none', border: 'none', color: 'white', cursor: 'pointer' }, children: "\uB85C\uADF8\uC544\uC6C3" }) })] }) })] }), _jsx("main", { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/idea", element: _jsx(IdeaInputPage, {}) }), _jsx(Route, { path: "/prototype", element: _jsx(PrototypeSimulatorPage, {}) }), _jsx(Route, { path: "/market", element: _jsx(MarketResearchPage, {}) })] }) })] }) }));
}
export default App;
