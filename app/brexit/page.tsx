import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Richard Tice Brexit - Leave.EU & Leave Means Leave Campaigns",
  description: "Richard Tice was a key Brexit campaigner, co-founding Leave.EU with Arron Banks and Leave Means Leave. Full history of his role in the EU referendum and beyond.",
  keywords: [
    "Richard Tice Brexit",
    "Richard Tice Leave EU",
    "Richard Tice Leave Means Leave",
    "Richard Tice EU referendum",
    "Richard Tice Arron Banks",
    "Richard Tice Brexit Party",
    "Brexit campaign",
  ],
  openGraph: {
    title: "Richard Tice Brexit Campaign History",
    description: "Co-founder of Leave.EU and Leave Means Leave",
    url: "https://richardtice.co/brexit",
  },
};

export default function BrexitPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-6 inline-block">
            ← Back to Richard Tice
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Richard Tice &amp; Brexit
          </h1>
          <p className="text-xl text-slate-300">
            A key architect of Britain&apos;s departure from the European Union
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-slate-900 rounded-xl p-8">
            <p className="text-lg text-slate-300 mb-4">
              Richard Tice was one of the most influential figures in the Brexit movement. 
              As a wealthy businessman, he provided both financial backing and strategic 
              leadership to multiple pro-Leave campaigns, helping to secure the 2016 
              referendum victory and then fighting to ensure Brexit was fully implemented.
            </p>
            <p className="text-slate-400">
              His involvement spanned from the initial Leave.EU campaign through the Brexit Party 
              and ultimately to Reform UK, making him one of the longest-serving figures in the 
              Brexit movement.
            </p>
          </div>
        </div>
      </section>

      {/* Leave.EU */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">🇪🇺 Leave.EU (2015-2016)</h2>
          
          <div className="bg-slate-800 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-700 rounded-lg p-4">
                <p className="text-slate-400 text-sm">Role</p>
                <p className="text-xl font-bold">Co-Chairman</p>
              </div>
              <div className="bg-slate-700 rounded-lg p-4">
                <p className="text-slate-400 text-sm">Co-Founded With</p>
                <p className="text-xl font-bold">Arron Banks</p>
              </div>
            </div>

            <p className="text-slate-300 mb-4">
              In 2015, Richard Tice co-founded Leave.EU alongside businessman and insurance tycoon 
              Arron Banks. The campaign was one of the two major pro-Leave groups during the 
              EU referendum, known for its grassroots approach and controversial social media tactics.
            </p>

            <h3 className="font-semibold text-white mb-3">Key Facts:</h3>
            <ul className="space-y-2 text-slate-300">
              <li>• Leave.EU was not the official Vote Leave campaign but had significant impact</li>
              <li>• Heavily backed by Arron Banks with an estimated £8 million in funding</li>
              <li>• Closely associated with Nigel Farage and UKIP</li>
              <li>• Known for populist messaging and direct voter engagement</li>
              <li>• Later faced scrutiny over campaign spending and data practices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Leave Means Leave */}
      <section className="py-12 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">✊ Leave Means Leave (2018-2019)</h2>
          
          <div className="bg-slate-900 rounded-xl p-8">
            <p className="text-slate-300 mb-4">
              After the 2016 referendum, Tice co-founded Leave Means Leave to pressure the 
              government to deliver a &quot;proper&quot; Brexit. The campaign opposed Theresa May&apos;s 
              withdrawal agreement and pushed for a clean break from the EU.
            </p>

            <h3 className="font-semibold text-white mb-3">Campaign Activities:</h3>
            <ul className="space-y-2 text-slate-300 mb-6">
              <li>• Organised rallies and protests outside Parliament</li>
              <li>• Lobbied MPs to reject the &quot;soft Brexit&quot; deal</li>
              <li>• Held large rallies including events in Bolton with thousands of attendees</li>
              <li>• Worked alongside Nigel Farage to maintain pressure on the government</li>
              <li>• Campaigned against any extension to the Article 50 process</li>
            </ul>

            <p className="text-slate-400">
              The campaign was ultimately successful in its goal of preventing May&apos;s deal 
              from passing, contributing to her resignation and the eventual harder Brexit 
              delivered under Boris Johnson.
            </p>
          </div>
        </div>
      </section>

      {/* Brexit Party */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">🗳️ The Brexit Party (2019)</h2>
          
          <div className="bg-slate-800 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-700 rounded-lg p-4">
                <p className="text-slate-400 text-sm">Role</p>
                <p className="text-xl font-bold">Chairman</p>
              </div>
              <div className="bg-slate-700 rounded-lg p-4">
                <p className="text-slate-400 text-sm">2019 EU Election Result</p>
                <p className="text-xl font-bold text-cyan-400">31.6% - 1st Place</p>
              </div>
            </div>

            <p className="text-slate-300 mb-4">
              When it became clear that Brexit might be delayed or diluted, Tice was a founding 
              member of the Brexit Party, launched by Nigel Farage in early 2019. As Chairman, 
              Tice helped build the party infrastructure.
            </p>

            <h3 className="font-semibold text-white mb-3">2019 European Elections:</h3>
            <ul className="space-y-2 text-slate-300">
              <li>• The Brexit Party won the 2019 European elections with 31.6% of the vote</li>
              <li>• Elected 29 MEPs, more than any other party</li>
              <li>• Richard Tice was elected as MEP for the East Midlands</li>
              <li>• Demonstrated massive public demand for Brexit to be delivered</li>
              <li>• Put pressure on the Conservative Party to deliver Brexit</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">📅 Brexit Timeline</h2>
          
          <div className="space-y-6">
            {[
              { year: "2015", event: "Co-founded Leave.EU with Arron Banks" },
              { year: "Jun 2016", event: "EU Referendum - Leave wins 51.9% to 48.1%" },
              { year: "2018", event: "Co-founded Leave Means Leave campaign" },
              { year: "Jan 2019", event: "Founding member of the Brexit Party" },
              { year: "May 2019", event: "Elected MEP for East Midlands (Brexit Party)" },
              { year: "Dec 2019", event: "Brexit Party stood down in Tory seats to help Boris Johnson" },
              { year: "Jan 2020", event: "UK officially left the European Union" },
              { year: "Dec 2020", event: "Brexit transition period ended - full departure from EU" },
              { year: "2021", event: "Brexit Party rebranded to Reform UK; Tice became leader" },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-24 flex-shrink-0 text-right">
                  <span className="text-cyan-400 font-bold">{item.year}</span>
                </div>
                <div className="w-3 h-3 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <div className="flex-1 text-slate-300">{item.event}</div>
              </div>
            ))}
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
                Was Richard Tice involved in the Brexit campaign?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="mt-4 text-slate-300">
                Yes, Richard Tice was heavily involved in the Brexit campaign. He co-founded 
                Leave.EU with Arron Banks, later co-founded Leave Means Leave, and was a 
                founding member and Chairman of the Brexit Party. He was one of the most 
                prominent business figures supporting Brexit.
              </p>
            </details>

            <details className="bg-slate-800 rounded-lg p-6 group">
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                Was Richard Tice an MEP?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="mt-4 text-slate-300">
                Yes, Richard Tice served as a Member of the European Parliament (MEP) for 
                the East Midlands from 2019 to 2020, representing the Brexit Party. His role 
                ended when the UK officially left the European Union in January 2020.
              </p>
            </details>

            <details className="bg-slate-800 rounded-lg p-6 group">
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                Did Richard Tice fund the Brexit campaign?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="mt-4 text-slate-300">
                Richard Tice contributed to Brexit campaign funding and helped raise money, 
                though the major financial backer of Leave.EU was his co-founder Arron Banks. 
                Tice&apos;s contribution was significant in terms of both funding and leadership.
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
