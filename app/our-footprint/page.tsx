import Link from "next/link";

const districts = [
  { name: "Mumbai", state: "MH", status: "active" },
  { name: "Pune", state: "MH", status: "active" },
  { name: "Nagpur", state: "MH", status: "active" },
  { name: "Delhi", state: "DL", status: "active" },
  { name: "Bengaluru", state: "KA", status: "active" },
  { name: "Mysuru", state: "KA", status: "active" },
  { name: "Chennai", state: "TN", status: "active" },
  { name: "Coimbatore", state: "TN", status: "active" },
  { name: "Lucknow", state: "UP", status: "active" },
  { name: "Kanpur", state: "UP", status: "active" },
  { name: "Jaipur", state: "RJ", status: "active" },
  { name: "Jodhpur", state: "RJ", status: "active" },
  { name: "Kolkata", state: "WB", status: "active" },
  { name: "Ahmedabad", state: "GJ", status: "active" },
  { name: "Surat", state: "GJ", status: "active" },
  { name: "Hyderabad", state: "TG", status: "active" },
  { name: "Thiruvananthapuram", state: "KL", status: "active" },
  { name: "Kochi", state: "KL", status: "active" },
  { name: "Chandigarh", state: "PB", status: "active" },
  { name: "Ludhiana", state: "PB", status: "active" },
  { name: "Gurugram", state: "HR", status: "active" },
  { name: "Bhopal", state: "MP", status: "active" },
  { name: "Indore", state: "MP", status: "active" },
  { name: "Patna", state: "BR", status: "active" },
  { name: "Guwahati", state: "AS", status: "active" },
  { name: "Srinagar", state: "JK", status: "active" },
  { name: "Shimla", state: "HP", status: "active" },
  { name: "Dehradun", state: "UT", status: "active" },
  { name: "Raipur", state: "CT", status: "active" },
  { name: "Ranchi", state: "JH", status: "active" },
  { name: "Bhubaneswar", state: "OR", status: "active" },
  { name: "Visakhapatnam", state: "AP", status: "active" },
  { name: "Agartala", state: "TR", status: "active" },
  { name: "Aizawl", state: "MZ", status: "active" },
  { name: "Kohima", state: "NL", status: "active" },
];

const stateNames: Record<string, string> = {
  MH: "Maharashtra", DL: "Delhi", KA: "Karnataka", TN: "Tamil Nadu",
  UP: "Uttar Pradesh", RJ: "Rajasthan", WB: "West Bengal", GJ: "Gujarat",
  TG: "Telangana", KL: "Kerala", PB: "Punjab", HR: "Haryana",
  MP: "Madhya Pradesh", BR: "Bihar", AS: "Assam",
  JK: "Jammu and Kashmir", HP: "Himachal Pradesh", UT: "Uttarakhand",
  CT: "Chhattisgarh", JH: "Jharkhand", OR: "Odisha", AP: "Andhra Pradesh",
  TR: "Tripura", MZ: "Mizoram", NL: "Nagaland",
};

export default function OurFootprintPage() {
  const totalDistricts = 521;
  const statesList = Array.from(new Set(districts.map((d) => d.state))).map((code) => ({
    code,
    name: stateNames[code],
    status: "active",
  }));
  const active = statesList.length;
  const building = 0;
  const states = statesList.length;

  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-16 md:py-24 border-b border-wrg-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-0.5 w-6 bg-wrg-green" />
              <p className="text-wrg-green font-bold text-xs uppercase tracking-widest">From Kashmir to Kanyakumari</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-wrg-dark leading-[1.1] mb-6">Our Footprint</h1>
            <p className="text-wrg-muted text-xl leading-relaxed max-w-2xl">
              WithRG is a truly national movement. Here's where we stand today — and where we're planting roots next.
            </p>
          </div>
        </div>
      </section>

      {/* Summary stats */}
      <section className="bg-wrg-light border-b border-wrg-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-wrg-border">
            {[
              { val: totalDistricts, label: "Total Districts", color: "text-wrg-blue" },
              { val: states, label: "States", color: "text-wrg-orange" },
              { val: active, label: "Active States", color: "text-wrg-green" },
              { val: building, label: "Building States", color: "text-wrg-blue" },
            ].map((s) => (
              <div key={s.label} className="py-7 px-6 text-center">
                <div className={`text-3xl font-black mb-1 ${s.color}`}>{s.val}</div>
                <div className="text-wrg-muted text-xs uppercase tracking-widest font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Districts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-6 mb-10 flex-wrap">
            <div>
              <h2 className="text-2xl font-black text-wrg-dark">State Chapters</h2>
              <p className="text-wrg-muted text-sm mt-1">Congress volunteer chapters across India</p>
            </div>
            <div className="ml-auto flex items-center gap-5 text-sm shrink-0">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-wrg-green" />
                <span className="text-wrg-muted text-xs">Active</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-wrg-orange" />
                <span className="text-wrg-muted text-xs">Building</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {statesList.map((s) => (
              <div
                key={s.code}
                className={`bg-wrg-light border rounded-xl p-4 transition-all ${
                  s.status === "active"
                    ? "border-wrg-border hover:border-wrg-green hover:shadow-sm"
                    : "border-wrg-border hover:border-wrg-orange hover:shadow-sm opacity-80"
                }`}
              >
                <div className="flex items-start justify-between mb-1.5">
                  <span className="font-black text-wrg-dark text-sm">{s.name}</span>
                  <span className={`w-2 h-2 rounded-full mt-1 shrink-0 ${s.status === "active" ? "bg-wrg-green" : "bg-wrg-orange"}`} />
                </div>
                <span className="text-xs text-wrg-muted font-medium">{s.code}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage:
            "url('/1000158301.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-wrg-dark/85" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-5" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)", color: "white" }}>Don't see your district?</h2>
          <p className="text-white/60 text-lg mb-8 max-w-md mx-auto" style={{color:"white"}}>Be the one who starts it. We'll support you every step.</p>
          <Link
            href="/start-district"
            className="inline-flex items-center bg-wrg-orange text-white font-bold px-10 py-4 rounded-xl hover:bg-wrg-orange-dark transition-colors"
          >
            Start a District Chapter →
          </Link>
        </div>
      </section>
    </div>
  );
}
