
import Link from 'next/link';
import { posts } from '@/lib/data';

export default function PostsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Blog Posts (SSG)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{post.title}</h2>
              <p className="font-normal text-gray-700">{post.content.substring(0, 100)}...</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
