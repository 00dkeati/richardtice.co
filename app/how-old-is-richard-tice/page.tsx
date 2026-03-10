import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Old is Richard Tice? Age, Birthday & Life Timeline",
  description: "Richard Tice is 61 years old, born on 13 September 1964 in Farnham, Surrey. Full biography, age details, and career timeline of the Reform UK Deputy Leader.",
  keywords: ["how old is Richard Tice", "Richard Tice age", "Richard Tice birthday", "Richard Tice born", "Richard Tice date of birth"],
};

export default function Page() {
  const birthDate = new Date('1964-09-13');
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return (
    <main className="min-h-screen bg-slate-900">
      <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-6 inline-block">← Back to Richard Tice</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How Old is Richard Tice?</h1>
          <p className="text-xl text-slate-300">Age, birthday, and life timeline of the Reform UK Deputy Leader</p>
        </div>
      </section>

      <section className="py-12 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-xl p-8 border border-cyan-500/30">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-slate-400 text-sm mb-1">Current Age</p>
                <p className="text-5xl font-bold text-cyan-400">{age}</p>
                <p className="text-slate-400">years old</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Date of Birth</p>
                <p className="text-2xl font-bold">13 September</p>
                <p className="text-slate-400">1964</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Birthplace</p>
                <p className="text-2xl font-bold">Farnham</p>
                <p className="text-slate-400">Surrey, England</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-6">Richard Tice&apos;s Age and Early Life</h2>
          
          <p className="text-slate-300 mb-4">
            Richard James Sunley Tice was born on 13 September 1964 in Farnham, Surrey, making him {age} years old as of 2026. He was born during the era of Harold Wilson&apos;s first Labour government and grew up during a transformative period in British history.
          </p>

          <p className="text-slate-300 mb-4">
            Tice was raised in a middle-class family in Surrey, one of the more affluent counties in South East England. His upbringing in this region would later influence his business-oriented worldview and Conservative political leanings before he moved to Reform UK.
          </p>

          <p className="text-slate-300 mb-4">
            As a September baby, Tice shares his birth month with other notable figures in British politics. His star sign is Virgo, typically associated with analytical thinking and attention to detail – traits that would serve him well in his later career in property investment and business.
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-10">Education and Formative Years</h2>

          <p className="text-slate-300 mb-4">
            Richard Tice received a private education, attending schools that prepared him for a career in business and finance. He later studied at what was then Trent Polytechnic (now Nottingham Trent University), where he developed the skills that would underpin his successful career in property investment.
          </p>

          <p className="text-slate-300 mb-4">
            During his formative years in the 1970s and 1980s, Tice witnessed significant political and economic changes in Britain, including the Winter of Discontent, Margaret Thatcher&apos;s rise to power, and the transformation of the British economy. These experiences shaped his political views on business, taxation, and regulation.
          </p>

          <p className="text-slate-300 mb-4">
            By his early twenties, Tice had begun working in the property sector, laying the groundwork for what would become a highly successful career. He has often spoken about starting at the bottom, including digging foundation trenches as an 18-year-old in 1983.
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-10">Life Timeline by Age</h2>

          <div className="space-y-4 mb-8">
            <div className="flex gap-4 items-start">
              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded font-bold min-w-[80px] text-center">Age 0</span>
              <p className="text-slate-300">Born 13 September 1964 in Farnham, Surrey</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded font-bold min-w-[80px] text-center">Age 18</span>
              <p className="text-slate-300">Started working in property, digging foundation trenches (1983)</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded font-bold min-w-[80px] text-center">Age 30s</span>
              <p className="text-slate-300">Built successful career in property and finance</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded font-bold min-w-[80px] text-center">Age 45</span>
              <p className="text-slate-300">Became CEO of CLS Holdings plc (2010)</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded font-bold min-w-[80px] text-center">Age 49</span>
              <p className="text-slate-300">Founded Quidnet Capital LLP (2014)</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded font-bold min-w-[80px] text-center">Age 51</span>
              <p className="text-slate-300">Co-founded Leave.EU Brexit campaign (2016)</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded font-bold min-w-[80px] text-center">Age 54</span>
              <p className="text-slate-300">Founding member of Brexit Party, elected MEP (2019)</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded font-bold min-w-[80px] text-center">Age 56</span>
              <p className="text-slate-300">Became Leader of Reform UK (2021)</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded font-bold min-w-[80px] text-center">Age 59</span>
              <p className="text-slate-300">Elected MP for Boston & Skegness (2024)</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded font-bold min-w-[80px] text-center">Age 61</span>
              <p className="text-slate-300">Engaged to Isabel Oakeshott, serving as Reform UK Deputy Leader (2025-26)</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 mt-10">Richard Tice Compared to Other Politicians</h2>

          <p className="text-slate-300 mb-4">
            At {age} years old, Richard Tice is older than some of his political contemporaries but younger than others. Reform UK leader Nigel Farage, born in 1964, is almost exactly the same age as Tice – they were born just months apart.
          </p>

          <p className="text-slate-300 mb-4">
            Compared to recent Prime Ministers, Tice is older than Rishi Sunak (born 1980) but younger than figures like Boris Johnson (born 1964, same year as Tice) and considerably younger than previous leaders like Tony Blair (born 1953).
          </p>

          <p className="text-slate-300 mb-4">
            His age means Tice entered frontline politics relatively late in life, having spent most of his career in business. This contrasts with career politicians who entered Parliament in their 20s or 30s. Tice was 59 when first elected as an MP in 2024.
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-10">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold text-white">What is Richard Tice&apos;s exact age?</h3>
              <p className="text-slate-300 mt-2">Richard Tice is {age} years old, born on 13 September 1964.</p>
            </div>
            
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold text-white">Where was Richard Tice born?</h3>
              <p className="text-slate-300 mt-2">Richard Tice was born in Farnham, Surrey, England on 13 September 1964.</p>
            </div>

            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold text-white">What is Richard Tice&apos;s star sign?</h3>
              <p className="text-slate-300 mt-2">Richard Tice is a Virgo, born on 13 September.</p>
            </div>

            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold text-white">How old was Richard Tice when he became an MP?</h3>
              <p className="text-slate-300 mt-2">Richard Tice was 59 years old when he was elected as MP for Boston and Skegness in July 2024.</p>
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
