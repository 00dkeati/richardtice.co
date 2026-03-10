import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Richard Tice Boston and Skegness - MP, Constituency & Local Issues",
  description: "Richard Tice is the MP for Boston and Skegness in Lincolnshire. Election results, local issues, constituency surgeries, and how to contact your MP.",
  keywords: ["Richard Tice Boston", "Richard Tice Skegness", "Boston Skegness MP", "Richard Tice constituency", "Richard Tice Lincolnshire"],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900">
      <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-6 inline-block">← Back to Richard Tice</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Richard Tice: MP for Boston and Skegness</h1>
          <p className="text-xl text-slate-300">Representing Lincolnshire in Parliament since July 2024</p>
        </div>
      </section>

      <section className="py-12 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🗳️</div>
              <h3 className="text-lg font-semibold text-cyan-400">Elected</h3>
              <p className="text-2xl font-bold">July 2024</p>
            </div>
            <div className="bg-slate-900 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-lg font-semibold text-cyan-400">Majority</h3>
              <p className="text-2xl font-bold">2,010 votes</p>
            </div>
            <div className="bg-slate-900 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">📍</div>
              <h3 className="text-lg font-semibold text-cyan-400">Location</h3>
              <p className="text-2xl font-bold">Lincolnshire</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-6">About the Constituency</h2>
          
          <p className="text-slate-300 mb-4">
            Boston and Skegness is a parliamentary constituency in Lincolnshire, on the east coast of England. The constituency combines the historic market town of Boston with the popular seaside resort of Skegness, along with numerous rural villages and agricultural land.
          </p>

          <p className="text-slate-300 mb-4">
            The area is known for its rich agricultural heritage, particularly in producing vegetables and flowers. It also has a significant tourism industry, with Skegness being a traditional British seaside destination famous for its beach, Butlin&apos;s holiday camp, and the slogan &quot;Skegness is SO bracing.&quot;
          </p>

          <p className="text-slate-300 mb-4">
            The constituency has been a battleground for immigration debates due to its large population of Eastern European agricultural workers, particularly from Poland and Lithuania. This made it fertile ground for Reform UK&apos;s message on immigration.
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-10">2024 Election Results</h2>

          <div className="bg-slate-800 rounded-xl p-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-cyan-500/20 rounded-lg border border-cyan-500">
                <div>
                  <p className="font-bold text-lg">Richard Tice</p>
                  <p className="text-sm text-slate-400">Reform UK</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-cyan-400">19,624</p>
                  <p className="text-sm text-slate-400">40.0% (+40.0%)</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                <div>
                  <p className="font-bold text-lg">Matt Warman</p>
                  <p className="text-sm text-slate-400">Conservative</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">17,614</p>
                  <p className="text-sm text-slate-400">35.9% (-25.4%)</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
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
            
            <div className="mt-6 pt-6 border-t border-slate-600">
              <p className="text-center text-slate-300">
                <strong>Majority:</strong> <span className="text-cyan-400 font-bold">2,010</span> (5.0%) | 
                <strong> Turnout:</strong> 49,050 (57.4%)
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 mt-10">Key Local Issues</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">🌊 Coastal Flooding</h3>
              <p className="text-slate-300">
                The low-lying coastal area faces significant flood risks. Boston and Skegness received £55 million in flood defence funding, a key local priority.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">🚜 Agriculture</h3>
              <p className="text-slate-300">
                Farming is central to the local economy. Issues include labour shortages, agricultural subsidies post-Brexit, and environmental regulations.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">🛂 Immigration</h3>
              <p className="text-slate-300">
                The area has experienced significant Eastern European immigration for agricultural work, making immigration a prominent local issue.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">🏥 Healthcare</h3>
              <p className="text-slate-300">
                Access to NHS services in this rural coastal area is a concern, with residents sometimes facing long journeys to hospitals.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 mt-10">Previous MPs</h2>

          <p className="text-slate-300 mb-4">
            Before Richard Tice won the seat in 2024, Boston and Skegness was held by the Conservative Party. The previous MP was Matt Warman, who held the seat from 2015 to 2024.
          </p>

          <p className="text-slate-300 mb-4">
            The constituency was created in 1997 and has historically leaned Conservative, though it was notable for its strong support for Brexit in the 2016 referendum. Boston recorded the highest Leave vote of any local authority in the UK at 75.6%.
          </p>

          <p className="text-slate-300 mb-4">
            This strong eurosceptic sentiment made the constituency a natural target for Reform UK, and Tice&apos;s victory in 2024 represented a significant breakthrough for the party.
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-10">Contact Your MP</h2>

          <div className="bg-slate-800 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">How to Contact Richard Tice</h3>
            <ul className="text-slate-300 space-y-3">
              <li><strong>Email:</strong> richard.tice.mp@parliament.uk</li>
              <li><strong>Parliament:</strong> House of Commons, London, SW1A 0AA</li>
              <li><strong>Website:</strong> <a href="https://members.parliament.uk/member/5161/contact" className="text-cyan-400 hover:underline">Parliament Profile</a></li>
            </ul>
            <p className="text-slate-400 text-sm mt-4">
              Note: Casework enquiries should be sent via email. Social media is not monitored for constituency matters.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6 mt-10">About Boston</h2>

          <p className="text-slate-300 mb-4">
            Boston is a historic market town on the River Witham. It&apos;s famous for St Botolph&apos;s Church, known locally as &quot;The Stump&quot; – one of the largest parish churches in England with a tower visible for miles across the flat Lincolnshire landscape.
          </p>

          <p className="text-slate-300 mb-4">
            The town has strong connections to American history – several of the Pilgrim Fathers who sailed on the Mayflower came from the Boston area, and the city of Boston, Massachusetts was named after this English town.
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-10">About Skegness</h2>

          <p className="text-slate-300 mb-4">
            Skegness is a traditional British seaside resort that became popular after the arrival of the railway in the 19th century. It&apos;s famous for its sandy beach, amusement arcades, and Butlin&apos;s holiday resort.
          </p>

          <p className="text-slate-300 mb-4">
            The town&apos;s mascot, the &quot;Jolly Fisherman,&quot; dates from a 1908 railway poster with the slogan &quot;Skegness is SO bracing&quot; – a reference to the fresh North Sea air. Tourism remains central to the local economy.
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-10">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold text-white">Who is the MP for Boston and Skegness?</h3>
              <p className="text-slate-300 mt-2">Richard Tice (Reform UK) has been the MP for Boston and Skegness since July 2024.</p>
            </div>
            
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold text-white">How do I contact Richard Tice about a local issue?</h3>
              <p className="text-slate-300 mt-2">Email richard.tice.mp@parliament.uk with your name, address (to confirm you&apos;re a constituent), and details of your issue.</p>
            </div>

            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold text-white">When was Richard Tice elected?</h3>
              <p className="text-slate-300 mt-2">Richard Tice was elected as MP for Boston and Skegness in the general election on 4 July 2024.</p>
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
