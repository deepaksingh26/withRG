export default function TermsPage() {
  const sections = [
    { heading: "1. Acceptance of Terms", body: `By accessing or using WithRG's website and services, you agree to be bound by these Terms and Conditions. If you do not agree, you may not use our website or services.` },
    { heading: "2. Use of Our Website", body: `You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not violate applicable laws, transmit spam, attempt unauthorised access, or misrepresent your identity or affiliation with WithRG.` },
    { heading: "3. Volunteer Conduct", body: `Volunteers are expected to act in accordance with WithRG's values and code of conduct. WithRG reserves the right to remove any volunteer who violates these standards. Volunteers represent themselves, not WithRG, unless explicitly authorised to speak on WithRG's behalf.` },
    { heading: "4. Intellectual Property", body: `Content on this website, including text, graphics, logos, and images, is the property of WithRG. You may share and reproduce our content for non-commercial civic purposes, provided you attribute it to WithRG and do not alter it.` },
    { heading: "5. Political Nature of Content", body: `WithRG is a political volunteer network supporting the Indian National Congress party and Rahul Gandhi. Content on this site reflects the views and advocacy positions of WithRG and the Congress party. It is not intended as neutral journalism.` },
    { heading: "6. Disclaimers", body: `WithRG's website and services are provided on an "as is" basis. We do not guarantee the accuracy or completeness of all information. Research and policy content is intended for civic education and advocacy purposes.` },
    { heading: "7. Governing Law", body: `These Terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of India.` },
    { heading: "8. Contact", body: `For questions about these Terms, please contact us at team@withrg.in.` },
  ];

  return (
    <div>
      <section className="bg-white py-16 md:py-20 border-b border-wrg-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-0.5 w-6 bg-wrg-orange" />
            <p className="text-wrg-orange font-bold text-xs uppercase tracking-widest">Legal</p>
          </div>
          <h1 className="text-4xl font-black text-wrg-dark mb-2">Terms and Conditions</h1>
          <p className="text-wrg-muted text-sm">Last updated: January 2025</p>
        </div>
      </section>
      <section className="py-16 bg-wrg-light">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white border border-wrg-border rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="space-y-8 text-wrg-muted text-sm leading-relaxed">
              {sections.map((s) => (
                <div key={s.heading}>
                  <h2 className="text-base font-black text-wrg-dark mb-3">{s.heading}</h2>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
