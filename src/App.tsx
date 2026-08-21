import { NavigationProvider, useNavigation } from "@/context/NavigationContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SiteVisitModal from "@/components/SiteVisitModal";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import Legacy from "@/pages/Legacy";
import Founder from "@/pages/Founder";
import Contact from "@/pages/Contact";

const PROJECT_PAGES = new Set([
  "motiram-picasso",
  "motiram-darshan",
  "motiram-privilege",
  "motiram-prime",
]);

function PageRenderer() {
  const { currentPage } = useNavigation();

  if (PROJECT_PAGES.has(currentPage)) {
    return <ProjectDetail slug={currentPage} />;
  }

  switch (currentPage) {
    case "home":
      return <Home />;
    case "about":
      return <About />;
    case "projects":
      return <Projects />;
    case "legacy":
      return <Legacy />;
    case "founder":
      return <Founder />;
    case "contact":
      return <Contact />;
    default:
      return <Home />;
  }
}

export default function App() {
  return (
    <NavigationProvider>
      <div className="min-h-screen bg-charcoal text-ivory font-body">
        <Navbar />
        <PageRenderer />
        <Footer />
        <SiteVisitModal />
      </div>
    </NavigationProvider>
  );
}
