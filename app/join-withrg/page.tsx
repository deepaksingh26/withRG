"use client";

import { useState } from "react";

const districts = [
  "Mumbai", "Pune", "Nagpur", "Delhi", "Bengaluru", "Mysuru", "Chennai",
  "Coimbatore", "Lucknow", "Kanpur", "Jaipur", "Jodhpur", "Kolkata",
  "Ahmedabad", "Surat", "Hyderabad", "Thiruvananthapuram", "Kochi",
  "Chandigarh", "Ludhiana", "Gurugram",
];

const roles = [
  "Digital Campaigns & Social Media",
  "Training & Facilitation",
  "Research & Policy Writing",
  "Grassroots & Community Organising",
  "Booth Committee Work",
  "Photography / Videography",
  "Legal & RTI",
  "Other",
];

export default function JoinWithRGPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", district: "", role: "", motivation: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-16 md:py-24 border-b border-wrg-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-0.5 w-6 bg-wrg-orange" />
              <p className="text-wrg-orange font-bold text-xs uppercase tracking-widest">Be the Change</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-wrg-dark leading-[1.1] mb-6">
              Join <span className="text-wrg-orange">#with</span><span className="text-wrg-green">RG</span>
            </h1>
            <p className="text-wrg-muted text-xl leading-relaxed max-w-2xl">
              India's democracy needs you. Fill in the form and we'll connect you with your local district chapter within days.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-wrg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white border border-wrg-border rounded-xl p-6 shadow-sm">
                <p className="text-wrg-orange font-bold text-xs uppercase tracking-widest mb-5">What Happens Next</p>
                <ol className="space-y-4">
                  {[
                    "We review your application and match you to your district chapter.",
                    "Your district coordinator reaches out within one week.",
                    "You attend a virtual orientation session.",
                    "You start making a difference in your community.",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-black shrink-0 mt-0.5 ${
                        i % 3 === 0 ? "bg-wrg-blue" : i % 3 === 1 ? "bg-wrg-orange" : "bg-wrg-green"
                      }`}>
                        {i + 1}
                      </span>
                      <p className="text-wrg-muted text-sm leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="bg-wrg-orange/10 border border-wrg-orange/20 rounded-xl p-5">
                <p className="text-wrg-dark font-bold text-sm mb-1">🇮🇳 All backgrounds welcome</p>
                <p className="text-wrg-muted text-xs leading-relaxed">Student, professional, homemaker, or retiree — there's meaningful work for every Indian who believes in a fairer democracy.</p>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              {submitted ? (
                <div className="bg-white border border-wrg-green rounded-2xl p-14 text-center shadow-sm">
                  <div className="text-4xl mb-5">🎉</div>
                  <h3 className="text-2xl font-black text-wrg-dark mb-2">Welcome to WithRG!</h3>
                  <p className="text-wrg-muted text-sm">Your application has been received. Your district coordinator will be in touch within the next few days. Jai Hind!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-wrg-border rounded-2xl p-8 shadow-sm space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-wrg-dark uppercase tracking-wider mb-2">Full Name <span className="text-red-400">*</span></label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your name"
                        className="w-full bg-wrg-light border border-wrg-border rounded-xl px-4 py-3 text-sm text-wrg-dark placeholder-wrg-muted/50 focus:outline-none focus:border-wrg-blue transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-wrg-dark uppercase tracking-wider mb-2">Email <span className="text-red-400">*</span></label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@example.com"
                        className="w-full bg-wrg-light border border-wrg-border rounded-xl px-4 py-3 text-sm text-wrg-dark placeholder-wrg-muted/50 focus:outline-none focus:border-wrg-blue transition-colors" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-wrg-dark uppercase tracking-wider mb-2">Phone <span className="text-red-400">*</span></label>
                      <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="+91 98765 43210"
                        className="w-full bg-wrg-light border border-wrg-border rounded-xl px-4 py-3 text-sm text-wrg-dark placeholder-wrg-muted/50 focus:outline-none focus:border-wrg-blue transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-wrg-dark uppercase tracking-wider mb-2">District <span className="text-red-400">*</span></label>
                      <select name="district" required value={form.district} onChange={handleChange}
                        className="w-full bg-wrg-light border border-wrg-border rounded-xl px-4 py-3 text-sm text-wrg-dark focus:outline-none focus:border-wrg-blue transition-colors">
                        <option value="">Select district</option>
                        {districts.map((d) => <option key={d} value={d}>{d}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-wrg-dark uppercase tracking-wider mb-2">How would you like to contribute? <span className="text-red-400">*</span></label>
                    <select name="role" required value={form.role} onChange={handleChange}
                      className="w-full bg-wrg-light border border-wrg-border rounded-xl px-4 py-3 text-sm text-wrg-dark focus:outline-none focus:border-wrg-blue transition-colors">
                      <option value="">Select a focus area</option>
                      {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-wrg-dark uppercase tracking-wider mb-2">Why do you want to join? <span className="text-wrg-muted font-normal normal-case">(optional)</span></label>
                    <textarea name="motivation" rows={4} value={form.motivation} onChange={handleChange} placeholder="Tell us a bit about yourself and what motivates you..."
                      className="w-full bg-wrg-light border border-wrg-border rounded-xl px-4 py-3 text-sm text-wrg-dark placeholder-wrg-muted/50 focus:outline-none focus:border-wrg-blue transition-colors resize-none" />
                  </div>
                  <button type="submit"
                    className="w-full bg-wrg-orange text-white font-black py-4 rounded-xl hover:bg-wrg-orange-dark transition-colors active:scale-[0.98] text-sm uppercase tracking-wider">
                    Submit Application →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
