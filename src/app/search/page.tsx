
'use client';

import { useState } from 'react';
import { Post } from '@/lib/data';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    const response = await fetch(`/api/search?q=${query}`);
    const data = await response.json();
    setResults(data);
    setLoading(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Search Posts (CSR)</h1>
      <div className="flex gap-2 mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg"
          placeholder="Search for a post..."
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="p-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-400"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {results.map((post) => (
          <div key={post.id} className="block p-6 bg-white border border-gray-200 rounded-lg shadow">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{post.title}</h2>
            <p className="font-normal text-gray-700">{post.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
