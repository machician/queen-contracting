// app/services/page.tsx - Prime Contracting + Workforce Development
import Link from "next/link";

export default function Services() {
  return (
    <div className="container-custom py-20">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-gray-400 text-sm uppercase tracking-wider">Expertise</span>
        <h1 className="mt-4 mb-6">What We Do</h1>
        <p className="text-gray-500">Prime contracting and workforce development — two sides of the same mission.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Section 1: Prime Contracting */}
        <div className="border border-gray-200 p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-light mb-6">Prime Contracting</h2>
          <p className="text-gray-600 text-sm uppercase tracking-wider mb-6">We win and manage government and commercial contracts.</p>
          
          <ul className="space-y-3 text-gray-700 mb-8">
            <li className="flex items-start gap-2">
              <span className="text-black mt-1">→</span>
              <span>End-to-end project management, consulting, compliance, and reporting (NAICS 541611, 541618)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black mt-1">→</span>
              <span>IT and professional technology services (NAICS 541511, 541512, 541519)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black mt-1">→</span>
              <span>Healthcare, lab technology, and biomedical support services (NAICS 541380, 561210)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black mt-1">→</span>
              <span>Commercial and institutional building construction (NAICS 236220)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black mt-1">→</span>
              <span>Facilities support services (NAICS 561210)</span>
            </li>
          </ul>

          <div className="border-l-2 border-black pl-4 py-2">
            <p className="text-gray-500 text-sm italic">
              *We self-perform management and oversight to meet federal 15-50% requirements, subcontracting skilled trades to our network partners.
            </p>
          </div>
        </div>

        {/* Section 2: Workforce Development */}
        <div className="border border-gray-200 p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-light mb-6">Workforce Development</h2>
          <p className="text-gray-600 text-sm uppercase tracking-wider mb-6">We train and place workers in high-demand industries.</p>
          
          <ul className="space-y-3 text-gray-700 mb-8">
            <li className="flex items-start gap-2">
              <span className="text-black mt-1">→</span>
              <span>Advanced manufacturing and robotics</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black mt-1">→</span>
              <span>Energy infrastructure (solar, oil, gas, nuclear, geothermal)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black mt-1">→</span>
              <span>AI data centers and telecommunications</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black mt-1">→</span>
              <span>Shipbuilding and defense industrial base</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black mt-1">→</span>
              <span>Healthcare and laboratory technology</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black mt-1">→</span>
              <span>Skilled trades (electrical, plumbing, HVAC)</span>
            </li>
          </ul>

          <div className="border-l-2 border-black pl-4 py-2">
            <p className="text-gray-500 text-sm italic">
              *Our program partners are Workforce Pell-eligible (effective July 2026) and approved by state workforce boards. Eligible trainees pay little or nothing.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-16">
        <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">Interested in becoming a network partner?</p>
        <Link href="/join" className="btn-secondary inline-block hover:bg-blue-500">
          Join The Network →
        </Link>
      </div>
    </div>
  );
}