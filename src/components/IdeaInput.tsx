import { useState } from 'react';

const IdeaInput: React.FC = () => {
  const [idea, setIdea] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Idea submitted: ${idea}`);
    // Here you can save to state or API
  };

  return (
    <section>
      <h2>스타트업 아이디어 입력</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="스타트업 아이디어를 설명하세요..."
          rows={4}
        />
        <button type="submit">아이디어 제출</button>
      </form>
    </section>
  );
};

export default IdeaInput;