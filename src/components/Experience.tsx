import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, Shield, Code, Calendar, Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      period: "July 2024 - Present",
      role: "Software Developer",
      company: "NatWest Group",
      type: "Backend",
      icon: Building2,
      color: "text-primary",
      borderColor: "border-primary/30",
      achievements: [
        "Architecting and building a new ISV Signature Matching microservice from the ground up, owning the complete development lifecycle.",
        "Developed and optimized core backend services, delivering a 40% reduction in average API response time.",
        "Implemented key FastAPI endpoints that provide critical edit and update functionalities to end-users."
      ],
      technologies: ["Python", "FastAPI", "Microservices", "Performance Tuning", "Locust", "API Design"]
    },
    {
      period: "July 2023 - Present",
      role: "Independent Smart-Contract Auditor",
      company: "Freelance",
      type: "Security",
      icon: Shield,
      color: "text-accent",
      borderColor: "border-accent/30",
      achievements: [
        "Performed audits for Zus Network, Empower Coin, Moonvera Solutions, identifying and resolving 15+ critical vulnerabilities.",
        "Acted as Lead Auditor, ensuring secure, gas-optimized solutions by integrating Slither, Foundry, and Solidity Metrics.",
        "Implemented gas optimizations that yielded 60% savings on average per major contract.",
        "Ranked among the Top 300 auditors globally on Code4rena (345) and Sherlock (846)."
      ],
      technologies: ["Solidity", "Slither", "Foundry", "Hardhat", "Gas Optimization", "Fuzz Testing", "Code4rena"]
    },
    {
      period: "Apr 2023 - Jun 2023",
      role: "Smart Contract Auditor (Consultant)",
      company: "Zus Network",
      type: "Security & Testing",
      icon: Code,
      color: "text-amber-accent",
      borderColor: "border-amber-accent/30",
      achievements: [
        "Audited core smart contracts, identified and resolved security vulnerabilities, and implemented gas optimizations.",
        "Designed and implemented a comprehensive test suite in Go to automate scenario testing and continuous integration.",
        "Collaborated with the development team to establish best practices for secure coding."
      ],
      technologies: ["Go", "Solidity", "Security Auditing", "CI/CD", "Vulnerability Monitoring"]
    },
    {
      period: "Jan 2022 - Aug 2022",
      role: "Blockchain Developer",
      company: "Chatbuck",
      type: "Web3",
      icon: Briefcase,
      color: "text-orange-400",
      borderColor: "border-orange-400/30",
      achievements: [
        "Developed a Layer-2 messaging solution with ReactJS + Web3 integrations for seamless on-chain chat.",
        "Built and deployed an ERC-20 token for payment processing on the Polygon network."
      ],
      technologies: ["ReactJS", "Web3", "ERC-20", "Polygon", "Layer-2"]
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
              Work Experience
            </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My experience spans enterprise backend systems, decentralized application development, and high-stakes security auditing.
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
                        <div className={`absolute inset-1 rounded-full ${exp.color.replace('text-', 'bg-')}`}></div>
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
                                    <div className={`w-1.5 h-1.5 rounded-full mt-2 ${exp.color.replace('text-', 'bg-')}`}></div>
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