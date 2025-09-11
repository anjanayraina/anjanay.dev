import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ExternalLink, Shield, Database, Brain, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const web3Projects = [
    {
      title: "Perpetual Vault",
      description: "Advanced DeFi vault protocol with automated yield strategies and risk management. Features dynamic rebalancing, multi-asset support, and gas-optimized contract architecture.",
      image: "https://images.unsplash.com/photo-1660836814985-8523a0d713b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwbmV0d29yayUyMHNlY3VyaXR5fGVufDF8fHx8MTc1NzU4NzM1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Solidity", "Foundry", "OpenZeppelin", "Chainlink", "ERC-4626"],
      features: ["Automated Rebalancing", "Multi-Asset Support", "Gas Optimization", "Security Audited"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Live on Mainnet"
    },
    {
      title: "Middle Earth AI",
      description: "Distributed strategy game with core backend engine in Python, orchestrating complex AI agent actions for 500+ active players. Optimized with Rust programs for state management, reducing transaction costs by 30%.",
      image: "https://images.unsplash.com/photo-1742942965475-25d3b7bf2bfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHBhdHRlcm58ZW58MXx8fHwxNzU3NDczODQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Python", "Rust", "Anchor Framework", "State Management", "Game Engine"],
      features: ["500+ Active Players", "AI Agent Orchestration", "30% Cost Reduction", "Real-time Processing"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Beta Testing"
    }
  ];

  const backendProjects = [
    {
      title: "JobSleuth",
      description: "Automated job aggregation platform processing 5,000+ job postings daily from 10+ real-time sources. Built scalable data ingestion pipeline with 90% collection efficiency and CI/CD automation.",
      image: "https://images.unsplash.com/photo-1655036387197-566206c80980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwY29kZSUyMHRlcm1pbmFsfGVufDF8fHx8MTc1NzU4NzM1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Python", "Telethon", "aiohttp", "GitHub Actions", "Data Pipeline"],
      features: ["Real-time Data Processing", "200+ User Registration", "CI/CD Pipeline", "90% Collection Efficiency"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Production Ready"
    },
    {
      title: "ISV Signature Matching",
      description: "Enterprise microservice for NatWest Group handling critical banking operations. Features fault-tolerant recovery mechanisms and complex business logic for financial processing.",
      image: "https://images.unsplash.com/photo-1742942965475-25d3b7bf2bfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHBhdHRlcm58ZW58MXx8fHwxNzU3NDczODQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Python", "Microservices", "Fault Tolerance", "Enterprise Architecture"],
      features: ["Zero State Loss", "Fault Tolerance", "Business Logic", "Enterprise Scale"],
      githubUrl: "#",
      liveUrl: "#",
      status: "In Development"
    }
  ];

  const ProjectCard = ({ project, isWeb3 = false }: { project: any, isWeb3?: boolean }) => (
    <Card className="overflow-hidden bg-card border-border hover:border-primary/30 transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
        <Badge 
          variant="outline" 
          className={`absolute top-4 right-4 ${isWeb3 ? 'border-accent text-accent' : 'border-primary text-primary'}`}
        >
          {project.status}
        </Badge>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl mb-0">{project.title}</h3>
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" className="p-2">
              <Github className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="mb-4">
          <h4 className="text-sm mb-2">Key Features:</h4>
          <div className="grid grid-cols-2 gap-1">
            {project.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center space-x-1 text-sm text-muted-foreground">
                <div className={`w-1 h-1 rounded-full ${isWeb3 ? 'bg-accent' : 'bg-primary'}`}></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-1">
            {project.technologies.map((tech: string, index: number) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-xs bg-secondary/50 text-muted-foreground"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-amber-accent text-amber-accent mb-6 font-mono">
            Portfolio Showcase
          </Badge>
          <h2 className="font-mono mb-6">
            <span className="text-4xl md:text-6xl bg-gradient-to-r from-amber-accent via-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of Web3 security tools and scalable backend systems demonstrating technical expertise
          </p>
        </div>

        {/* Web3 & Security Projects */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-accent/20">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl">Web3 & Security Projects</h3>
                <p className="text-muted-foreground">Smart contracts, DeFi protocols, and security tools</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {web3Projects.map((project, index) => (
              <ProjectCard key={index} project={project} isWeb3={true} />
            ))}
          </div>
        </div>

        {/* Backend & Full-Stack Projects */}
        <div>
          <div className="flex items-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-primary/20">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl">Backend & Full-Stack Projects</h3>
                <p className="text-muted-foreground">Scalable APIs, data processing, and web applications</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {backendProjects.map((project, index) => (
              <ProjectCard key={index} project={project} isWeb3={false} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more projects or discussing a collaboration?
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 cyber-glow">
            <Github className="w-4 h-4 mr-2" />
            View Full Portfolio on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}