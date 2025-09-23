import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../public/Anjanay_Raina_Resume.pdf"
// This line is important for Vite projects to load the PDF worker correctly.
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const resumeData = {
    name: "Anjanay Raina",
    title: "Backend & Smart Contract Engineer",
    location: "New Delhi, India",
    email: "mailto:anjanayraina@gmail.com",
    social: {
        linkedin: "https://linkedin.com/in/anjanay-raina",
        github: "https://github.com/anjanayraina",
    },
};

export function ResumePage() {
    const [numPages, setNumPages] = useState<number | null>(null);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    // CORRECTED PATH: Use an absolute path from the public folder root.
    const resumePath = "/Anjanay_Raina_Resume.pdf";

    return (
        <main className="container mx-auto max-w-4xl py-24 px-6">




            {/* Embedded PDF Viewer */}
            <div className="flex justify-center border border-border rounded-lg overflow-hidden bg-secondary/20">
                <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.from(new Array(numPages || 0), (el, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                            // Using Tailwind classes for responsive width is cleaner
                            className="w-full"
                        />
                    ))}
                </Document>
            </div>

            <div className="flex justify-center items-center mb-12">
                <Button className="mt-4 sm:mt-0" asChild>
                    <a href={resumePath} download="Anjanay_Raina_Resume.pdf">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                    </a>
                </Button>
            </div>
        </main>
    );
}