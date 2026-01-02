import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-xl shadow-xl shadow-[#800000]/5" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection("home")} className="group flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#800000] to-[#A64253] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-[#800000] to-[#A64253] p-2 rounded-full">
                <Sparkles className="size-5 text-[#F2E8C6]" />
              </div>
            </div>
            <span className="text-xl tracking-tight">
              <span className="font-bold bg-gradient-to-r from-[#800000] to-[#A64253] bg-clip-text text-transparent">Your Future Analyst</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className="relative px-5 py-2 text-[#2D1B1B] hover:text-[#800000] transition-colors group">
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#800000] to-[#A64253] group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-xl bg-gradient-to-br from-[#800000] to-[#A64253] text-[#F2E8C6] hover:shadow-lg transition-all">
            {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-2 bg-white/95 backdrop-blur-xl rounded-2xl px-4 shadow-xl border border-[#800000]/10">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className="block w-full text-left text-[#2D1B1B] hover:text-[#800000] hover:bg-[#F2E8C6]/50 transition-all py-3 px-4 rounded-xl">
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
