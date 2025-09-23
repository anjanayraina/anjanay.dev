import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Import the default styling for react-pdf (only need to do this once)
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Import your custom components
import { Button } from '../components/ui/button';
import { Download } from 'lucide-react';

// Required setup for react-pdf. Using cdnjs is often more reliable.
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Define the path to your resume, located in the `/public` folder
const resumePath = "/Anjanay_Raina_Resume.pdf";

export function ResumePage() {
    const [numPages, setNumPages] = useState<number | null>(null);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    return (
        <main className="container mx-auto max-w-4xl py-24 px-6 flex flex-col items-center">
            {/* Download Button */}
            <div className="mb-8">
                <Button asChild>
                    <a href={resumePath} download="Anjanay_Raina_Resume.pdf">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                    </a>
                </Button>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="flex w-full justify-center border border-border rounded-lg overflow-hidden bg-secondary/20">
                <Document
                    file={resumePath}
                    onLoadSuccess={onDocumentLoadSuccess}
                    // Add a loading indicator for better UX
                    loading={<div className="p-4">Loading PDF...</div>}
                    // Add an error message for better UX
                    error={<div className="p-4">Failed to load PDF.</div>}
                >
                    {Array.from(new Array(numPages || 0), (el, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                            className="w-full"
                        />
                    ))}
                </Document>
            </div>
        </main>
    );
}