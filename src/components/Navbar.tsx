import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About Us" },
    { href: "/global", label: "Global Reach" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl rounded-sm">
              JK
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight text-primary">JK TRADING</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground leading-tight">Global Auto Parts</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  location === link.href ? "text-accent" : "text-foreground/80"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-5 py-2.5 rounded-sm text-sm font-bold transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 py-4 space-y-4">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "block text-lg font-medium transition-colors",
                location === link.href ? "text-accent" : "text-foreground/80"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-border">
            <Link 
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-accent text-accent-foreground py-3 rounded-sm font-bold"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}