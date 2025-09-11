import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Shield, Code, FileText, Zap, Database } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Backend & Systems",
      icon: Code,
      color: "text-primary",
      borderColor: "border-primary/30",
      skills: [
        { name: "Python", level: "Expert" },
        { name: "Go (Golang)", level: "Advanced" },
        { name: "Java", level: "Advanced" },
        { name: "Rust", level: "Advanced" },
        { name: "FastAPI", level: "Expert" },
        { name: "Flask", level: "Advanced" },
        { name: "Node.js", level: "Advanced" },
        { name: "Microservices", level: "Expert" },
        { name: "Docker", level: "Advanced" },
        { name: "Kubernetes", level: "Intermediate" },
        { name: "Kafka", level: "Advanced" },
        { name: "System Architecture", level: "Expert" }
      ]
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      color: "text-accent",
      borderColor: "border-accent/30",
      skills: [
        { name: "MongoDB", level: "Expert" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "OracleDB", level: "Intermediate" },
        { name: "Redis", level: "Advanced" },
        { name: "GCP", level: "Advanced" },
        { name: "Git", level: "Expert" },
        { name: "Postman", level: "Advanced" },
        { name: "Locust", level: "Intermediate" },
        { name: "cProfile", level: "Advanced" },
        { name: "Performance Tuning", level: "Expert" },
        { name: "API Development", level: "Expert" },
        { name: "Data Pipeline", level: "Advanced" }
      ]
    },
    {
      title: "Blockchain & Security",
      icon: Shield,
      color: "text-amber-accent",
      borderColor: "border-amber-accent/30",
      skills: [
        { name: "Solidity", level: "Expert" },
        { name: "Smart Contract Auditing", level: "Advanced" },
        { name: "ERC-20/721", level: "Advanced" },
        { name: "Hyperledger Fabric", level: "Advanced" },
        { name: "Foundry", level: "Intermediate" },
        { name: "Hardhat", level: "Intermediate" },
        { name: "Gas Optimization", level: "Advanced" },
        { name: "DeFi Protocols", level: "Advanced" },
        { name: "Anchor Framework", level: "Advanced" },
        { name: "Blockchain Architecture", level: "Expert" },
        { name: "Security Best Practices", level: "Expert" },
        { name: "Code4rena", level: "Advanced" }
      ]
    },
    {
      title: "Frontend & Tools",
      icon: Zap,
      color: "text-orange-400",
      borderColor: "border-orange-400/30",
      skills: [
        { name: "JavaScript", level: "Expert" },
        { name: "TypeScript", level: "Advanced" },
        { name: "ReactJS", level: "Advanced" },
        { name: "Express", level: "Advanced" },
        { name: "SQL", level: "Advanced" },
        { name: "Git/GitHub", level: "Expert" },
        { name: "CI/CD Pipelines", level: "Advanced" },
        { name: "Testing Frameworks", level: "Expert" },
        { name: "Code Reviews", level: "Expert" },
        { name: "Technical Writing", level: "Advanced" },
        { name: "Agile/Scrum", level: "Advanced" },
        { name: "Team Leadership", level: "Advanced" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "text-accent border-accent/50";
      case "Advanced": return "text-primary border-primary/50";
      case "Intermediate": return "text-amber-accent border-amber-accent/50";
      default: return "text-muted-foreground border-muted-foreground/50";
    }
  };

  const getLevelBg = (level: string) => {
    switch (level) {
      case "Expert": return "bg-accent/10";
      case "Advanced": return "bg-primary/10";
      case "Intermediate": return "bg-amber-accent/10";
      default: return "bg-muted/10";
    }
  };

  return (
    <section className="py-24 px-6 bg-secondary/10">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-orange-400 text-orange-400 mb-6 font-mono">
            Technical Expertise
          </Badge>
          <h2 className="font-mono mb-6">
            <span className="text-4xl md:text-6xl bg-gradient-to-r from-orange-400 via-primary to-accent bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive technical skills spanning Web3 security, backend development, and protocol design
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card key={categoryIndex} className={`p-8 bg-card border ${category.borderColor} hover:border-opacity-60 transition-all duration-300`}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 rounded-lg bg-secondary ${category.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-0">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.skills.length} technologies</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                      <span className="text-sm">{skill.name}</span>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${getLevelColor(skill.level)} ${getLevelBg(skill.level)}`}
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Specializations */}
        <div className="mt-16">
          <h3 className="text-center text-2xl mb-8">Core Specializations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center bg-card border-primary/30">
              <Code className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="mb-2">Backend Engineering</h4>
              <p className="text-sm text-muted-foreground">
                Enterprise microservices, fault-tolerant systems, and high-performance API development
              </p>
            </Card>
            
            <Card className="p-6 text-center bg-card border-accent/30">
              <Database className="w-8 h-8 text-accent mx-auto mb-4" />
              <h4 className="mb-2">Data Engineering</h4>
              <p className="text-sm text-muted-foreground">
                Real-time data pipelines, large-scale processing, and distributed system architecture
              </p>
            </Card>
            
            <Card className="p-6 text-center bg-card border-amber-accent/30">
              <Shield className="w-8 h-8 text-amber-accent mx-auto mb-4" />
              <h4 className="mb-2">Security & Research</h4>
              <p className="text-sm text-muted-foreground">
                Blockchain security auditing, system vulnerability assessment, and academic research
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}