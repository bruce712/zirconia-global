/*
 * Swiss Industrial Design - Footer
 * Dark navy background, structured grid layout, clear information hierarchy
 * Includes Privacy Policy, Terms links and Legal Entity for Google Ads compliance
 */
import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  products: [
    { label: "95% YSZ Zirconia Beads", href: "/products/zirconia-beads" },
    { label: "Ceramic Structural Parts", href: "/products/ceramic-parts" },
    { label: "Size Selection Guide", href: "/products/size-guide" },
    { label: "Packaging & Delivery", href: "/products/packaging" },
  ],
  applications: [
    { label: "Paint, Ink & Coatings", href: "/applications/paint-ink-coatings" },
    { label: "Ceramics & Electronic Ceramics", href: "/applications/ceramics-electronic-ceramics" },
    { label: "Battery Materials", href: "/applications/battery-materials" },
    { label: "Minerals & Chemicals", href: "/applications/minerals-chemicals" },
    { label: "All Applications", href: "/applications" },
  ],
  company: [
    { label: "Quality & Factory", href: "/quality" },
    { label: "Case Studies", href: "/cases" },
    { label: "Technical Support", href: "/technical" },
    { label: "FAQ", href: "/technical#faq" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl font-bold text-white mb-2">
              Ready to Optimize Your Grinding Process?
            </h3>
            <p className="text-white/60 text-sm max-w-lg">
              Contact our technical team for personalized recommendations and free sample evaluation.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 bg-industrial-orange text-white font-semibold text-sm rounded hover:bg-industrial-orange-hover transition-colors whitespace-nowrap"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-white/30 text-white font-semibold text-sm rounded hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              Get Free Sample
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-white/10 rounded flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg leading-none">K</span>
              </div>
              <div>
                <span className="font-heading font-bold text-white text-lg">Kerec Zirconia Beads</span>
                <span className="block text-[10px] text-white/40 tracking-widest uppercase">Premium Grinding Media</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4 max-w-sm">
              Leading manufacturer of premium 95% YSZ zirconia beads and ceramic structural parts. 
              Serving global industries with precision grinding media since 2008.
            </p>
            <p className="text-white/40 text-xs leading-relaxed mb-6 max-w-sm">
              <span className="font-medium text-white/60">Legal Entity:</span> Nanjing Kerec Equipment Co., Ltd. (南京科睿才设备有限公司)
            </p>
            <div className="space-y-3 text-sm">
              <a href="mailto:18100601781@163.com" className="flex items-center gap-2.5 text-white/60 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-industrial-orange" />
                18100601781@163.com
              </a>
              <a href="tel:+8618100601781" className="flex items-center gap-2.5 text-white/60 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-industrial-orange" />
                +86 18100601781
              </a>
              <div className="flex items-start gap-2.5 text-white/60">
                <MapPin className="w-4 h-4 text-industrial-orange shrink-0 mt-0.5" />
                <span>Building A1, Jingfeng Lechuang Center, Pukou District, Nanjing, Jiangsu, China</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2.5">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">Applications</h4>
            <ul className="space-y-2.5">
              {footerLinks.applications.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Nanjing Kerec Equipment Co., Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="w-px h-3 bg-white/20" />
            <Link href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <span className="w-px h-3 bg-white/20" />
            <span>ISO 9001:2015</span>
            <span className="w-px h-3 bg-white/20" />
            <span>SGS Certified</span>
            <span className="w-px h-3 bg-white/20" />
            <span>RoHS Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
