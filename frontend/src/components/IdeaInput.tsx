import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const IdeaInput: React.FC = () => {
  const [idea, setIdea] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea.trim()) return;
    // In a real app, save to context/store here
    navigate('/market'); // Move to next step
  };

  return (
    <div className="page-container fade-in">
      <div className="page-header">
        <h2>어떤 서비스를 만들고 싶으신가요?</h2>
        <p>머릿속에 있는 아이디어를 자유롭게 적어주세요. Halo가 분석을 시작합니다.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'start' }}>

        {/* Main Input Area */}
        <div className="halo-card">
          <form onSubmit={handleSubmit}>
            <div className="halo-form-group">
              <label className="halo-label">아이디어 상세 설명</label>
              <textarea
                className="halo-textarea"
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="예: 위치 기반으로 주변의 채식 식당을 찾아주고, 예약까지 가능한 앱. 사용자 리뷰 기능을 중심으로 커뮤니티를 형성하고..."
                rows={12}
                style={{ resize: 'vertical' }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <button type="button" className="btn secondary">임시 저장</button>
              <button type="submit" className="btn primary">시장 분석 시작하기 &rarr;</button>
            </div>
          </form>
        </div>

        {/* Side Tips */}
        <div className="halo-card" style={{ background: '#f8fafc', borderStyle: 'dashed' }}>
          <h3 style={{ marginBottom: '1rem', color: '#6366f1' }}>💡 작성 팁</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem', color: '#64748b' }}>
            <li>
              <strong>대상 고객 (Who)</strong>
              <br />누가 이 서비스를 가장 필요로 할까요?
            </li>
            <li>
              <strong>해결하려는 문제 (Why)</strong>
              <br />현재 그들이 겪는 불편함은 무엇인가요?
            </li>
            <li>
              <strong>주요 기능 (What)</strong>
              <br />어떤 핵심 기능으로 문제를 해결하나요?
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default IdeaInput;