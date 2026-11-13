'use client';
import { useEffect, useState } from 'react';
import { publicGet, assetUrl } from '@/lib/api';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    publicGet(`/public/blogs?page=${page}&limit=9`)
      .then((r) => { setBlogs(r.data || []); setPages(r.pagination?.pages || 1); })
      .catch(() => setBlogs([]))
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <main className="min-h-screen bg-white text-[#12151C] font-sans">
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-gray-500 mt-2 mb-10">News, tips and updates from our team.</p>
        {loading ? <p className="text-gray-500">Loading…</p> : blogs.length === 0 ? <p className="text-gray-500">No blog posts yet.</p> : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((b) => (
              <a key={b._id} href={`/blogs/${b.slug}`} className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition flex flex-col">
                {b.coverImage ? <img src={assetUrl(b.coverImage)} alt="" className="aspect-video w-full object-cover" /> : <div className="aspect-video bg-gradient-to-tr from-[#0077F5]/20 to-purple-200" />}
                <div className="p-5">
                  <div className="text-[11px] text-gray-400">{b.category && <span className="font-bold text-[#0077F5] uppercase mr-2">{b.category}</span>}{new Date(b.publishedAt).toLocaleDateString()}</div>
                  <h2 className="font-bold mt-1 group-hover:text-[#0077F5] transition">{b.title}</h2>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-3">{b.excerpt}</p>
                </div>
              </a>))}
          </div>)}
        {pages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-10 text-sm">
            <button disabled={page <= 1} onClick={() => setPage(page - 1)} className="px-4 py-2 border rounded-xl disabled:opacity-40">← Prev</button>
            <span>Page {page} of {pages}</span>
            <button disabled={page >= pages} onClick={() => setPage(page + 1)} className="px-4 py-2 border rounded-xl disabled:opacity-40">Next →</button>
          </div>)}
      </section>
      <Footer />
    </main>
  );
}