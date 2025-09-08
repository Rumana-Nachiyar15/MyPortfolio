import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Code" },
  { href: "#skills", label: "Technical Arsenal" },
  { href: "#experience", label: "Experience" },
  { href: "#innovation", label: "Innovation" },
  { href: "#beyond", label: "Beyond" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Get In Touch" },
];

const sectionIds = navItems.map(item => item.href.slice(1));

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(sectionIds);

  const handleNavClick = (href: string) => {
    const targetId = href.slice(1);
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold gradient-text" data-testid="logo">
              Rumana Nachiyar
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`transition-colors px-3 py-2 text-sm font-medium ${
                    activeSection === item.href.slice(1)
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                  data-testid={`nav-${item.href.slice(1)}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-muted-foreground hover:text-primary"
              data-testid="mobile-menu-button"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`mobile-menu fixed top-16 right-0 w-64 h-full bg-card border-l border-border md:hidden ${
          isMobileMenuOpen ? 'open' : ''
        }`}
        data-testid="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`block w-full text-left transition-colors px-3 py-2 text-base font-medium ${
                activeSection === item.href.slice(1)
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
              data-testid={`mobile-nav-${item.href.slice(1)}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
