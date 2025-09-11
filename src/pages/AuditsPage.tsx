import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Shield, FileText } from "lucide-react";

// Add your audit report details here
// The 'file' should be the exact name of the PDF in your /public/audits/ folder
const auditReports = [
    {
        title: "WyvernX Security Review",
        protocol: "NFT Marketplace",
        file: "AWyvernX_Security_Review.pdf",
        tags: ["Solidity", "ERC721", "Access Control"],
    },
    {
        title: "Zus Contracts Audit",
        protocol: "Decentralized Storage",
        file: "BZus Contracts Audit .pdf",
        tags: ["Go", "Storage Network", "Cryptography"],
    },
    {
        title: "Moonvera CSolution Audit",
        protocol: "DeFi Protocol",
        file: "CMoonvera CSolution Audit.pdf",
        tags: ["Solidity", "DeFi", "Tokenomics"],
    },
    {
        title: "Kendu NFT Marketplace Audit",
        protocol: "NFT Marketplace",
        file: "Kendu Audit.pdf",
        tags: ["Solidity", "Marketplace", "ERC1155"],
    },
    // Add more audit reports here...
];

export function AuditsPage() {
    return (
        <div className="pt-28 pb-24 px-6">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Badge variant="outline" className="border-accent text-accent mb-6 font-mono">
                        Security & Diligence
                    </Badge>
                    <h1 className="font-mono text-4xl md:text-6xl mb-6 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                        Security Audits
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A showcase of my security reviews and vulnerability assessments for various blockchain protocols.
                    </p>
                </div>

                {/* Audits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {auditReports.map((audit, index) => (
                        <Card key={index} className="p-6 bg-card border-border flex flex-col hover:border-accent/50 transition-all duration-300">
                            <div className="flex-grow">
                                <Shield className="w-8 h-8 text-accent mb-4" />
                                <h3 className="text-xl mb-2">{audit.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4">{audit.protocol}</p>
                                <div className="flex flex-wrap gap-2">
                                    {audit.tags.map(tag => (
                                        <Badge key={tag} variant="secondary">{tag}</Badge>
                                    ))}
                                </div>
                            </div>
                            <Button asChild className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90">
                                <a href={`/audits/${audit.file}`} target="_blank" rel="noopener noreferrer">
                                    <FileText className="w-4 h-4 mr-2" />
                                    View Report
                                </a>
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}