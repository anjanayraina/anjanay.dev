import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, Shield, Code, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      period: "July 2024 - Present",
      role: "Backend Developer",
      company: "NatWest Group",
      type: "Backend",
      icon: Building2,
      color: "text-primary",
      borderColor: "border-primary/30",
      achievements: [
        "Currently architecting and building ISV Signature Matching microservice from scratch",
        "Implemented fault-tolerant recovery mechanisms ensuring zero state loss during service interruptions",
        "Led complex business logic modules development (Rebate, Negative Ageing, Contra)",
        "Conducted code reviews and mentored junior developers on modern best practices",
        "Optimized API endpoints using Python's multithreading, decreasing response times by 3x"
      ],
      technologies: ["Python", "Microservices", "Fault Tolerance", "API Design", "Code Reviews", "Performance Optimization"]
    },
    {
      period: "March 2024 - July 2024",
      role: "Backend Consultant",
      company: "Zus Network",
      type: "Backend",
      icon: Code,
      color: "text-accent",
      borderColor: "border-accent/30",
      achievements: [
        "Designed and implemented comprehensive test suite in Go for backend services",
        "Automated scenario testing, regression checks, and continuous integration",
        "Audited Solidity codebase identifying 5+ critical vulnerabilities",
        "Mentored development team on secure coding best practices",
        "Enhanced core backend services reliability and performance"
      ],
      technologies: ["Go", "Test Automation", "Solidity Auditing", "CI/CD", "Security Best Practices"]
    },
    {
      period: "January 2023 - July 2023",
      role: "Student Researcher",
      company: "DLT Labs",
      type: "Research",
      icon: Shield,
      color: "text-amber-accent",
      borderColor: "border-amber-accent/30",
      achievements: [
        "Researched and developed Two-Layered Blockchain Architecture using Hyperledger Fabric",
        "Achieved 100x faster transaction resolution time compared to traditional methods",
        "Authored and submitted research paper to IEEE ANTS detailing system guarantees",
        "Implemented proof-of-concept reducing mobile theft incidents through blockchain",
        "Presented findings at academic conferences and industry events"
      ],
      technologies: ["Hyperledger Fabric", "Blockchain Architecture", "Research", "IEEE Publication", "Performance Analysis"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-primary text-primary mb-6 font-mono">
            Professional Journey
          </Badge>
          <h2 className="font-mono mb-6">
            <span className="text-4xl md:text-6xl bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From enterprise banking systems to blockchain research, delivering scalable backend solutions and security expertise
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-amber-accent hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full bg-background border-2 ${exp.borderColor} hidden md:block`}>
                    <div className={`absolute inset-1 rounded-full ${exp.color === 'text-accent' ? 'bg-accent' : exp.color === 'text-primary' ? 'bg-primary' : 'bg-amber-accent'}`}></div>
                  </div>

                  {/* Experience Card */}
                  <div className="md:ml-16">
                    <Card className={`p-8 bg-card border ${exp.borderColor} hover:border-opacity-60 transition-all duration-300`}>
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                          <div className={`p-3 rounded-lg bg-secondary ${exp.color}`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-xl mb-1">{exp.role}</h3>
                            <p className="text-muted-foreground mb-2">{exp.company}</p>
                            <Badge variant="outline" className={`text-xs ${exp.color} ${exp.borderColor}`}>
                              {exp.type}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="font-mono text-sm">{exp.period}</span>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="mb-4 text-foreground">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start space-x-2">
                              <div className={`w-1.5 h-1.5 rounded-full mt-2 ${exp.color === 'text-accent' ? 'bg-accent' : exp.color === 'text-primary' ? 'bg-primary' : 'bg-amber-accent'}`}></div>
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="mb-3 text-foreground">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="secondary" 
                              className="text-xs bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}