import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/HomePage";
import { GettingStartedPage } from "./pages/GettingStartedPage";
import { PlaceholderPage } from "./pages/PlaceholderPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-bg-primary">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/getting-started" element={<GettingStartedPage />} />
            <Route path="/walkthrough" element={<PlaceholderPage title="Walkthrough Guide" description="Complete step-by-step walkthrough from ship evacuation to final rescue" />} />
            <Route path="/items" element={<PlaceholderPage title="Items Database" description="Comprehensive catalog of all items, their uses, and strategic value" />} />
            <Route path="/endings" element={<PlaceholderPage title="Endings Guide" description="Unlock all endings - survival, death, and hidden secrets" />} />
            <Route path="/events" element={<PlaceholderPage title="Events Guide" description="Night events, required items, and survival strategies" />} />
            <Route path="/achievements" element={<PlaceholderPage title="Achievements" description="Complete achievement list with detailed unlock conditions" />} />
            <Route path="/tips-tricks" element={<PlaceholderPage title="Tips &amp; Tricks" description="Advanced strategies, resource optimization, and expert advice" />} />
            <Route path="/faq" element={<PlaceholderPage title="FAQ" description="Frequently asked questions and quick answers" />} />
            <Route path="/about" element={<PlaceholderPage title="About This Wiki" description="Learn about this fan-made survival guide" />} />
            <Route path="/changelog" element={<PlaceholderPage title="Changelog" description="Recent updates and additions to the wiki" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
