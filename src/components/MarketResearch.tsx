import { useState } from 'react';

const MarketResearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = () => {
    // Mock search results
    setResults([
      'Similar product 1',
      'Similar product 2',
      'Competitor analysis'
    ]);
  };

  return (
    <section>
      <h2>시장 조사</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="비슷한 제품을 검색하세요..."
      />
      <button onClick={handleSearch}>검색</button>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </section>
  );
};

export default MarketResearch;