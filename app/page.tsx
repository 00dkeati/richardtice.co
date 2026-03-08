"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  useEffect(() => {
    const targetDate = new Date("2029-07-31T00:00:00");
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      <div>
        <div className="text-4xl md:text-5xl font-bold text-cyan-400">{timeLeft.days}</div>
        <div className="text-sm text-slate-400">Days</div>
      </div>
      <div>
        <div className="text-4xl md:text-5xl font-bold text-cyan-400">{timeLeft.hours}</div>
        <div className="text-sm text-slate-400">Hours</div>
      </div>
      <div>
        <div className="text-4xl md:text-5xl font-bold text-cyan-400">{timeLeft.minutes}</div>
        <div className="text-sm text-slate-400">Minutes</div>
      </div>
      <div>
        <div className="text-4xl md:text-5xl font-bold text-cyan-400">{timeLeft.seconds}</div>
        <div className="text-sm text-slate-400">Seconds</div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="inline-block bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🇬🇧 REFORM UK DEPUTY LEADER
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Richard Tice
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-2">
              Member of Parliament for Boston &amp; Skegness
            </p>
            <p className="text-lg text-slate-400">
              Businessman • Property Developer • Brexit Campaigner
            </p>
          </div>

          {/* Quote */}
          <blockquote className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-xl italic text-slate-300 mb-2">
              &quot;We need to get Britain growing again. Cut taxes, slash red tape, and unleash British enterprise.&quot;
            </p>
            <cite className="text-slate-500">— Richard Tice, 2024</cite>
          </blockquote>

          {/* Quick Facts */}
          <div className="bg-slate-800/50 rounded-2xl p-6 md:p-8 max-w-md mx-auto">
            <h2 className="text-lg font-semibold text-slate-400 mb-4">Quick Facts</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-400">Born</span>
                <span className="font-semibold">13 September 1964</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Age</span>
                <span className="font-semibold">61 years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Net Worth</span>
                <span className="font-semibold text-green-400">~£40 million</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Constituency</span>
                <span className="font-semibold">Boston &amp; Skegness</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Party</span>
                <span className="font-semibold text-cyan-400">Reform UK</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Partner</span>
                <span className="font-semibold">Isabel Oakeshott</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="py-12 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-lg text-slate-400 mb-4">⏱️ Countdown to Next General Election (by July 2029)</h2>
          <CountdownTimer />
          <p className="mt-4 text-sm text-slate-500">
            🇬🇧 Reform UK • Pro-Growth • Pro-Britain
          </p>
        </div>
      </section>

      {/* Live Stats */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">📊 Live Stats</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">👥</div>
              <div className="text-3xl font-bold text-cyan-400">104K+</div>
              <div className="text-slate-400">Facebook Followers</div>
              <div className="text-xs text-green-400 mt-1">↑ Growing daily</div>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">📱</div>
              <div className="text-3xl font-bold text-cyan-400">300K+</div>
              <div className="text-slate-400">X/Twitter Followers</div>
              <div className="text-xs text-slate-500">@TiceRichard</div>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">💰</div>
              <div className="text-3xl font-bold text-green-400">£40M</div>
              <div className="text-slate-400">Estimated Net Worth</div>
              <div className="text-xs text-slate-500">Property &amp; investments</div>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">🗳️</div>
              <div className="text-3xl font-bold text-cyan-400">2,010</div>
              <div className="text-slate-400">Parliamentary Majority</div>
              <div className="text-xs text-slate-500">Boston &amp; Skegness 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">📅 Career Timeline</h2>
          <div className="space-y-6">
            {[
              { year: "1964", event: "Born in Farnham, Surrey, 13 September" },
              { year: "1990s", event: "Built successful career in property and finance" },
              { year: "2010", event: "Became CEO of CLS Holdings plc" },
              { year: "2014", event: "Founded Quidnet Capital LLP" },
              { year: "2016", event: "Co-founded Leave.EU Brexit campaign" },
              { year: "2018", event: "Co-founded Leave Means Leave" },
              { year: "2019", event: "Founding member of Brexit Party" },
              { year: "2021", event: "Became Leader of Reform UK (formerly Brexit Party)" },
              { year: "2024", event: "Elected MP for Boston & Skegness" },
              { year: "2024", event: "Became Deputy Leader under Nigel Farage" },
              { year: "2025", event: "Engaged to Isabel Oakeshott" },
              { year: "2026", event: "Shadow Business, Trade & Energy Secretary" },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-20 flex-shrink-0 text-right">
                  <span className="text-cyan-400 font-bold">{item.year}</span>
                </div>
                <div className="w-3 h-3 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <div className="flex-1 text-slate-300">{item.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Life */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">💍 Personal Life</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Family</h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Divorced from ex-wife Emma after 24-year marriage</li>
                <li>• Three children from first marriage</li>
                <li>• Privately educated at Blundell&apos;s School, Devon</li>
                <li>• Studied at Trent Polytechnic (now Nottingham Trent University)</li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Isabel Oakeshott</h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Relationship began in 2018</li>
                <li>• Political journalist and author</li>
                <li>• Co-authored &quot;The Bad Boys of Brexit&quot; with Arron Banks</li>
                <li>• Engaged over Christmas 2025</li>
                <li>• Currently based between UK and Dubai</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Background */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">🏢 Business Background</h2>
          <div className="bg-slate-900 rounded-xl p-8">
            <p className="text-slate-300 mb-6">
              Richard Tice made his fortune in commercial property, serving as CEO of <strong className="text-white">CLS Holdings plc</strong> from 2010 to 2014. 
              CLS is a FTSE 250 company with a property portfolio worth over £2 billion across the UK, Germany, and France.
            </p>
            <p className="text-slate-300 mb-6">
              In 2014, he founded <strong className="text-white">Quidnet Capital LLP</strong>, a property asset management firm. 
              His net worth is estimated at approximately <span className="text-green-400 font-bold">£40 million</span>, primarily from property investments and business ventures.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-slate-800 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🏗️</div>
                <div className="font-semibold">CLS Holdings</div>
                <div className="text-sm text-slate-400">CEO 2010-2014</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">💼</div>
                <div className="font-semibold">Quidnet Capital</div>
                <div className="text-sm text-slate-400">Founder 2014</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">📈</div>
                <div className="font-semibold">Property Investor</div>
                <div className="text-sm text-slate-400">30+ years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Political Positions */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">📋 Key Political Positions</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: "🚫", title: "Net Zero", desc: "Opposes Net Zero targets. Wants to scrap DESNZ." },
              { icon: "📉", title: "Tax Cuts", desc: "Advocates major tax cuts to boost growth." },
              { icon: "🛂", title: "Immigration", desc: "Supports strict immigration controls." },
              { icon: "🇪🇺", title: "Brexit", desc: "Key Brexit campaigner. Co-founded Leave.EU." },
              { icon: "📜", title: "Deregulation", desc: "Wants to slash red tape for businesses." },
              { icon: "⚡", title: "Energy", desc: "Pro-North Sea oil & gas. Anti-renewables subsidies." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 rounded-xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Stay Updated</h2>
          <p className="text-slate-400 mb-8">
            Follow Richard Tice on social media for the latest updates on Reform UK and his parliamentary work.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://twitter.com/TiceRichard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg font-semibold transition"
            >
              Follow on X
            </a>
            <a 
              href="https://www.facebook.com/richardticemep/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg font-semibold transition"
            >
              Facebook
            </a>
            <a 
              href="https://members.parliament.uk/member/5161/contact" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg font-semibold transition"
            >
              Parliament Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="font-semibold mb-2">About This Site</h3>
          <p className="text-slate-400 text-sm mb-4">
            RichardTice.co is an independent information resource about Richard Tice, 
            Member of Parliament for Boston and Skegness. This site provides comprehensive 
            coverage of his political career, business background, and policy positions.
          </p>
          <p className="text-slate-500 text-xs">
            © 2026 RichardTice.co - Independent Information Resource<br />
            Not affiliated with Richard Tice or any political party.
          </p>
        </div>
      </footer>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Richard Tice",
            "alternateName": "Richard James Sunley Tice",
            "birthDate": "1964-09-13",
            "birthPlace": {
              "@type": "Place",
              "name": "Farnham, Surrey, England"
            },
            "nationality": "British",
            "jobTitle": ["Member of Parliament", "Deputy Leader of Reform UK"],
            "memberOf": {
              "@type": "PoliticalParty",
              "name": "Reform UK"
            },
            "worksFor": {
              "@type": "GovernmentOrganization",
              "name": "UK Parliament"
            },
            "spouse": {
              "@type": "Person",
              "name": "Isabel Oakeshott"
            },
            "sameAs": [
              "https://en.wikipedia.org/wiki/Richard_Tice",
              "https://twitter.com/TiceRichard",
              "https://www.facebook.com/richardticemep/",
              "https://members.parliament.uk/member/5161"
            ],
            "description": "Richard Tice is a British businessman and politician who serves as Deputy Leader of Reform UK and Member of Parliament for Boston and Skegness."
          })
        }}
      />
    </main>
  );
}
