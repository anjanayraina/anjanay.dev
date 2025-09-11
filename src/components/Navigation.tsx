import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Home, Code, FileText, Mail } from "lucide-react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/projects', label: 'Projects', icon: Code },
    { href: '/resume', label: 'Resume', icon: FileText },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
      <>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3" onClick={closeMobileMenu}>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-background font-mono text-sm">AR</span>
                </div>
                <span className="font-mono text-lg">Anjanay Raina</span>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                      <Button key={item.href} asChild variant="ghost" size="sm"
                              className={`transition-all duration-300 ${
                                  isActive
                                      ? 'bg-primary/10 text-primary'
                                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                              }`}
                      >
                        <Link to={item.href}>
                          <item.icon className="w-4 h-4 mr-2" />
                          {item.label}
                        </Link>
                      </Button>
                  );
                })}
              </div>

              {/* Mobile Menu Button */}
              <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
            <div className="fixed inset-0 z-40 md:hidden">
              <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" onClick={closeMobileMenu} />
              <div className="absolute top-20 left-0 right-0 bg-card border-b border-border shadow-xl">
                <div className="container mx-auto px-6 py-6 space-y-2">
                  {navItems.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                        <Button key={item.href} asChild variant="ghost" size="lg"
                                className={`w-full justify-start ${
                                    isActive
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                                }`}
                        >
                          <Link to={item.href} onClick={closeMobileMenu}>
                            <item.icon className="w-4 h-4 mr-3" />
                            {item.label}
                          </Link>
                        </Button>
                    );
                  })}
                </div>
              </div>
            </div>
        )}
      </>
  );
}