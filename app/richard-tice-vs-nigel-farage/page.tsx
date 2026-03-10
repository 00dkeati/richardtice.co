import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Richard Tice vs Nigel Farage - Differences, Relationship & Reform UK",
  description: "Compare Richard Tice and Nigel Farage: their relationship, differences, roles in Reform UK, net worth comparison, and who leads the party.",
  keywords: ["Richard Tice vs Nigel Farage", "Richard Tice Nigel Farage", "Reform UK leadership", "Tice Farage comparison", "Reform UK leader deputy"],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900">
      <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-6 inline-block">← Back to Richard Tice</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Richard Tice vs Nigel Farage</h1>
          <p className="text-xl text-slate-300">Comparing the two leaders of Reform UK</p>
        </div>
      </section>

      <section className="py-12 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 rounded-xl p-6 text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-2">Nigel Farage</h2>
              <p className="text-slate-400">Party Leader</p>
              <div className="mt-4 space-y-2 text-left">
                <div className="flex justify-between"><span className="text-slate-400">Age:</span><span>61</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Net Worth:</span><span>~£2.5M</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Constituency:</span><span>Clacton</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Role:</span><span>Leader</span></div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-xl p-6 text-center">
              <div className="text-6xl mb-4">💼</div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-2">Richard Tice</h2>
              <p className="text-slate-400">Deputy Leader</p>
              <div className="mt-4 space-y-2 text-left">
                <div className="flex justify-between"><span className="text-slate-400">Age:</span><span>61</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Net Worth:</span><span>~£40M</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Constituency:</span><span>Boston & Skegness</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Role:</span><span>Deputy Leader</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-6">The Farage-Tice Partnership</h2>
          
          <p className="text-slate-300 mb-4">
            Richard Tice and Nigel Farage have been political allies for nearly a decade, united by their shared commitment to Brexit and their vision for British politics. Together, they have built Reform UK into the most significant political force to emerge in British politics since the rise of UKIP.
          </p>

          <p className="text-slate-300 mb-4">
            The two men complement each other well: Farage brings media savvy, public recognition, and years of experience as a political campaigner, while Tice provides business credibility, financial resources, and organizational skills honed in the corporate world.
          </p>

          <p className="text-slate-300 mb-4">
            Their relationship dates back to the Brexit campaign when both were prominent figures in the Leave movement. They worked together on Leave.EU and later co-founded the Brexit Party in 2019, which later became Reform UK.
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-10">Key Differences</h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-3 px-4 text-slate-400">Aspect</th>
                  <th className="py-3 px-4 text-cyan-400">Nigel Farage</th>
                  <th className="py-3 px-4 text-cyan-400">Richard Tice</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4 font-semibold">Background</td>
                  <td className="py-3 px-4">Commodities trader, career politician</td>
                  <td className="py-3 px-4">Property developer, businessman</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4 font-semibold">Wealth</td>
                  <td className="py-3 px-4">~£2.5 million</td>
                  <td className="py-3 px-4">~£40 million (16x richer)</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4 font-semibold">Political Experience</td>
                  <td className="py-3 px-4">30+ years (UKIP founder, MEP)</td>
                  <td className="py-3 px-4">~10 years (activist to MP)</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4 font-semibold">Public Profile</td>
                  <td className="py-3 px-4">Household name, media personality</td>
                  <td className="py-3 px-4">Growing recognition</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4 font-semibold">Speaking Style</td>
                  <td className="py-3 px-4">Populist, provocative, entertaining</td>
                  <td className="py-3 px-4">Business-like, data-focused</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4 font-semibold">Partner</td>
                  <td className="py-3 px-4">Laure Ferrari (French)</td>
                  <td className="py-3 px-4">Isabel Oakeshott (journalist)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mb-6 mt-10">Leadership Timeline</h2>

          <div className="space-y-4 mb-8">
            <div className="flex gap-4 items-start">
              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded font-bold min-w-[100px] text-center">2019</span>
              <p className="text-slate-300"><strong>Farage</strong> founded Brexit Party with Tice as Chairman</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded font-bold min-w-[100px] text-center">Mar 2021</span>
              <p className="text-slate-300"><strong>Farage</strong> stepped down; <strong>Tice</strong> became Leader of Reform UK</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded font-bold min-w-[100px] text-center">Jun 2024</span>
              <p className="text-slate-300"><strong>Tice</strong> invited <strong>Farage</strong> back as Leader; Tice became Deputy</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded font-bold min-w-[100px] text-center">Jul 2024</span>
              <p className="text-slate-300">Both elected as MPs for the first time</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 mt-10">Why Did Tice Step Aside?</h2>

          <p className="text-slate-300 mb-4">
            In June 2024, just weeks before the general election, Richard Tice made the decision to invite Nigel Farage back as party leader. This was a strategic move that recognized Farage&apos;s unparalleled ability to attract media attention and mobilize voters.
          </p>

          <p className="text-slate-300 mb-4">
            Tice has said the decision was made in the best interests of the party. With Farage&apos;s return, Reform UK surged in the polls and ultimately won five parliamentary seats – a historic breakthrough for the party.
          </p>

          <p className="text-slate-300 mb-4">
            The move demonstrated Tice&apos;s willingness to prioritize party success over personal ambition, a quality that has earned him respect within Reform UK circles. As Deputy Leader, he retains significant influence over policy and party direction.
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-10">Net Worth Comparison</h2>

          <p className="text-slate-300 mb-4">
            One of the most striking differences between the two men is their personal wealth. Richard Tice is worth approximately £40 million, making him roughly 16 times wealthier than Nigel Farage, whose net worth is estimated at around £2.5 million.
          </p>

          <p className="text-slate-300 mb-4">
            Tice&apos;s wealth comes primarily from his successful career in commercial property, including his time as CEO of CLS Holdings and founding Quidnet Capital. Farage&apos;s wealth comes from his political career, media work, and speaking engagements.
          </p>

          <p className="text-slate-300 mb-4">
            This wealth disparity is significant because it means Tice has been able to self-fund aspects of political campaigning and bring genuine business experience to the party&apos;s economic policies.
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-10">Policy Alignment</h2>

          <p className="text-slate-300 mb-4">
            Despite their different backgrounds, Farage and Tice are closely aligned on most policy issues:
          </p>

          <ul className="text-slate-300 space-y-2 mb-6 list-disc list-inside">
            <li>Both strongly support strict immigration controls</li>
            <li>Both oppose Net Zero and favour domestic energy production</li>
            <li>Both advocate for significant tax cuts</li>
            <li>Both want to reduce the size of the state</li>
            <li>Both are Eurosceptic and pro-Brexit</li>
            <li>Both criticize the &quot;political establishment&quot;</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 mt-10">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold text-white">Who is the leader of Reform UK?</h3>
              <p className="text-slate-300 mt-2">Nigel Farage is the current leader of Reform UK, having returned to the role in June 2024. Richard Tice serves as Deputy Leader.</p>
            </div>
            
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold text-white">Are Richard Tice and Nigel Farage friends?</h3>
              <p className="text-slate-300 mt-2">Yes, they have been close political allies since the Brexit campaign and have worked together for nearly a decade.</p>
            </div>

            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold text-white">Who is richer, Tice or Farage?</h3>
              <p className="text-slate-300 mt-2">Richard Tice is significantly wealthier, with an estimated net worth of £40 million compared to Farage&apos;s £2.5 million.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link href="/reform-uk" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition inline-block">
            Read More: Richard Tice & Reform UK →
          </Link>
        </div>
      </section>
    </main>
  );
}
