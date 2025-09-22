import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github, MapPin, Briefcase, GraduationCap, Code } from "lucide-react";

const resumeData = {
    name: "Anjanay Raina",
    title: "Backend & Smart Contract Engineer",
    location: "New Delhi, India",
    email: "anjanay.raina@example.com",
    social: {
        linkedin: "https://linkedin.com/in/anjanay-raina",
        github: "https://github.com/anjanayraina",
    },
    experience: [
        {
            role: "Software Developer",
            company: "NatWest Group",
            period: "July 2024 - Present",
            description: "Architecting and building a new ISV Signature Matching microservice from the ground up, owning the complete development lifecycle and delivering a 40% reduction in average API response time."
        },
        {
            role: "Independent Smart-Contract Auditor",
            company: "Freelance",
            period: "July 2023 - Present",
            description: "Performed audits for networks like Zus Network, Empower Coin, and Moonvera Solutions. Identified and resolved over 15 critical vulnerabilities, and implemented gas optimizations yielding 60% savings on average."
        },
        {
            role: "Firmware Engineer",
            company: "8ol Robotics",
            period: "July 2023 - Dec 2023",
            description: "Enhanced security measures by implementing secure bootloaders to prevent unauthorized system reprogramming and ensured compliance with UAS standards."
        },
    ],
    education: [
        {
            degree: "Bachelor of Technology in Computer Science",
            institution: "Vellore Institute of Technology",
            period: "2020 - 2024",
            description: "CGPA: 8.9/10. Focused on algorithms, data structures, and software engineering principles."
        }
    ],
    skills: {
        languages: ["Python", "Go", "Solidity", "JavaScript", "Rust"],
        backend: ["FastAPI", "Microservices", "API Design", "Performance Tuning"],
        web3: ["Smart Contracts", "Hardhat", "Foundry", "Slither", "Gas Optimization"],
        databases: ["MongoDB", "PostgreSQL", "MySQL"],
        tools: ["Docker", "GitHub Actions", "CI/CD", "Locust"]
    }
};

export default function ResumePage() {
    const Section = ({ icon: Icon, title, children }) => (
        <div className="mb-12">
            <div className="flex items-center mb-6">
                <Icon className="w-6 h-6 mr-3 text-primary" />
                <h2 className="text-2xl font-mono text-foreground">{title}</h2>
            </div>
            {children}
        </div>
    );

    const TimelineItem = ({ title, subtitle, period, description }) => (
        <div className="relative pl-8 mb-8 last:mb-0">
            <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-background border-2 border-primary">
                <div className="absolute inset-1 rounded-full bg-primary"></div>
            </div>
            <div className="absolute left-[7px] top-5 bottom-0 w-px bg-border"></div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h3 className="text-lg text-foreground">{title}</h3>
                <span className="text-sm font-mono text-muted-foreground mt-1 sm:mt-0">{period}</span>
            </div>
            <p className="text-md text-muted-foreground mb-2">{subtitle}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
    );

    return (
        <main className="container mx-auto max-w-4xl py-24 px-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-12">
                <div>
                    <h1 className="text-4xl bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-1">{resumeData.name}</h1>
                    <p className="text-xl text-muted-foreground mb-2">{resumeData.title}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        {resumeData.location}
                    </div>
                </div>
                <Button className="mt-4 sm:mt-0">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                </Button>
            </div>

            {/* Contact Info */}
            <Card className="p-4 mb-12 bg-secondary/30 border-border">
                <div className="flex flex-wrap justify-center sm:justify-around gap-4">
                    <a href={`mailto:${resumeData.email}`} className="flex items-center text-sm hover:text-primary transition-colors">
                        <Mail className="w-4 h-4 mr-2" /> {resumeData.email}
                    </a>
                    <a href={resumeData.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm hover:text-primary transition-colors">
                        <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                    </a>
                    <a href={resumeData.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm hover:text-primary transition-colors">
                        <Github className="w-4 h-4 mr-2" /> GitHub
                    </a>
                </div>
            </Card>

            {/* Experience Section */}
            <Section icon={Briefcase} title="Work Experience">
                {resumeData.experience.map((item, index) => (
                    <TimelineItem key={index} title={item.role} subtitle={item.company} period={item.period} description={item.description} />
                ))}
            </Section>

            {/* Education Section */}
            <Section icon={GraduationCap} title="Education">
                {resumeData.education.map((item, index) => (
                    <TimelineItem key={index} title={item.degree} subtitle={item.institution} period={item.period} description={item.description} />
                ))}
            </Section>

            {/* Skills Section */}
            <Section icon={Code} title="Skills & Expertise">
                <Card className="p-6 bg-card border-border">
                    {Object.entries(resumeData.skills).map(([category, skills]) => (
                        <div key={category} className="mb-4 last:mb-0">
                            <h4 className="font-mono text-md capitalize text-foreground mb-2">{category}</h4>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <Badge key={index} variant="secondary" className="text-xs bg-secondary/50 text-muted-foreground">{skill}</Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </Card>
            </Section>
        </main>
    );
}