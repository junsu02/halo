import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const MarketResearch = () => {
    const [query, setQuery] = useState('채식 식당 예약 플랫폼');
    const [isSearching, setIsSearching] = useState(false);
    const handleSearch = () => {
        setIsSearching(true);
        setTimeout(() => setIsSearching(false), 1500); // Simulate API call
    };
    const competitors = [
        { name: "VegeTable", year: "2023", users: "50K+", match: "95%", desc: "위치 기반 비건 식당 지도 및 커뮤니티" },
        { name: "GreenEats", year: "2021", users: "120K+", match: "80%", desc: "친환경 식자재 배달 및 레시피 공유" },
        { name: "HappyCow", year: "1999", users: "1M+", match: "70%", desc: "글로벌 채식 식당 리뷰 및 검색 서비스" },
    ];
    return (_jsxs("div", { className: "page-container fade-in", children: [_jsxs("div", { className: "page-header", children: [_jsx("h2", { children: "\uC2DC\uC7A5 \uC720\uC0AC \uC81C\uD488 \uD0D0\uC0C9" }), _jsx("p", { children: "AI\uAC00 \uC804 \uC138\uACC4 \uB370\uC774\uD130\uB97C \uBD84\uC11D\uD558\uC5EC \uAC00\uC7A5 \uC720\uC0AC\uD55C \uC11C\uBE44\uC2A4\uB97C \uCC3E\uC544\uB4DC\uB9BD\uB2C8\uB2E4." })] }), _jsxs("div", { className: "halo-card", style: { marginBottom: '3rem', padding: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }, children: [_jsx("input", { type: "text", className: "halo-input", value: query, onChange: (e) => setQuery(e.target.value), placeholder: "\uBD84\uC11D\uD560 \uC544\uC774\uB514\uC5B4 \uD0A4\uC6CC\uB4DC\uB97C \uC785\uB825\uD558\uC138\uC694", style: { border: 'none', boxShadow: 'none', background: 'transparent', fontSize: '1.2rem', fontWeight: 500 } }), _jsx("button", { onClick: handleSearch, className: "btn primary", style: { minWidth: '120px' }, children: isSearching ? '분석 중...' : '재검색' })] }), _jsxs("div", { className: "analysis-results", children: [_jsxs("h3", { style: { marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }, children: ["\uD83D\uDCCA \uBD84\uC11D \uB9AC\uD3EC\uD2B8", _jsxs("span", { style: { fontSize: '0.9rem', fontWeight: 400, color: '#64748b' }, children: ["(", competitors.length, "\uAC1C\uC758 \uC720\uC0AC \uC11C\uBE44\uC2A4 \uBC1C\uACAC)"] })] }), _jsx("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }, children: competitors.map((comp, idx) => (_jsxs("div", { className: "halo-card", children: [_jsxs("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }, children: [_jsx("h4", { style: { fontSize: '1.25rem' }, children: comp.name }), _jsxs("span", { style: {
                                                background: CompColor(comp.match),
                                                color: 'white',
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '999px',
                                                fontSize: '0.8rem',
                                                fontWeight: 600
                                            }, children: ["\uC720\uC0AC\uB3C4 ", comp.match] })] }), _jsx("p", { style: { color: '#64748b', fontSize: '0.95rem', marginBottom: '1.5rem', minHeight: '3rem' }, children: comp.desc }), _jsxs("div", { style: { display: 'flex', gap: '1rem', fontSize: '0.85rem', color: '#94a3b8', borderTop: '1px solid #f1f5f9', paddingTop: '1rem' }, children: [_jsxs("span", { children: ["\uD83D\uDCC5 ", comp.year, " \uCD9C\uC2DC"] }), _jsxs("span", { children: ["\uD83D\uDC65 ", comp.users, " \uC0AC\uC6A9\uC790"] })] })] }, idx))) }), _jsxs("div", { style: { textAlign: 'center', padding: '3rem', background: '#e0e7ff', borderRadius: '12px' }, children: [_jsx("h3", { style: { marginBottom: '1rem', color: '#4338ca' }, children: "\uD83D\uDCA1 \uCC28\uBCC4\uD654 \uD3EC\uC778\uD2B8 \uBC1C\uACAC!" }), _jsxs("p", { style: { marginBottom: '2rem', color: '#4b5563' }, children: ["\uAE30\uC874 \uC11C\uBE44\uC2A4\uB4E4\uC740 '\uC608\uC57D' \uAE30\uB2A5\uC774 \uBD80\uC871\uD569\uB2C8\uB2E4. ", _jsx("br", {}), _jsx("strong", { children: "\uC608\uC57D \uBC0F \uACB0\uC81C \uD3B8\uC758\uC131" }), "\uC744 \uAC15\uD654\uD558\uC5EC \uD504\uB85C\uD1A0\uD0C0\uC785\uC744 \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694."] }), _jsx(Link, { to: "/prototype", className: "btn primary big", children: "\uD504\uB85C\uD1A0\uD0C0\uC785 \uB9CC\uB4E4\uB7EC \uAC00\uAE30 \u2192" })] })] })] }));
};
// Helper for badge colors
const CompColor = (match) => {
    const score = parseInt(match);
    if (score >= 90)
        return '#ef4444'; // Red for high danger
    if (score >= 80)
        return '#f59e0b'; // Orange
    return '#10b981'; // Green
};
export default MarketResearch;
