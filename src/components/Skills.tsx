import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Shield, Code, Server, Zap, Database, GitMerge } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-primary",
      borderColor: "border-primary/30",
      skills: [
        { name: "Python", level: "Expert" },
        { name: "Golang", level: "Advanced" },
        { name: "Rust", level: "Advanced" },
        { name: "Java", level: "Advanced" },
        { name: "SQL", level: "Advanced" },
        { name: "Solidity", level: "Expert" },
        { name: "JavaScript/TS", level: "Advanced" },
      ]
    },
    {
      title: "Frameworks & APIs",
      icon: Zap,
      color: "text-accent",
      borderColor: "border-accent/30",
      skills: [
        { name: "FastAPI", level: "Expert" },
        { name: "Flask", level: "Advanced" },
        { name: "Spring", level: "Intermediate" },
        { name: "REST APIs", level: "Expert" },
        { name: "SOAP", level: "Intermediate" },
        { name: "Pytest", level: "Advanced" },
        { name: "Pandas/Numpy", level: "Advanced" },
        { name: "ReactJS", level: "Advanced" },
      ]
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      color: "text-amber-accent",
      borderColor: "border-amber-accent/30",
      skills: [
        { name: "MongoDB", level: "Expert" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MySQL", level: "Advanced" },
        { name: "NoSQL", level: "Advanced" },
        { name: "Elasticsearch", level: "Intermediate" },
        { name: "Kafka", level: "Advanced" },
        { name: "GCP", level: "Advanced" },
        { name: "Azure", level: "Intermediate" },
      ]
    },
    {
      title: "DevOps & Architecture",
      icon: GitMerge,
      color: "text-orange-400",
      borderColor: "border-orange-400/30",
      skills: [
        { name: "Docker", level: "Advanced" },
        { name: "Kubernetes", level: "Advanced" },
        { name: "CI/CD", level: "Expert" },
        { name: "Jenkins", level: "Intermediate" },
        { name: "Containerization", level: "Advanced" },
        { name: "MVC", level: "Advanced" },
        { name: "Agile", level: "Advanced" },
        { name: "Git", level: "Expert" },
      ]
    },
    {
      title: "Core Competencies",
      icon: Shield,
      color: "text-red-400",
      borderColor: "border-red-400/30",
      skills: [
        { name: "System Design", level: "Expert" },
        { name: "Performance Tuning", level: "Expert" },
        { name: "Distributed Systems", level: "Advanced" },
        { name: "Code Auditing", level: "Advanced" },
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
              A comprehensive overview of my technical skills in backend development, cloud technologies, and system architecture.
            </p>
          </div>

          {/* Skills Grid */}
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