import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Shield, Code, Server, Zap, Database, GitMerge } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "text-primary",
      borderColor: "border-primary/30",
      skills: [
        { name: "Python", level: "Expert" },
        { name: "Solidity", level: "Expert" },
        { name: "Rust", level: "Advanced" },
        { name: "Go (Golang)", level: "Advanced" },
        { name: "JavaScript/TS", level: "Advanced" },
        { name: "SQL", level: "Advanced" },
        { name: "Java", level: "Intermediate" },
        { name: "Yul", level: "Intermediate" },
      ]
    },
    {
      title: "Backend & Systems",
      icon: Server,
      color: "text-accent",
      borderColor: "border-accent/30",
      skills: [
        { name: "System Design", level: "Expert" },
        { name: "Microservices", level: "Expert" },
        { name: "FastAPI", level: "Expert" },
        { name: "Performance Tuning", level: "Advanced" },
        { name: "Docker", level: "Advanced" },
        { name: "Kubernetes", level: "Intermediate" },
        { name: "ReactJS", level: "Advanced" },
        { name: "Flask", level: "Advanced" },
      ]
    },
    {
      title: "Databases & APIs",
      icon: Database,
      color: "text-amber-accent",
      borderColor: "border-amber-accent/30",
      skills: [
        { name: "MongoDB", level: "Expert" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "Redis", level: "Advanced" },
        { name: "Kafka", level: "Advanced" },
        { name: "REST API Design", level: "Expert" },
        { name: "GraphQL", level: "Intermediate" },
        { name: "OracleDB", level: "Intermediate" },
        { name: "Data Pipelines", level: "Advanced" },
      ]
    },
    {
      title: "Blockchain & Web3",
      icon: Shield,
      color: "text-orange-400",
      borderColor: "border-orange-400/30",
      skills: [
        { name: "Smart Contract Auditing", level: "Expert" },
        { name: "Gas Optimization", level: "Advanced" },
        { name: "DeFi Protocols", level: "Advanced" },
        { name: "EIP/ERC Standards", level: "Expert" },
        { name: "Anchor Framework", level: "Advanced" },
        { name: "Chainlink", level: "Advanced" },
        { name: "Ethers.js", level: "Advanced" },
        { name: "Hyperledger Fabric", level: "Intermediate" },
      ]
    },
    {
      title: "DevOps & Testing",
      icon: GitMerge,
      color: "text-red-400",
      borderColor: "border-red-400/30",
      skills: [
        { name: "CI/CD Pipelines", level: "Advanced" },
        { name: "GitHub Actions", level: "Advanced" },
        { name: "Foundry", level: "Expert" },
        { name: "Hardhat", level: "Advanced" },
        { name: "Slither", level: "Expert" },
        { name: "Pytest", level: "Advanced" },
        { name: "Locust (Load Testing)", level: "Intermediate" },
        { name: "Fuzz Testing", level: "Advanced" },
      ]
    },
    {
      title: "Platforms & Tools",
      icon: Zap,
      color: "text-purple-400",
      borderColor: "border-purple-400/30",
      skills: [
        { name: "Code4rena", level: "Expert" },
        { name: "Sherlock", level: "Advanced" },
        { name: "GCP", level: "Advanced" },
        { name: "Git & GitHub", level: "Expert" },
        { name: "Postman", level: "Advanced" },
        { name: "Remix", level: "Advanced" },
        { name: "Metamask", level: "Expert" },
        { name: "Tableau", level: "Intermediate" },
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
              A comprehensive skillset covering smart contract security, backend development, and blockchain protocols.
            </p>
          </div>

          {/* Skills Grid - Updated to 3 columns on large screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                  <Card key={categoryIndex} className={`p-8 bg-card border ${category.borderColor} hover:border-opacity-60 transition-all duration-300 flex flex-col`}>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className={`p-3 rounded-lg bg-secondary ${category.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl mb-0">{category.title}</h3>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-grow">
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
        </div>
      </section>
  );
}