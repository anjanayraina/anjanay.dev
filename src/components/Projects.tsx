import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ExternalLink, Shield, Database, Brain, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "JobSleuth (Automated Job Aggregation Platform)",
      description: "Architected and deployed a full-stack platform that processes 5,000+ job postings daily from 10+ real-time sources, serving over 200+ registered users. Built a scalable data ingestion pipeline in Python and implemented a full CI/CD pipeline.",
      image: "https://images.unsplash.com/photo-1655036387197-566206c80980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwY29kZSUyMHRlcm1pbmFsfGVufDF8fHx8MTc1NzU4NzM1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Python", "Telethon", "aiohttp", "FastAPI", "MongoDB", "GitHub Actions"],
      features: ["Real-time Data Processing", "200+ Users", "90% Collection Efficiency", "CI/CD Pipeline"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Production Ready"
    },
    {
      title: "Middle Earth AI (Distributed Strategy Game)",
      description: "Engineered the core backend game engine for a distributed game serving over 500+ players, with on-chain programs in Rust and tooling in Python. Optimized data structures to reduce transaction costs by 30%.",
      image: "https://images.unsplash.com/photo-1742942965475-25d3b7bf2bfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHBhdHRlcm58ZW58MXx8fHwxNzU3NDczODQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["JavaScript", "Rust", "Python", "NumPy", "Anchor Framework", "On-Chain State"],
      features: ["500+ Active Players", "Procedural Generation", "30% Cost Reduction", "Comprehensive Test Suite"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Live"
    }
  ];

  const ProjectCard = ({ project }: { project: any }) => (
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
              className="absolute top-4 right-4 border-accent text-accent"
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
                    <div className="w-1 h-1 rounded-full bg-accent"></div>
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
              A selection of projects demonstrating my expertise in backend development, system design, and security.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Interested in seeing more? View my full portfolio on GitHub.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 cyber-glow">
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </Button>
          </div>
        </div>
      </section>
  );
}