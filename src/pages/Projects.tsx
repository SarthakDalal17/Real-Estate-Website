import { useNavigation } from "@/context/NavigationContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { projects } from "@/data/projects";
import type { Page } from "@/context/NavigationContext";

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

export default function Projects() {
  const { navigate, openSiteVisit } = useNavigation();
  const featured = projects.find((p) => p.featured)!;
  const completed = projects.filter((p) => !p.featured);

  return (
    <main className="bg-charcoal pt-20">
      {/* Header */}
      <section className="px-8 md:px-16 lg:px-24 pt-16 pb-12 md:pt-20 md:pb-16">
        <p className="text-[10px] tracking-[0.3em] text-bronze mb-6">
          DEVELOPMENTS
        </p>
        <h1
          className="font-display text-ivory leading-none"
          style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
        >
          Our Projects
        </h1>
      </section>

      {/* Featured: Motiram Picasso */}
      <section className="bg-surface overflow-hidden mb-px">
        <div
          className="relative cursor-pointer group"
          style={{ minHeight: "60vh" }}
          onClick={() => navigate("motiram-picasso")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && navigate("motiram-picasso")}
        >
          <img
            src={featured.heroImage}
            alt={featured.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
            style={{ transform: "scale(1)" }}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/50 to-transparent" />
          <div className="relative h-full flex flex-col justify-end px-8 md:px-16 lg:px-24 py-16 md:py-20">
            <div className="max-w-xl">
              <p className="text-[10px] tracking-[0.3em] text-bronze mb-4">
                FEATURED · ONGOING
              </p>
              <h2
                className="font-display text-ivory leading-none mb-4"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
              >
                {featured.name}
              </h2>
              <p className="text-stone/50 text-[10px] tracking-[0.25em] mb-5">
                KOTHIMBE · NERAL · MAHARASHTRA
              </p>
              <p className="text-stone/65 text-base font-light leading-relaxed mb-8 max-w-sm">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {featured.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] tracking-wider text-stone/50 border border-stone/15 px-3 py-1.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="inline-block text-[11px] tracking-[0.22em] text-ivory border border-ivory/30 px-8 py-3.5 group-hover:border-bronze transition-colors">
                DISCOVER PROJECT →
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="px-8 md:px-16 lg:px-24 py-20 md:py-24">
        <FadeIn className="mb-12">
          <p className="text-[10px] tracking-[0.28em] text-bronze mb-3">
            COMPLETED
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ivory">
            Previous Developments
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {completed.map((project, i) => (
            <FadeIn key={project.id} delay={i * 80}>
              <button
                onClick={() => navigate(project.slug as Page)}
                className="group text-left w-full"
              >
                <div
                  className="overflow-hidden bg-surface mb-4 relative"
                  style={{ aspectRatio: "3/2" }}
                >
                  <img
                    src={project.heroImage}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-80"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[9px] tracking-wider text-stone/60 bg-charcoal/70 px-3 py-1.5">
                      COMPLETED
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-2xl text-ivory mb-1.5 group-hover:text-stone transition-colors">
                  {project.name}
                </h3>
                <p className="text-stone/40 text-xs tracking-wide">
                  {project.location}
                </p>
              </button>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-12" delay={300}>
          <p className="text-stone/35 text-xs leading-relaxed max-w-lg border-l border-stone/15 pl-4">
            Complete details for Motiram Darshan, Motiram Privilege and Motiram
            Prime are being compiled and will be updated shortly. Please contact
            us for more information.
          </p>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="bg-surface px-8 md:px-16 lg:px-24 py-16 md:py-20 border-t border-stone/10">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-ivory mb-2">
                Schedule a site visit.
              </h2>
              <p className="text-stone/45 text-sm">
                Speak directly with the Padmaja Infraventures team.
              </p>
            </div>
            <button
              onClick={openSiteVisit}
              className="text-[11px] tracking-[0.2em] bg-bronze text-charcoal px-8 py-3.5 hover:bg-bronze-light transition-colors flex-shrink-0 font-medium"
            >
              BOOK A SITE VISIT
            </button>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
