import { useState } from "react";
import { useNavigation } from "@/context/NavigationContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { projects } from "@/data/projects";

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function Contact() {
  const { openSiteVisit } = useNavigation();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-charcoal pt-20">
      {/* Header */}
      <section className="px-8 md:px-16 lg:px-24 pt-16 pb-12 md:pt-20 md:pb-16">
        <p className="text-[10px] tracking-[0.3em] text-bronze mb-6">
          GET IN TOUCH
        </p>
        <h1
          className="font-display text-ivory leading-none max-w-2xl"
          style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
        >
          Contact Padmaja<br />Infraventures
        </h1>
      </section>

      <section className="px-8 md:px-16 lg:px-24 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <FadeIn>
            <div className="space-y-10">
              <div>
                <p className="text-[10px] tracking-[0.25em] text-bronze mb-5">
                  CONTACT INFORMATION
                </p>
                <div className="space-y-5">
                  {[
                    { label: "PHONE", value: "[ To be confirmed ]" },
                    { label: "WHATSAPP", value: "[ To be confirmed ]" },
                    { label: "EMAIL", value: "[ To be confirmed ]" },
                  ].map(({ label, value }) => (
                    <div key={label} className="border-b border-stone/10 pb-4">
                      <p className="text-[9px] tracking-[0.25em] text-stone/35 mb-1.5">
                        {label}
                      </p>
                      <p className="text-stone/50 text-sm italic">{value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-stone/25 text-xs mt-4">
                  Contact details will be published once confirmed.
                </p>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.25em] text-bronze mb-5">
                  OFFICE
                </p>
                <p className="text-stone/40 text-sm italic mb-2">
                  [ Office address to be confirmed ]
                </p>
                <p className="text-stone/50 text-sm">Maharashtra, India</p>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.25em] text-bronze mb-5">
                  BUSINESS HOURS
                </p>
                <p className="text-stone/40 text-sm italic">
                  [ Business hours to be confirmed ]
                </p>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.25em] text-bronze mb-4">
                  LOCATIONS
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Ambernath", "Badlapur", "Neral", "Kothimbe"].map((loc) => (
                    <span
                      key={loc}
                      className="text-stone/55 text-xs border border-stone/15 px-3 py-2"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={openSiteVisit}
                className="text-[11px] tracking-[0.22em] bg-bronze text-charcoal px-8 py-4 hover:bg-bronze-light transition-colors font-medium"
              >
                BOOK A SITE VISIT
              </button>
            </div>
          </FadeIn>

          {/* Contact form */}
          <FadeIn delay={100}>
            <div>
              <p className="text-[10px] tracking-[0.25em] text-bronze mb-6">
                SEND A MESSAGE
              </p>

              {submitted ? (
                <div className="border border-stone/15 p-8 md:p-10">
                  <h3 className="font-display text-2xl text-ivory mb-4">
                    Message received.
                  </h3>
                  <p className="text-stone/55 text-sm leading-relaxed mb-6">
                    Thank you for your enquiry. A member of the Padmaja
                    Infraventures team will be in touch shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[11px] tracking-[0.2em] text-bronze border border-bronze/30 px-5 py-2.5 hover:border-bronze transition-colors"
                  >
                    SEND ANOTHER →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] text-stone/40 mb-2">
                        FULL NAME
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full bg-surface border border-stone/15 text-ivory placeholder:text-stone/20 px-4 py-3 text-sm focus:outline-none focus:border-bronze transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] text-stone/40 mb-2">
                        PHONE
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91"
                        className="w-full bg-surface border border-stone/15 text-ivory placeholder:text-stone/20 px-4 py-3 text-sm focus:outline-none focus:border-bronze transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] text-stone/40 mb-2">
                      EMAIL
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-surface border border-stone/15 text-ivory placeholder:text-stone/20 px-4 py-3 text-sm focus:outline-none focus:border-bronze transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] text-stone/40 mb-2">
                      PROJECT INTEREST
                    </label>
                    <div className="relative">
                      <select
                        name="project"
                        value={form.project}
                        onChange={handleChange}
                        className="w-full appearance-none bg-surface border border-stone/15 text-ivory px-4 py-3 text-sm focus:outline-none focus:border-bronze transition-colors"
                      >
                        <option value="">Select a project (optional)</option>
                        {projects.map((p) => (
                          <option key={p.id} value={p.slug}>
                            {p.name}
                          </option>
                        ))}
                        <option value="general">General Enquiry</option>
                      </select>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-stone/35 pointer-events-none text-xs">
                        ▾
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] text-stone/40 mb-2">
                      MESSAGE
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="How can we help?"
                      className="w-full bg-surface border border-stone/15 text-ivory placeholder:text-stone/20 px-4 py-3 text-sm focus:outline-none focus:border-bronze transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-bronze text-charcoal py-4 text-[11px] tracking-[0.22em] hover:bg-bronze-light transition-colors font-medium"
                  >
                    SEND ENQUIRY
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-surface px-8 md:px-16 lg:px-24 py-14 md:py-16 border-t border-stone/10">
        <FadeIn>
          <p className="text-[10px] tracking-[0.28em] text-bronze mb-4">
            WHERE WE OPERATE
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-ivory mb-8">
            Maharashtra, India
          </h2>
          <div className="border border-stone/10 flex items-center justify-center" style={{ height: "280px" }}>
            <div className="text-center">
              <p className="text-stone/30 text-sm mb-2">Ambernath · Badlapur · Neral · Kothimbe</p>
              <p className="text-stone/20 text-xs">
                [ Google Maps integration to be added ]
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
