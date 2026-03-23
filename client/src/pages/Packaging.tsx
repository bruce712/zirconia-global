/*
 * Swiss Industrial Design - Packaging & Delivery Page
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Package, Truck, Globe, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import QuickSupplierFacts from "@/components/QuickSupplierFacts";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const packagingOptions = [
  { weight: "5 kg", type: "PE bag + carton", use: "Sample orders, small batch testing" },
  { weight: "10 kg", type: "PE bag + carton", use: "Standard orders, regular production" },
  { weight: "25 kg", type: "PE bag + drum/pallet", use: "Bulk orders, industrial production" },
  { weight: "Custom", type: "Per customer specification", use: "OEM/private label requirements" },
];

export default function Packaging() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-titanium-white border-b border-graphite-100">
        <div className="container py-3 flex items-center gap-2 text-xs text-graphite-400">
          <Link href="/" className="hover:text-navy transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/products" className="hover:text-navy transition-colors">Products</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-navy font-medium">Packaging & Delivery</span>
        </div>
      </div>

      <section className="py-12 lg:py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="max-w-3xl mb-14">
            <span className="text-xs text-industrial-orange font-semibold uppercase tracking-widest">Logistics</span>
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-navy mt-2 mb-4">Packaging & Delivery</h1>
            <p className="text-graphite-400 leading-relaxed">
              We ensure your zirconia products arrive safely with professional packaging and reliable global shipping solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Supplier Facts */}
      <QuickSupplierFacts />

      {/* Features */}
      <section className="py-12 lg:py-20">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {[
              { icon: Package, title: "Secure Packaging", desc: "Multi-layer protection prevents damage during transit" },
              { icon: Truck, title: "Fast Shipping", desc: "Express delivery available for urgent orders" },
              { icon: Globe, title: "Global Reach", desc: "Shipping to 50+ countries worldwide" },
              { icon: Shield, title: "Insured Cargo", desc: "Full insurance coverage for all shipments" },
            ].map((feat, i) => (
              <motion.div key={feat.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} variants={fadeUp}
                className="bg-white p-6 rounded border border-graphite-100 text-center">
                <feat.icon className="w-8 h-8 text-industrial-orange mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-navy mb-1">{feat.title}</h3>
                <p className="text-sm text-graphite-400">{feat.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Packaging Table */}
          <h2 className="font-heading text-2xl font-bold text-navy mb-6">Packaging Options</h2>
          <div className="bg-white rounded border border-graphite-100 overflow-hidden mb-14">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-6 py-3 font-semibold">Weight</th>
                  <th className="text-left px-6 py-3 font-semibold">Packaging Type</th>
                  <th className="text-left px-6 py-3 font-semibold">Recommended Use</th>
                </tr>
              </thead>
              <tbody>
                {packagingOptions.map((opt, i) => (
                  <tr key={opt.weight} className={i % 2 === 0 ? "bg-white" : "bg-titanium-white"}>
                    <td className="px-6 py-3 text-industrial-orange font-semibold">{opt.weight}</td>
                    <td className="px-6 py-3 text-graphite-500">{opt.type}</td>
                    <td className="px-6 py-3 text-graphite-400">{opt.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Shipping Info */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-titanium-white p-8 rounded">
              <h3 className="font-heading text-xl font-bold text-navy mb-4">Shipping Methods</h3>
              <ul className="space-y-3 text-sm text-graphite-500">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-industrial-orange rounded-full mt-2 shrink-0" />Express Air Freight (3-5 business days)</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-industrial-orange rounded-full mt-2 shrink-0" />Standard Air Freight (5-10 business days)</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-industrial-orange rounded-full mt-2 shrink-0" />Sea Freight (15-35 business days)</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-industrial-orange rounded-full mt-2 shrink-0" />Rail Freight to Europe (18-25 business days)</li>
              </ul>
            </div>
            <div className="bg-titanium-white p-8 rounded">
              <h3 className="font-heading text-xl font-bold text-navy mb-4">Trade Terms</h3>
              <ul className="space-y-3 text-sm text-graphite-500">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-industrial-orange rounded-full mt-2 shrink-0" />FOB, CIF, CFR, DDP available</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-industrial-orange rounded-full mt-2 shrink-0" />Payment: T/T, L/C, Western Union</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-industrial-orange rounded-full mt-2 shrink-0" />Sample orders: 100% prepayment</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-industrial-orange rounded-full mt-2 shrink-0" />Bulk orders: 30% deposit, 70% before shipment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-navy">
        <div className="container text-center">
          <h2 className="font-heading text-2xl font-bold text-white mb-4">Ready to Place an Order?</h2>
          <p className="text-white/60 mb-6">Contact us for a detailed shipping quote based on your location and order quantity.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-industrial-orange text-white font-semibold text-sm rounded hover:bg-industrial-orange-hover transition-colors">
            Get Shipping Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
