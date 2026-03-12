/*
 * Swiss Industrial Design - Header/Navigation
 * Deep navy background, clean typography, asymmetric layout
 * Sticky header with dropdown menus for product categories
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const productLinks = [
  { label: "95% YSZ Zirconia Beads", href: "/products/zirconia-beads" },
  { label: "Zirconia Ceramic Structural Parts", href: "/products/ceramic-parts" },
  { label: "Size Selection Guide", href: "/products/size-guide" },
  { label: "Packaging & Delivery", href: "/products/packaging" },
];

const applicationLinks = [
  { label: "Coatings & Inks", href: "/applications/coatings-inks" },
  { label: "Food & Health Powder", href: "/applications/food-health" },
  { label: "Chemical & Pharmaceutical", href: "/applications/chemical-pharma" },
  { label: "Battery Materials", href: "/applications/battery" },
  { label: "Electronics & Semiconductor", href: "/applications/electronics" },
  { label: "Ceramic Manufacturing", href: "/applications/ceramics" },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products", children: productLinks },
  { label: "Applications", href: "/applications", children: applicationLinks },
  { label: "Quality & Factory", href: "/quality" },
  { label: "Case Studies", href: "/cases" },
  { label: "Technical Support", href: "/technical" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy text-white/80 text-sm hidden lg:block">
        <div className="container flex justify-between items-center py-2">
          <div className="flex items-center gap-6">
            <a href="mailto:18100601781@163.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" />
              18100601781@163.com
            </a>
            <a href="tel:+8618100601781" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
              +86 18100601781
            </a>
          </div>
          <div className="flex items-center gap-4 text-xs tracking-wide uppercase">
            <span>ISO 9001 Certified</span>
            <span className="w-px h-3 bg-white/30" />
            <span>SGS Verified</span>
            <span className="w-px h-3 bg-white/30" />
            <span>Free Sample Available</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-graphite-100"
            : "bg-white border-b border-graphite-100"
        }`}
      >
        <div className="container flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 bg-navy rounded flex items-center justify-center">
              <span className="text-white font-heading font-bold text-lg leading-none">Z</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-navy text-lg leading-tight tracking-tight">ZircoMax</span>
              <span className="text-[10px] text-graphite-400 tracking-widest uppercase leading-none">Precision Ceramics</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-sm ${
                    location === item.href || (item.children && location.startsWith(item.href))
                      ? "text-navy bg-navy/5"
                      : "text-graphite-500 hover:text-navy hover:bg-navy/5"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-0.5 w-64 bg-white rounded shadow-lg border border-graphite-100 py-2 z-50"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-graphite-500 hover:text-navy hover:bg-navy/5 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-industrial-orange text-white text-sm font-semibold rounded hover:bg-industrial-orange-hover transition-colors"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-navy"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden border-t border-graphite-100 bg-white"
            >
              <div className="container py-4 space-y-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="block px-3 py-2.5 text-sm font-medium text-graphite-600 hover:text-navy hover:bg-navy/5 rounded"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-4 space-y-0.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-graphite-400 hover:text-navy"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  href="/contact"
                  className="block mx-3 mt-3 text-center px-5 py-2.5 bg-industrial-orange text-white text-sm font-semibold rounded hover:bg-industrial-orange-hover transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
