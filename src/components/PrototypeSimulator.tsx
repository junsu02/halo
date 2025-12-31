import { useState } from 'react';

const PrototypeSimulator: React.FC = () => {
  const [clicks, setClicks] = useState(0);

  return (
    <section>
      <h2>프로토타입 시뮬레이터</h2>
      <p>사용자 상호작용을 시뮬레이션하세요.</p>
      <button onClick={() => setClicks(clicks + 1)}>클릭하세요!</button>
      <p>클릭 수: {clicks}</p>
    </section>
  );
};

export default PrototypeSimulator;