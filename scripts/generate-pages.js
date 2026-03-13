#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// ===========================================
// PROGRAMMATIC SEO PAGE GENERATOR
// Richard Tice - Long-tail keyword targeting
// ===========================================

const APP_DIR = path.join(__dirname, '..', 'app');

// Page templates for different query types
const pageConfigs = [
  // ===== NET WORTH VARIANTS =====
  { slug: 'richard-tice-net-worth-2024', title: 'Richard Tice Net Worth 2024', type: 'net-worth-year', year: 2024 },
  { slug: 'richard-tice-net-worth-2025', title: 'Richard Tice Net Worth 2025', type: 'net-worth-year', year: 2025 },
  { slug: 'richard-tice-net-worth-2026', title: 'Richard Tice Net Worth 2026', type: 'net-worth-year', year: 2026 },
  { slug: 'richard-tice-wealth', title: 'Richard Tice Wealth - How Rich Is He?', type: 'net-worth' },
  { slug: 'richard-tice-salary', title: 'Richard Tice Salary as MP', type: 'salary' },
  { slug: 'richard-tice-income', title: 'Richard Tice Income Sources', type: 'income' },
  { slug: 'how-much-is-richard-tice-worth', title: 'How Much Is Richard Tice Worth?', type: 'net-worth' },
  { slug: 'richard-tice-money', title: 'Richard Tice Money - Fortune & Investments', type: 'net-worth' },
  { slug: 'richard-tice-rich', title: 'Is Richard Tice Rich? His £40 Million Fortune', type: 'net-worth' },
  { slug: 'richard-tice-millionaire', title: 'Richard Tice Millionaire - Property Tycoon', type: 'net-worth' },
  
  // ===== AGE VARIANTS =====
  { slug: 'richard-tice-age', title: 'Richard Tice Age - How Old Is He?', type: 'age' },
  { slug: 'richard-tice-birthday', title: 'Richard Tice Birthday - Born September 1964', type: 'age' },
  { slug: 'richard-tice-born', title: 'When Was Richard Tice Born?', type: 'age' },
  { slug: 'richard-tice-date-of-birth', title: 'Richard Tice Date of Birth', type: 'age' },
  { slug: 'richard-tice-61', title: 'Richard Tice at 61 - Life & Career', type: 'age' },
  
  // ===== WIFE/PARTNER VARIANTS =====
  { slug: 'richard-tice-wife', title: 'Richard Tice Wife - Who Is He Married To?', type: 'partner' },
  { slug: 'richard-tice-partner', title: 'Richard Tice Partner Isabel Oakeshott', type: 'partner' },
  { slug: 'richard-tice-girlfriend', title: 'Richard Tice Girlfriend - Relationship History', type: 'partner' },
  { slug: 'richard-tice-fiance', title: 'Richard Tice Fiancée Isabel Oakeshott', type: 'partner' },
  { slug: 'richard-tice-fiancee', title: 'Richard Tice Fiancée - Engaged 2025', type: 'partner' },
  { slug: 'richard-tice-engaged', title: 'Richard Tice Engaged to Isabel Oakeshott', type: 'partner' },
  { slug: 'richard-tice-engagement', title: 'Richard Tice Engagement - Christmas 2025', type: 'partner' },
  { slug: 'richard-tice-wedding', title: 'Richard Tice Wedding Plans', type: 'partner' },
  { slug: 'richard-tice-isabel-oakeshott', title: 'Richard Tice & Isabel Oakeshott Relationship', type: 'partner' },
  { slug: 'richard-tice-isabel-oakeshott-engaged', title: 'Richard Tice & Isabel Oakeshott Engaged', type: 'partner' },
  { slug: 'richard-tice-isabel-oakeshott-wedding', title: 'Richard Tice & Isabel Oakeshott Wedding', type: 'partner' },
  { slug: 'isabel-oakeshott-partner', title: 'Isabel Oakeshott Partner Richard Tice', type: 'partner' },
  { slug: 'isabel-oakeshott-fiance', title: 'Isabel Oakeshott Fiancé Richard Tice', type: 'partner' },
  { slug: 'isabel-oakeshott-boyfriend', title: 'Isabel Oakeshott Boyfriend Richard Tice', type: 'partner' },
  
  // ===== EX-WIFE/DIVORCE =====
  { slug: 'richard-tice-ex-wife', title: 'Richard Tice Ex-Wife Emma', type: 'ex-wife' },
  { slug: 'richard-tice-ex-wife-emma', title: 'Richard Tice Ex-Wife Emma - 24 Year Marriage', type: 'ex-wife' },
  { slug: 'richard-tice-divorce', title: 'Richard Tice Divorce - Marriage Breakdown', type: 'ex-wife' },
  { slug: 'richard-tice-first-wife', title: 'Richard Tice First Wife Emma', type: 'ex-wife' },
  { slug: 'richard-tice-previous-wife', title: 'Richard Tice Previous Wife', type: 'ex-wife' },
  { slug: 'emma-tice', title: 'Emma Tice - Richard Tice Ex-Wife', type: 'ex-wife' },
  
  // ===== CHILDREN/FAMILY =====
  { slug: 'richard-tice-children', title: 'Richard Tice Children - How Many Kids?', type: 'family' },
  { slug: 'richard-tice-kids', title: 'Richard Tice Kids - Family Life', type: 'family' },
  { slug: 'richard-tice-family', title: 'Richard Tice Family - Wife & Children', type: 'family' },
  { slug: 'richard-tice-sons', title: 'Richard Tice Sons', type: 'family' },
  { slug: 'richard-tice-daughters', title: 'Richard Tice Daughters', type: 'family' },
  { slug: 'richard-tice-parents', title: 'Richard Tice Parents & Background', type: 'family' },
  
  // ===== HEIGHT/PHYSICAL =====
  { slug: 'richard-tice-height', title: 'Richard Tice Height - How Tall?', type: 'height' },
  { slug: 'richard-tice-tall', title: 'How Tall Is Richard Tice?', type: 'height' },
  
  // ===== LOCATION =====
  { slug: 'richard-tice-house', title: 'Richard Tice House - Where Does He Live?', type: 'location' },
  { slug: 'richard-tice-home', title: 'Richard Tice Home Address', type: 'location' },
  { slug: 'richard-tice-dubai', title: 'Richard Tice Dubai - Second Home', type: 'location' },
  { slug: 'richard-tice-lives', title: 'Where Does Richard Tice Live?', type: 'location' },
  { slug: 'richard-tice-address', title: 'Richard Tice Address & Constituency', type: 'location' },
  { slug: 'richard-tice-london', title: 'Richard Tice London Home', type: 'location' },
  { slug: 'richard-tice-lincolnshire', title: 'Richard Tice Lincolnshire - Boston MP', type: 'location' },
  
  // ===== EDUCATION =====
  { slug: 'richard-tice-education', title: 'Richard Tice Education - Schools & University', type: 'education' },
  { slug: 'richard-tice-school', title: 'Richard Tice School - Blundell\'s Devon', type: 'education' },
  { slug: 'richard-tice-university', title: 'Richard Tice University - Trent Polytechnic', type: 'education' },
  { slug: 'richard-tice-degree', title: 'Richard Tice Degree - Qualifications', type: 'education' },
  
  // ===== CAREER/BUSINESS =====
  { slug: 'richard-tice-career', title: 'Richard Tice Career - Business to Politics', type: 'career' },
  { slug: 'richard-tice-business', title: 'Richard Tice Business Empire', type: 'career' },
  { slug: 'richard-tice-property', title: 'Richard Tice Property Portfolio', type: 'career' },
  { slug: 'richard-tice-cls-holdings', title: 'Richard Tice CLS Holdings CEO', type: 'career' },
  { slug: 'richard-tice-quidnet', title: 'Richard Tice Quidnet Capital', type: 'career' },
  { slug: 'richard-tice-companies', title: 'Richard Tice Companies & Investments', type: 'career' },
  { slug: 'richard-tice-businessman', title: 'Richard Tice Businessman Background', type: 'career' },
  
  // ===== POLITICS - REFORM UK =====
  { slug: 'richard-tice-reform', title: 'Richard Tice Reform UK Leader', type: 'politics' },
  { slug: 'richard-tice-reform-uk', title: 'Richard Tice Reform UK - Deputy Leader', type: 'politics' },
  { slug: 'richard-tice-reform-party', title: 'Richard Tice Reform Party Role', type: 'politics' },
  { slug: 'richard-tice-deputy-leader', title: 'Richard Tice Deputy Leader Reform UK', type: 'politics' },
  { slug: 'richard-tice-leader', title: 'Richard Tice Leader - Reform UK History', type: 'politics' },
  { slug: 'richard-tice-mp', title: 'Richard Tice MP Boston & Skegness', type: 'politics' },
  { slug: 'richard-tice-parliament', title: 'Richard Tice Parliament Record', type: 'politics' },
  { slug: 'richard-tice-boston', title: 'Richard Tice Boston MP', type: 'politics' },
  { slug: 'richard-tice-skegness', title: 'Richard Tice Skegness Constituency', type: 'politics' },
  { slug: 'richard-tice-boston-skegness', title: 'Richard Tice Boston & Skegness MP', type: 'politics' },
  { slug: 'richard-tice-constituency', title: 'Richard Tice Constituency - Boston & Skegness', type: 'politics' },
  { slug: 'richard-tice-mep', title: 'Richard Tice MEP - Brexit Party', type: 'politics' },
  
  // ===== FARAGE COMPARISONS =====
  { slug: 'richard-tice-nigel-farage', title: 'Richard Tice vs Nigel Farage', type: 'comparison' },
  { slug: 'richard-tice-farage', title: 'Richard Tice & Farage Partnership', type: 'comparison' },
  { slug: 'richard-tice-farage-relationship', title: 'Richard Tice Farage Relationship', type: 'comparison' },
  { slug: 'tice-vs-farage', title: 'Tice vs Farage - Reform UK Leadership', type: 'comparison' },
  { slug: 'tice-farage-differences', title: 'Tice & Farage Differences', type: 'comparison' },
  
  // ===== BREXIT =====
  { slug: 'richard-tice-brexit', title: 'Richard Tice Brexit Campaign', type: 'brexit' },
  { slug: 'richard-tice-leave-eu', title: 'Richard Tice Leave.EU Co-Founder', type: 'brexit' },
  { slug: 'richard-tice-leave-means-leave', title: 'Richard Tice Leave Means Leave', type: 'brexit' },
  { slug: 'richard-tice-brexit-party', title: 'Richard Tice Brexit Party Founder', type: 'brexit' },
  
  // ===== POLICIES =====
  { slug: 'richard-tice-policies', title: 'Richard Tice Policies - Full List', type: 'policy' },
  { slug: 'richard-tice-immigration', title: 'Richard Tice Immigration Policy', type: 'policy' },
  { slug: 'richard-tice-tax', title: 'Richard Tice Tax Policy', type: 'policy' },
  { slug: 'richard-tice-nhs', title: 'Richard Tice NHS Views', type: 'policy' },
  { slug: 'richard-tice-net-zero', title: 'Richard Tice Net Zero Opposition', type: 'policy' },
  { slug: 'richard-tice-climate', title: 'Richard Tice Climate Change Views', type: 'policy' },
  { slug: 'richard-tice-energy', title: 'Richard Tice Energy Policy', type: 'policy' },
  { slug: 'richard-tice-economy', title: 'Richard Tice Economy Plans', type: 'policy' },
  
  // ===== QUESTION FORMATS =====
  { slug: 'who-is-richard-tice', title: 'Who Is Richard Tice?', type: 'question' },
  { slug: 'what-does-richard-tice-do', title: 'What Does Richard Tice Do?', type: 'question' },
  { slug: 'is-richard-tice-married', title: 'Is Richard Tice Married?', type: 'question' },
  { slug: 'is-richard-tice-engaged', title: 'Is Richard Tice Engaged?', type: 'question' },
  { slug: 'is-richard-tice-rich', title: 'Is Richard Tice Rich?', type: 'question' },
  { slug: 'where-is-richard-tice-from', title: 'Where Is Richard Tice From?', type: 'question' },
  { slug: 'why-is-richard-tice-famous', title: 'Why Is Richard Tice Famous?', type: 'question' },
  { slug: 'how-did-richard-tice-make-his-money', title: 'How Did Richard Tice Make His Money?', type: 'question' },
  
  // ===== TWITTER/SOCIAL =====
  { slug: 'richard-tice-twitter', title: 'Richard Tice Twitter @TiceRichard', type: 'social' },
  { slug: 'richard-tice-x', title: 'Richard Tice X (Twitter) Account', type: 'social' },
  { slug: 'richard-tice-instagram', title: 'Richard Tice Instagram', type: 'social' },
  { slug: 'richard-tice-facebook', title: 'Richard Tice Facebook Page', type: 'social' },
  
  // ===== NEWS/EVENTS =====
  { slug: 'richard-tice-news', title: 'Richard Tice News - Latest Updates', type: 'news' },
  { slug: 'richard-tice-latest', title: 'Richard Tice Latest News', type: 'news' },
  { slug: 'richard-tice-today', title: 'Richard Tice Today', type: 'news' },
  { slug: 'richard-tice-2024', title: 'Richard Tice 2024 - Year in Review', type: 'news' },
  { slug: 'richard-tice-2025', title: 'Richard Tice 2025 - Engagement & Politics', type: 'news' },
  { slug: 'richard-tice-2026', title: 'Richard Tice 2026 - Current Updates', type: 'news' },
  { slug: 'richard-tice-election', title: 'Richard Tice Election Results', type: 'news' },
  { slug: 'richard-tice-election-2024', title: 'Richard Tice Election 2024 - Won Boston', type: 'news' },
  
  // ===== CONTACT =====
  { slug: 'richard-tice-contact', title: 'Richard Tice Contact - Email & Office', type: 'contact' },
  { slug: 'richard-tice-email', title: 'Richard Tice Email Address', type: 'contact' },
  { slug: 'richard-tice-office', title: 'Richard Tice Office - Constituency', type: 'contact' },
  
  // ===== WIKI/BIO =====
  { slug: 'richard-tice-wiki', title: 'Richard Tice Wiki - Full Biography', type: 'bio' },
  { slug: 'richard-tice-wikipedia', title: 'Richard Tice Wikipedia Summary', type: 'bio' },
  { slug: 'richard-tice-biography', title: 'Richard Tice Biography', type: 'bio' },
  { slug: 'richard-tice-bio', title: 'Richard Tice Bio - Quick Facts', type: 'bio' },
  
  // ===== QUOTES/VIEWS =====
  { slug: 'richard-tice-quotes', title: 'Richard Tice Quotes - Best Speeches', type: 'quotes' },
  { slug: 'richard-tice-views', title: 'Richard Tice Views & Opinions', type: 'quotes' },
  { slug: 'richard-tice-speeches', title: 'Richard Tice Speeches - Parliament', type: 'quotes' },
];

// Generate page content based on type
function generatePageContent(config) {
  const { slug, title, type } = config;
  
  const baseTemplate = `import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "${title} | RichardTice.co",
  description: "Learn about ${title.toLowerCase()}. Richard Tice is the Deputy Leader of Reform UK and MP for Boston & Skegness. Net worth £40 million, engaged to Isabel Oakeshott.",
  keywords: ["${slug.replace(/-/g, '", "')}", "richard tice", "reform uk", "boston skegness mp"],
  openGraph: {
    title: "${title}",
    description: "Learn about ${title.toLowerCase()}. Richard Tice - Reform UK Deputy Leader.",
    url: "https://richardtice.co/${slug}",
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">${title}</h1>
          <p className="text-slate-400">Last updated: March 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-invert prose-lg max-w-none">
            ${getContentByType(type, config)}
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
            "headline": "${title}",
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
`;

  return baseTemplate;
}

function getContentByType(type, config) {
  const contentMap = {
    'net-worth': `
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
            </p>`,
    
    'net-worth-year': `
            <p className="text-xl text-slate-300 mb-6">
              In ${config.year}, Richard Tice's net worth is estimated at approximately <strong className="text-green-400">£40 million</strong>.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Net Worth Breakdown ${config.year}</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li><strong>Property investments</strong> - Est. £30-35 million</li>
              <li><strong>Business holdings</strong> - Est. £3-5 million</li>
              <li><strong>Liquid assets & investments</strong> - Est. £2-5 million</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Wealth Sources</h2>
            <p className="text-slate-300 mb-4">
              Tice made his fortune as CEO of CLS Holdings plc (2010-2014) and through founding Quidnet Capital LLP in 2014. 
              His property portfolio spans the UK, Germany, and France.
            </p>`,
    
    'age': `
            <p className="text-xl text-slate-300 mb-6">
              Richard Tice is <strong className="text-cyan-400">61 years old</strong>, born on 13 September 1964 in Farnham, Surrey.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Birth Details</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li><strong>Full name:</strong> Richard James Sunley Tice</li>
              <li><strong>Date of birth:</strong> 13 September 1964</li>
              <li><strong>Place of birth:</strong> Farnham, Surrey, England</li>
              <li><strong>Star sign:</strong> Virgo</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Early Life</h2>
            <p className="text-slate-300 mb-4">
              Tice was privately educated at Blundell's School in Devon before attending Trent Polytechnic 
              (now Nottingham Trent University). He began his career in property and finance in the 1990s.
            </p>`,
    
    'partner': `
            <p className="text-xl text-slate-300 mb-6">
              Richard Tice is engaged to political journalist <strong className="text-cyan-400">Isabel Oakeshott</strong>. 
              The couple announced their engagement over Christmas 2025.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">About Isabel Oakeshott</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li><strong>Profession:</strong> Political journalist and author</li>
              <li><strong>Notable work:</strong> Co-authored "The Bad Boys of Brexit" with Arron Banks</li>
              <li><strong>Relationship began:</strong> 2018</li>
              <li><strong>Engagement:</strong> Christmas 2025</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Their Relationship</h2>
            <p className="text-slate-300 mb-4">
              Tice and Oakeshott met through Brexit campaigning circles and have been together since 2018. 
              They split their time between the UK and Dubai. Oakeshott is known for her investigative journalism 
              and has been a vocal supporter of Reform UK.
            </p>`,
    
    'ex-wife': `
            <p className="text-xl text-slate-300 mb-6">
              Richard Tice was previously married to <strong className="text-cyan-400">Emma</strong> for 24 years before their divorce.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">First Marriage</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li><strong>Ex-wife's name:</strong> Emma Tice</li>
              <li><strong>Marriage duration:</strong> Approximately 24 years</li>
              <li><strong>Children:</strong> Three children together</li>
              <li><strong>Divorce:</strong> Prior to 2018</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">After the Divorce</h2>
            <p className="text-slate-300 mb-4">
              Following his divorce from Emma, Tice began a relationship with journalist Isabel Oakeshott in 2018. 
              They announced their engagement in late 2025.
            </p>`,
    
    'family': `
            <p className="text-xl text-slate-300 mb-6">
              Richard Tice has <strong className="text-cyan-400">three children</strong> from his first marriage to Emma.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Family Details</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li><strong>Children:</strong> Three (from first marriage)</li>
              <li><strong>Ex-wife:</strong> Emma Tice</li>
              <li><strong>Current partner:</strong> Isabel Oakeshott (engaged)</li>
              <li><strong>Birthplace:</strong> Farnham, Surrey</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Education & Background</h2>
            <p className="text-slate-300 mb-4">
              Tice was privately educated at Blundell's School in Devon, one of the UK's oldest independent schools. 
              He went on to study at Trent Polytechnic (now Nottingham Trent University).
            </p>`,
    
    'height': `
            <p className="text-xl text-slate-300 mb-6">
              Richard Tice is approximately <strong className="text-cyan-400">6 feet tall</strong> (183 cm).
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Physical Appearance</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li><strong>Height:</strong> Approximately 6'0" (183 cm)</li>
              <li><strong>Build:</strong> Athletic</li>
              <li><strong>Hair:</strong> Grey/silver</li>
              <li><strong>Notable:</strong> Often seen in formal business attire</li>
            </ul>`,
    
    'location': `
            <p className="text-xl text-slate-300 mb-6">
              Richard Tice divides his time between <strong className="text-cyan-400">London, his Lincolnshire constituency, and Dubai</strong>.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Residences</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li><strong>London:</strong> Primary UK residence</li>
              <li><strong>Lincolnshire:</strong> Constituency base (Boston & Skegness)</li>
              <li><strong>Dubai:</strong> Second home with fiancée Isabel Oakeshott</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Constituency</h2>
            <p className="text-slate-300 mb-4">
              As MP for Boston & Skegness, Tice maintains a presence in Lincolnshire to serve his constituents. 
              The constituency covers the towns of Boston and Skegness on the east coast of England.
            </p>`,
    
    'education': `
            <p className="text-xl text-slate-300 mb-6">
              Richard Tice was privately educated at <strong className="text-cyan-400">Blundell's School</strong> in Devon 
              before studying at <strong className="text-cyan-400">Trent Polytechnic</strong>.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Educational Background</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li><strong>Secondary:</strong> Blundell's School, Tiverton, Devon (independent school founded 1604)</li>
              <li><strong>Higher education:</strong> Trent Polytechnic (now Nottingham Trent University)</li>
              <li><strong>Field:</strong> Business/Finance related studies</li>
            </ul>`,
    
    'career': `
            <p className="text-xl text-slate-300 mb-6">
              Richard Tice built a successful career in <strong className="text-cyan-400">property and finance</strong> 
              before entering politics.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Business Career</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li><strong>1990s:</strong> Built career in property and finance</li>
              <li><strong>2010-2014:</strong> CEO of CLS Holdings plc (FTSE 250)</li>
              <li><strong>2014:</strong> Founded Quidnet Capital LLP</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Political Career</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li><strong>2016:</strong> Co-founded Leave.EU campaign</li>
              <li><strong>2018:</strong> Co-founded Leave Means Leave</li>
              <li><strong>2019:</strong> Brexit Party MEP & founding member</li>
              <li><strong>2021:</strong> Became Leader of Reform UK</li>
              <li><strong>2024:</strong> Elected MP for Boston & Skegness</li>
            </ul>`,
    
    'politics': `
            <p className="text-xl text-slate-300 mb-6">
              Richard Tice is the <strong className="text-cyan-400">Deputy Leader of Reform UK</strong> and 
              <strong className="text-cyan-400">MP for Boston & Skegness</strong>.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Reform UK Role</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li><strong>2021-2024:</strong> Leader of Reform UK</li>
              <li><strong>2024-present:</strong> Deputy Leader under Nigel Farage</li>
              <li><strong>Shadow role:</strong> Business, Trade & Energy</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Parliamentary Record</h2>
            <p className="text-slate-300 mb-4">
              Elected in July 2024 with a majority of 2,010 votes, Tice serves the coastal constituency of 
              Boston & Skegness in Lincolnshire. He is one of five Reform UK MPs in Parliament.
            </p>`,
    
    'comparison': `
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
            </p>`,
    
    'brexit': `
            <p className="text-xl text-slate-300 mb-6">
              Richard Tice was a key figure in the <strong className="text-cyan-400">Brexit campaign</strong>, 
              co-founding Leave.EU and Leave Means Leave.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Brexit Campaigning</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li><strong>2016:</strong> Co-founded Leave.EU with Arron Banks</li>
              <li><strong>2018:</strong> Co-founded Leave Means Leave campaign</li>
              <li><strong>2019:</strong> Founding member of Brexit Party</li>
              <li><strong>2019:</strong> Elected Brexit Party MEP</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Post-Brexit</h2>
            <p className="text-slate-300 mb-4">
              After Brexit was achieved, Tice helped transform the Brexit Party into Reform UK, 
              focusing on broader political reform including tax cuts, immigration control, and opposing Net Zero policies.
            </p>`,
    
    'policy': `
            <p className="text-xl text-slate-300 mb-6">
              Richard Tice advocates for <strong className="text-cyan-400">lower taxes, reduced immigration, 
              and scrapping Net Zero</strong> commitments.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Key Policy Positions</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li><strong>Economy:</strong> Major tax cuts to boost growth</li>
              <li><strong>Immigration:</strong> Strict controls, reduced numbers</li>
              <li><strong>Energy:</strong> Pro-North Sea oil & gas, anti-renewables subsidies</li>
              <li><strong>Net Zero:</strong> Opposes 2050 targets, wants DESNZ scrapped</li>
              <li><strong>Regulation:</strong> Slash red tape for businesses</li>
              <li><strong>NHS:</strong> Reform and efficiency improvements</li>
            </ul>`,
    
    'question': `
            <p className="text-xl text-slate-300 mb-6">
              Here's everything you need to know about <strong className="text-cyan-400">Richard Tice</strong>.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Key Facts</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li><strong>Who is he?</strong> Deputy Leader of Reform UK, MP for Boston & Skegness</li>
              <li><strong>Age:</strong> 61 (born 13 September 1964)</li>
              <li><strong>Net worth:</strong> Approximately £40 million</li>
              <li><strong>Partner:</strong> Engaged to Isabel Oakeshott</li>
              <li><strong>Background:</strong> Property developer and businessman</li>
              <li><strong>Known for:</strong> Brexit campaigning, Reform UK leadership</li>
            </ul>`,
    
    'social': `
            <p className="text-xl text-slate-300 mb-6">
              Richard Tice is active on social media, particularly <strong className="text-cyan-400">X (Twitter)</strong> 
              where he has over 300,000 followers.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Social Media Accounts</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li><strong>X/Twitter:</strong> <a href="https://twitter.com/TiceRichard" className="text-cyan-400 hover:underline">@TiceRichard</a> (300K+ followers)</li>
              <li><strong>Facebook:</strong> <a href="https://facebook.com/richardticemep" className="text-cyan-400 hover:underline">@richardticemep</a> (104K+ followers)</li>
              <li><strong>Instagram:</strong> @richardtice (limited activity)</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">What He Posts</h2>
            <p className="text-slate-300 mb-4">
              Tice regularly posts about Reform UK policies, parliamentary activities, and commentary on current affairs. 
              He's known for his direct communication style and criticism of government policies.
            </p>`,
    
    'news': `
            <p className="text-xl text-slate-300 mb-6">
              Stay updated with the latest news about <strong className="text-cyan-400">Richard Tice</strong> 
              and Reform UK.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Recent Developments</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li><strong>2025:</strong> Announced engagement to Isabel Oakeshott</li>
              <li><strong>2024:</strong> Elected MP for Boston & Skegness</li>
              <li><strong>2024:</strong> Became Deputy Leader when Farage returned</li>
              <li><strong>2024:</strong> Reform UK wins 5 parliamentary seats</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Parliamentary Activity</h2>
            <p className="text-slate-300 mb-4">
              As Shadow Business, Trade & Energy Secretary, Tice regularly speaks in Parliament on economic matters 
              and holds the government to account on energy policy and business regulation.
            </p>`,
    
    'contact': `
            <p className="text-xl text-slate-300 mb-6">
              Contact Richard Tice MP through his <strong className="text-cyan-400">parliamentary office</strong> 
              or constituency office.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Information</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li><strong>Parliament:</strong> <a href="https://members.parliament.uk/member/5161/contact" className="text-cyan-400 hover:underline">Official Parliament Page</a></li>
              <li><strong>Email:</strong> Via parliamentary contact form</li>
              <li><strong>Constituency:</strong> Boston & Skegness office</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Social Media</h2>
            <p className="text-slate-300 mb-4">
              For public inquiries, Tice is active on X/Twitter (@TiceRichard) and often responds to constituents' concerns there.
            </p>`,
    
    'bio': `
            <p className="text-xl text-slate-300 mb-6">
              <strong className="text-cyan-400">Richard James Sunley Tice</strong> is a British businessman and politician 
              serving as Deputy Leader of Reform UK and MP for Boston & Skegness.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Biography</h2>
            <p className="text-slate-300 mb-4">
              Born on 13 September 1964 in Farnham, Surrey, Tice was educated at Blundell's School before studying at 
              Trent Polytechnic. He built a successful career in commercial property, becoming CEO of FTSE 250 company 
              CLS Holdings plc in 2010.
            </p>
            <p className="text-slate-300 mb-4">
              Tice became politically active during the Brexit referendum, co-founding Leave.EU with Arron Banks. 
              He later co-founded Leave Means Leave and was a founding member of the Brexit Party, serving as an MEP 
              from 2019-2020.
            </p>
            <p className="text-slate-300 mb-4">
              He led Reform UK from 2021 until Nigel Farage's return in 2024, when he became Deputy Leader. 
              He was elected MP for Boston & Skegness in the 2024 general election.
            </p>`,
    
    'quotes': `
            <p className="text-xl text-slate-300 mb-6">
              Notable quotes and speeches from <strong className="text-cyan-400">Richard Tice</strong>.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Famous Quotes</h2>
            <blockquote className="border-l-4 border-cyan-400 pl-4 my-4 text-slate-300 italic">
              "We need to get Britain growing again. Cut taxes, slash red tape, and unleash British enterprise."
            </blockquote>
            <blockquote className="border-l-4 border-cyan-400 pl-4 my-4 text-slate-300 italic">
              "Net Zero is the most expensive suicide note in history."
            </blockquote>
            <blockquote className="border-l-4 border-cyan-400 pl-4 my-4 text-slate-300 italic">
              "The establishment parties have failed Britain. It's time for real reform."
            </blockquote>`,
    
    'salary': `
            <p className="text-xl text-slate-300 mb-6">
              Richard Tice earns the standard MP salary of approximately <strong className="text-cyan-400">£91,346 per year</strong> (2024/25).
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">MP Salary</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li><strong>Basic salary:</strong> £91,346 (2024/25)</li>
              <li><strong>Expenses:</strong> Standard parliamentary expenses</li>
              <li><strong>Additional roles:</strong> Shadow Cabinet (unpaid)</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Other Income</h2>
            <p className="text-slate-300 mb-4">
              Tice's MP salary is a small fraction of his overall wealth. His main income comes from property investments 
              and his business interests, which contribute to his estimated £40 million net worth.
            </p>`,
    
    'income': `
            <p className="text-xl text-slate-300 mb-6">
              Richard Tice's income comes from multiple sources, primarily <strong className="text-cyan-400">property investments 
              and business holdings</strong>.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Income Sources</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li><strong>Property investments:</strong> Rental income and capital gains</li>
              <li><strong>Quidnet Capital:</strong> Asset management firm</li>
              <li><strong>MP salary:</strong> £91,346 (2024/25)</li>
              <li><strong>Investment returns:</strong> Various holdings</li>
            </ul>`,
  };
  
  return contentMap[type] || contentMap['question'];
}

// Main execution
console.log('🚀 Generating programmatic SEO pages for richardtice.co...\n');

let created = 0;
let skipped = 0;

pageConfigs.forEach(config => {
  const pageDir = path.join(APP_DIR, config.slug);
  const pagePath = path.join(pageDir, 'page.tsx');
  
  // Skip if already exists
  if (fs.existsSync(pagePath)) {
    console.log(`⏭️  Skipped (exists): ${config.slug}`);
    skipped++;
    return;
  }
  
  // Create directory
  fs.mkdirSync(pageDir, { recursive: true });
  
  // Generate and write page content
  const content = generatePageContent(config);
  fs.writeFileSync(pagePath, content);
  
  console.log(`✅ Created: ${config.slug}`);
  created++;
});

console.log(`\n📊 Summary:`);
console.log(`   Created: ${created} pages`);
console.log(`   Skipped: ${skipped} pages`);
console.log(`   Total config: ${pageConfigs.length} pages\n`);

console.log('🔥 Done! Run "npm run build" to compile.');
