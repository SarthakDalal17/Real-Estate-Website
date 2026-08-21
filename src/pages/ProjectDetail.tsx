import { useState } from "react";
import { useNavigation } from "@/context/NavigationContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getProjectBySlug } from "@/data/projects";
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

function Gallery({ images }: { images: string[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (!images.length) return null;

  const prev = () =>
    setLightbox((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () =>
    setLightbox((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightbox(i)}
            className="group overflow-hidden bg-surface focus:outline-none focus-visible:ring-1 focus-visible:ring-bronze"
            style={{ aspectRatio: i === 0 ? "16/9" : "4/3" }}
          >
            <img
              src={src}
              alt={`Gallery image ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[300] bg-charcoal/97 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-6 md:left-12 text-stone/60 hover:text-ivory transition-colors text-3xl p-2"
            aria-label="Previous"
          >
            ←
          </button>
          <img
            src={images[lightbox]}
            alt={`Gallery image ${lightbox + 1}`}
            className="max-h-[85vh] max-w-[85vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-6 md:right-12 text-stone/60 hover:text-ivory transition-colors text-3xl p-2"
            aria-label="Next"
          >
            →
          </button>
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 md:top-8 md:right-8 text-stone/50 hover:text-ivory transition-colors p-2"
            aria-label="Close gallery"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-stone/35 text-xs tracking-widest">
            {lightbox + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
}

function PicassoDetail() {
  const { openSiteVisit, navigate } = useNavigation();
  const project = getProjectBySlug("motiram-picasso")!;

  const VISUAL_MOMENTS = [
    {
      title: "The Villa",
      desc: "The private experience of owning a second home.",
      img: "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?w=1200&h=800&fit=crop&auto=format&q=80",
    },
    {
      title: "The Escape",
      desc: "A change of pace from the city.",
      img: "https://images.unsplash.com/photo-1750766514691-d3f94f7bc024?w=1200&h=800&fit=crop&auto=format&q=80",
    },
    {
      title: "The Weekend",
      desc: "Spaces designed around time with family and friends.",
      img: "https://images.unsplash.com/photo-1757924461488-ef9ad0670978?w=1200&h=800&fit=crop&auto=format&q=80",
    },
    {
      title: "The Second Address",
      desc: "A place that feels like yours beyond the city.",
      img: "https://images.unsplash.com/photo-1713186103033-60ff76a7b89d?w=1200&h=800&fit=crop&auto=format&q=80",
    },
  ];

  return (
    <main className="bg-charcoal pt-20">
      {/* Hero */}
      <section className="relative bg-charcoal" style={{ minHeight: "88vh" }}>
        <img
          src={project.heroImage}
          alt="Motiram Picasso"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-charcoal/90" />
        <div className="relative h-full flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-16 md:pb-24" style={{ minHeight: "88vh" }}>
          <div>
            <p className="text-[10px] tracking-[0.35em] text-bronze mb-5">
              PADMAJA INFRAVENTURES
            </p>
            <h1
              className="font-display text-ivory leading-none mb-5"
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
            >
              Motiram Picasso
            </h1>
            <p className="text-stone/45 text-[10px] tracking-[0.28em] mb-8">
              KOTHIMBE · NERAL · MAHARASHTRA
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {project.tags.map((t) => (
                <span key={t} className="text-[9px] tracking-wider text-stone/50 border border-stone/15 px-3 py-1.5">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openSiteVisit}
                className="text-[11px] tracking-[0.22em] bg-bronze text-charcoal px-8 py-3.5 hover:bg-bronze-light transition-colors w-fit font-medium"
              >
                BOOK A SITE VISIT
              </button>
              <button
                onClick={openSiteVisit}
                className="text-[11px] tracking-[0.22em] text-ivory border border-ivory/25 px-8 py-3.5 hover:border-bronze transition-colors w-fit"
              >
                DOWNLOAD BROCHURE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="px-8 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn>
            <p className="text-[10px] tracking-[0.28em] text-bronze mb-6">
              THE PROJECT
            </p>
            <h2
              className="font-display text-ivory leading-tight mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Step away from<br />the city.
            </h2>
            <p className="text-stone/60 text-base leading-relaxed font-light mb-6">
              {project.story}
            </p>
            <p className="text-stone/45 text-sm leading-relaxed font-light">
              Located in Kothimbe village, Raigad — a setting that offers
              natural surroundings and a genuine sense of distance from
              urban life.
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="border border-stone/10 p-8 md:p-10">
              <p className="text-[10px] tracking-[0.25em] text-bronze mb-6">
                PROJECT INFORMATION
              </p>
              <div className="space-y-5">
                {Object.entries(project.keyInfo).map(([key, val]) => (
                  val && (
                    <div key={key} className="border-b border-stone/10 pb-4 last:border-b-0 last:pb-0">
                      <p className="text-[9px] tracking-[0.22em] text-stone/35 mb-1.5 uppercase">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </p>
                      <p className="text-stone/70 text-sm">{val}</p>
                    </div>
                  )
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-stone/10">
                <p className="text-[9px] tracking-[0.2em] text-stone/30 leading-relaxed">
                  RERA registration pending verification by Padmaja
                  Infraventures legal team before publication.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Visual Moments */}
      <section className="bg-surface">
        <div className="px-8 md:px-16 lg:px-24 py-12">
          <FadeIn>
            <p className="text-[10px] tracking-[0.28em] text-bronze mb-3">
              LIFESTYLE
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-ivory">
              Where weekends become a way of life.
            </h2>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {VISUAL_MOMENTS.map((m, i) => (
            <div
              key={m.title}
              className="relative overflow-hidden group"
              style={{ height: "clamp(280px, 48vh, 520px)" }}
            >
              <img
                src={m.img}
                alt={m.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-10" style={{ transitionDelay: `${i * 50}ms` }}>
                <p className="text-[9px] tracking-[0.28em] text-bronze mb-2">
                  0{i + 1}
                </p>
                <h3 className="font-display text-2xl md:text-3xl text-ivory mb-1.5">
                  {m.title}
                </h3>
                <p className="text-stone/70 text-sm">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="px-8 md:px-16 lg:px-24 py-20 md:py-24">
        <FadeIn className="mb-10">
          <p className="text-[10px] tracking-[0.28em] text-bronze mb-3">
            GALLERY
          </p>
          <h2 className="font-display text-3xl text-ivory">Project Images</h2>
        </FadeIn>
        <Gallery images={project.galleryImages} />
        <FadeIn className="mt-6">
          <p className="text-stone/30 text-xs">
            Actual project photography and architectural renders will be
            updated as the project progresses.
          </p>
        </FadeIn>
      </section>

      {/* Location */}
      <section className="bg-surface px-8 md:px-16 lg:px-24 py-16 md:py-20">
        <FadeIn>
          <p className="text-[10px] tracking-[0.28em] text-bronze mb-4">
            LOCATION
          </p>
          <h2 className="font-display text-3xl text-ivory mb-6">
            Kothimbe, Neral, Raigad
          </h2>
          <p className="text-stone/55 text-base font-light leading-relaxed max-w-xl mb-4">
            Kothimbe village is located in the Raigad district of Maharashtra,
            in the area near Neral — a region known for its natural setting
            within the Western Ghats foothills.
          </p>
          <p className="text-stone/35 text-sm">
            [ Interactive map to be integrated. For directions, please contact
            the Padmaja Infraventures team. ]
          </p>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-16 lg:px-24 py-20 md:py-24 border-t border-stone/10">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="font-display text-ivory leading-tight mb-5"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              >
                Explore Motiram<br />Picasso in person.
              </h2>
              <p className="text-stone/50 text-base font-light leading-relaxed max-w-md">
                Schedule a site visit with the Padmaja Infraventures team to
                experience the project and the location firsthand.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:items-end">
              <button
                onClick={openSiteVisit}
                className="text-[11px] tracking-[0.22em] bg-bronze text-charcoal px-10 py-4 hover:bg-bronze-light transition-colors font-medium w-fit"
              >
                BOOK A SITE VISIT
              </button>
              <button
                onClick={openSiteVisit}
                className="text-[11px] tracking-[0.22em] text-ivory border border-stone/20 px-10 py-4 hover:border-bronze transition-colors w-fit"
              >
                DOWNLOAD BROCHURE
              </button>
              <button
                onClick={() => navigate("contact")}
                className="text-[11px] tracking-[0.22em] text-stone/50 hover:text-ivory transition-colors py-2"
              >
                CONTACT US →
              </button>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}

function CompletedProjectDetail({ slug }: { slug: string }) {
  const { navigate } = useNavigation();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main className="bg-charcoal pt-20 min-h-screen flex items-center justify-center px-8">
        <div className="text-center">
          <p className="text-stone/50 mb-6">Project not found.</p>
          <button
            onClick={() => navigate("projects")}
            className="text-[11px] tracking-[0.2em] text-bronze"
          >
            ← BACK TO PROJECTS
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-charcoal pt-20">
      <section className="relative bg-charcoal" style={{ minHeight: "60vh" }}>
        <img
          src={project.heroImage}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 to-charcoal/90" />
        <div className="relative px-8 md:px-16 lg:px-24 py-16 md:py-24 flex flex-col justify-end" style={{ minHeight: "60vh" }}>
          <button
            onClick={() => navigate("projects")}
            className="text-[10px] tracking-[0.25em] text-stone/40 hover:text-stone transition-colors mb-12"
          >
            ← ALL PROJECTS
          </button>
          <p className="text-[10px] tracking-[0.3em] text-bronze mb-4">
            COMPLETED PROJECT
          </p>
          <h1
            className="font-display text-ivory leading-none"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
          >
            {project.name}
          </h1>
        </div>
      </section>

      <section className="px-8 md:px-16 lg:px-24 py-20 md:py-24">
        <div className="max-w-3xl">
          <div className="border border-stone/10 p-8 md:p-10 mb-10">
            <p className="text-[10px] tracking-[0.25em] text-bronze mb-6">
              PROJECT DETAILS
            </p>
            <div className="space-y-5">
              {[
                ["Location", project.keyInfo.location],
                ["Status", project.keyInfo.status],
                ["Type", project.keyInfo.type],
              ].map(([label, value]) => (
                <div key={label} className="border-b border-stone/10 pb-4 last:border-b-0">
                  <p className="text-[9px] tracking-[0.22em] text-stone/35 mb-1.5">
                    {label.toUpperCase()}
                  </p>
                  <p className="text-stone/60 text-sm">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-stone/40 text-sm leading-relaxed border-l border-stone/15 pl-4">
            Full details for this project are being compiled by the Padmaja
            Infraventures team and will be published shortly. For more
            information, please contact us directly.
          </p>
          <div className="mt-10">
            <button
              onClick={() => navigate("contact")}
              className="text-[11px] tracking-[0.22em] text-ivory border border-stone/20 px-6 py-3 hover:border-bronze transition-colors"
            >
              CONTACT US →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ProjectDetail({ slug }: { slug: string }) {
  if (slug === "motiram-picasso") return <PicassoDetail />;
  return <CompletedProjectDetail slug={slug} />;
}
