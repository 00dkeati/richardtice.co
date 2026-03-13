import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Richard Tice vs Nigel Farage | RichardTice.co",
  description: "Learn about richard tice vs nigel farage. Richard Tice is the Deputy Leader of Reform UK and MP for Boston & Skegness. Net worth £40 million, engaged to Isabel Oakeshott.",
  keywords: ["richard", "tice", "nigel", "farage", "richard tice", "reform uk", "boston skegness mp"],
  openGraph: {
    title: "Richard Tice vs Nigel Farage",
    description: "Learn about richard tice vs nigel farage. Richard Tice - Reform UK Deputy Leader.",
    url: "https://richardtice.co/richard-tice-nigel-farage",
    siteName: "RichardTice.co",
    type: "article",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 text-sm">
            ← Back to Richard Tice
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Richard Tice vs Nigel Farage</h1>
          <p className="text-slate-400">Last updated: March 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-invert prose-lg max-w-none">
            
            <p className="text-xl text-slate-300 mb-6">
              Richard Tice and <strong className="text-cyan-400">Nigel Farage</strong> are the two most prominent 
              figures in Reform UK, with Farage as Leader and Tice as Deputy Leader.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Tice vs Farage: Key Differences</h2>
            <div className="overflow-x-auto">
              <div className="bg-slate-800 rounded-lg p-4 mb-4">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="font-bold text-cyan-400">Aspect</div>
                  <div className="font-bold text-cyan-400">Richard Tice</div>
                  <div className="font-bold text-cyan-400">Nigel Farage</div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm mt-2 border-t border-slate-700 pt-2">
                  <div>Background</div>
                  <div>Business/Property</div>
                  <div>Finance/Politics</div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm mt-2 border-t border-slate-700 pt-2">
                  <div>Net Worth</div>
                  <div>~£40 million</div>
                  <div>~£4 million</div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm mt-2 border-t border-slate-700 pt-2">
                  <div>Constituency</div>
                  <div>Boston & Skegness</div>
                  <div>Clacton</div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Their Partnership</h2>
            <p className="text-slate-300 mb-4">
              Tice and Farage have worked together since the Brexit Party days. When Farage returned to lead 
              Reform UK in 2024, Tice stepped down to become Deputy Leader, demonstrating their collaborative approach.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts Sidebar */}
      <section className="py-12 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Quick Facts About Richard Tice</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-700 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">💰</div>
              <div className="font-semibold text-cyan-400">£40 Million</div>
              <div className="text-sm text-slate-400">Net Worth</div>
            </div>
            <div className="bg-slate-700 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🎂</div>
              <div className="font-semibold text-cyan-400">61 Years Old</div>
              <div className="text-sm text-slate-400">Born 1964</div>
            </div>
            <div className="bg-slate-700 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">💍</div>
              <div className="font-semibold text-cyan-400">Engaged</div>
              <div className="text-sm text-slate-400">Isabel Oakeshott</div>
            </div>
            <div className="bg-slate-700 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🗳️</div>
              <div className="font-semibold text-cyan-400">Reform UK</div>
              <div className="text-sm text-slate-400">Deputy Leader</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-6">Related Pages</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/net-worth" className="bg-slate-800 hover:bg-slate-700 p-4 rounded-lg transition">
              <div className="font-semibold">💰 Net Worth</div>
              <div className="text-sm text-slate-400">£40 million fortune</div>
            </Link>
            <Link href="/wife" className="bg-slate-800 hover:bg-slate-700 p-4 rounded-lg transition">
              <div className="font-semibold">💍 Wife & Partner</div>
              <div className="text-sm text-slate-400">Isabel Oakeshott</div>
            </Link>
            <Link href="/reform-uk" className="bg-slate-800 hover:bg-slate-700 p-4 rounded-lg transition">
              <div className="font-semibold">🗳️ Reform UK</div>
              <div className="text-sm text-slate-400">Political career</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 text-sm">
              Home
            </Link>
            <a href="https://www.nigelfarage.co" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm">
              NigelFarage.co →
            </a>
            <a href="https://www.rupertlowe.co" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm">
              RupertLowe.co →
            </a>
          </div>
          <p className="text-slate-500 text-xs mb-2">
            © 2026 RichardTice.co - Independent Information Resource
          </p>
          <p className="text-slate-600 text-xs">
            Site by <a href="https://deankeating.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition">Dean Keating</a>
          </p>
        </div>
      </footer>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Richard Tice vs Nigel Farage",
            "author": { "@type": "Organization", "name": "RichardTice.co" },
            "publisher": { "@type": "Organization", "name": "RichardTice.co" },
            "datePublished": "2026-03-01",
            "dateModified": "2026-03-13",
            "about": {
              "@type": "Person",
              "name": "Richard Tice",
              "jobTitle": "Deputy Leader of Reform UK"
            }
          })
        }}
      />
    </main>
  );
}
