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

const TIMELINE_ITEMS = [
  {
    era: "THE FOUNDATION",
    label: "[ Year to be confirmed ]",
    title: "The Dalal Family Legacy",
    desc: "[ Details of the family's established business presence and community roots to be provided by Padmaja Infraventures ]",
    placeholder: true,
  },
  {
    era: "THE JOURNEY",
    label: "[ Timeline to be confirmed ]",
    title: "A Career in Distribution",
    desc: "Sushil Motiram Dalal began his professional career in the distribution business, building the knowledge and experience that would inform the next chapter.",
    placeholder: false,
  },
  {
    era: "THE TRANSITION",
    label: "[ Year to be confirmed ]",
    title: "Entering Real Estate",
    desc: "[ Details of the transition into real estate development to be provided by Padmaja Infraventures ]",
    placeholder: true,
  },
  {
    era: "THE COMPANY",
    label: "[ Year to be confirmed ]",
    title: "Padmaja Infraventures",
    desc: "[ Details of the company's establishment and early development activity to be confirmed ]",
    placeholder: true,
  },
  {
    era: "THE PROJECTS",
    label: "Completed",
    title: "Motiram Darshan · Privilege · Prime",
    desc: "A series of residential developments completed across the region. Full project details are being compiled and will be published shortly.",
    placeholder: false,
  },
  {
    era: "TODAY",
    label: "Ongoing",
    title: "Motiram Picasso",
    desc: "The flagship current project — a luxury villa development in Kothimbe village, Neral, representing the next chapter of Padmaja Infraventures.",
    placeholder: false,
  },
  {
    era: "AHEAD",
    label: "Future",
    title: "What Comes Next",
    desc: "Padmaja Infraventures continues to develop new projects across Maharashtra, guided by the same long-term perspective that has shaped every development to date.",
    placeholder: false,
  },
];

export default function Legacy() {
  const { navigate } = useNavigation();

  return (
    <main className="bg-charcoal pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1729540220642-c0a927c1c59d?w=1920&h=1080&fit=crop&auto=format&q=50)",
          }}
        />
        <div className="relative px-8 md:px-16 lg:px-24 pt-16 pb-20 md:pt-20 md:pb-28">
          <p className="text-[10px] tracking-[0.3em] text-bronze mb-6">
            HISTORY
          </p>
          <h1
            className="font-display text-ivory leading-none mb-6 max-w-2xl"
            style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
          >
            The Legacy
          </h1>
          <p className="text-stone/55 text-base md:text-lg font-light leading-relaxed max-w-xl">
            A family business grounded in community, built on experience,
            and moving forward with purpose.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-8 md:px-16 lg:px-24 py-16 md:py-20">
        <FadeIn>
          <div className="w-10 h-px bg-bronze mb-10" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <p className="text-stone/60 text-base md:text-lg leading-relaxed font-light">
              The story of Padmaja Infraventures begins with the Dalal family
              — an established presence in their home community in Maharashtra.
              That foundation of trust, reliability and long-term thinking shapes
              every decision the company makes today.
            </p>
            <p className="text-stone/45 text-base leading-relaxed font-light">
              Under Sushil Motiram Dalal, the business has channelled that
              inherited foundation into real estate development — creating homes,
              commercial spaces and lifestyle properties that reflect the
              same values: quality, substance and the long view.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Timeline */}
      <section className="bg-surface px-8 md:px-16 lg:px-24 py-16 md:py-20">
        <FadeIn className="mb-14">
          <p className="text-[10px] tracking-[0.28em] text-bronze mb-3">
            TIMELINE
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ivory">
            The Journey
          </h2>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-stone/10 hidden md:block" />
          <div className="space-y-0">
            {TIMELINE_ITEMS.map((item, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="md:pl-12 pb-12 relative">
                  <div className="hidden md:block absolute left-0 top-1.5 w-2 h-2 rounded-full border border-bronze -translate-x-[3.5px] bg-surface" />
                  <p className="text-[9px] tracking-[0.3em] text-bronze mb-1.5">
                    {item.era}
                  </p>
                  <p className="text-[10px] tracking-[0.2em] text-stone/35 mb-3">
                    {item.label}
                  </p>
                  <h3 className="font-display text-xl md:text-2xl text-ivory mb-3">
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed font-light max-w-xl ${
                      item.placeholder ? "text-stone/30 italic" : "text-stone/55"
                    }`}
                  >
                    {item.desc}
                  </p>
                  {item.placeholder && (
                    <span className="inline-block mt-2 text-[9px] tracking-wider text-bronze/40 border border-bronze/15 px-2 py-1">
                      TO BE UPDATED
                    </span>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="px-8 md:px-16 lg:px-24 py-20 md:py-28">
        <FadeIn>
          <div className="max-w-3xl">
            <div className="w-10 h-px bg-bronze mb-10" />
            <h2
              className="font-display text-ivory leading-tight mb-8"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}
            >
              Continuing a legacy while building what comes next.
            </h2>
            <p className="text-stone/55 text-base leading-relaxed font-light max-w-2xl">
              The business was not built overnight, and it does not think in the
              short term. Every project is an extension of a longer story — one
              that the Dalal family intends to keep writing with the same care
              and purpose that has guided them from the beginning.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Navigation links */}
      <section className="bg-surface px-8 md:px-16 lg:px-24 py-12 border-t border-stone/10">
        <div className="flex flex-col sm:flex-row gap-6">
          <button
            onClick={() => navigate("founder")}
            className="text-[11px] tracking-[0.22em] text-ivory border border-stone/20 px-6 py-3 hover:border-bronze transition-colors w-fit"
          >
            MEET THE FOUNDER →
          </button>
          <button
            onClick={() => navigate("projects")}
            className="text-[11px] tracking-[0.22em] text-stone/50 hover:text-ivory transition-colors py-3 w-fit"
          >
            OUR PROJECTS →
          </button>
        </div>
      </section>
    </main>
  );
}
