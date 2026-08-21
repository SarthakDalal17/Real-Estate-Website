import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type Page =
  | "home"
  | "about"
  | "projects"
  | "motiram-picasso"
  | "motiram-darshan"
  | "motiram-privilege"
  | "motiram-prime"
  | "legacy"
  | "founder"
  | "contact";

interface NavContextType {
  currentPage: Page;
  navigate: (page: Page) => void;
  showSiteVisit: boolean;
  openSiteVisit: () => void;
  closeSiteVisit: () => void;
}

const NavContext = createContext<NavContextType | null>(null);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [showSiteVisit, setShowSiteVisit] = useState(false);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };

  return (
    <NavContext.Provider
      value={{
        currentPage,
        navigate,
        showSiteVisit,
        openSiteVisit: () => setShowSiteVisit(true),
        closeSiteVisit: () => setShowSiteVisit(false),
      }}
    >
      {children}
    </NavContext.Provider>
  );
}

export function useNavigation() {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error("useNavigation must be used within NavigationProvider");
  return ctx;
}
