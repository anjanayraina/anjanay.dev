import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Button } from '../components/ui/button';
import { Download } from 'lucide-react';

// Required setup for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const resumeUrl = "src/public/Anjanay_Raina_Resume.pdf"; // Path to your resume in the public folder

export function ResumePage() {
    const [numPages, setNumPages] = useState<number | null>(null);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    return (
        <div className="container mx-auto max-w-5xl py-28 px-6">
            <div className="flex justify-center mb-8">
                <Button asChild>
                    <a href={resumeUrl} download="AnjanayRaina_Resume.pdf">
                        <Download className="w-4 h-4 mr-2" />
                        Download Resume
                    </a>
                </Button>
            </div>

            <div className="flex justify-center border border-border rounded-lg overflow-hidden bg-secondary/20">
                <Document file={resumeUrl} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.from(new Array(numPages || 0), (el, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                            width={Math.min(window.innerWidth * 0.9, 1000)}
                        />
                    ))}
                </Document>
            </div>
        </div>
    );
}