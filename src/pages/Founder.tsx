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

export default function Founder() {
  const { navigate, openSiteVisit } = useNavigation();

  return (
    <main className="bg-charcoal pt-20">
      {/* Hero portrait + headline */}
      <section className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
          {/* Portrait */}
          <div className="relative bg-surface order-2 lg:order-1" style={{ minHeight: "60vh" }}>
            <img
              src="/images/founder.jpeg"
              alt="Sushil Motiram Dalal — CEO, Padmaja Infraventures"
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 px-8 pb-8">
              <p className="text-[9px] tracking-[0.28em] text-stone/40">
                ACTUAL PHOTOGRAPH TO BE PROVIDED BY THE FAMILY
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-16 py-16 md:py-20 order-1 lg:order-2">
            <p className="text-[10px] tracking-[0.3em] text-bronze mb-6">
              LEADERSHIP
            </p>
            <h1 className="font-display text-ivory leading-tight mb-3" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Sushil Motiram Dalal
            </h1>
            <p className="text-stone/40 text-xs tracking-[0.22em] mb-10">
              CHIEF EXECUTIVE OFFICER
            </p>

            <div className="border-l border-bronze/30 pl-6 mb-10">
              <p
                className="font-display text-ivory/85 leading-snug"
                style={{ fontSize: "clamp(1.3rem, 2.8vw, 1.9rem)" }}
              >
                A legacy is not only what you inherit. It is what you choose to build next.
              </p>
            </div>

            <p className="text-stone/55 text-base leading-relaxed font-light max-w-md mb-6">
              Sushil Motiram Dalal leads Padmaja Infraventures as CEO, bringing
              together the Dalal family business heritage with a focused vision
              for real estate development across Maharashtra.
            </p>
            <p className="text-stone/45 text-base leading-relaxed font-light max-w-md">
              His professional journey began in distribution before he joined
              the family business legacy — a background that informs an
              approach to development grounded in practicality, relationships
              and a long-term perspective.
            </p>
          </div>
        </div>
      </section>

      {/* Message from CEO */}
      <section className="bg-surface px-8 md:px-16 lg:px-24 py-20 md:py-24">
        <FadeIn>
          <p className="text-[10px] tracking-[0.28em] text-bronze mb-6">
            FROM THE CEO
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-ivory mb-10">
            A message from Sushil Dalal
          </h2>
          <div className="max-w-2xl">
            <div className="border border-stone/10 p-8 md:p-10">
              <p className="text-stone/35 text-sm leading-relaxed italic mb-4">
                [Message from Sushil Motiram Dalal to be provided by Padmaja
                Infraventures. This section will be updated with his personal
                statement about the company, its projects and his vision for
                the future.]
              </p>
              <span className="text-[9px] tracking-wider text-bronze/40 border border-bronze/15 px-2 py-1">
                TO BE UPDATED
              </span>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Philosophy */}
      <section className="px-8 md:px-16 lg:px-24 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn>
            <p className="text-[10px] tracking-[0.28em] text-bronze mb-4">
              PHILOSOPHY
            </p>
            <h2 className="font-display text-3xl text-ivory mb-8">
              Development with purpose.
            </h2>
            <p className="text-stone/55 text-base leading-relaxed font-light mb-6">
              The approach at Padmaja Infraventures is rooted in a simple idea:
              that a developer's responsibility extends beyond the point of sale.
              The homes and spaces the company creates are part of people's
              lives — and that weight is taken seriously.
            </p>
            <p className="text-stone/45 text-base leading-relaxed font-light">
              This is not a business that chases volume at the expense of
              quality. Each project is approached with the same care that any
              long-term investment deserves.
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="space-y-8">
              {[
                {
                  label: "ROOTS",
                  text: "A business grounded in the Dalal family legacy and the communities they have been part of across Maharashtra.",
                },
                {
                  label: "QUALITY",
                  text: "Construction and development held to standards that reflect long-term value, not short-term savings.",
                },
                {
                  label: "TRUST",
                  text: "The foundation of every relationship with buyers, investors and partners.",
                },
              ].map((item) => (
                <div key={item.label} className="border-t border-stone/10 pt-6">
                  <p className="text-[9px] tracking-[0.28em] text-bronze mb-3">
                    {item.label}
                  </p>
                  <p className="text-stone/55 text-sm leading-relaxed font-light">
                    {item.text}
                  </p>
                </div>
              ))}
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
                Connect with the team.
              </h2>
              <p className="text-stone/45 text-sm">
                For inquiries, site visits or to speak with Padmaja
                Infraventures directly.
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => navigate("contact")}
                className="text-[11px] tracking-[0.2em] text-ivory border border-stone/20 px-6 py-3 hover:border-bronze transition-colors flex-shrink-0"
              >
                CONTACT US
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
