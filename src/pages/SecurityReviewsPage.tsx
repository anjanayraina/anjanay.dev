import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Shield, FileText } from "lucide-react";

const securityReviews = [
    {
        title: "Zus Network Security Review",
        protocol: "Decentralized Storage",
        href: "https://drive.google.com/drive/folders/1lOQWp2m8ezANvN18WRJ-bYVnFirTLDRp",
        tags: ["Go", "Storage Network", "Cryptography", "CI/CD"],
    },
    {
        title: "Empower Coin Security Review",
        protocol: "DeFi Protocol",
        href: "https://drive.google.com/drive/folders/1WPyDh-ZjIBXXYB-AfqD_et9bV59BNGxN",
        tags: ["Solidity", "DeFi", "Tokenomics", "Reentrancy"],
    },
    {
        title: "Moonvera Solutions Security Review",
        protocol: "Web3 Platform",
        href: "https://drive.google.com/drive/folders/1zZcw0Ab0EX3O6K71sj7L901UOBfss8CZ",
        tags: ["Solidity", "Slither", "Foundry", "Gas Optimization"],
    },
    {
        title: "WyvernX Security Review",
        protocol: "NFT Marketplace",
        href: "https://drive.google.com/drive/folders/1I0oOs3FtQsE9uFd8lgJPf8GmguySxeNt", // <-- PASTE WYVERNX LINK HERE
        tags: ["Solidity", "ERC721", "Access Control"],
    },
    {
        title: "Kendu NFT Marketplace Review",
        protocol: "NFT Marketplace",
        href: "https://drive.google.com/drive/folders/1MKm8YU31gpaNCIJmQgSCboIa5AEp_OI5", // <-- PASTE KENDU LINK HERE
        tags: ["Solidity", "Marketplace", "ERC1155"],
    },
];

export function SecurityReviewsPage() {
    return (
        <div className="pt-28 pb-24 px-6">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Badge variant="outline" className="border-accent text-accent mb-6 font-mono secure-glow">
                        Security & Diligence
                    </Badge>
                    <h1 className="font-mono text-4xl md:text-6xl mb-6 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                        Security Reviews
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A showcase of my security reviews and vulnerability assessments for various blockchain protocols.
                    </p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {securityReviews.map((review, index) => (
                        <Card key={index} className="p-6 bg-card border-border flex flex-col hover:border-accent/50 transition-all duration-300">
                            <div className="flex-grow">
                                <Shield className="w-8 h-8 text-accent mb-4" />
                                <h3 className="text-xl mb-2">{review.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4">{review.protocol}</p>
                                <div className="flex flex-wrap gap-2">
                                    {review.tags.map(tag => (
                                        <Badge key={tag} variant="secondary">{tag}</Badge>
                                    ))}
                                </div>
                            </div>
                            <Button asChild className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90">
                                <a href={review.href} target="_blank" rel="noopener noreferrer">
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