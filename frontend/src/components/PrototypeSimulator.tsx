import React, { useState } from 'react';

const PrototypeSimulator: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState('click');

  return (
    <div className="fade-in" style={{ height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column' }}>
      {/* Workbench Header */}
      <div style={{ padding: '1rem 2rem', background: 'white', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '1.25rem' }}>Prototyper / 채식 예약 앱 v1.0</h2>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>▶ 미리보기</button>
          <button className="btn primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>코드 내보내기</button>
        </div>
      </div>

      {/* Workspace */}
      <div style={{ flex: 1, display: 'flex', background: '#f1f5f9', overflow: 'hidden' }}>

        {/* Left Toolbar */}
        <div style={{ width: '60px', background: 'white', borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem 0', gap: '1.5rem' }}>
          <ToolIcon icon="🖱️" active={selectedTool === 'click'} onClick={() => setSelectedTool('click')} />
          <ToolIcon icon="⬜" active={selectedTool === 'box'} onClick={() => setSelectedTool('box')} />
          <ToolIcon icon="T" active={selectedTool === 'text'} onClick={() => setSelectedTool('text')} />
          <ToolIcon icon="🖼️" active={selectedTool === 'img'} onClick={() => setSelectedTool('img')} />
        </div>

        {/* Center Canvas */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          {/* Phone Frame */}
          <div style={{
            width: '375px',
            height: '812px',
            background: 'white',
            borderRadius: '40px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            border: '8px solid #333',
            position: 'relative',
            overflow: 'hidden',
            transform: 'scale(0.85)'
          }}>
            {/* Mock Screen Content */}
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              {/* Status Bar */}
              <div style={{ height: '44px', background: 'black', width: '100%' }}></div>

              {/* App Header */}
              <div style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
                <h3 style={{ fontSize: '1.1rem' }}>VegeTable</h3>
              </div>

              {/* Content List */}
              <div style={{ padding: '1rem', flex: 1 }}>
                <div style={{ background: '#f8fafc', borderRadius: '12px', height: '120px', marginBottom: '1rem' }}></div>
                <div style={{ background: '#f8fafc', borderRadius: '12px', height: '120px', marginBottom: '1rem' }}></div>
                <div style={{ background: '#f8fafc', borderRadius: '12px', height: '120px', marginBottom: '1rem' }}></div>
              </div>

              {/* Tab Bar */}
              <div style={{ height: '83px', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingBottom: '20px' }}>
                <span>🏠</span>
                <span>🔍</span>
                <span>👤</span>
              </div>
            </div>

            {/* Face ID Notch */}
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '150px', height: '30px', background: '#333', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}></div>
          </div>
        </div>

        {/* Right Properties Panel */}
        <div style={{ width: '280px', background: 'white', borderLeft: '1px solid #e2e8f0', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: '#64748b', textTransform: 'uppercase' }}>속성 (Properties)</h4>
          <div className="halo-form-group">
            <label className="halo-label" style={{ fontSize: '0.9rem' }}>배경색</label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'white', border: '1px solid #ddd' }}></div>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#f8fafc', border: '1px solid #ddd' }}></div>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#1e293b', border: '1px solid #ddd' }}></div>
            </div>
          </div>
          <div className="halo-form-group">
            <label className="halo-label" style={{ fontSize: '0.9rem' }}>너비 (Width)</label>
            <input type="text" className="halo-input" defaultValue="100%" style={{ padding: '0.5rem' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Icon Component
const ToolIcon = ({ icon, active, onClick }: { icon: string, active: boolean, onClick: () => void }) => (
  <div
    onClick={onClick}
    style={{
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
    }}
  >
    {icon}
  </div>
);

export default PrototypeSimulator;