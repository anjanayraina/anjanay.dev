import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
// Updated imports to include Linkedin and Keyboard icons
import { Github, ExternalLink, Linkedin, Keyboard } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden grid-pattern">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
              src="https://images.unsplash.com/photo-1655036387197-566206c80980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwY29kZSUyMHRlcm1pbmFsfGVufDF8fHx8MTc1NzU4NzM1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Cybersecurity Code Terminal"
              className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/80"></div>
        </div>

        <div className="container mx-auto px-6 z-10 text-center max-w-5xl">
          {/* Status Badge - Updated Text */}
          <Badge variant="outline" className="mb-8 border-primary text-primary font-mono cyber-glow">
            <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></div>
            Status: Available
          </Badge>

          {/* Main Heading */}
          <h1 className="mb-6 font-mono">
          <span className="block text-6xl md:text-8xl bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
            Anjanay Raina
          </span>
          </h1>

          {/* Sub-headline - Updated Text */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Backend Engineer, Smart Contract Developer, and Security Researcher specializing in high-performance systems and comprehensive code audits.
          </p>

          {/* Credibility Links - Updated Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 cyber-glow">
              <a href="https://github.com/anjanraina" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
                <ExternalLink className="w-3 h-3 ml-2" />
              </a>
            </Button>

            <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 secure-glow">
              <a href="https://www.linkedin.com/in/anjanayraina/" target="_blank" rel="noopener noreferrer"> {/* TODO: Add your LinkedIn URL */}
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
                <ExternalLink className="w-3 h-3 ml-2" />
              </a>
            </Button>

            <Button asChild variant="outline" className="border-amber-accent text-amber-accent hover:bg-amber-accent hover:text-background transition-all duration-300">
              <a href="https://leetcode.com/u/anjanayraina/" target="_blank" rel="noopener noreferrer">
                <Keyboard className="w-4 h-4 mr-2" />
                LeetCode
                <ExternalLink className="w-3 h-3 ml-2" />
              </a>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-mono text-primary mb-2">2+</div>
              <div className="text-muted-foreground">Years Backend Experience</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-mono text-amber-accent mb-2">3x</div>
              <div className="text-muted-foreground">API Performance Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-mono text-orange-400 mb-2">90%</div>
              <div className="text-muted-foreground">Data Processing Efficiency</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>
  );
}