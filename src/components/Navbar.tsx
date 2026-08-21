import { useEffect, useState } from "react";
import { useNavigation } from "@/context/NavigationContext";
import type { Page } from "@/context/NavigationContext";

const NAV_LINKS: { label: string; page: Page }[] = [
  { label: "HOME", page: "home" },
  { label: "ABOUT", page: "about" },
  { label: "PROJECTS", page: "projects" },
  { label: "LEGACY", page: "legacy" },
  { label: "FOUNDER", page: "founder" },
  { label: "CONTACT", page: "contact" },
];

export default function Navbar() {
  const { navigate, currentPage, openSiteVisit } = useNavigation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (page: Page) => {
    navigate(page);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-surface/96 backdrop-blur-md border-b border-stone/10"
            : ""
        }`}
      >
        <div className="px-6 md:px-12 lg:px-16 py-5 flex items-center justify-between">
          <button
            onClick={() => handleNav("home")}
            className="font-display text-ivory text-[15px] tracking-[0.1em] hover:text-stone transition-colors flex-shrink-0"
          >
            PADMAJA INFRAVENTURES
          </button>

          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {NAV_LINKS.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => handleNav(page)}
                className={`text-[11px] tracking-[0.18em] transition-colors ${
                  currentPage === page
                    ? "text-ivory"
                    : "text-stone/60 hover:text-ivory"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="hidden lg:block">
            <button
              onClick={openSiteVisit}
              className="text-[11px] tracking-[0.18em] text-ivory border border-bronze/50 px-5 py-2.5 hover:border-bronze hover:bg-bronze/8 transition-all"
            >
              BOOK A SITE VISIT
            </button>
          </div>

          <button
            className="lg:hidden text-ivory p-1"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <div className="space-y-[5px]">
              <span className="block w-6 h-px bg-ivory" />
              <span className="block w-4 h-px bg-ivory" />
              <span className="block w-6 h-px bg-ivory" />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-[100] bg-charcoal flex flex-col transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto translate-x-0"
            : "opacity-0 pointer-events-none translate-x-full"
        }`}
      >
        <div className="px-6 py-5 flex items-center justify-between border-b border-stone/10">
          <span className="font-display text-ivory text-[15px] tracking-[0.1em]">
            PADMAJA INFRAVENTURES
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-stone/60 hover:text-ivory transition-colors p-1"
            aria-label="Close menu"
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

        <div className="flex-1 flex flex-col justify-center px-10 gap-7">
          {NAV_LINKS.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => handleNav(page)}
              className={`text-left font-display text-[2.5rem] leading-none transition-colors ${
                currentPage === page
                  ? "text-bronze"
                  : "text-ivory hover:text-stone"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="px-10 pb-10">
          <button
            onClick={() => {
              openSiteVisit();
              setMenuOpen(false);
            }}
            className="text-[11px] tracking-[0.22em] text-ivory border border-bronze/40 px-6 py-3 hover:border-bronze transition-colors w-full"
          >
            BOOK A SITE VISIT
          </button>
          <p className="mt-6 text-stone/25 text-[10px] tracking-[0.25em]">
            MAHARASHTRA · INDIA
          </p>
        </div>
      </div>
    </>
  );
}
