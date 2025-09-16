import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Mail, MessageCircle, Calendar, Shield, Github, ExternalLink, Server } from "lucide-react";

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "anjanayraina@gmail.com",
      action: "Send Email",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: MessageCircle,
      title: "Telegram",
      value: "@stryder1496",
      action: "Message on Discord",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Calendar,
      title: "Schedule Call",
      description: "Book a consultation",
      value: "30-60 min sessions available",
      action: "Book Meeting",
      color: "text-amber-accent",
      bgColor: "bg-amber-accent/10"
    }
  ];

  const services = [
    "Backend System Architecture & Development",
    "Microservices Design & Implementation",
    "API Development & Performance Optimization",
    "Smart Contract Security Audits",
    "Data Pipeline & Processing Systems",
    "Enterprise Integration & Consulting"
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-accent text-accent mb-6 font-mono cyber-glow">
            Let's Connect
          </Badge>
          <h2 className="font-mono mb-6">
            <span className="text-4xl md:text-6xl bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              Need a Backend Engineer or Security Expert?
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Ready to build scalable backend systems or secure your protocol? Let's discuss how I can help optimize your infrastructure and protect your project.
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
                      <div className={`p-3 rounded-lg ${method.bgColor} ${method.color} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-1">{method.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                        <p className="text-sm font-mono text-foreground mb-3">{method.value}</p>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className={`${method.color} border-current hover:bg-current hover:text-background`}
                        >
                          {method.action}
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
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                  <ExternalLink className="w-3 h-3 ml-2" />
                </Button>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <Shield className="w-4 h-4 mr-2" />
                  Code4rena
                  <ExternalLink className="w-3 h-3 ml-2" />
                </Button>
                <Button variant="outline" className="border-amber-accent text-amber-accent hover:bg-amber-accent hover:text-background">
                  <Shield className="w-4 h-4 mr-2" />
                  Sherlock
                  <ExternalLink className="w-3 h-3 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Services & Expertise */}
          <div>
            <h3 className="text-2xl mb-8 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-accent to-amber-accent rounded-full mr-3"></div>
              Audit Services
            </h3>
            
            <Card className="p-8 bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 cyber-glow">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/20">
                  <Server className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg">Engineering Services</h4>
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

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 cyber-glow">
                Discuss Your Project
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
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 cyber-glow">
              <Mail className="w-4 h-4 mr-2" />
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}