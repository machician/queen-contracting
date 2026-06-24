// components/Footer.tsx - Minimalist black & white
import Link from "next/link";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <h3 className="text-lg font-light tracking-wide mb-4">Queen Contracting</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Government & Commercial Contracting. <br />Worforce Development Network.
            </p>
            <div className="mt-4 flex gap-2 text-[10px] text-gray-500 tracking-wider">
              <span>SAM</span>
              <span>•</span>
              <span>SBA</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-gray-400">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white text-sm">What We Do</Link></li>
              <li><Link href="/join" className="text-gray-300 hover:text-white text-sm">Join Network</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-gray-400">Contact</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>+1 (404) 222-4143</li>
              <li>info@queencontracting.net</li>
              <li>30 N Gould Street Ste R</li>
              <li>Sheridan, Wyoming</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-gray-400">Certifications (Pending)</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              GSA Schedule • SBA 8(a) • HUBZone • WOSB • WIOA
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs tracking-wide">
          <p>&copy; {new Date().getFullYear()} Queen Contracting LLC. All rights reserved.</p>
          <p className="mt-1">An accessible workplace. Persons with disabilities are welcome to apply.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;