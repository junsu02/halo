import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const IdeaInput = () => {
    const [idea, setIdea] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!idea.trim())
            return;
        // In a real app, save to context/store here
        navigate('/market'); // Move to next step
    };
    return (_jsxs("div", { className: "page-container fade-in", children: [_jsxs("div", { className: "page-header", children: [_jsx("h2", { children: "\uC5B4\uB5A4 \uC11C\uBE44\uC2A4\uB97C \uB9CC\uB4E4\uACE0 \uC2F6\uC73C\uC2E0\uAC00\uC694?" }), _jsx("p", { children: "\uBA38\uB9BF\uC18D\uC5D0 \uC788\uB294 \uC544\uC774\uB514\uC5B4\uB97C \uC790\uC720\uB86D\uAC8C \uC801\uC5B4\uC8FC\uC138\uC694. Halo\uAC00 \uBD84\uC11D\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4." })] }), _jsxs("div", { style: { display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'start' }, children: [_jsx("div", { className: "halo-card", children: _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { className: "halo-form-group", children: [_jsx("label", { className: "halo-label", children: "\uC544\uC774\uB514\uC5B4 \uC0C1\uC138 \uC124\uBA85" }), _jsx("textarea", { className: "halo-textarea", value: idea, onChange: (e) => setIdea(e.target.value), placeholder: "\uC608: \uC704\uCE58 \uAE30\uBC18\uC73C\uB85C \uC8FC\uBCC0\uC758 \uCC44\uC2DD \uC2DD\uB2F9\uC744 \uCC3E\uC544\uC8FC\uACE0, \uC608\uC57D\uAE4C\uC9C0 \uAC00\uB2A5\uD55C \uC571. \uC0AC\uC6A9\uC790 \uB9AC\uBDF0 \uAE30\uB2A5\uC744 \uC911\uC2EC\uC73C\uB85C \uCEE4\uBBA4\uB2C8\uD2F0\uB97C \uD615\uC131\uD558\uACE0...", rows: 12, style: { resize: 'vertical' } })] }), _jsxs("div", { style: { display: 'flex', justifyContent: 'flex-end', gap: '1rem' }, children: [_jsx("button", { type: "button", className: "btn secondary", children: "\uC784\uC2DC \uC800\uC7A5" }), _jsx("button", { type: "submit", className: "btn primary", children: "\uC2DC\uC7A5 \uBD84\uC11D \uC2DC\uC791\uD558\uAE30 \u2192" })] })] }) }), _jsxs("div", { className: "halo-card", style: { background: '#f8fafc', borderStyle: 'dashed' }, children: [_jsx("h3", { style: { marginBottom: '1rem', color: '#6366f1' }, children: "\uD83D\uDCA1 \uC791\uC131 \uD301" }), _jsxs("ul", { style: { display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem', color: '#64748b' }, children: [_jsxs("li", { children: [_jsx("strong", { children: "\uB300\uC0C1 \uACE0\uAC1D (Who)" }), _jsx("br", {}), "\uB204\uAC00 \uC774 \uC11C\uBE44\uC2A4\uB97C \uAC00\uC7A5 \uD544\uC694\uB85C \uD560\uAE4C\uC694?"] }), _jsxs("li", { children: [_jsx("strong", { children: "\uD574\uACB0\uD558\uB824\uB294 \uBB38\uC81C (Why)" }), _jsx("br", {}), "\uD604\uC7AC \uADF8\uB4E4\uC774 \uACAA\uB294 \uBD88\uD3B8\uD568\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?"] }), _jsxs("li", { children: [_jsx("strong", { children: "\uC8FC\uC694 \uAE30\uB2A5 (What)" }), _jsx("br", {}), "\uC5B4\uB5A4 \uD575\uC2EC \uAE30\uB2A5\uC73C\uB85C \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uB098\uC694?"] })] })] })] })] }));
};
export default IdeaInput;
