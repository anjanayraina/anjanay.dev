import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Mail, MessageCircle, Calendar, Shield, Github, ExternalLink, Server } from "lucide-react";

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Direct communication for audit inquiries",
      value: "anjanayraina326@gmail.com",
      action: "Send Email",
      href: "mailto:anjanayraina326@gmail.com",
      style: "text-primary border-primary hover:bg-primary hover:text-primary-foreground",
      glow: "cyber-glow"
    },
    {
      icon: MessageCircle,
      title: "Discord",
      description: "Quick discussions and community engagement",
      value: "@stryder1496",
      action: "Message on Discord",
      href: "https://discord.com/",
      style: "text-accent border-accent hover:bg-accent hover:text-accent-foreground",
      glow: "secure-glow"
    },
    {
      icon: Calendar,
      title: "Schedule Call",
      description: "Book a consultation for complex projects",
      value: "30-60 min sessions available",
      action: "Book Meeting",
      href: "https://calendly.com/anjanayraina326/30min",
      style: "text-amber-accent border-amber-accent ",
      glow: "orange-glow"
    }
  ];

  const services = [
    "Backend System Architecture & Development",
    "Microservices Design & Implementation",
    "API Development & Performance Optimization",
    "Security Audits and Mitigation Reviews",
    "Data Pipeline & Processing Systems",
    "Enterprise Integration & Consulting"
  ];

  return (
      <section className="py-24 px-6 bg-gradient-to-br from-background via-secondary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-accent text-accent mb-6 font-mono secure-glow">
              Let's Connect
            </Badge>
            <h2 className="font-mono mb-6">
            <span className="text-4xl md:text-6xl bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              Need a Backend Engineer or Security Expert?
            </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Ready to build scalable backend systems or secure your DeFi protocol? Let's discuss how I can help optimize your infrastructure and protect your users.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-muted-foreground mb-12">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span>Available for new projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Typical response: 24 hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-accent rounded-full"></div>
                <span>Emergency audits available</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div>
              <h3 className="text-2xl mb-8 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full mr-3"></div>
                Get in Touch
              </h3>

              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                      <Card key={index} className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 group">
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-lg ${method.style.split(' ')[0].replace('text-', 'bg-')}/10 ${method.style.split(' ')[0]} group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <h4 className="mb-1">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                            <p className="text-sm font-mono text-foreground mb-3">{method.value}</p>
                            <Button
                                asChild
                                variant="outline"
                                size="sm"
                                className={`${method.style} transition-all duration-300`}
                            >
                              <a href={method.href} target="_blank" rel="noopener noreferrer">
                                {method.action}
                              </a>
                            </Button>
                          </div>
                        </div>
                      </Card>
                  );
                })}
              </div>

              {/* Professional Links */}
              <div className="mt-8">
                <h4 className="mb-4">Professional Profiles</h4>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Shield className="w-4 h-4 mr-2" />
                      Code4rena
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-amber-accent text-amber-accent hover:bg-amber-accent hover:text-background">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Shield className="w-4 h-4 mr-2" />
                      Sherlock
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Services & Expertise */}
            <div>
              <h3 className="text-2xl mb-8 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-accent to-amber-accent rounded-full mr-3"></div>
                Services Offered
              </h3>

              <Card className="p-8 bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 cyber-glow">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <Server className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg">Engineering & Security</h4>
                    <p className="text-sm text-muted-foreground">Backend development and security consulting</p>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm">{service}</span>
                      </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                  <div className="p-4 rounded-lg bg-secondary/30">
                    <div className="text-lg font-mono text-primary mb-1">2+ Years</div>
                    <div className="text-xs text-muted-foreground">Enterprise experience</div>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/30">
                    <div className="text-lg font-mono text-accent mb-1">3x Faster</div>
                    <div className="text-xs text-muted-foreground">Performance gains</div>
                  </div>
                </div>

                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 cyber-glow">
                  <a href="mailto:anjanayraina326@gmail.com">Discuss Your Project</a>
                </Button>
              </Card>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-amber-accent/5 border border-primary/10">
            <h4 className="text-xl mb-4">Ready to Build Something Great?</h4>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              From enterprise backend systems to blockchain security. Let's create scalable, secure solutions together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 cyber-glow">
                <a href="mailto:anjanayraina326@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Start Your Project
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <a href="https://calendly.com/anjanayraina326/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
  );
}