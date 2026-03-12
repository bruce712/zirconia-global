/*
 * Swiss Industrial Design - Ceramic Structural Parts Page
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { IMAGES } from "@/lib/images";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const partTypes = [
  { name: "Ceramic Rings", desc: "Seal rings, bearing rings, and wear-resistant rings for pumps and valves." },
  { name: "Ceramic Tubes", desc: "Precision tubes for chemical processing, insulation, and structural support." },
  { name: "Ceramic Bushings", desc: "High-performance bushings for rotating equipment and linear guides." },
  { name: "Ceramic Discs", desc: "Flat discs for valve seats, grinding plates, and substrate applications." },
  { name: "Ceramic Nozzles", desc: "Wear-resistant nozzles for sandblasting, spraying, and fluid control." },
  { name: "Custom Components", desc: "Tailored to your specifications with CNC machining and precision grinding." },
];

const specs = [
  { property: "Material", value: "95% ZrO₂ (Y-TZP)" },
  { property: "Density", value: ">6.0 g/cm³" },
  { property: "Flexural Strength", value: ">1000 MPa" },
  { property: "Fracture Toughness", value: ">10 MPa·m^½" },
  { property: "Hardness (HV10)", value: "1250" },
  { property: "Thermal Conductivity", value: "~2 W/(m·K)" },
  { property: "Max Service Temp", value: "800°C" },
  { property: "Surface Finish", value: "Ra 0.02 – 0.8 μm" },
  { property: "Dimensional Tolerance", value: "±0.01 mm" },
];

export default function CeramicParts() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-titanium-white border-b border-graphite-100">
        <div className="container py-3 flex items-center gap-2 text-xs text-graphite-400">
          <Link href="/" className="hover:text-navy transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/products" className="hover:text-navy transition-colors">Products</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-navy font-medium">Ceramic Structural Parts</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="rounded overflow-hidden">
              <img src={IMAGES.ceramicParts} alt="Zirconia Ceramic Structural Parts" loading="lazy" className="w-full aspect-[4/3] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <span className="text-xs text-industrial-orange font-semibold uppercase tracking-widest">Structural Components</span>
              <h1 className="font-heading text-3xl lg:text-4xl font-bold text-navy mt-2 mb-4 leading-tight">
                Zirconia Ceramic Structural Parts
              </h1>
              <p className="text-graphite-400 leading-relaxed mb-6">
                Precision-engineered zirconia ceramic components for demanding mechanical, chemical, and thermal 
                applications. We offer standard and custom shapes with tight dimensional tolerances, 
                exceptional surface finish, and superior mechanical properties.
              </p>
              <ul className="space-y-2 mb-6">
                {["Custom shapes per your drawings", "CNC precision machining ±0.01mm", "Small batch to mass production", "Complete material certification"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-graphite-500">
                    <CheckCircle className="w-4 h-4 text-industrial-orange shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-industrial-orange text-white font-semibold text-sm rounded hover:bg-industrial-orange-hover transition-colors">
                  Request Custom Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border border-navy/20 text-navy font-semibold text-sm rounded hover:bg-navy/5 transition-colors">
                  Send Your Drawing
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Part Types */}
      <section className="py-16 bg-titanium-white">
        <div className="container">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-8">Available Part Types</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {partTypes.map((part, i) => (
              <motion.div key={part.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="bg-white p-6 rounded border border-graphite-100 hover:border-industrial-orange/30 transition-colors">
                <h3 className="font-heading font-semibold text-navy mb-2">{part.name}</h3>
                <p className="text-sm text-graphite-400">{part.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Table */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-8">Material Properties</h2>
          <div className="bg-white rounded border border-graphite-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-6 py-3 font-semibold">Property</th>
                  <th className="text-left px-6 py-3 font-semibold">Value</th>
                </tr>
              </thead>
              <tbody>
                {specs.map((spec, i) => (
                  <tr key={spec.property} className={i % 2 === 0 ? "bg-white" : "bg-titanium-white"}>
                    <td className="px-6 py-3 text-graphite-500 font-medium">{spec.property}</td>
                    <td className="px-6 py-3 text-navy font-semibold">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="container text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-4">Have a Custom Requirement?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Send us your drawings or specifications. Our engineering team will provide a detailed quote within 24 hours.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-industrial-orange text-white font-semibold text-sm rounded hover:bg-industrial-orange-hover transition-colors">
            Send Your Requirements <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
