import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ExternalLink, Shield, Database, Brain, Zap, TestTube, Lock, MessageSquare, Hotel, Code, Bot, Gamepad } from "lucide-react";
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
      status: "Live",
      icon: Zap
    },
    {
      title: "Middle Earth AI (Distributed Strategy Game)",
      description: "Engineered the core backend game engine for a distributed game serving over 500+ players, with on-chain programs in Rust and tooling in Python. Optimized data structures to reduce transaction costs by 30%.",
      image: "https://images.unsplash.com/photo-1742942965475-25d3b7bf2bfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHBhdHRlcm58ZW58MXx8fHwxNzU3NDczODQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["JavaScript", "Rust", "Python", "NumPy", "Anchor Framework", "On-Chain State"],
      features: ["500+ Active Players", "Procedural Generation", "30% Cost Reduction", "Comprehensive Test Suite"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Live",
      icon: Gamepad
    },
    {
      title: "Perpetual Vault",
      description: "A protocol to create Perpetual Positions implementing ERC4626-compliant smart contracts for liquidity, scaling positions, and collateral management.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1080&q=80", // Tech desk
      technologies: ["Solidity", "Hardhat", "React"],
      githubUrl: "https://github.com/anjanayraina/PerpetualVault",
      liveUrl: "",
      status: "Completed",
      icon: Lock
    },
    {
      title: "FethrX",
      description: "A project built in Devacation’23, a decentralised journaling platform with the aim of privacy and freedom of expression in journalism.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1080&q=80", // Abstract data
      technologies: ["Solidity", "React", "Hardhat"],
      githubUrl: "https://github.com/0xFethr",
      liveUrl: "",
      status: "Live",
      icon: Code
    },
    {
      title: "IP Marketplace",
      description: "A platform where you can register, contest and lend your Intellectual Property Patents. Designed and implemented smart contracts to enable users to register, contest, and lend their intellectual property securely.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1080&q=80", // Laptop and code
      technologies: ["Solidity", "React", "Hardhat"],
      githubUrl: "https://github.com/0xFethr",
      liveUrl: "",
      status: "Completed",
      icon: Database
    },

    {
      title: "Staybook Hotels Website",
      description: "Online Website created for Staybook Group of Hotels in React.js and Next.js . It supports Everything from booking a hotel to managing the bookings for the Hotel Side , static landing pages have also been created for the hotels.",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1080&q=80", // Modern workspace
      technologies: ["React.js", "Next.js"],
      githubUrl: "https://github.com/anjanayraina/StayBookHotelsGithubLinks",
      liveUrl: "",
      status: "Live",
      icon: Hotel
    },
    {
      title: "Metaverse Land Dapp",
      description: "Created a fully functional Dapp using Ethereum Blockchain and 3.js, in this you can buy and sell virtual land in the metaverse.I have openzepplin in solidity to create the smart contract to mint the NFT token for the purchased land and connected the front end with smart contact using Web3.js.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1080&q=80", // Abstract tech
      technologies: ["Ethereum", "3.js", "Solidity", "Web3.js"],
      githubUrl: "https://github.com/anjanayraina/metaverse-land-dapp",
      liveUrl: "",
      status: "Completed",
      icon: Code
    },

    {
      title: "Sentiment Analysis Model",
      description: "This is a deep learning model created in tensorflow using keras api that assignes a sentiement to a sentence that is inputted .The model is built using keras API and gives an accuracy of 95+ %.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1080&q=80", // Tech workspace
      technologies: ["TensorFlow", "Keras"],
      githubUrl: "https://github.com/anjanayraina/Sentinment-Analysis/blob/main/NewSentimentModel.ipynb",
      liveUrl: "",
      status: "Completed",
      icon: Brain
    }
  ];

  const ProjectCard = ({ project }: { project: any }) => (
      <Card className="overflow-hidden bg-card border-border hover:border-primary/30 transition-all duration-300 group">
        <div className="relative h-48 overflow-hidden">
          {project.image ? (
              <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
          ) : (
              <div className="w-full h-full flex items-center justify-center bg-secondary">
                <project.icon className="w-16 h-16 text-muted-foreground" />
              </div>
          )}
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
              <Button variant="ghost" size="sm" className="p-2" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              {project.liveUrl && (
                  <Button variant="ghost" size="sm" className="p-2" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
              )}
            </div>
          </div>

          <p className="text-muted-foreground mb-4 leading-relaxed">
            {project.description}
          </p>

          {project.features && (
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
          )}

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
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 cyber-glow" asChild>
              <a href="https://github.com/anjanayraina" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
  );
}