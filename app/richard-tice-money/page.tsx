import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Richard Tice Money - Fortune & Investments | RichardTice.co",
  description: "Learn about richard tice money - fortune & investments. Richard Tice is the Deputy Leader of Reform UK and MP for Boston & Skegness. Net worth £40 million, engaged to Isabel Oakeshott.",
  keywords: ["richard", "tice", "money", "richard tice", "reform uk", "boston skegness mp"],
  openGraph: {
    title: "Richard Tice Money - Fortune & Investments",
    description: "Learn about richard tice money - fortune & investments. Richard Tice - Reform UK Deputy Leader.",
    url: "https://richardtice.co/richard-tice-money",
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Richard Tice Money - Fortune & Investments</h1>
          <p className="text-slate-400">Last updated: March 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-invert prose-lg max-w-none">
            
            <p className="text-xl text-slate-300 mb-6">
              Richard Tice has an estimated net worth of <strong className="text-green-400">£40 million</strong>, 
              making him one of the wealthiest MPs in the UK Parliament.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">How Did Richard Tice Make His Money?</h2>
            <p className="text-slate-300 mb-4">
              Tice built his fortune primarily through commercial property development and investment. 
              He served as CEO of CLS Holdings plc, a FTSE 250 property company, from 2010 to 2014.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Business Ventures</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li><strong>CLS Holdings plc</strong> - CEO (2010-2014) - £2 billion property portfolio</li>
              <li><strong>Quidnet Capital LLP</strong> - Founder (2014) - Property asset management</li>
              <li><strong>Various property investments</strong> - UK and international</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">MP Salary</h2>
            <p className="text-slate-300 mb-4">
              As an MP, Tice earns the standard parliamentary salary of approximately £91,346 per year (2024/25). 
              However, this is a small fraction of his overall wealth and investment income.
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
            "headline": "Richard Tice Money - Fortune & Investments",
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
