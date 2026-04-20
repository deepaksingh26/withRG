"use client";

import { useState } from "react";

const steps = [
  { step: "01", color: "text-wrg-orange", border: "border-t-wrg-orange", title: "Express Interest", desc: "Fill in the form with your details and the district where you want to start a WithRG chapter." },
  { step: "02", color: "text-wrg-blue", border: "border-t-wrg-blue", title: "Onboarding Call", desc: "A WithRG national team member will schedule a call to walk you through what's involved." },
  { step: "03", color: "text-wrg-green", border: "border-t-wrg-green", title: "District Orientation", desc: "Complete a two-session orientation covering WithRG's approach, values, and tools." },
  { step: "04", color: "text-wrg-orange", border: "border-t-wrg-orange", title: "Launch Your Chapter", desc: "With national team support, recruit your first volunteers and host your first event." },
];

export default function StartDistrictPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", district: "", state: "", motivation: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <section className="bg-white py-16 md:py-24 border-b border-wrg-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-0.5 w-6 bg-wrg-green" />
              <p className="text-wrg-green font-bold text-xs uppercase tracking-widest">Expand the Network</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-wrg-dark leading-[1.1] mb-6">Start a District Chapter</h1>
            <p className="text-wrg-muted text-xl leading-relaxed max-w-2xl">
              Don't see WithRG in your district? Be the one who starts it. Democracy needs leaders everywhere.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-wrg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-wrg-blue font-bold text-xs uppercase tracking-widest mb-3">The Process</p>
            <h2 className="text-3xl font-black text-wrg-dark">How to Start a Chapter</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-20">
            {steps.map((s) => (
              <div key={s.step} className={`bg-white border border-wrg-border rounded-2xl p-7 hover:shadow-sm transition-all border-t-4 ${s.border}`}>
                <div className={`text-4xl font-black mb-5 leading-none opacity-25 ${s.color}`}>{s.step}</div>
                <h3 className="font-black text-wrg-dark mb-2 text-sm">{s.title}</h3>
                <p className="text-wrg-muted text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl">
            <p className="text-wrg-orange font-bold text-xs uppercase tracking-widest mb-4">Ready?</p>
            <h2 className="text-2xl font-black text-wrg-dark mb-8">Express Your Interest</h2>
            {submitted ? (
              <div className="bg-white border border-wrg-green rounded-2xl p-14 text-center shadow-sm">
                <div className="text-4xl mb-5">🌱</div>
                <h3 className="text-2xl font-black text-wrg-dark mb-2">Thanks for stepping up!</h3>
                <p className="text-wrg-muted text-sm">We'll be in touch within the next week to schedule your onboarding call. Jai Hind!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-wrg-border rounded-2xl p-8 shadow-sm space-y-5">
                <div>
                  <label className="block text-xs font-bold text-wrg-dark uppercase tracking-wider mb-2">Full Name <span className="text-red-400">*</span></label>
                  <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your name"
                    className="w-full bg-wrg-light border border-wrg-border rounded-xl px-4 py-3 text-sm text-wrg-dark placeholder-wrg-muted/50 focus:outline-none focus:border-wrg-blue transition-colors" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-wrg-dark uppercase tracking-wider mb-2">Email <span className="text-red-400">*</span></label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@example.com"
                      className="w-full bg-wrg-light border border-wrg-border rounded-xl px-4 py-3 text-sm text-wrg-dark placeholder-wrg-muted/50 focus:outline-none focus:border-wrg-blue transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-wrg-dark uppercase tracking-wider mb-2">Phone <span className="text-red-400">*</span></label>
                    <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="+91 98765 43210"
                      className="w-full bg-wrg-light border border-wrg-border rounded-xl px-4 py-3 text-sm text-wrg-dark placeholder-wrg-muted/50 focus:outline-none focus:border-wrg-blue transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-wrg-dark uppercase tracking-wider mb-2">District <span className="text-red-400">*</span></label>
                    <input type="text" name="district" required value={form.district} onChange={handleChange} placeholder="e.g. Patna"
                      className="w-full bg-wrg-light border border-wrg-border rounded-xl px-4 py-3 text-sm text-wrg-dark placeholder-wrg-muted/50 focus:outline-none focus:border-wrg-blue transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-wrg-dark uppercase tracking-wider mb-2">State <span className="text-red-400">*</span></label>
                    <input type="text" name="state" required value={form.state} onChange={handleChange} placeholder="e.g. Bihar"
                      className="w-full bg-wrg-light border border-wrg-border rounded-xl px-4 py-3 text-sm text-wrg-dark placeholder-wrg-muted/50 focus:outline-none focus:border-wrg-blue transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-wrg-dark uppercase tracking-wider mb-2">Why do you want to start a chapter? <span className="text-wrg-muted font-normal normal-case">(optional)</span></label>
                  <textarea name="motivation" rows={4} value={form.motivation} onChange={handleChange} placeholder="Tell us about yourself and what you hope to build..."
                    className="w-full bg-wrg-light border border-wrg-border rounded-xl px-4 py-3 text-sm text-wrg-dark placeholder-wrg-muted/50 focus:outline-none focus:border-wrg-blue transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full bg-wrg-green text-white font-black py-4 rounded-xl hover:bg-wrg-green-dark transition-colors active:scale-[0.98] text-sm uppercase tracking-wider">
                  Submit Interest →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
