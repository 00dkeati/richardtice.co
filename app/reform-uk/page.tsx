import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Richard Tice Reform UK - Deputy Leader & MP for Boston and Skegness",
  description: "Richard Tice is Deputy Leader of Reform UK and MP for Boston and Skegness. Former leader 2021-2024, now serves under Nigel Farage. Political career and Reform UK policies.",
  keywords: [
    "Richard Tice Reform UK",
    "Richard Tice MP",
    "Richard Tice Boston Skegness",
    "Richard Tice deputy leader",
    "Richard Tice Nigel Farage",
    "Richard Tice politics",
    "Richard Tice Brexit Party",
    "Reform UK deputy leader",
  ],
  openGraph: {
    title: "Richard Tice - Reform UK Deputy Leader",
    description: "Deputy Leader of Reform UK and MP for Boston and Skegness",
    url: "https://richardtice.co/reform-uk",
  },
};

export default function ReformUKPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-6 inline-block">
            ← Back to Richard Tice
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Richard Tice &amp; Reform UK
          </h1>
          <p className="text-xl text-slate-300">
            Deputy Leader, former Leader, and MP for Boston &amp; Skegness
          </p>
        </div>
      </section>

      {/* Current Role */}
      <section className="py-12 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-2xl p-8 border border-cyan-500/30">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-slate-400 text-sm mb-1">Current Role</p>
                <p className="text-xl font-bold text-cyan-400">Deputy Leader</p>
                <p className="text-sm text-slate-400">Reform UK</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Constituency</p>
                <p className="text-xl font-bold">Boston &amp; Skegness</p>
                <p className="text-sm text-slate-400">Elected July 2024</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Shadow Cabinet</p>
                <p className="text-xl font-bold">Business, Trade &amp; Energy</p>
                <p className="text-sm text-slate-400">Since Feb 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reform UK MPs Photo */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/images/reform-mps.jpg"
              alt="Reform UK MPs in Parliament 2024"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-center text-slate-400 text-sm mt-4">
            Reform UK MPs in Parliament, 2024
          </p>
        </div>
      </section>

      {/* Political Timeline */}
      <section className="py-12 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">📅 Political Career Timeline</h2>
          
          <div className="space-y-6">
            {[
              { year: "2016", title: "Co-founded Leave.EU", desc: "Major Brexit campaign backed by Arron Banks" },
              { year: "2018", title: "Co-founded Leave Means Leave", desc: "Campaign to ensure Brexit delivery" },
              { year: "2019", title: "Founding member of Brexit Party", desc: "Party launched by Nigel Farage" },
              { year: "2019", title: "Chairman of Brexit Party", desc: "Key leadership role in the party" },
              { year: "2021", title: "Leader of Reform UK", desc: "Party rebranded from Brexit Party; Tice became leader" },
              { year: "Mar 2024", title: "Secured first MP", desc: "Lee Anderson defected from Conservatives to Reform UK" },
              { year: "Jun 2024", title: "Invited Farage back as Leader", desc: "Stepped aside for Nigel Farage to return as party leader" },
              { year: "Jul 2024", title: "Elected MP for Boston & Skegness", desc: "Won with 2,010 majority, defeating Matt Warman (Con)" },
              { year: "Jul 2024", title: "Became Deputy Leader", desc: "Now serves as Farage's deputy" },
              { year: "Feb 2026", title: "Shadow Business Secretary", desc: "Reform UK Business, Trade & Energy spokesperson" },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-24 flex-shrink-0 text-right">
                  <span className="text-cyan-400 font-bold">{item.year}</span>
                </div>
                <div className="w-3 h-3 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Policies */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">📋 Richard Tice&apos;s Key Policies</h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-slate-800 rounded-xl p-6">
              <div className="text-3xl mb-3">🚫</div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Scrap Net Zero</h3>
              <p className="text-slate-400">
                Wants to abolish the Department for Energy Security and Net Zero. 
                Opposes net zero targets as economically damaging.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6">
              <div className="text-3xl mb-3">📉</div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Major Tax Cuts</h3>
              <p className="text-slate-400">
                Advocates for significant tax reductions to stimulate economic growth. 
                Believes lower taxes will unleash British enterprise.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6">
              <div className="text-3xl mb-3">🛂</div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Immigration Controls</h3>
              <p className="text-slate-400">
                Supports strict immigration controls and deportation policies. 
                Wants to reduce both legal and illegal immigration.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6">
              <div className="text-3xl mb-3">📜</div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Deregulation</h3>
              <p className="text-slate-400">
                Proposes a &quot;Great Repeal Act&quot; to scrap Labour legislation on 
                workers&apos; rights and tenant protections.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Energy Independence</h3>
              <p className="text-slate-400">
                Pro-North Sea oil and gas extraction. Opposes renewable energy subsidies. 
                Wants to maximise domestic fossil fuel production.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">NHS Reform</h3>
              <p className="text-slate-400">
                Supports NHS reform while maintaining free at point of use. 
                Advocates for more private sector involvement in healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Election Result */}
      <section className="py-12 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">🗳️ 2024 Election Result - Boston &amp; Skegness</h2>
          
          <div className="bg-slate-900 rounded-xl p-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-cyan-500/20 rounded-lg border border-cyan-500">
                <div>
                  <p className="font-bold text-lg">Richard Tice</p>
                  <p className="text-sm text-slate-400">Reform UK</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-cyan-400">19,624</p>
                  <p className="text-sm text-slate-400">40.0%</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
                <div>
                  <p className="font-bold text-lg">Matt Warman</p>
                  <p className="text-sm text-slate-400">Conservative</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">17,614</p>
                  <p className="text-sm text-slate-400">35.9%</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
                <div>
                  <p className="font-bold text-lg">Other candidates</p>
                  <p className="text-sm text-slate-400">Labour, Lib Dem, Green, etc.</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">11,812</p>
                  <p className="text-sm text-slate-400">24.1%</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-700 text-center">
              <p className="text-slate-400">Majority: <span className="text-cyan-400 font-bold text-xl">2,010</span> (5.0%)</p>
              <p className="text-slate-500 text-sm mt-2">One of 5 Reform UK MPs elected in 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">❓ Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <details className="bg-slate-800 rounded-lg p-6 group" open>
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                Is Richard Tice the leader of Reform UK?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="mt-4 text-slate-300">
                Richard Tice is currently the Deputy Leader of Reform UK. He was the party leader from 
                March 2021 to June 2024, when he invited Nigel Farage to return as leader. Tice now serves 
                as Farage&apos;s deputy.
              </p>
            </details>

            <details className="bg-slate-800 rounded-lg p-6 group">
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                What constituency is Richard Tice MP for?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="mt-4 text-slate-300">
                Richard Tice is the Member of Parliament for Boston and Skegness in Lincolnshire. 
                He won the seat in the July 2024 general election with a majority of 2,010 votes 
                over Conservative Matt Warman.
              </p>
            </details>

            <details className="bg-slate-800 rounded-lg p-6 group">
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                How many Reform UK MPs are there?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="mt-4 text-slate-300">
                Reform UK has 5 MPs elected in the 2024 general election: Nigel Farage (Clacton), 
                Richard Tice (Boston and Skegness), Lee Anderson (Ashfield), Rupert Lowe (Great Yarmouth), 
                and James McMurdock (South Basildon and East Thurrock).
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-12 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link 
            href="/"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition inline-block"
          >
            ← Back to Richard Tice Profile
          </Link>
        </div>
      </section>
    </main>
  );
}
