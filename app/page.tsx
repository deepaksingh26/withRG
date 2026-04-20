import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "1000+", label: "Volunteers", color: "text-wrg-blue" },
  { value: "0", label: "District Chapters", color: "text-wrg-orange" },
  { value: "25", label: "States Active", color: "text-wrg-green" },
  { value: "30M+", label: "Citizens Reached", color: "text-wrg-blue" },
];

const pillars = [
  {
    icon: "📣",
    color: "bg-wrg-blue/10 text-wrg-blue",
    title: "Digital Campaigns",
    desc: "Coordinated digital campaigns amplifying Rahul Gandhi's message of unity, justice, and grassroots democracy across India.",
  },
  {
    icon: "🎓",
    color: "bg-wrg-orange/10 text-wrg-orange",
    title: "Training & Capacity Building",
    desc: "Equipping Congress volunteers with the skills to organise, communicate, and lead their communities effectively.",
  },
  {
    icon: "📄",
    color: "bg-wrg-green/10 text-wrg-green",
    title: "Research & Content",
    desc: "Evidence-based policy research supporting the Congress party's platform on welfare, rights, and democratic accountability.",
  },
  {
    icon: "🌱",
    color: "bg-wrg-blue/10 text-wrg-blue",
    title: "Grassroots Organising",
    desc: "Building deep-rooted community networks that connect Rahul Gandhi's vision to lived realities at the district level.",
  },
];

const stories = [
  {
    img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&w=600",
    tag: "Maharashtra",
    tagColor: "bg-wrg-blue/10 text-wrg-blue",
    title: "How a Mumbai volunteer saved a neighbourhood from illegal construction",
  },
  {
    img: "https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&w=600",
    tag: "Karnataka",
    tagColor: "bg-wrg-green/10 text-wrg-green",
    title: "The fact-sheet that changed the Karnataka Assembly budget debate",
  },
  {
    img: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&w=600",
    tag: "West Bengal",
    tagColor: "bg-wrg-orange/10 text-wrg-orange",
    title: "Building bridges between communities in Kolkata's divided neighbourhoods",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="bg-white py-16 md:py-24 border-b border-wrg-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              {/* <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-wrg-green animate-pulse" />
                <span className="text-wrg-muted text-xs font-bold uppercase tracking-widest">
                  Indian National Congress · Volunteer Network
                </span>
              </div> */}
              <h1 className="text-5xl md:text-6xl font-black text-wrg-dark leading-[1.05] mb-6">
                <span className="text-wrg-orange">#with</span>
                <span className="text-wrg-green">RG</span>
                <br />
                <span className="text-3xl md:text-4xl font-bold text-wrg-ink">
                 Democracy is strongest when citizens participate
                  <br />
                  
                </span>
              </h1>
              <p className="text-wrg-muted text-lg leading-relaxed mb-10 max-w-lg">
                WithRG is a nationwide, volunteer-driven community of citizens committed to protecting constitutional values and strengthening democratic participation across India. <br /><br />

We believe democracy is not sustained by institutions alone. It is powered by informed citizens, ethical leadership, and collective civic responsibility.<br /><br />

Rooted in the vision of Rahul Gandhi and inspired by the enduring ideals of the Indian National Congress, WithRG brings together people from diverse backgrounds who share a commitment to truth, dialogue, inclusion, and public service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/join-withrg"
                  className="inline-flex items-center justify-center bg-wrg-orange text-white font-bold px-8 py-4 rounded-xl hover:bg-wrg-orange-dark transition-colors text-base active:scale-[0.98]"
                >
                  Join the Movement →
                </Link>
                <Link
                  href="/why-withrg"
                  className="inline-flex items-center justify-center border-2 border-wrg-border text-wrg-ink font-semibold px-8 py-4 rounded-xl hover:border-wrg-blue hover:text-wrg-blue transition-colors text-base"
                >
                  Our Story
                </Link>
              </div>
            </div>

            {/* Logo hero */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-wrg-light flex items-center justify-center">
                  <Image
                    src="/WithRG.png"
                    alt="WithRG — With Rahul Gandhi"
                    width={400}
                    height={400}
                    className="w-full h-full object-contain drop-shadow-xl"
                    priority
                  />
                </div>
                {/* Floating badges */}
                <div className="absolute -bottom-4 -left-4 bg-white border border-wrg-border rounded-xl px-4 py-2 shadow-md">
                  <span className="text-wrg-green font-black text-sm">10,000+</span>
                  <span className="text-wrg-muted text-xs block">volunteers</span>
                </div>
                <div className="absolute -top-4 -right-4 bg-white border border-wrg-border rounded-xl px-4 py-2 shadow-md">
                  <span className="text-wrg-orange font-black text-sm">521 Districts</span>
                  <span className="text-wrg-muted text-xs block">nationwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-wrg-light border-b border-wrg-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-wrg-border">
            {stats.map((s) => (
              <div key={s.label} className="py-7 px-6 text-center">
                <div className={`text-3xl md:text-4xl font-black mb-1 ${s.color}`}>{s.value}</div>
                <div className="text-wrg-muted text-xs uppercase tracking-widest font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="py-20 bg-white border-b border-wrg-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-1 mb-8">
            <div className="h-1 w-8 rounded-full bg-wrg-orange" />
            <div className="h-1 w-8 rounded-full bg-white border border-wrg-border" />
            <div className="h-1 w-8 rounded-full bg-wrg-green" />
          </div>
          <blockquote className="text-2xl md:text-3xl font-bold text-wrg-dark leading-[1.4] mb-6 italic">
          Through honest communication, collaborative action, and responsible engagement, our volunteers contribute to building a political culture that values empathy as much as progress.
<br /><br />
This is not just a platform. It is a civic movement.
          </blockquote>
          {/* <cite className="text-wrg-orange font-bold uppercase tracking-widest text-sm not-italic">
            — Rahul Gandhi
          </cite> */}
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="py-20 md:py-28 bg-wrg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-wrg-orange font-bold text-xs uppercase tracking-widest mb-3">Our Work</p>
              <h2 className="text-4xl font-black text-wrg-dark">Four Pillars of Democratic Action</h2>
            </div>
            <Link href="/what-we-do" className="text-wrg-blue font-semibold text-sm hover:text-wrg-blue-dark transition-colors shrink-0">
              View all programmes →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-white border border-wrg-border rounded-2xl p-8 hover:border-wrg-blue hover:shadow-sm transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 ${p.color}`}>
                  {p.icon}
                </div>
                <h3 className="text-lg font-black text-wrg-dark mb-3 group-hover:text-wrg-blue transition-colors">
                  {p.title}
                </h3>
                <p className="text-wrg-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BHARAT JODO SECTION ── */}
      {/* <section className="py-0 overflow-hidden border-y border-wrg-border">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[480px]">
          <div
            className="min-h-[300px] md:min-h-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&w=800')",
            }}
          />
          <div className="bg-wrg-dark flex items-center px-10 md:px-16 py-16">
            <div className="max-w-md">
              <div className="flex items-center gap-2 mb-5">
                <span className="h-0.5 w-8 bg-wrg-orange" />
                <span className="text-wrg-orange font-bold text-xs uppercase tracking-widest">Bharat Jodo Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-6">
                Uniting India, One Volunteer at a Time
              </h2>
              <p className="text-white/60 leading-relaxed mb-8 text-sm">
                Inspired by Rahul Gandhi's Bharat Jodo Yatra — the 4,000 km march from Kanyakumari to Srinagar — WithRG volunteers carry that spirit of unity and dialogue into every district and every conversation.
              </p>
              <Link
                href="/why-withrg"
                className="inline-flex items-center gap-2 text-wrg-blue font-bold text-sm hover:text-white transition-colors"
              >
                Read our story →
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* ── FOOTPRINT ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-wrg-green font-bold text-xs uppercase tracking-widest mb-4">Nationwide Presence</p>
          <h2 className="text-4xl font-black text-wrg-dark mb-5">From Kashmir to Kanyakumari</h2>
          <p className="text-wrg-muted text-lg max-w-lg mx-auto mb-12 leading-relaxed">
            WithRG has active chapters across 25 states and 521 districts and growing every month.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {["Maharashtra", "Delhi", "Karnataka", "Tamil Nadu", "Uttar Pradesh", "Rajasthan", "West Bengal", "Gujarat", "Telangana", "Kerala", "Punjab", "Madhya Pradesh", "Andhra Pradesh"].map((s) => (
              <span
                key={s}
                className="border border-wrg-border text-wrg-ink text-xs font-semibold px-4 py-2 rounded-full hover:bg-wrg-blue hover:text-white hover:border-wrg-blue transition-all cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
          <Link
            href="/our-footprint"
            className="inline-flex items-center bg-wrg-blue text-white font-bold px-8 py-4 rounded-xl hover:bg-wrg-blue-dark transition-colors"
          >
            See Our Full Footprint
          </Link>
        </div>
      </section>

      {/* ── STORIES ── */}
      <section className="py-20 md:py-28 bg-wrg-light border-y border-wrg-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-wrg-green font-bold text-xs uppercase tracking-widest mb-3">Voices from the Ground</p>
              <h2 className="text-4xl font-black text-wrg-dark">Stories of Change</h2>
            </div>
            <Link href="/stories" className="text-wrg-blue font-semibold text-sm hover:text-wrg-blue-dark transition-colors shrink-0">
              All stories →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map((s) => (
              <article
                key={s.title}
                className="bg-white border border-wrg-border rounded-2xl overflow-hidden hover:border-wrg-blue hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${s.img})` }} />
                <div className="p-6">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${s.tagColor}`}>
                    {s.tag}
                  </span>
                  <h3 className="mt-3 font-black text-wrg-dark text-sm leading-snug group-hover:text-wrg-blue transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-wrg-orange text-xs font-bold group-hover:underline">Read story →</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{
          backgroundImage:
            "url('/1000158301.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-wrg-dark/88" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          {/* <Image
            src="/logo.png"
            alt="#WithRG"
            width={80}
            height={80}
            className="w-20 h-20 object-contain mx-auto mb-6 drop-shadow-lg"
          /> */}
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight drop-shadow-lg" style={{color: 'white'}}>
            India Needs You.{" "}
            <span className="text-wrg-orange drop-shadow-lg">#WithRG</span> Needs You.
          </h2>
          <p className="text-white text-lg mb-10 max-w-xl mx-auto leading-relaxed drop-shadow-md">
            Be part of history. Join thousands of volunteers building Rahul Gandhi's vision of a kinder, stronger, more equal India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join-withrg"
              className="inline-flex items-center justify-center bg-wrg-orange text-white font-bold px-10 py-4 rounded-xl hover:bg-wrg-orange-dark transition-colors text-base"
            >
              Join WithRG Today
            </Link>
            <Link
              href="/start-district"
              className="inline-flex items-center justify-center border-2 border-white/30 text-white font-semibold px-10 py-4 rounded-xl hover:bg-white/10 transition-colors text-base"
            >
              Start a District Chapter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
