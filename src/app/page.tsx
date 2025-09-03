import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-5xl font-bold mb-12">Next.js Rendering Methods</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <Link href="/posts">
          <div className="block h-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Static Site Generation (SSG)</h2>
            <p className="font-normal text-gray-700">Blog posts are pre-rendered at build time. Click to see the list of posts.</p>
          </div>
        </Link>

        <Link href="/ssr-post">
          <div className="block h-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Server-Side Rendering (SSR)</h2>
            <p className="font-normal text-gray-700">This page is rendered on the server for each request. Click to see a random post.</p>
          </div>
        </Link>

        <Link href="/search">
          <div className="block h-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Client-Side Rendering (CSR)</h2>
            <p className="font-normal text-gray-700">Search for blog posts on the client-side. Click to go to the search page.</p>
          </div>
        </Link>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Other Concepts Demonstrated:</h3>
        <ul className="list-disc list-inside">
          <li><span className="font-bold">Incremental Static Regeneration (ISR):</span> Individual blog posts will re-generate every 60 seconds.</li>
          <li><span className="font-bold">Dynamic Routes with SSG:</span> The individual blog post pages are dynamically generated at build time.</li>
        </ul>
      </div>

    </main>
  );
}