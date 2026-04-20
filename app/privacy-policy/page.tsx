export default function PrivacyPolicyPage() {
  const sections = [
    { heading: "1. Introduction", body: `WithRG ("we", "us", "our") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our volunteer programmes.` },
    { heading: "2. Information We Collect", body: `We collect information you provide directly to us: your name, email, and phone number when completing forms; district and state information when you apply to join or start a chapter; messages sent through our contact form; and your stated interests. We may also collect your IP address, browser type, and pages visited automatically.` },
    { heading: "3. How We Use Your Information", body: `We use collected information to respond to your enquiries and process applications; connect you with your local district chapter; send programme updates with your consent; improve our website and programmes; and comply with legal obligations.` },
    { heading: "4. Sharing Your Information", body: `We do not sell, trade, or transfer your personal information to third parties. We may share information with district coordinators within the WithRG network to facilitate volunteer coordination. We may also share information where required by law.` },
    { heading: "5. Data Retention", body: `We retain your personal information for as long as necessary to fulfil the purposes for which it was collected, or as required by law. You may request deletion of your information at any time by contacting us at team@withrg.in.` },
    { heading: "6. Your Rights", body: `You may have the right to access, correct, or request deletion of your personal information; withdraw consent at any time; and lodge a complaint with a supervisory authority.` },
    { heading: "7. Contact", body: `For questions about this Privacy Policy, please contact us at team@withrg.in.` },
  ];

  return (
    <div>
      <section className="bg-white py-16 md:py-20 border-b border-wrg-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-0.5 w-6 bg-wrg-blue" />
            <p className="text-wrg-blue font-bold text-xs uppercase tracking-widest">Legal</p>
          </div>
          <h1 className="text-4xl font-black text-wrg-dark mb-2">Privacy Policy</h1>
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
