import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Trophy, Shield, Zap, Target, Server, Database } from "lucide-react";

export function AuditsRankings() {
  const achievements = [
    {
      icon: Server,
      title: "Microservices Built",
      subtitle: "Production-Ready Systems",
      value: "10+",
      description: "High-performance backend services at enterprise scale",
      color: "text-primary",
      glowClass: "cyber-glow"
    },
    {
      icon: Database,
      title: "Data Processing",
      subtitle: "Daily Job Postings",
      value: "5000+",
      description: "Real-time aggregation from 10+ sources with 90% efficiency",
      color: "text-accent",
      glowClass: "secure-glow"
    },
    {
      icon: Zap,
      title: "Performance Boost",
      subtitle: "API Response Time",
      value: "3x Faster",
      description: "Optimized multthreading and database queries",
      color: "text-amber-accent",
      glowClass: "amber-glow" // Changed
    },
    {
      icon: Shield,
      title: "Security Research",
      subtitle: "Blockchain & Backend",
      value: "Top 300",
      description: "Code4rena ranking + published IEEE research",
      color: "text-orange-400",
      glowClass: "orange-glow" // Changed
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-accent text-accent mb-6 font-mono">
            Proven Expertise
          </Badge>
          <h2 className="font-mono mb-6">
            <span className="text-4xl md:text-6xl bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              Backend Engineering & Security Achievements
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Demonstrable track record in building scalable backend systems and securing high-value protocols
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={index} className={`p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 ${achievement.glowClass}`}>
                <div className="flex flex-col items-center text-center">
                  <div className={`p-3 rounded-full bg-secondary mb-4 ${achievement.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className={`text-2xl font-mono mb-1 ${achievement.color}`}>
                    {achievement.value}
                  </div>
                  <h3 className="mb-1">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{achievement.subtitle}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{achievement.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Notable Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="p-6 bg-card border-border">
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded bg-primary/20">
                <Server className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="mb-2 text-primary">ISV Signature Matching</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Built microservice from scratch with fault-tolerant recovery at NatWest Group
                </p>
                <Badge variant="outline" className="text-xs border-primary/50 text-primary">
                  Enterprise Scale
                </Badge>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded bg-accent/20">
                <Database className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="mb-2 text-accent">Real-Time Data Pipeline</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Architected JobSleuth platform processing 5000+ daily job postings with 90% efficiency
                </p>
                <Badge variant="outline" className="text-xs border-accent/50 text-accent">
                  High Volume
                </Badge>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded bg-orange-400/20">
                <Shield className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <h4 className="mb-2 text-orange-400">IEEE Research Publication</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Published Two-Layered Blockchain Architecture research achieving 100x faster resolution
                </p>
                <Badge variant="outline" className="text-xs border-orange-400/50 text-orange-400">
                  Research Impact
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}