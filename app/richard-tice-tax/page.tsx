import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Richard Tice on Tax - Reform UK Tax Policy & Tax Cuts 2026",
  description: "Richard Tice's tax policies: major tax cuts, raising income tax threshold, scrapping inheritance tax. Reform UK's plan to reduce the tax burden on British families.",
  keywords: ["Richard Tice tax", "Reform UK tax policy", "Richard Tice tax cuts", "Richard Tice inheritance tax", "Reform UK income tax"],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900">
      <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-6 inline-block">← Back to Richard Tice</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Richard Tice on Tax</h1>
          <p className="text-xl text-slate-300">Reform UK&apos;s tax policies and Tice&apos;s plan for lower taxes</p>
        </div>
      </section>

      <section className="py-12 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-slate-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Key Position</h2>
            <p className="text-xl text-slate-200">
              Richard Tice advocates for <strong>significant tax cuts</strong> to stimulate economic growth. Reform UK wants to raise the income tax threshold to £20,000, abolish inheritance tax, and cut taxes on businesses to make Britain more competitive.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-6">Richard Tice&apos;s Tax Philosophy</h2>
          
          <p className="text-slate-300 mb-4">
            Richard Tice approaches taxation from his perspective as a successful businessman who has built a £40 million fortune. He argues that Britain&apos;s tax burden has become too high, stifling enterprise, discouraging hard work, and making the country uncompetitive internationally.
          </p>

          <p className="text-slate-300 mb-4">
            Central to Tice&apos;s economic philosophy is the belief that lower taxes lead to higher growth. He frequently cites examples of countries with lower tax rates that have achieved stronger economic performance, arguing that Britain should follow suit.
          </p>

          <p className="text-slate-300 mb-4">
            As Deputy Leader of Reform UK and the party&apos;s Business, Trade and Energy spokesperson, Tice has been instrumental in developing the party&apos;s tax policies. He argues that the current system punishes success and creates perverse incentives.
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-10">Reform UK Tax Policies</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">💷 Income Tax</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• Raise personal allowance to £20,000</li>
                <li>• Take millions out of income tax</li>
                <li>• Help low and middle earners</li>
                <li>• Simplify the tax system</li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">🏠 Inheritance Tax</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• Abolish inheritance tax completely</li>
                <li>• Let families pass on wealth</li>
                <li>• End &quot;death tax&quot; on family homes</li>
                <li>• Support family businesses</li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">🏢 Business Tax</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• Reduce corporation tax</li>
                <li>• Cut business rates</li>
                <li>• Simplify tax compliance</li>
                <li>• Support small businesses</li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">⛽ Fuel & Energy</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• Cut fuel duty</li>
                <li>• Scrap green levies on bills</li>
                <li>• Reduce VAT on energy</li>
                <li>• Lower costs for drivers</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 mt-10">The £20,000 Personal Allowance</h2>

          <p className="text-slate-300 mb-4">
            One of Reform UK&apos;s flagship tax policies is raising the income tax personal allowance to £20,000. Currently set at £12,570, this threshold determines when people start paying income tax. Tice argues that raising it would:
          </p>

          <ul className="text-slate-300 space-y-2 mb-6 list-disc list-inside">
            <li>Take millions of low-paid workers out of income tax entirely</li>
            <li>Provide significant relief to middle-income families</li>
            <li>Make work pay compared to benefits</li>
            <li>Reduce the administrative burden on small earners</li>
            <li>Stimulate consumer spending and economic growth</li>
          </ul>

          <p className="text-slate-300 mb-4">
            Critics argue this policy would be expensive, costing tens of billions of pounds annually. Tice counters that the cost would be offset by reduced welfare spending, increased economic activity, and savings from cutting government waste.
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-10">Abolishing Inheritance Tax</h2>

          <p className="text-slate-300 mb-4">
            Richard Tice has been a vocal critic of inheritance tax, which he describes as a &quot;death tax&quot; that punishes families who have worked hard to build wealth. Currently, inheritance tax is charged at 40% on estates above £325,000 (with some allowances for property passed to spouses or children).
          </p>

          <p className="text-slate-300 mb-4">
            Tice argues that inheritance tax is fundamentally unfair because the money has already been taxed during the person&apos;s lifetime. He also points out that wealthy individuals can often avoid it through trusts and other planning, meaning it falls hardest on middle-class families with property wealth.
          </p>

          <p className="text-slate-300 mb-4">
            Reform UK&apos;s policy to abolish inheritance tax completely would benefit families inheriting property and businesses. Critics argue it would primarily benefit the wealthy and reduce government revenue needed for public services.
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-10">Tax and Economic Growth</h2>

          <p className="text-slate-300 mb-4">
            Central to Tice&apos;s argument is that lower taxes lead to higher economic growth, which ultimately generates more tax revenue despite lower rates. This is sometimes called the &quot;Laffer Curve&quot; theory – that beyond a certain point, higher tax rates actually reduce revenue by discouraging economic activity.
          </p>

          <p className="text-slate-300 mb-4">
            Tice frequently points to his own business career as evidence that enterprise and wealth creation benefit society. He argues that the entrepreneurs and businesses who create jobs and prosperity are being driven away by Britain&apos;s high tax burden.
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-10">How Would Tax Cuts Be Funded?</h2>

          <p className="text-slate-300 mb-4">
            Critics often ask how Reform UK would fund its proposed tax cuts. Tice and the party point to several sources:
          </p>

          <ul className="text-slate-300 space-y-2 mb-6 list-disc list-inside">
            <li><strong>Cutting government waste:</strong> Reducing bureaucracy and inefficiency</li>
            <li><strong>Reducing welfare spending:</strong> Through making work pay better than benefits</li>
            <li><strong>Immigration reduction:</strong> Claiming savings on public services</li>
            <li><strong>Scrapping Net Zero:</strong> Ending expensive climate policies</li>
            <li><strong>Economic growth:</strong> Higher growth generating more tax revenue</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 mt-10">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold text-white">What are Richard Tice&apos;s tax policies?</h3>
              <p className="text-slate-300 mt-2">Richard Tice supports raising the income tax threshold to £20,000, abolishing inheritance tax, cutting business taxes, and reducing fuel duty and green levies.</p>
            </div>
            
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold text-white">Does Reform UK want to cut taxes?</h3>
              <p className="text-slate-300 mt-2">Yes, significant tax cuts are central to Reform UK&apos;s economic policy. They believe lower taxes will stimulate growth and make Britain more competitive.</p>
            </div>

            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold text-white">Would Reform UK abolish inheritance tax?</h3>
              <p className="text-slate-300 mt-2">Yes, Reform UK has pledged to abolish inheritance tax completely, describing it as an unfair &quot;death tax&quot; on family wealth.</p>
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
