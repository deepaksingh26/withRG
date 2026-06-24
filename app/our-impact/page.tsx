import Link from "next/link";

const metrics = [
  { value: "1000+", label: "Volunteers", desc: "Active volunteers contributing across India", color: "text-wrg-blue", border: "border-t-wrg-blue" },
  { value: "0", label: "District Chapters", desc: "Chapters across 25 Indian states", color: "text-wrg-orange", border: "border-t-wrg-orange" },
  { value: "30M+", label: "Citizens Reached", desc: "Via digital campaigns and on-ground work", color: "text-wrg-green", border: "border-t-wrg-green" },
  { value: "25+", label: "Training Sessions", desc: "Capacity building workshops conducted", color: "text-wrg-blue", border: "border-t-wrg-blue" },
  { value: "50+", label: "Research Pieces", desc: "Policy briefs and fact-sheets published", color: "text-wrg-orange", border: "border-t-wrg-orange" },
  { value: "7+", label: "Grassroots Partners", desc: "Community organisations supported", color: "text-wrg-green", border: "border-t-wrg-green" },
];

const milestones = [
  {
    year: "2008",
    title: "WithRG Founded",
    desc: "Started as a small, informal network of supporters focused on student outreach and local engagement initiatives.",
    color: "bg-wrg-blue"
  },
  {
    year: "2012",
    title: "Early Volunteer Growth",
    desc: "Expanded across campuses and youth groups, building a core base of committed volunteers in a few key states.",
    color: "bg-wrg-orange"
  },
  {
    year: "2016",
    title: "Digital Presence Launched",
    desc: "Began structured digital outreach through social media campaigns, improving coordination and message amplification.",
    color: "bg-wrg-green"
  },
  {
    year: "2020",
    title: "Pandemic Response",
    desc: "Shifted focus during COVID-19 to digital engagement, volunteer coordination, and local relief support efforts.",
    color: "bg-wrg-blue"
  },
  {
    year: "2022",
    title: "Bharat Jodo Yatra Support",
    desc: "Volunteers supported the Bharat Jodo Yatra through local mobilization, events, and online campaign efforts.",
    color: "bg-wrg-orange"
  },
  {
    year: "2023",
    title: "Structured Expansion",
    desc: "Developed district-level teams across multiple states and introduced basic training and coordination systems.",
    color: "bg-wrg-green"
  },
  {
    year: "2024",
    title: "1000+ Dedicated Volunteers",
    desc: "Grew into a nationwide volunteer network with over 1,000 participants and continued expansion into new districts.",
    color: "bg-wrg-blue"
  }
];

export default function OurImpactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-16 md:py-24 border-b border-wrg-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-0.5 w-6 bg-wrg-green" />
              <p className="text-wrg-green font-bold text-xs uppercase tracking-widest">Results</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-wrg-dark leading-[1.1] mb-6">Our Impact</h1>
            <p className="text-wrg-muted text-xl leading-relaxed max-w-2xl">
              Every number here represents a person who chose to act — a volunteer, a citizen, a believer in a better India.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 md:py-28 bg-wrg-light">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-black text-wrg-dark mb-8">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {metrics.map((m) => (
              <div
                key={m.label}
                className={`bg-white border border-wrg-border rounded-2xl p-6 hover:shadow-sm transition-all border-t-4 ${m.border}`}
              >
                <div className={`text-4xl font-black mb-2 ${m.color}`}>{m.value}</div>
                <div className="font-black text-wrg-dark text-sm mb-1">{m.label}</div>
                <div className="text-wrg-muted text-xs leading-relaxed">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote break */}
      {/* <div
        className="h-64 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&w=1400')",
        }}
      >
        <div className="absolute inset-0 bg-wrg-dark/75" />
        <div className="relative h-full flex items-center justify-center px-6">
          <blockquote className="text-center">
            <p className="text-white text-2xl md:text-3xl font-black italic max-w-2xl">
              "The strength of our democracy is in the hands of its people."
            </p>
            <cite className="text-wrg-orange font-bold uppercase tracking-widest text-xs not-italic mt-4 block">
              — Rahul Gandhi
            </cite>
          </blockquote>
        </div>
      </div> */}

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-wrg-blue font-bold text-xs uppercase tracking-widest mb-3">Growth Story</p>
            <h2 className="text-3xl font-black text-wrg-dark">Our Journey</h2>
          </div>
          <div className="relative max-w-3xl">
            <div className="absolute left-[88px] top-0 bottom-0 w-px bg-wrg-border hidden md:block" />
            <div className="space-y-0">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-6 items-start">
                  <div className="shrink-0 w-20 text-right pt-5">
                    <span className="text-wrg-muted font-black text-sm">{m.year}</span>
                  </div>
                  <div className="hidden md:flex items-start pt-5 shrink-0 relative z-10">
                    <div className={`w-4 h-4 rounded-full border-2 border-white ring-2 ring-wrg-border mt-1 ${m.color}`} />
                  </div>
                  <div className="flex-1 pt-4 pb-10">
                    <h3 className="font-black text-wrg-dark mb-2 text-sm">{m.title}</h3>
                    <p className="text-wrg-muted text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-wrg-dark">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-5">Add your chapter to our story.</h2>
          <p className="text-white/50 text-lg mb-8 max-w-md mx-auto">Every volunteer makes India's democracy a little stronger.</p>
          <Link
            href="/join-withrg"
            className="inline-flex items-center bg-wrg-orange text-white font-bold px-10 py-4 rounded-xl hover:bg-wrg-orange-dark transition-colors"
          >
            Join WithRG
          </Link>
        </div>
      </section>
    </div>
  );
}
