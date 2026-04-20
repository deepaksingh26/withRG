import Link from "next/link";

const values = [
  {
    title: "Truth Over Power",
    color: "border-t-wrg-orange",
    desc: "WithRG volunteers are committed to speaking truth — about governance failures, economic inequality, and attacks on democratic institutions — regardless of personal cost.",
  },
  {
    title: "Unity in Diversity",
    color: "border-t-wrg-blue",
    desc: "India's strength lies in its plurality. We stand firmly against divisive politics and work to build bridges across caste, religion, language, and region.",
  },
  {
    title: "Constitution First",
    color: "border-t-wrg-green",
    desc: "We believe in the supremacy of the Indian Constitution — in its promises of equality, liberty, and justice — and oppose any attempt to erode its foundations.",
  },
  {
    title: "Volunteer-Powered",
    color: "border-t-wrg-orange",
    desc: "WithRG is built by ordinary Indians who choose to act. Our power comes not from money or institutions but from the collective will of thousands of committed citizens.",
  },
];

export default function WhyWithRGPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-16 md:py-24 border-b border-wrg-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-0.5 w-6 bg-wrg-orange" />
              <p className="text-wrg-orange font-bold text-xs uppercase tracking-widest">Our Purpose</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-wrg-dark leading-[1.1] mb-6">
              Why <span className="text-wrg-orange">#with</span><span className="text-wrg-green">RG</span>?
            </h1>
            <p className="text-wrg-muted text-xl leading-relaxed max-w-2xl">
              Because democracy doesn't run itself. Because silence is complicity. Because Rahul Gandhi's vision of a just India deserves a million hands behind it.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 bg-wrg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-0.5 w-6 bg-wrg-blue" />
                <p className="text-wrg-blue font-bold text-xs uppercase tracking-widest">Our Mission</p>
              </div>
              <h2 className="text-3xl font-black text-wrg-dark mb-6">A Volunteer Army for a Better India</h2>
              <div className="space-y-4 text-wrg-muted leading-relaxed text-sm">
                <p>
                  WithRG was born from a simple conviction: that Rahul Gandhi's vision of an inclusive, just, and democratic India cannot be achieved by politicians alone. It requires millions of ordinary citizens stepping up, speaking out, and organising in their communities.
                </p>
                <p>
                  We build the infrastructure that makes that possible — digital tools, training programmes, research support, and a nationwide network of district chapters — so that every motivated Indian can translate their beliefs into action.
                </p>
                <p>
                  From the Bharat Jodo Yatra to local ward meetings, from social media campaigns to RTI applications, WithRG volunteers are on the front lines of India's democratic struggle.
                </p>
              </div>
            </div>

            {/* Quote card */}
            <div className="bg-white border border-wrg-border rounded-2xl p-10 relative overflow-hidden shadow-sm">
              <div className="flex gap-1 mb-6">
                <div className="h-1.5 w-8 rounded-full bg-wrg-orange" />
                <div className="h-1.5 w-8 rounded-full bg-white border border-wrg-border" />
                <div className="h-1.5 w-8 rounded-full bg-wrg-green" />
              </div>
              <div className="text-6xl text-wrg-blue font-black leading-none mb-4 opacity-20">"</div>
              <blockquote className="text-wrg-dark text-xl font-bold leading-relaxed mb-8 italic">
                Politics is not just a profession. It is service. And service means being with the people — in their pain, in their struggle, and in their hope.
              </blockquote>
              <cite className="text-wrg-orange font-bold uppercase tracking-widest text-xs not-italic">
                — Rahul Gandhi
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Visual break */}
      {/* <div
        className="h-72 md:h-80 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&w=1400')",
        }}
      >
        <div className="absolute inset-0 bg-wrg-dark/70" />
        <div className="relative h-full flex items-center justify-center px-6">
          <div className="text-center">
            <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-4">Our Vision</p>
            <p className="text-white text-2xl md:text-4xl font-black max-w-2xl leading-tight">
              An India where every citizen has a voice — and uses it.
            </p>
          </div>
        </div>
      </div> */}

      {/* Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-wrg-green font-bold text-xs uppercase tracking-widest mb-3">What Guides Us</p>
            <h2 className="text-3xl font-black text-wrg-dark">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`bg-wrg-light border border-wrg-border rounded-2xl p-8 hover:shadow-sm transition-all border-t-4 ${
                  i % 3 === 0 ? "border-t-wrg-orange" : i % 3 === 1 ? "border-t-wrg-blue" : "border-t-wrg-green"
                }`}
              >
                <h3 className="text-lg font-black text-wrg-dark mb-3">{v.title}</h3>
                <p className="text-wrg-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-wrg-dark">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-5">Ready to stand with Rahul Gandhi?</h2>
          <p className="text-white/50 text-lg mb-8 max-w-lg mx-auto">
            Join thousands of volunteers already working for a better India.
          </p>
          <Link
            href="/join-withrg"
            className="inline-flex items-center bg-wrg-orange text-white font-bold px-10 py-4 rounded-xl hover:bg-wrg-orange-dark transition-colors"
          >
            Join WithRG Today →
          </Link>
        </div>
      </section>
    </div>
  );
}
