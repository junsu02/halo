import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MarketResearch: React.FC = () => {
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

  return (
    <div className="page-container fade-in">
      <div className="page-header">
        <h2>시장 유사 제품 탐색</h2>
        <p>AI가 전 세계 데이터를 분석하여 가장 유사한 서비스를 찾아드립니다.</p>
      </div>

      {/* Search Bar */}
      <div className="halo-card" style={{ marginBottom: '3rem', padding: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <input
          type="text"
          className="halo-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="분석할 아이디어 키워드를 입력하세요"
          style={{ border: 'none', boxShadow: 'none', background: 'transparent', fontSize: '1.2rem', fontWeight: 500 }}
        />
        <button onClick={handleSearch} className="btn primary" style={{ minWidth: '120px' }}>
          {isSearching ? '분석 중...' : '재검색'}
        </button>
      </div>

      {/* Results */}
      <div className="analysis-results">
        <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          📊 분석 리포트
          <span style={{ fontSize: '0.9rem', fontWeight: 400, color: '#64748b' }}>({competitors.length}개의 유사 서비스 발견)</span>
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {competitors.map((comp, idx) => (
            <div key={idx} className="halo-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1.25rem' }}>{comp.name}</h4>
                <span style={{
                  background: CompColor(comp.match),
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: 600
                }}>유사도 {comp.match}</span>
              </div>
              <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1.5rem', minHeight: '3rem' }}>
                {comp.desc}
              </p>
              <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: '#94a3b8', borderTop: '1px solid #f1f5f9', paddingTop: '1rem' }}>
                <span>📅 {comp.year} 출시</span>
                <span>👥 {comp.users} 사용자</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '3rem', background: '#e0e7ff', borderRadius: '12px' }}>
          <h3 style={{ marginBottom: '1rem', color: '#4338ca' }}>💡 차별화 포인트 발견!</h3>
          <p style={{ marginBottom: '2rem', color: '#4b5563' }}>
            기존 서비스들은 '예약' 기능이 부족합니다. <br />
            <strong>예약 및 결제 편의성</strong>을 강화하여 프로토타입을 만들어보세요.
          </p>
          <Link to="/prototype" className="btn primary big">프로토타입 만들러 가기 &rarr;</Link>
        </div>
      </div>
    </div>
  );
};

// Helper for badge colors
const CompColor = (match: string) => {
  const score = parseInt(match);
  if (score >= 90) return '#ef4444'; // Red for high danger
  if (score >= 80) return '#f59e0b'; // Orange
  return '#10b981'; // Green
};

export default MarketResearch;