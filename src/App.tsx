import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/Home";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ResumePage } from "./pages/ResumePage";
import { SecurityReviewsPage } from "./pages/SecurityReviewsPage";
import { Contact } from "./components/Contact";

export default function App() {
    return (
        <Router>
            <div className="min-h-screen bg-background text-foreground font-inter">
                <Navigation />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/security-reviews" element={<SecurityReviewsPage />} />
                        <Route path="/resume" element={<ResumePage />} />
                    </Routes>
                    <Contact />
                </main>
            </div>
        </Router>
    );
}