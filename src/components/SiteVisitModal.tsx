import { useState, useEffect } from "react";
import { useNavigation } from "@/context/NavigationContext";
import { projects } from "@/data/projects";

export default function SiteVisitModal() {
  const { showSiteVisit, closeSiteVisit } = useNavigation();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
    date: "",
    time: "",
    message: "",
  });

  useEffect(() => {
    document.body.style.overflow = showSiteVisit ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showSiteVisit]);

  if (!showSiteVisit) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[200] bg-charcoal/97 backdrop-blur-sm overflow-y-auto">
      <div className="min-h-screen flex items-start lg:items-center justify-center p-6 md:p-12 lg:p-16">
        <div className="w-full max-w-xl">
          <div className="flex items-start justify-between mb-10">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-bronze mb-3">
                PADMAJA INFRAVENTURES
              </p>
              <h2 className="font-display text-[2.2rem] text-ivory leading-tight">
                {submitted ? "Request Received" : "Book a Site Visit"}
              </h2>
            </div>
            <button
              onClick={closeSiteVisit}
              className="text-stone/50 hover:text-ivory transition-colors mt-1 p-1"
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M1 1l16 16M17 1L1 17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </div>

          {submitted ? (
            <div className="border border-stone/15 p-10">
              <p className="text-stone/70 text-sm leading-relaxed mb-6">
                Thank you. A member of the Padmaja Infraventures team will be
                in touch to confirm your site visit.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  closeSiteVisit();
                }}
                className="text-[11px] tracking-[0.2em] text-ivory border border-bronze/40 px-6 py-3 hover:border-bronze transition-colors"
              >
                CLOSE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] text-stone/50 mb-2">
                    FULL NAME
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-surface border border-stone/15 text-ivory placeholder:text-stone/25 px-4 py-3 text-sm focus:outline-none focus:border-bronze transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] text-stone/50 mb-2">
                    PHONE
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91"
                    className="w-full bg-surface border border-stone/15 text-ivory placeholder:text-stone/25 px-4 py-3 text-sm focus:outline-none focus:border-bronze transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.2em] text-stone/50 mb-2">
                  EMAIL
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-surface border border-stone/15 text-ivory placeholder:text-stone/25 px-4 py-3 text-sm focus:outline-none focus:border-bronze transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.2em] text-stone/50 mb-2">
                  PROJECT
                </label>
                <div className="relative">
                  <select
                    name="project"
                    value={form.project}
                    onChange={handleChange}
                    className="w-full appearance-none bg-surface border border-stone/15 text-ivory px-4 py-3 text-sm focus:outline-none focus:border-bronze transition-colors"
                  >
                    <option value="">Select a project</option>
                    {projects.map((p) => (
                      <option key={p.id} value={p.slug}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-stone/40 pointer-events-none text-xs">
                    ▾
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] text-stone/50 mb-2">
                    PREFERRED DATE
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full bg-surface border border-stone/15 text-ivory px-4 py-3 text-sm focus:outline-none focus:border-bronze transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] text-stone/50 mb-2">
                    PREFERRED TIME
                  </label>
                  <div className="relative">
                    <select
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      className="w-full appearance-none bg-surface border border-stone/15 text-ivory px-4 py-3 text-sm focus:outline-none focus:border-bronze transition-colors"
                    >
                      <option value="">Select time</option>
                      <option>Morning (9am – 12pm)</option>
                      <option>Afternoon (12pm – 4pm)</option>
                      <option>Evening (4pm – 7pm)</option>
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-stone/40 pointer-events-none text-xs">
                      ▾
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.2em] text-stone/50 mb-2">
                  MESSAGE (OPTIONAL)
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Any specific questions or requirements"
                  className="w-full bg-surface border border-stone/15 text-ivory placeholder:text-stone/25 px-4 py-3 text-sm focus:outline-none focus:border-bronze transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-bronze text-charcoal py-4 text-[11px] tracking-[0.22em] hover:bg-bronze-light transition-colors font-medium"
              >
                REQUEST A SITE VISIT
              </button>

              <p className="text-stone/30 text-[10px] text-center">
                We will contact you to confirm the date and details.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
