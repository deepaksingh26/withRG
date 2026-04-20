import Link from "next/link";

// const stories = [
//   {
//     id: 1,
//     title: "How a Mumbai WithRG volunteer turned a neighbourhood grievance into a policy win",
//     excerpt: "Priya had been watching her community's park disappear to illegal construction. She joined WithRG, learned how to file RTIs and engage her local corporator — and within six months, the park was restored.",
//     state: "Maharashtra",
//     tag: "Grassroots Action",
//     tagStyle: "bg-wrg-blue/10 text-wrg-blue",
//     image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&w=800",
//   },
//   {
//     id: 2,
//     title: "Training 500 first-time voters in Jaipur before the state elections",
//     excerpt: "Our Jaipur chapter ran a month-long programme reaching 500 first-time voters with civic literacy training, voter registration drives, and candidate accountability sessions.",
//     state: "Rajasthan",
//     tag: "Voter Outreach",
//     tagStyle: "bg-wrg-orange/10 text-wrg-orange",
//     image: "https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&w=800",
//   },
//   {
//     id: 3,
//     title: "The fact-sheet that changed a budget debate in the Karnataka Assembly",
//     excerpt: "When misinformation about Karnataka's education budget began circulating, our research team produced a detailed fact-sheet that was cited by three Congress MLAs in the chamber.",
//     state: "Karnataka",
//     tag: "Research Impact",
//     tagStyle: "bg-wrg-green/10 text-wrg-green",
//     image: "https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&w=800",
//   },
//   {
//     id: 4,
//     title: "Building bridges in West Bengal: WithRG's community dialogue programme",
//     excerpt: "In a divided urban neighbourhood, WithRG volunteers facilitated dialogues bringing residents from different backgrounds together to identify shared civic priorities.",
//     state: "West Bengal",
//     tag: "Community",
//     tagStyle: "bg-wrg-blue/10 text-wrg-blue",
//     image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&w=800",
//   },
//   {
//     id: 5,
//     title: "Bharat Jodo Yatra welcome events: WithRG volunteers in 12 cities",
//     excerpt: "When Rahul Gandhi's Bharat Jodo Yatra passed through 12 cities with WithRG chapters, our volunteers organised welcome events and live-coverage reaching over 100,000 citizens.",
//     state: "Nationwide",
//     tag: "Bharat Jodo",
//     tagStyle: "bg-wrg-orange/10 text-wrg-orange",
//     image: "https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&w=800",
//   },
//   {
//     id: 6,
//     title: "How Kerala volunteers built the state's most active Congress digital cell",
//     excerpt: "Starting from three volunteers, the Thiruvananthapuram WithRG chapter grew to 400+ active digital volunteers in 18 months — a model for digital political organising.",
//     state: "Kerala",
//     tag: "Digital Campaigns",
//     tagStyle: "bg-wrg-green/10 text-wrg-green",
//     image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&w=800",
//   },
// ];

export default function StoriesPage() {
  // const [featured, ...rest] = stories;

  return (
    <div>
      {/* Coming Soon */}
      <section className="bg-white py-24 md:py-32 border-b border-wrg-border flex items-center justify-center min-h-screen">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="h-0.5 w-6 bg-wrg-orange" />
            <p className="text-wrg-orange font-bold text-xs uppercase tracking-widest">Coming Soon</p>
            <span className="h-0.5 w-6 bg-wrg-orange" />
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-wrg-dark leading-[1.1] mb-6">Stories of Change</h1>
          <p className="text-wrg-muted text-xl leading-relaxed">
            We're curating inspiring stories from our volunteers and communities. Check back soon for powerful tales of civic action and impact.
          </p>
        </div>
      </section>

      {/* Featured - COMMENTED OUT */}
      {/* 
      <section className="py-16 bg-wrg-light border-b border-wrg-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-wrg-muted font-bold text-xs uppercase tracking-widest mb-6">Featured Story</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-wrg-border hover:border-wrg-blue hover:shadow-lg transition-all bg-white">
            <div
              className="min-h-[280px] md:min-h-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${featured.image})` }}
            />
            <div className="p-10 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${featured.tagStyle}`}>
                  {featured.tag}
                </span>
                <span className="text-wrg-muted text-xs font-medium">{featured.state}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-wrg-dark leading-snug mb-4">{featured.title}</h2>
              <p className="text-wrg-muted text-sm leading-relaxed mb-6">{featured.excerpt}</p>
              <button className="self-start text-wrg-orange font-bold text-sm hover:underline">Read full story →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      {/* 
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-black text-wrg-dark mb-10">More Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((s) => (
              <article
                key={s.id}
                className="bg-wrg-light border border-wrg-border rounded-2xl overflow-hidden hover:border-wrg-blue hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${s.image})` }} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${s.tagStyle}`}>
                      {s.tag}
                    </span>
                    <span className="text-wrg-muted text-xs">{s.state}</span>
                  </div>
                  <h3 className="text-sm font-black text-wrg-dark leading-snug mb-3 group-hover:text-wrg-blue transition-colors">
                    {s.title}
                  </h3>
                  <span className="text-wrg-orange text-xs font-bold group-hover:underline">Read more →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* 
      <section className="py-20 bg-wrg-dark">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-5">Have a story to share?</h2>
          <p className="text-white/50 text-lg mb-8 max-w-lg mx-auto">If you're a WithRG volunteer with a story of civic action, we want to hear it.</p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-wrg-orange text-white font-bold px-10 py-4 rounded-xl hover:bg-wrg-orange-dark transition-colors"
          >
            Share Your Story →
          </Link>
        </div>
      </section>
      */}
    </div>
  );
}
