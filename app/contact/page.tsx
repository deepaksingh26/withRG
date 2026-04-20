"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
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
              <span className="h-0.5 w-6 bg-wrg-blue" />
              <p className="text-wrg-blue font-bold text-xs uppercase tracking-widest">Get in Touch</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-wrg-dark leading-[1.1] mb-6">Contact Us</h1>
            <p className="text-wrg-muted text-xl leading-relaxed max-w-2xl">
              Whether you have a story to share, want to partner, or have a question — we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-wrg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-5">
              {[
                { label: "Email Us", content: <a href="mailto:team@withrg.in" className="text-wrg-blue font-semibold text-sm hover:underline">team@withrg.in</a> },
                { label: "Volunteers", content: <p className="text-wrg-muted text-sm">Want to join a chapter? <a href="/join-withrg" className="text-wrg-orange font-semibold hover:underline">Join WithRG here.</a></p> },
                { label: "Organisations", content: <p className="text-wrg-muted text-sm">Looking to partner? Use the form and we'll respond within 2 business days.</p> },
                { label: "Media", content: <p className="text-wrg-muted text-sm">Press enquiries: use the form or email us directly.</p> },
              ].map((item) => (
                <div key={item.label} className="bg-white border border-wrg-border rounded-xl p-5">
                  <h3 className="font-black text-wrg-dark text-xs uppercase tracking-wider mb-2">{item.label}</h3>
                  {item.content}
                </div>
              ))}
            </div>

            <div className="md:col-span-2">
              {submitted ? (
                <div className="bg-white border border-wrg-green rounded-2xl p-14 text-center shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-wrg-green/10 flex items-center justify-center mx-auto mb-5">
                    <span className="text-3xl">✅</span>
                  </div>
                  <h3 className="text-2xl font-black text-wrg-dark mb-2">Message received!</h3>
                  <p className="text-wrg-muted text-sm">Thank you for reaching out. We'll get back to you within 2 business days.</p>
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
                  <div>
                    <label className="block text-xs font-bold text-wrg-dark uppercase tracking-wider mb-2">Phone <span className="text-wrg-muted font-normal normal-case">(optional)</span></label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210"
                      className="w-full bg-wrg-light border border-wrg-border rounded-xl px-4 py-3 text-sm text-wrg-dark placeholder-wrg-muted/50 focus:outline-none focus:border-wrg-blue transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-wrg-dark uppercase tracking-wider mb-2">Subject <span className="text-red-400">*</span></label>
                    <select name="subject" required value={form.subject} onChange={handleChange}
                      className="w-full bg-wrg-light border border-wrg-border rounded-xl px-4 py-3 text-sm text-wrg-dark focus:outline-none focus:border-wrg-blue transition-colors">
                      <option value="">Select a subject</option>
                      <option>Volunteering</option>
                      <option>Media / Press</option>
                      <option>Partnership / Collaboration</option>
                      <option>Share a Story</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-wrg-dark uppercase tracking-wider mb-2">Message <span className="text-red-400">*</span></label>
                    <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell us what's on your mind..."
                      className="w-full bg-wrg-light border border-wrg-border rounded-xl px-4 py-3 text-sm text-wrg-dark placeholder-wrg-muted/50 focus:outline-none focus:border-wrg-blue transition-colors resize-none" />
                  </div>
                  <button type="submit"
                    className="w-full bg-wrg-blue text-white font-bold py-4 rounded-xl hover:bg-wrg-blue-dark transition-colors active:scale-[0.98] text-sm uppercase tracking-wider">
                    Send Message →
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
