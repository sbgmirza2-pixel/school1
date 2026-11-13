'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { publicGet, assetUrl } from '@/lib/api';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [state, setState] = useState('loading');

  useEffect(() => {
    publicGet(`/public/blogs/${slug}`).then((r) => { setBlog(r.data); setState('ok'); }).catch(() => setState('missing'));
  }, [slug]);

  return (
    <main className="min-h-screen bg-white text-[#12151C] font-sans">
      <Navbar />
      <article className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <a href="/blogs" className="text-sm text-[#0077F5] hover:underline">← All posts</a>
        {state === 'loading' && <p className="mt-6 text-gray-500">Loading…</p>}
        {state === 'missing' && <p className="mt-6 text-gray-500">This post was not found.</p>}
        {state === 'ok' && blog && (
          <>
            {blog.category && <div className="mt-6 text-xs font-bold text-[#0077F5] uppercase">{blog.category}</div>}
            <h1 className="text-3xl md:text-4xl font-bold mt-2">{blog.title}</h1>
            <div className="text-sm text-gray-500 mt-3">{blog.author} · {new Date(blog.publishedAt).toLocaleDateString()}</div>
            {blog.coverImage && <img src={assetUrl(blog.coverImage)} alt="" className="w-full rounded-2xl mt-8" />}
            <div className="mt-8 space-y-5 text-gray-700 leading-relaxed">
              {blog.content.split(/\n\s*\n/).map((para, i) => <p key={i} className="whitespace-pre-line">{para}</p>)}
            </div>
          </>)}
      </article>
      <Footer />
    </main>
  );
}