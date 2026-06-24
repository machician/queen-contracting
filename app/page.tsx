// app/page.tsx (Home) - Executive minimalist
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero - Clean black & white */}
      <section className="min-h-[80vh] flex items-center">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-gray-400 text-sm uppercase tracking-wider">Government & Commercial Contracting</span>
            <h1 className="mt-4 mb-6">
              Building the workforce for America's reindustrialization.
            </h1>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-xl">
              We are a SAM-certified government prime contractor. We also partner with federally-approved training providers. We fulfill contracts for government and commercial clients—and build the skilled workforce to complete them.
            </p>
            <div className="flex gap-4">
              <Link href="/join" className="btn-primary hover:bg-blue-500">
                Join The Network
              </Link>
              <Link href="/services" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal divider */}
      <div className="border-t border-gray-100"></div>

      {/* Three-column feature */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-subtitle">Why Queen Contracting?</span>
            <h2 className="section-title">Contracting excellence,<br />executed with precision and care.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Government RFPs", desc: "Access to federal, state, and local procurement opportunities." },
              { title: "Commercial Projects", desc: "Private sector contracts from established enterprise partners." },
              { title: "Workforce Development", desc: "Recruitment, training, and placement in high-demand industries." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-px bg-black mx-auto mb-6"></div>
                <h3 className="text-xl font-light mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
