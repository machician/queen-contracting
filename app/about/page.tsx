import { Link } from "lucide-react";

// app/about/page.tsx - Clean typography, no fluff
export default function About() {
  return (
    <div className="container-custom py-20">
      <div className="max-w-3xl mx-auto">
        <span className="text-gray-400 text-sm uppercase tracking-wider">About Us</span>
        <h1 className="mt-4 mb-8">Queen Contracting is building the workforce for what's next.</h1>
        
        <div className="space-y-8 text-gray-600 leading-relaxed">
          <p className="text-lg">
            Queen Contracting is a workforce development and government contracting firm headquartered in Wyoming, operating nationwide. We recruit, train, and place workers in industries critical to America's reindustrialization: advanced manufacturing, energy infrastructure, AI data centers, shipbuilding, healthcare, and the skilled trades.          
          </p>
          
          <p>
            Across these industries, employers face a severe shortage of trained workers. Federal agencies cannot meet their contracting goals. And millions of Americans lack access to training that leads to stable, high-wage careers. Queen Contracting exists to close all three gaps simultaneously.
          </p>

          <p>
            We are an approved training provider for state workforce development programs and a certified government contractor. Trainees receive industry-recognized credentials through our network of partner technical colleges and hands-on programs. Upon completion, we connect qualified workers to government prime contractors and commercial employers who need their skills.
          </p>

          <p>
            Across these industries, employers face a severe shortage of trained workers. Federal agencies cannot meet their contracting goals. And millions of Americans lack access to training that leads to stable, high-wage careers. Queen Contracting exists to close all three gaps simultaneously.
          </p>

          <div className="border-l-2 border-black pl-6 my-12">
            <p className="text-gray-500 italic">
              "To build the American workforce pipeline that serves workers, contractors, communities, and government agencies—creating economic opportunity across the board."
            </p>
            <p className="text-xs text-gray-400 mt-2">— Mission Statement</p>
          </div>

          {/* <div className="grid md:grid-cols-3 gap-8 py-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-2">Legacy</h3>
              <p className="text-sm text-gray-500">14+ years of contracting excellence.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-2">Philosophy</h3>
              <p className="text-sm text-gray-500">Integrity. Transparency. Execution.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-2">Vision</h3>
              <p className="text-sm text-gray-500">The nation's most trusted contracting network.</p>
            </div>
          </div> */}
        </div>
      </div>

      <div className="border-t border-gray-100 mt-16 pt-16 text-center">
        <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">Interested in becoming a network partner?</p>
        <a href="/join" className="btn-primary inline-block hover:bg-blue-500">
          Join The Network →
        </a>
      </div>
    </div>
  );
}