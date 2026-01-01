import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
const PrototypeSimulator = () => {
    const [selectedTool, setSelectedTool] = useState('click');
    return (_jsxs("div", { className: "fade-in", style: { height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column' }, children: [_jsxs("div", { style: { padding: '1rem 2rem', background: 'white', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }, children: [_jsx("div", { children: _jsx("h2", { style: { fontSize: '1.25rem' }, children: "Prototyper / \uCC44\uC2DD \uC608\uC57D \uC571 v1.0" }) }), _jsxs("div", { style: { display: 'flex', gap: '1rem' }, children: [_jsx("button", { className: "btn secondary", style: { padding: '0.5rem 1rem', fontSize: '0.9rem' }, children: "\u25B6 \uBBF8\uB9AC\uBCF4\uAE30" }), _jsx("button", { className: "btn primary", style: { padding: '0.5rem 1rem', fontSize: '0.9rem' }, children: "\uCF54\uB4DC \uB0B4\uBCF4\uB0B4\uAE30" })] })] }), _jsxs("div", { style: { flex: 1, display: 'flex', background: '#f1f5f9', overflow: 'hidden' }, children: [_jsxs("div", { style: { width: '60px', background: 'white', borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem 0', gap: '1.5rem' }, children: [_jsx(ToolIcon, { icon: "\uD83D\uDDB1\uFE0F", active: selectedTool === 'click', onClick: () => setSelectedTool('click') }), _jsx(ToolIcon, { icon: "\u2B1C", active: selectedTool === 'box', onClick: () => setSelectedTool('box') }), _jsx(ToolIcon, { icon: "T", active: selectedTool === 'text', onClick: () => setSelectedTool('text') }), _jsx(ToolIcon, { icon: "\uD83D\uDDBC\uFE0F", active: selectedTool === 'img', onClick: () => setSelectedTool('img') })] }), _jsx("div", { style: { flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }, children: _jsxs("div", { style: {
                                width: '375px',
                                height: '812px',
                                background: 'white',
                                borderRadius: '40px',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                border: '8px solid #333',
                                position: 'relative',
                                overflow: 'hidden',
                                transform: 'scale(0.85)'
                            }, children: [_jsxs("div", { style: { height: '100%', display: 'flex', flexDirection: 'column' }, children: [_jsx("div", { style: { height: '44px', background: 'black', width: '100%' } }), _jsx("div", { style: { padding: '1rem', borderBottom: '1px solid #eee' }, children: _jsx("h3", { style: { fontSize: '1.1rem' }, children: "VegeTable" }) }), _jsxs("div", { style: { padding: '1rem', flex: 1 }, children: [_jsx("div", { style: { background: '#f8fafc', borderRadius: '12px', height: '120px', marginBottom: '1rem' } }), _jsx("div", { style: { background: '#f8fafc', borderRadius: '12px', height: '120px', marginBottom: '1rem' } }), _jsx("div", { style: { background: '#f8fafc', borderRadius: '12px', height: '120px', marginBottom: '1rem' } })] }), _jsxs("div", { style: { height: '83px', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingBottom: '20px' }, children: [_jsx("span", { children: "\uD83C\uDFE0" }), _jsx("span", { children: "\uD83D\uDD0D" }), _jsx("span", { children: "\uD83D\uDC64" })] })] }), _jsx("div", { style: { position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '150px', height: '30px', background: '#333', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' } })] }) }), _jsxs("div", { style: { width: '280px', background: 'white', borderLeft: '1px solid #e2e8f0', padding: '1.5rem', display: 'flex', flexDirection: 'column' }, children: [_jsx("h4", { style: { marginBottom: '1.5rem', fontSize: '0.9rem', color: '#64748b', textTransform: 'uppercase' }, children: "\uC18D\uC131 (Properties)" }), _jsxs("div", { className: "halo-form-group", children: [_jsx("label", { className: "halo-label", style: { fontSize: '0.9rem' }, children: "\uBC30\uACBD\uC0C9" }), _jsxs("div", { style: { display: 'flex', gap: '0.5rem' }, children: [_jsx("div", { style: { width: '24px', height: '24px', borderRadius: '50%', background: 'white', border: '1px solid #ddd' } }), _jsx("div", { style: { width: '24px', height: '24px', borderRadius: '50%', background: '#f8fafc', border: '1px solid #ddd' } }), _jsx("div", { style: { width: '24px', height: '24px', borderRadius: '50%', background: '#1e293b', border: '1px solid #ddd' } })] })] }), _jsxs("div", { className: "halo-form-group", children: [_jsx("label", { className: "halo-label", style: { fontSize: '0.9rem' }, children: "\uB108\uBE44 (Width)" }), _jsx("input", { type: "text", className: "halo-input", defaultValue: "100%", style: { padding: '0.5rem' } })] })] })] })] }));
};
// Helper Icon Component
const ToolIcon = ({ icon, active, onClick }) => (_jsx("div", { onClick: onClick, style: {
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px',
        cursor: 'pointer',
        background: active ? '#eff6ff' : 'transparent',
        border: active ? '1px solid #bfdbfe' : 'none',
        fontSize: '1.2rem'
    }, children: icon }));
export default PrototypeSimulator;
