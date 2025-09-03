
import { posts } from '@/lib/data';
import { notFound } from 'next/navigation';

export const revalidate = 60; // Re-generate the page every 60 seconds (for ISR)

export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts.find((post) => post.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <div className="max-w-2xl">
        <p>{post.content}</p>
      </div>
    </main>
  );
}
