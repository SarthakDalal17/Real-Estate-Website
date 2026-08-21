import { useNavigation } from "@/context/NavigationContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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

export default function About() {
  const { navigate, openSiteVisit } = useNavigation();

  return (
    <main className="bg-charcoal pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&h=1080&fit=crop&auto=format&q=60)",
          }}
        />
        <div className="relative px-8 md:px-16 lg:px-24 pt-16 pb-20 md:pt-20 md:pb-28">
          <p className="text-[10px] tracking-[0.3em] text-bronze mb-6">ABOUT</p>
          <h1
            className="font-display text-ivory leading-none mb-8 max-w-2xl"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
          >
            Built on experience.<br />Moving toward<br />what comes next.
          </h1>
          <div className="w-10 h-px bg-bronze" />
        </div>
      </section>

      {/* Company Story */}
      <section className="px-8 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <p className="text-stone/60 text-base md:text-lg leading-relaxed font-light mb-8">
              Padmaja Infraventures is a family-led real estate business
              working across residential development, commercial spaces,
              redevelopment, construction, villas and lifestyle properties in
              Maharashtra.
            </p>
            <p className="text-stone/50 text-base leading-relaxed font-light mb-8">
              The company operates with a long-term perspective — each project
              is conceived to deliver lasting value, not just short-term
              presentation. This approach reflects the values of a business
              that understands the weight of trust placed in a developer.
            </p>
            <p className="text-stone/50 text-base leading-relaxed font-light">
              With a presence across Ambernath, Badlapur, Neral and the wider
              Raigad region, Padmaja Infraventures is positioned at the
              intersection of accessible development and genuine quality — for
              buyers from Mumbai, Pune, and the NRI community seeking a trusted
              developer in Maharashtra.
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="border border-stone/10 p-8 md:p-10">
              <p className="text-[10px] tracking-[0.25em] text-bronze mb-6">
                BUSINESS AREAS
              </p>
              <ul className="space-y-4">
                {[
                  "Residential Development",
                  "Commercial Development",
                  "Redevelopment",
                  "Construction",
                  "Luxury Villas",
                  "Second Homes & Vacation Properties",
                  "Land & Real Estate Activity",
                ].map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-3 text-stone/65 text-sm"
                  >
                    <span className="w-1 h-1 rounded-full bg-bronze flex-shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface px-8 md:px-16 lg:px-24 py-20 md:py-24">
        <FadeIn className="mb-14">
          <p className="text-[10px] tracking-[0.28em] text-bronze mb-3">
            OUR APPROACH
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ivory">
            What guides us.
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone/10">
          {[
            {
              title: "Quality First",
              desc: "Every development is approached with a commitment to construction quality and thoughtful design, because the places people live in matter.",
            },
            {
              title: "Long-Term Thinking",
              desc: "We build for lasting value — not just for the moment of sale. Projects are designed to serve residents and investors well into the future.",
            },
            {
              title: "Community",
              desc: "Rooted in Maharashtra, the company understands the people, the landscape and the opportunity of the regions it develops in.",
            },
          ].map((v) => (
            <FadeIn key={v.title}>
              <div className="bg-surface p-8 md:p-10 h-full">
                <h3 className="font-display text-xl text-ivory mb-3">
                  {v.title}
                </h3>
                <p className="text-stone/50 text-sm leading-relaxed font-light">
                  {v.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Geographic Focus */}
      <section className="px-8 md:px-16 lg:px-24 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p className="text-[10px] tracking-[0.28em] text-bronze mb-4">
              GEOGRAPHIC PRESENCE
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-ivory mb-8">
              Maharashtra.
            </h2>
            <p className="text-stone/55 text-base leading-relaxed font-light mb-8">
              Padmaja Infraventures concentrates its activity in regions with
              genuine long-term development value — areas that are well-connected,
              accessible and increasingly sought after by buyers from Mumbai and
              Pune.
            </p>
            <div className="space-y-3">
              {[
                { place: "Ambernath", note: "Residential & commercial presence" },
                { place: "Badlapur", note: "Development activity" },
                { place: "Neral", note: "Villa & second home developments" },
                { place: "Kothimbe", note: "Motiram Picasso location" },
              ].map(({ place, note }) => (
                <div
                  key={place}
                  className="flex items-start gap-4 border-b border-stone/10 pb-3 last:border-b-0"
                >
                  <span className="font-display text-ivory text-base w-28 flex-shrink-0">
                    {place}
                  </span>
                  <span className="text-stone/45 text-sm">{note}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div
              className="relative overflow-hidden bg-surface"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src="https://images.unsplash.com/photo-1750766515670-7a2df679f2e2?w=900&h=700&fit=crop&auto=format&q=80"
                alt="Maharashtra landscape"
                className="w-full h-full object-cover opacity-60"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-[9px] tracking-[0.3em] text-bronze/80">
                  MAHARASHTRA · INDIA
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface px-8 md:px-16 lg:px-24 py-16 md:py-20 border-t border-stone/10">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-ivory mb-2">
                Interested in our projects?
              </h2>
              <p className="text-stone/50 text-sm">
                Speak with the team or schedule a site visit.
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => navigate("projects")}
                className="text-[11px] tracking-[0.2em] text-ivory border border-stone/20 px-6 py-3 hover:border-bronze transition-colors flex-shrink-0"
              >
                OUR PROJECTS
              </button>
              <button
                onClick={openSiteVisit}
                className="text-[11px] tracking-[0.2em] bg-bronze text-charcoal px-6 py-3 hover:bg-bronze-light transition-colors flex-shrink-0 font-medium"
              >
                SITE VISIT
              </button>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
