import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Richard Tice on the NHS - Reform UK Healthcare Policy 2026",
  description: "Richard Tice's NHS policies: Reform UK's healthcare plans, reducing waiting lists, NHS reform, and views on private healthcare involvement.",
  keywords: ["Richard Tice NHS", "Reform UK NHS", "Richard Tice healthcare", "Reform UK health policy", "Richard Tice hospitals"],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900">
      <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-6 inline-block">← Back to Richard Tice</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Richard Tice on the NHS</h1>
          <p className="text-xl text-slate-300">Reform UK&apos;s healthcare policies and plans for the National Health Service</p>
        </div>
      </section>

      <section className="py-12 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-slate-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Key Position</h2>
            <p className="text-xl text-slate-200">
              Richard Tice supports the NHS remaining <strong>free at the point of use</strong> but advocates for significant reform, including greater use of the private sector to reduce waiting lists and improve efficiency.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-6">Richard Tice&apos;s NHS Position</h2>
          
          <p className="text-slate-300 mb-4">
            Richard Tice and Reform UK have a nuanced position on the National Health Service. While they firmly support the principle of healthcare free at the point of use, they are critical of how the NHS is currently managed and call for significant reforms to improve outcomes.
          </p>

          <p className="text-slate-300 mb-4">
            Tice frequently points to record waiting lists, staff shortages, and declining standards as evidence that the NHS needs fundamental reform. He argues that simply spending more money without structural changes will not solve the problems.
          </p>

          <p className="text-slate-300 mb-4">
            As a businessman, Tice approaches healthcare from an efficiency perspective, arguing that private sector involvement and management techniques could help the NHS deliver better care without compromising its founding principles.
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-10">Reform UK NHS Policies</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">🏥 Core Principles</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• Keep NHS free at point of use</li>
                <li>• Maintain universal coverage</li>
                <li>• Protect frontline services</li>
                <li>• No US-style insurance system</li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">📉 Reduce Waiting Lists</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• Use private sector capacity</li>
                <li>• Tackle diagnostic backlogs</li>
                <li>• Speed up cancer treatment</li>
                <li>• Clear elective surgery backlog</li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">👨‍⚕️ Staffing</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• Train more British doctors/nurses</li>
                <li>• Reduce reliance on agency staff</li>
                <li>• Cut NHS management</li>
                <li>• Invest in frontline workers</li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">💰 Efficiency</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• Reduce bureaucracy</li>
                <li>• Cut management costs</li>
                <li>• Improve procurement</li>
                <li>• Embrace technology</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 mt-10">Private Sector Involvement</h2>

          <p className="text-slate-300 mb-4">
            One of the more controversial aspects of Reform UK&apos;s NHS policy is its support for greater private sector involvement. Tice argues this doesn&apos;t mean privatizing the NHS but using private providers to deliver NHS-funded care and reduce waiting times.
          </p>

          <p className="text-slate-300 mb-4">
            The party points to countries like Germany and France, which have universal healthcare systems that use a mix of public and private providers. They argue that ideological opposition to private involvement is harming patients.
          </p>

          <p className="text-slate-300 mb-4">
            Critics accuse Reform UK of wanting to &quot;privatize the NHS by the back door.&quot; Tice rejects this, saying patients don&apos;t care who provides their care as long as it&apos;s free at the point of use and delivered quickly.
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-10">Cutting NHS Bureaucracy</h2>

          <p className="text-slate-300 mb-4">
            Richard Tice is particularly critical of NHS management and bureaucracy. He argues that:
          </p>

          <ul className="text-slate-300 space-y-2 mb-6 list-disc list-inside">
            <li>Too much money goes on managers rather than doctors and nurses</li>
            <li>Excessive form-filling takes clinicians away from patients</li>
            <li>Multiple layers of NHS trusts and organizations create waste</li>
            <li>Diversity and equality initiatives divert resources from care</li>
            <li>IT systems are outdated and poorly integrated</li>
          </ul>

          <p className="text-slate-300 mb-4">
            Reform UK proposes significant cuts to NHS management and back-office functions, with savings redirected to frontline care. Critics argue these proposals are simplistic and that management plays important roles in coordinating care.
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-10">Immigration and the NHS</h2>

          <p className="text-slate-300 mb-4">
            Tice links NHS pressures to immigration, arguing that population growth through migration puts additional strain on health services. At the same time, he acknowledges that the NHS relies heavily on immigrant staff.
          </p>

          <p className="text-slate-300 mb-4">
            Reform UK&apos;s position is that Britain should train more domestic healthcare workers rather than relying on overseas recruitment, while also reducing overall immigration to ease pressure on services.
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-10">Constituency NHS Issues</h2>

          <p className="text-slate-300 mb-4">
            In his Boston and Skegness constituency, NHS access is a significant local issue. Rural and coastal areas often face challenges with healthcare provision, including:
          </p>

          <ul className="text-slate-300 space-y-2 mb-6 list-disc list-inside">
            <li>Long distances to major hospitals</li>
            <li>GP shortages in rural areas</li>
            <li>Ambulance response times</li>
            <li>Access to specialist services</li>
            <li>Aging population with complex needs</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 mt-10">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold text-white">Does Richard Tice want to privatize the NHS?</h3>
              <p className="text-slate-300 mt-2">No, Tice supports the NHS remaining free at the point of use. However, he advocates for greater use of private providers to deliver NHS-funded care.</p>
            </div>
            
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold text-white">What is Reform UK&apos;s NHS policy?</h3>
              <p className="text-slate-300 mt-2">Reform UK wants to keep the NHS free at point of use while reforming it through reduced bureaucracy, private sector involvement, and training more British healthcare workers.</p>
            </div>

            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold text-white">Does Reform UK support the NHS?</h3>
              <p className="text-slate-300 mt-2">Yes, Reform UK supports the principle of universal healthcare free at the point of use. They are critical of current NHS management but not the institution itself.</p>
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
