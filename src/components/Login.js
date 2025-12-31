import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import { signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
const Login = ({ onLogin }) => {
    const [error, setError] = useState('');
    useEffect(() => {
        getRedirectResult(auth).then((result) => {
            if (result) {
                onLogin(result.user);
            }
        }).catch((error) => {
            setError(error.message);
        });
    }, [onLogin]);
    const handleGoogleLogin = async () => {
        try {
            await signInWithRedirect(auth, googleProvider);
        }
        catch (error) {
            setError(error.message);
        }
    };
    return (_jsxs("div", { style: { textAlign: 'center', padding: '50px' }, children: [_jsx("h1", { children: "\uB85C\uADF8\uC778" }), _jsx("p", { children: "\uC2A4\uD0C0\uD2B8\uC5C5 \uD504\uB85C\uD1A0\uD0C0\uC785 \uBE4C\uB354\uC5D0 \uB85C\uADF8\uC778\uD558\uC138\uC694." }), _jsx("button", { onClick: handleGoogleLogin, style: { padding: '10px 20px', fontSize: '16px' }, children: "Google\uB85C \uB85C\uADF8\uC778" }), error && _jsx("p", { style: { color: 'red' }, children: error })] }));
};
export default Login;
