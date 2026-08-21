import { useNavigation } from "@/context/NavigationContext";
import type { Page } from "@/context/NavigationContext";

export default function Footer() {
  const { navigate, openSiteVisit } = useNavigation();

  const go = (page: Page) => () => navigate(page);

  return (
    <footer className="bg-charcoal border-t border-stone/10">
      <div className="px-8 md:px-16 lg:px-24 pt-16 md:pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          <div>
            <div className="font-display text-ivory text-xl tracking-[0.08em] leading-tight mb-5">
              PADMAJA<br />INFRAVENTURES
            </div>
            <p className="text-stone/50 text-sm leading-relaxed max-w-[240px]">
              Real estate development across Maharashtra. Building spaces with
              a long-term perspective.
            </p>
            <div className="flex gap-5 mt-6">
              {["IG", "IN", "FB", "YT"].map((s) => (
                <span
                  key={s}
                  className="text-stone/30 text-[10px] tracking-widest cursor-pointer hover:text-bronze transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.25em] text-bronze mb-5">
              PROJECTS
            </p>
            <ul className="space-y-3">
              {(
                [
                  ["Motiram Picasso", "motiram-picasso"],
                  ["Motiram Darshan", "motiram-darshan"],
                  ["Motiram Privilege", "motiram-privilege"],
                  ["Motiram Prime", "motiram-prime"],
                ] as [string, Page][]
              ).map(([label, page]) => (
                <li key={page}>
                  <button
                    onClick={go(page)}
                    className="text-stone/60 text-sm hover:text-ivory transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.25em] text-bronze mb-5">
              COMPANY
            </p>
            <ul className="space-y-3">
              {(
                [
                  ["About", "about"],
                  ["Legacy", "legacy"],
                  ["Founder", "founder"],
                  ["Contact", "contact"],
                ] as [string, Page][]
              ).map(([label, page]) => (
                <li key={page}>
                  <button
                    onClick={go(page)}
                    className="text-stone/60 text-sm hover:text-ivory transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.25em] text-bronze mb-5">
              CONTACT
            </p>
            <div className="space-y-2 text-stone/50 text-sm">
              <p>[ Phone: to be confirmed ]</p>
              <p>[ Email: to be confirmed ]</p>
              <p>Maharashtra, India</p>
            </div>
            <button
              onClick={openSiteVisit}
              className="mt-7 text-[11px] tracking-[0.18em] text-ivory border border-bronze/35 px-5 py-2.5 hover:border-bronze transition-colors"
            >
              BOOK A SITE VISIT
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-stone/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-stone/35 text-[11px] tracking-wide">
            © {new Date().getFullYear()} Padmaja Infraventures. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span className="text-stone/35 text-[11px] cursor-pointer hover:text-stone transition-colors">
              Privacy Policy
            </span>
            <span className="text-stone/35 text-[11px] cursor-pointer hover:text-stone transition-colors">
              Terms
            </span>
            <span className="text-stone/25 text-[11px]">
              RERA: PR1270002502572 (Motiram Picasso — pending verification)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
