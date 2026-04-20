import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "/why-withrg", label: "Why WithRG" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/our-impact", label: "Our Impact" },
  { href: "/our-footprint", label: "Our Footprint" },
  { href: "/stories", label: "Stories" },
];

const getInvolved = [
  { href: "/contact", label: "Contact Us" },
  { href: "/join-withrg", label: "Join the Movement" },
  { href: "/start-district", label: "Start a District Chapter" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-wrg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/logo.png"
                alt="#WithRG"
                width={52}
                height={52}
                className="w-12 h-12 object-contain"
              />
              {/* <div className="leading-tight">
                <span className="font-black text-wrg-orange text-2xl tracking-tight">#with</span>
                <span className="font-black text-wrg-green text-2xl tracking-tight">RG</span>
              </div> */}
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
             WithRG is a nationwide, volunteer-driven community of citizens committed to protecting constitutional values and strengthening democratic participation across India.
            </p>
            <a href="mailto:team@withrg.in" className="text-wrg-blue text-sm font-medium hover:text-white transition-colors">
              team@withrg.in
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white/40 font-bold text-xs uppercase tracking-widest mb-5">Explore</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-white/40 font-bold text-xs uppercase tracking-widest mb-5">Get Involved</h4>
            <ul className="space-y-3">
              {getInvolved.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/join-withrg"
              className="inline-block mt-6 bg-wrg-orange text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-wrg-orange-dark transition-colors"
            >
              Join WithRG →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-sm">© {year} #WithRG. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="text-white/25 text-sm hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-white/25 text-sm hover:text-white/60 transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
