import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Richard Tice Education - Schools, University & Qualifications",
  description: "Richard Tice's educational background: privately educated, attended Nottingham Trent University. His views on education policy and Reform UK's education plans.",
  keywords: ["Richard Tice education", "Richard Tice school", "Richard Tice university", "Richard Tice qualifications", "Richard Tice educated"],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900">
      <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-6 inline-block">← Back to Richard Tice</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Richard Tice: Education Background</h1>
          <p className="text-xl text-slate-300">Schools, university, and qualifications of the Reform UK Deputy Leader</p>
        </div>
      </section>

      <section className="py-12 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🏫</div>
              <h3 className="text-lg font-semibold text-cyan-400">Secondary School</h3>
              <p className="text-xl font-bold">Privately Educated</p>
              <p className="text-slate-400">Surrey / Devon area</p>
            </div>
            <div className="bg-slate-900 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="text-lg font-semibold text-cyan-400">University</h3>
              <p className="text-xl font-bold">Nottingham Trent</p>
              <p className="text-slate-400">(formerly Trent Polytechnic)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-6">Richard Tice&apos;s Educational Background</h2>
          
          <p className="text-slate-300 mb-4">
            Richard Tice received a private education, attending schools in the Surrey and Devon areas of England. He later studied at Trent Polytechnic (now Nottingham Trent University), where he developed skills that would serve him well in his business career.
          </p>

          <p className="text-slate-300 mb-4">
            Unlike many prominent politicians who attended elite institutions like Oxford or Cambridge, Tice&apos;s educational path was more practical and business-focused. He has often emphasized that he learned more from his early experiences in the workplace than from formal education.
          </p>

          <p className="text-slate-300 mb-4">
            Tice has mentioned starting work at 18, including manual labor digging foundation trenches in 1983. This practical start to his career, combined with his education, helped him build his successful property business.
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-10">Early Education</h2>

          <p className="text-slate-300 mb-4">
            Richard Tice was born in Farnham, Surrey, in 1964 and received a private education. While specific details about his primary and early secondary education are not widely publicized, he is known to have attended private schools.
          </p>

          <p className="text-slate-300 mb-4">
            Some sources indicate a connection to Blundell&apos;s School in Devon, a prestigious independent school founded in 1604. However, the extent of his time there is not confirmed in public records.
          </p>

          <p className="text-slate-300 mb-4">
            Growing up in Surrey, one of England&apos;s most affluent counties, Tice had access to quality educational opportunities. This middle-class upbringing helped shape his worldview on enterprise, hard work, and individual responsibility.
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-10">Higher Education</h2>

          <p className="text-slate-300 mb-4">
            Richard Tice attended Trent Polytechnic, which became Nottingham Trent University in 1992. Polytechnics in the UK were higher education institutions that focused on vocational and practical education, often in business, engineering, and applied sciences.
          </p>

          <p className="text-slate-300 mb-4">
            While Tice has not extensively discussed his degree or specific course of study, his subsequent career in property and finance suggests he likely studied business, economics, or a related field.
          </p>

          <p className="text-slate-300 mb-4">
            Nottingham Trent University is now a well-respected institution, but during Tice&apos;s time it was a polytechnic – practical institutions that were sometimes viewed differently from traditional universities. This hasn&apos;t prevented Tice from achieving significant success.
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-10">Learning Through Business</h2>

          <p className="text-slate-300 mb-4">
            Richard Tice has often emphasized that his real education came through business experience rather than formal academic study. He started working in property at 18 and built his career through practical experience.
          </p>

          <p className="text-slate-300 mb-4">
            Key learning experiences in his career include:
          </p>

          <ul className="text-slate-300 space-y-2 mb-6 list-disc list-inside">
            <li>Starting from manual labor, understanding the property industry from the ground up</li>
            <li>Working in debt advisory and finance</li>
            <li>Rising to CEO of CLS Holdings, a FTSE 250 company</li>
            <li>Founding and running Quidnet Capital LLP</li>
            <li>Managing property portfolios worth billions of pounds</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 mt-10">Reform UK Education Policy</h2>

          <p className="text-slate-300 mb-4">
            While Richard Tice focuses primarily on business, energy, and economic policy, Reform UK has positions on education that reflect the party&apos;s broader values:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">📚 Academic Standards</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• Focus on core subjects</li>
                <li>• Rigorous examinations</li>
                <li>• Traditional teaching methods</li>
                <li>• Discipline in schools</li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">🎓 Vocational Training</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• Support apprenticeships</li>
                <li>• Technical education</li>
                <li>• Skills for employment</li>
                <li>• Less focus on universities</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 mt-10">Views on University Education</h2>

          <p className="text-slate-300 mb-4">
            Given his own non-Oxbridge background and business success, Tice represents an alternative path to achievement. Reform UK has been critical of the emphasis on university education for all, arguing that:
          </p>

          <ul className="text-slate-300 space-y-2 mb-6 list-disc list-inside">
            <li>Too many young people are pushed toward university when alternatives might be better</li>
            <li>Apprenticeships and vocational training are undervalued</li>
            <li>Student debt burdens graduates with degrees that don&apos;t lead to good jobs</li>
            <li>Not every job requires a university degree</li>
            <li>Practical skills should be valued alongside academic achievement</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 mt-10">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold text-white">Where did Richard Tice go to school?</h3>
              <p className="text-slate-300 mt-2">Richard Tice received a private education in the Surrey/Devon area of England, possibly including time at Blundell&apos;s School.</p>
            </div>
            
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold text-white">Did Richard Tice go to university?</h3>
              <p className="text-slate-300 mt-2">Yes, Richard Tice attended Trent Polytechnic, which is now Nottingham Trent University.</p>
            </div>

            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold text-white">Did Richard Tice go to Oxford or Cambridge?</h3>
              <p className="text-slate-300 mt-2">No, Richard Tice did not attend Oxford or Cambridge. He studied at Trent Polytechnic (now Nottingham Trent University).</p>
            </div>

            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold text-white">Was Richard Tice privately educated?</h3>
              <p className="text-slate-300 mt-2">Yes, Richard Tice received a private education before attending polytechnic.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link href="/" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition inline-block">
            ← Back to Richard Tice Profile
          </Link>
        </div>
      </section>
    </main>
  );
}
