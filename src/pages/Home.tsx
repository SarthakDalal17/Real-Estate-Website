import { useNavigation } from "@/context/NavigationContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { projects } from "@/data/projects";

const HERO_IMG =
  "https://images.unsplash.com/photo-1781245310511-9b4cab81e6ad?w=1920&h=1080&fit=crop&auto=format&q=85";
const PICASSO_IMG =
  "https://images.unsplash.com/photo-1607567618395-62fc2d132c3e?w=1200&h=900&fit=crop&auto=format&q=80";
const LANDSCAPE_IMG =
  "https://images.unsplash.com/photo-1750766514691-d3f94f7bc024?w=1920&h=1080&fit=crop&auto=format&q=80";
const FOUNDER_IMG =
  const FOUNDER_IMG = "/images/founder.jpeg";

const BUSINESS_AREAS = [
  {
    name: "Residential",
    desc: "Thoughtfully developed homes for contemporary lifestyles.",
    img: "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?w=900&h=700&fit=crop&auto=format&q=80",
  },
  {
    name: "Commercial",
    desc: "Spaces designed around business, enterprise and long-term utility.",
    img: "https://images.unsplash.com/photo-1685938010181-7bb04f36cb09?w=900&h=700&fit=crop&auto=format&q=80",
  },
  {
    name: "Redevelopment",
    desc: "Transforming existing properties through considered redevelopment.",
    img: "https://images.unsplash.com/photo-1756272219589-20843abee772?w=900&h=700&fit=crop&auto=format&q=80",
  },
  {
    name: "Villas & Second Homes",
    desc: "Lifestyle-led properties designed around escape, privacy and a different pace of living.",
    img: "https://images.unsplash.com/photo-1713186103033-60ff76a7b89d?w=900&h=700&fit=crop&auto=format&q=80",
  },
];

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
        transform: isVisible ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const { navigate, openSiteVisit } = useNavigation();

  return (
    <main>
      {/* 01 — Hero */}
      <section className="relative h-screen overflow-hidden bg-charcoal">
        <img
          src={HERO_IMG}
          alt="Luxury villa architecture"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/20 to-charcoal/85" />
        <div className="relative h-full flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-16 md:pb-24">
          <div className="max-w-5xl">
            <p className="text-bronze text-[10px] tracking-[0.38em] uppercase mb-8">
              Maharashtra · India
            </p>
            <h1
              className="font-display text-ivory leading-[0.93] mb-7"
              style={{ fontSize: "clamp(3.2rem, 8vw, 7rem)" }}
            >
              Padmaja<br />Infraventures
            </h1>
            <p className="text-stone/70 text-base md:text-lg max-w-lg mb-10 font-light leading-relaxed">
              Residential, commercial and lifestyle developments across
              Maharashtra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button
                onClick={() => navigate("projects")}
                className="text-[11px] tracking-[0.22em] text-ivory border border-ivory/30 px-8 py-3.5 hover:border-bronze hover:text-stone transition-all w-fit"
              >
                EXPLORE PROJECTS
              </button>
              <button
                onClick={() => navigate("about")}
                className="text-[11px] tracking-[0.22em] text-stone/60 hover:text-ivory transition-colors py-3.5 w-fit"
              >
                OUR STORY →
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 right-8 md:right-16 lg:right-24 hidden md:block">
          <span className="text-stone/30 text-[9px] tracking-[0.35em] writing-mode-vertical"
            style={{ writingMode: "vertical-rl" }}>
            SCROLL
          </span>
        </div>
      </section>

      {/* 02 — Brand Introduction */}
      <section className="bg-charcoal px-8 md:px-16 lg:px-24 py-24 md:py-32">
        <FadeIn>
          <div className="w-10 h-px bg-bronze mb-12" />
          <h2
            className="font-display text-ivory leading-[1.05] mb-8"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)" }}
          >
            Real estate with a<br />long-term perspective.
          </h2>
          <p className="text-stone/60 text-base md:text-lg leading-relaxed max-w-2xl font-light">
            Padmaja Infraventures develops residential and commercial spaces,
            redevelopment projects and lifestyle-led properties — with a focus
            on thoughtful development, quality and lasting value.
          </p>
        </FadeIn>
      </section>

      {/* 03 — What We Do */}
      <section className="bg-surface">
        <div className="px-8 md:px-16 lg:px-24 py-16 pb-10">
          <FadeIn>
            <p className="text-[10px] tracking-[0.28em] text-bronze mb-3">
              WHAT WE DO
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-ivory">
              Our Business
            </h2>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {BUSINESS_AREAS.map((area, i) => (
            <div
              key={area.name}
              className="relative overflow-hidden group"
              style={{ height: "clamp(260px, 44vh, 460px)" }}
            >
              <img
                src={area.img}
                alt={area.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent transition-opacity duration-300 group-hover:from-charcoal/75" />
              <div
                className="absolute bottom-0 left-0 p-8 md:p-10 transition-all duration-300"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <h3 className="font-display text-2xl md:text-3xl text-ivory mb-2">
                  {area.name}
                </h3>
                <p className="text-stone/75 text-sm leading-relaxed max-w-xs">
                  {area.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04 — Motiram Picasso Flagship */}
      <section className="bg-charcoal overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 lg:py-24">
            <FadeIn>
              <p className="text-[10px] tracking-[0.35em] text-bronze mb-6">
                FLAGSHIP PROJECT
              </p>
              <h2
                className="font-display text-ivory leading-none mb-5"
                style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
              >
                Motiram<br />Picasso
              </h2>
              <p className="text-stone/40 text-[10px] tracking-[0.28em] mb-8">
                KOTHIMBE · NERAL · MAHARASHTRA
              </p>
              <div className="flex flex-wrap gap-2 mb-9">
                {["LUXURY VILLAS", "SECOND HOME", "VACATION LIVING"].map(
                  (t) => (
                    <span
                      key={t}
                      className="text-[9px] tracking-wider text-stone/50 border border-stone/15 px-3 py-1.5"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
              <p className="text-stone/65 text-base leading-relaxed max-w-md mb-8 font-light">
                A villa destination near Neral, designed around the experience
                of owning a second home. Somewhere to slow down, spend time
                with family and experience a more relaxed way of living.
              </p>
              <div className="flex items-center gap-2.5 mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-bronze" />
                <span className="text-[10px] tracking-[0.25em] text-stone/50">
                  ONGOING
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate("motiram-picasso")}
                  className="text-[11px] tracking-[0.22em] bg-bronze text-charcoal px-8 py-3.5 hover:bg-bronze-light transition-colors w-fit font-medium"
                >
                  DISCOVER PROJECT
                </button>
                <button
                  onClick={openSiteVisit}
                  className="text-[11px] tracking-[0.22em] text-stone/55 hover:text-ivory transition-colors py-3.5 w-fit"
                >
                  BOOK A SITE VISIT
                </button>
              </div>
            </FadeIn>
          </div>
          <div className="relative min-h-[50vh] lg:min-h-0 bg-surface">
            <img
              src={PICASSO_IMG}
              alt="Motiram Picasso villa"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 05 — Lifestyle Story */}
      <section
        className="relative overflow-hidden bg-surface"
        style={{ height: "clamp(380px, 60vh, 700px)" }}
      >
        <img
          src={LANDSCAPE_IMG}
          alt="Green landscape near Neral"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        <div className="relative h-full flex items-end px-8 md:px-16 lg:px-24 pb-14 md:pb-20">
          <FadeIn className="max-w-2xl">
            <h2
              className="font-display text-ivory leading-tight mb-5"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)" }}
            >
              Step away from the city.
            </h2>
            <p className="text-stone/65 text-base md:text-lg leading-relaxed max-w-md font-light">
              A change of pace. A different rhythm. Somewhere weekends belong
              entirely to you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 06 — Projects */}
      <section className="bg-ivory px-8 md:px-16 lg:px-24 py-20 md:py-28">
        <FadeIn>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] tracking-[0.28em] text-bronze mb-3">
                DEVELOPMENTS
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-charcoal">
                Our Projects
              </h2>
            </div>
            <button
              onClick={() => navigate("projects")}
              className="hidden md:block text-[11px] tracking-[0.2em] text-charcoal/50 hover:text-charcoal transition-colors"
            >
              VIEW ALL →
            </button>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 80}>
              <button
                onClick={() => navigate(project.slug as import("@/context/NavigationContext").Page)}
                className="group text-left w-full"
              >
                <div className="overflow-hidden bg-stone/20 mb-4" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={project.heroImage}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-start justify-between mb-1.5">
                  <h3 className="font-display text-charcoal text-xl leading-tight">
                    {project.name}
                  </h3>
                  <span
                    className={`text-[9px] tracking-wider px-2 py-1 mt-0.5 flex-shrink-0 ${
                      project.status === "ongoing"
                        ? "text-bronze bg-bronze/10"
                        : "text-charcoal/40 bg-charcoal/8"
                    }`}
                  >
                    {project.status === "ongoing" ? "ONGOING" : "COMPLETED"}
                  </span>
                </div>
                <p className="text-charcoal/50 text-xs">{project.location}</p>
              </button>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 md:hidden">
          <button
            onClick={() => navigate("projects")}
            className="text-[11px] tracking-[0.2em] text-charcoal/50 border border-charcoal/20 px-6 py-3 hover:border-charcoal/50 transition-colors"
          >
            VIEW ALL PROJECTS →
          </button>
        </div>
      </section>

      {/* 07 — Legacy */}
      <section className="bg-charcoal px-8 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p className="text-[10px] tracking-[0.28em] text-bronze mb-4">
              THE LEGACY
            </p>
            <h2
              className="font-display text-ivory leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              A family business<br />moving forward.
            </h2>
            <p className="text-stone/55 text-base leading-relaxed max-w-lg font-light mb-10">
              Sushil Motiram Dalal began his professional journey in distribution
              before joining the established business legacy of the Dalal family.
              The vision: to continue that legacy while creating meaningful
              development and contributing positively to society across
              Maharashtra.
            </p>
            <button
              onClick={() => navigate("legacy")}
              className="text-[11px] tracking-[0.22em] text-bronze border border-bronze/35 px-6 py-3 hover:border-bronze hover:bg-bronze/5 transition-all"
            >
              EXPLORE THE LEGACY →
            </button>
          </FadeIn>
          <div className="hidden lg:block">
            <div className="border-l border-stone/10 pl-16">
              {[
                { label: "LEGACY", desc: "An established family presence in business and community." },
                { label: "VISION", desc: "Long-term development with lasting value for residents and the region." },
                { label: "FUTURE", desc: "Expanding thoughtfully across Maharashtra with each new project." },
              ].map((item, i) => (
                <FadeIn key={item.label} delay={i * 100} className="mb-8 last:mb-0">
                  <p className="text-[9px] tracking-[0.3em] text-bronze mb-2">{item.label}</p>
                  <p className="text-stone/55 text-sm leading-relaxed">{item.desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 08 — Founder */}
      <section className="bg-surface overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative bg-charcoal" style={{ minHeight: "480px" }}>
            <img
              src={FOUNDER_IMG}
              alt="Sushil Motiram Dalal, CEO of Padmaja Infraventures"
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
          </div>
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-16 py-16 md:py-20">
            <FadeIn>
              <p className="text-[10px] tracking-[0.28em] text-bronze mb-4">
                LEADERSHIP
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-ivory mb-2">
                Sushil Motiram Dalal
              </h2>
              <p className="text-stone/40 text-xs tracking-[0.2em] mb-8">
                CEO, PADMAJA INFRAVENTURES
              </p>
              <p
                className="font-display text-ivory/80 leading-snug mb-8"
                style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)" }}
              >
                A legacy is not only what you inherit.<br />
                It is what you choose to build next.
              </p>
              <p className="text-stone/55 text-sm leading-relaxed max-w-sm font-light mb-10">
                Sushil Motiram Dalal leads Padmaja Infraventures with a vision
                rooted in family, long-term thinking and a genuine commitment to
                quality development across Maharashtra.
              </p>
              <button
                onClick={() => navigate("founder")}
                className="text-[11px] tracking-[0.22em] text-ivory border border-stone/20 px-6 py-3 hover:border-bronze transition-colors w-fit"
              >
                MEET THE FOUNDER →
              </button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 09 — Trust */}
      <section className="bg-charcoal px-8 md:px-16 lg:px-24 py-20 md:py-28">
        <FadeIn className="mb-14">
          <p className="text-[10px] tracking-[0.28em] text-bronze mb-3">
            WHY PADMAJA
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ivory">
            Built on substance.
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {[
            {
              title: "Experience",
              desc: "A business grounded in the established Dalal family legacy, with deep knowledge of the Maharashtra real-estate landscape.",
            },
            {
              title: "Development",
              desc: "Residential, commercial and lifestyle projects conceived with attention to quality and long-term value.",
            },
            {
              title: "Local Knowledge",
              desc: "Deep familiarity with Ambernath, Badlapur, Neral and the wider Raigad region — areas with strong development potential.",
            },
            {
              title: "Long-Term Vision",
              desc: "Development focused on lasting value rather than short-term gains. Every project is designed to endure.",
            },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 80}>
              <div className="border-t border-stone/15 pt-6">
                <h3 className="font-display text-xl text-ivory mb-3">
                  {item.title}
                </h3>
                <p className="text-stone/50 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 10 — Locations */}
      <section className="bg-surface px-8 md:px-16 lg:px-24 py-16 md:py-20">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-24">
            <div className="flex-shrink-0">
              <p className="text-[10px] tracking-[0.28em] text-bronze mb-3">
                WHERE WE OPERATE
              </p>
              <h2 className="font-display text-2xl md:text-3xl text-ivory">
                Maharashtra
              </h2>
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-3">
              {["Ambernath", "Badlapur", "Neral", "Kothimbe"].map((loc) => (
                <div key={loc} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-bronze flex-shrink-0" />
                  <span className="text-stone/65 text-sm">{loc}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 11 — Final CTA */}
      <section className="bg-charcoal px-8 md:px-16 lg:px-24 py-24 md:py-32 border-t border-stone/10">
        <FadeIn>
          <div className="max-w-3xl">
            <h2
              className="font-display text-ivory leading-tight mb-6"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)" }}
            >
              {"Let's build what comes next."}
            </h2>
            <p className="text-stone/55 text-base md:text-lg leading-relaxed mb-12 font-light max-w-xl">
              Discover our projects or speak with the Padmaja Infraventures team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("projects")}
                className="text-[11px] tracking-[0.22em] text-ivory border border-ivory/25 px-8 py-4 hover:border-bronze transition-all w-fit"
              >
                EXPLORE PROJECTS
              </button>
              <button
                onClick={openSiteVisit}
                className="text-[11px] tracking-[0.22em] bg-bronze text-charcoal px-8 py-4 hover:bg-bronze-light transition-colors w-fit font-medium"
              >
                BOOK A SITE VISIT
              </button>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
