
import { posts, Post } from '@/lib/data';

// This function is run on the server for every request
async function getRandomPost(): Promise<Post> {
  const randomIndex = Math.floor(Math.random() * posts.length);
  return posts[randomIndex];
}

export default async function SsrPostPage() {
  const randomPost = await getRandomPost();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Random Post (SSR)</h1>
      <div className="max-w-2xl text-center">
        <h2 className="text-2xl font-bold mb-4">{randomPost.title}</h2>
        <p>{randomPost.content}</p>
        <p className="text-sm text-gray-500 mt-4">This page was rendered on the server at {new Date().toLocaleTimeString()}.</p>
      </div>
    </main>
  );
}

export const dynamic = 'force-dynamic';
