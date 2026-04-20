import Link from "next/link";

const programs = [
  {
    icon: "📣",
    tag: "Online Advocacy",
    accentColor: "text-wrg-blue",
    tagBg: "bg-wrg-blue/10 text-wrg-blue",
    borderColor: "hover:border-wrg-blue",
    title: "Digital Campaigns",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&w=700",
    desc: "We design and run coordinated digital campaigns that amplify Rahul Gandhi's message — from economic justice to constitutional rights to social equality. Our campaigns combine compelling content, social media strategy, and volunteer mobilisation.",
    points: [
      "Issue-based campaign design and execution",
      "Social media content libraries for volunteers",
      "Rapid response coordination",
      "Cross-platform reach to diverse audiences",
    ],
  },
  {
    icon: "🎓",
    tag: "Skill Development",
    accentColor: "text-wrg-orange",
    tagBg: "bg-wrg-orange/10 text-wrg-orange",
    borderColor: "hover:border-wrg-orange",
    title: "Training & Capacity Building",
    image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&w=700",
    desc: "We run structured training programmes giving Congress volunteers the tools they need — from public speaking and community organising to digital literacy and constituency engagement.",
    points: [
      "Civic rights and democratic process workshops",
      "Communications and public speaking training",
      "Community organising methodology",
      "Digital tools for political activists",
    ],
  },
  {
    icon: "📄",
    tag: "Knowledge Production",
    accentColor: "text-wrg-green",
    tagBg: "bg-wrg-green/10 text-wrg-green",
    borderColor: "hover:border-wrg-green",
    title: "Research & Content",
    image: "https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&w=700",
    desc: "Our research team produces policy briefs, fact-sheets, and explainers that give volunteers the evidence base to make the Congress case confidently and accurately in their communities.",
    points: [
      "Policy briefs on key national issues",
      "Fact-checking government claims",
      "Data journalism and visualisation",
      "Localised content for state contexts",
    ],
  },
  {
    icon: "🌱",
    tag: "Community Organising",
    accentColor: "text-wrg-blue",
    tagBg: "bg-wrg-blue/10 text-wrg-blue",
    borderColor: "hover:border-wrg-blue",
    title: "Grassroots Support",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&w=700",
    desc: "We work alongside existing Congress party structures, community organisations, and local leaders to deepen Rahul Gandhi's connect with ordinary Indians — building a political movement rooted in real community relationships.",
    points: [
      "Booth-level committee strengthening",
      "Community event planning and facilitation",
      "Local issue mapping and advocacy",
      "Volunteer-to-community coordination",
    ],
  },
];

export default function WhatWeDoPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-16 md:py-24 border-b border-wrg-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-0.5 w-6 bg-wrg-blue" />
              <p className="text-wrg-blue font-bold text-xs uppercase tracking-widest">Our Work</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-wrg-dark leading-[1.1] mb-6">What We Do</h1>
            <p className="text-wrg-muted text-xl leading-relaxed max-w-2xl">
              Four interlocking programmes that together build the political muscle for a more just, democratic India.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 md:py-24 bg-wrg-light">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          {programs.map((p, i) => (
            <div
              key={p.title}
              className={`bg-white border border-wrg-border rounded-2xl overflow-hidden hover:shadow-md transition-all ${p.borderColor} grid grid-cols-1 ${
                i % 2 === 0 ? "md:grid-cols-[3fr_2fr]" : "md:grid-cols-[2fr_3fr]"
              }`}
            >
              {i % 2 !== 0 && (
                <div
                  className="hidden md:block min-h-[280px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${p.image})` }}
                />
              )}
              <div className="p-10 md:p-12">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${p.tagBg}`}>
                    {p.icon}
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${p.tagBg}`}>
                    {p.tag}
                  </span>
                </div>
                <h2 className={`text-2xl font-black mb-4 ${p.accentColor}`}>{p.title}</h2>
                <p className="text-wrg-muted text-sm leading-relaxed mb-6">{p.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-wrg-muted">
                      <span className="text-wrg-green font-black mt-0.5 shrink-0">✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
              {i % 2 === 0 && (
                <div
                  className="hidden md:block min-h-[280px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${p.image})` }}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-wrg-dark">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-5">Want to get involved?</h2>
          <p className="text-white/50 text-lg mb-8 max-w-lg mx-auto">
            Whether you want to run campaigns, train volunteers, or do research — there's a role for you.
          </p>
          <Link
            href="/join-withrg"
            className="inline-flex items-center bg-wrg-orange text-white font-bold px-10 py-4 rounded-xl hover:bg-wrg-orange-dark transition-colors"
          >
            Join WithRG →
          </Link>
        </div>
      </section>
    </div>
  );
}
