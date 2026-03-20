/*
 * Swiss Industrial Design - Case Studies & Comparison Page
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, TrendingUp, CheckCircle, XCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const caseStudies = [
  {
    title: "European Automotive Coatings Manufacturer",
    industry: "Coatings & Inks",
    challenge: "Experiencing high media wear and color contamination in their metallic automotive paint production line, leading to frequent batch rejections.",
    solution: "Switched from glass beads to Kerec 0.4mm 95% YSZ beads in their horizontal bead mill.",
    results: [
      { metric: "Grinding Time", before: "4.5 hours", after: "3.1 hours", improvement: "-31%" },
      { metric: "Media Wear", before: "0.08%/hr", after: "0.003%/hr", improvement: "-96%" },
      { metric: "Batch Rejection", before: "8%", after: "0.5%", improvement: "-94%" },
      { metric: "Media Lifespan", before: "3 months", after: "14 months", improvement: "+367%" },
    ],
  },
  {
    title: "Japanese Pharmaceutical Company",
    industry: "Pharmaceutical",
    challenge: "Needed to achieve consistent nano-particle size distribution for a new drug formulation while meeting strict GMP requirements.",
    solution: "Implemented Kerec 0.1mm beads in their nano-milling process with full batch documentation.",
    results: [
      { metric: "Particle Size (D90)", before: "850 nm", after: "180 nm", improvement: "-79%" },
      { metric: "Size Distribution", before: "PDI 0.35", after: "PDI 0.12", improvement: "-66%" },
      { metric: "Contamination", before: "15 ppm", after: "<1 ppm", improvement: "-93%" },
      { metric: "Process Time", before: "6 hours", after: "3.5 hours", improvement: "-42%" },
    ],
  },
  {
    title: "Chinese Battery Material Producer",
    industry: "Battery Materials",
    challenge: "Inconsistent cathode material particle size was causing capacity variation in lithium-ion battery cells.",
    solution: "Replaced alumina beads with Kerec 0.3mm YSZ beads for LFP cathode material grinding.",
    results: [
      { metric: "D50 Consistency", before: "±15%", after: "±3%", improvement: "+80%" },
      { metric: "Metal Contamination", before: "25 ppm Fe", after: "<2 ppm Fe", improvement: "-92%" },
      { metric: "Energy Consumption", before: "45 kWh/ton", after: "28 kWh/ton", improvement: "-38%" },
      { metric: "Cell Capacity Variation", before: "±5%", after: "±1.2%", improvement: "-76%" },
    ],
  },
];

const comparisonData = [
  { property: "Material", zirconia: "95% ZrO₂ (YSZ)", glass: "Soda-lime glass", alumina: "92% Al₂O₃", steel: "Chrome steel" },
  { property: "Density (g/cm³)", zirconia: ">6.0", glass: "2.5", alumina: "3.6", steel: "7.8" },
  { property: "Hardness (HV)", zirconia: "1250", glass: "550", alumina: "1100", steel: "700" },
  { property: "Wear Rate", zirconia: "Very Low", glass: "High", alumina: "Medium", steel: "Medium-High" },
  { property: "Contamination Risk", zirconia: "Very Low (tested)", glass: "Low (Si)", alumina: "Low (Al)", steel: "High (Fe, Cr)" },
  { property: "Chemical Resistance", zirconia: "Excellent", glass: "Good", alumina: "Good", steel: "Poor" },
  { property: "Fracture Toughness", zirconia: "Excellent", glass: "Poor", alumina: "Fair", steel: "Good" },
  { property: "Cost per kg", zirconia: "High", glass: "Low", alumina: "Medium", steel: "Medium" },
  { property: "Cost per grinding hour", zirconia: "Low", glass: "High", alumina: "Medium", steel: "Medium-High" },
  { property: "Food/Pharma Grade", zirconia: "Yes", glass: "Limited", alumina: "Limited", steel: "No" },
];

export default function Cases() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-titanium-white border-b border-graphite-100">
        <div className="container py-3 flex items-center gap-2 text-xs text-graphite-400">
          <Link href="/" className="hover:text-navy transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-navy font-medium">Case Studies & Comparison</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 lg:py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="max-w-3xl">
            <span className="text-xs text-industrial-orange font-semibold uppercase tracking-widest">Proven Results</span>
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-navy mt-2 mb-4">Case Studies & Media Comparison</h1>
            <p className="text-graphite-400 leading-relaxed">
              Real-world results from customers who switched to Kerec zirconia beads, plus a comprehensive 
              comparison with other grinding media types.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-16">
        <div className="container space-y-8">
          {caseStudies.map((cs, idx) => (
            <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx} variants={fadeUp}
              className="bg-white rounded border border-graphite-100 overflow-hidden">
              <div className="bg-navy px-6 py-4 flex items-center justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold text-white">{cs.title}</h3>
                  <span className="text-xs text-white/50">{cs.industry}</span>
                </div>
                <TrendingUp className="w-6 h-6 text-industrial-orange" />
              </div>
              <div className="p-6 lg:p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-heading font-semibold text-navy text-sm mb-2">Challenge</h4>
                    <p className="text-sm text-graphite-400 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-navy text-sm mb-2">Solution</h4>
                    <p className="text-sm text-graphite-400 leading-relaxed">{cs.solution}</p>
                  </div>
                </div>
                <h4 className="font-heading font-semibold text-navy text-sm mb-3">Results</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {cs.results.map((r) => (
                    <div key={r.metric} className="bg-titanium-white p-4 rounded">
                      <div className="text-xs text-graphite-400 mb-1">{r.metric}</div>
                      <div className="text-xs text-graphite-300 line-through">{r.before}</div>
                      <div className="font-heading text-lg font-bold text-navy">{r.after}</div>
                      <div className="text-xs text-green-600 font-semibold">{r.improvement}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-titanium-white">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-3">Grinding Media Comparison</h2>
            <p className="text-graphite-400 mb-8 max-w-2xl">
              See how 95% YSZ zirconia beads compare against other common grinding media types.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
            <div className="bg-white rounded border border-graphite-100 overflow-x-auto">
              <table className="w-full text-sm min-w-[700px]">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left px-4 py-3 font-semibold">Property</th>
                    <th className="text-left px-4 py-3 font-semibold bg-industrial-orange/20">95% YSZ Zirconia</th>
                    <th className="text-left px-4 py-3 font-semibold">Glass Beads</th>
                    <th className="text-left px-4 py-3 font-semibold">Alumina Beads</th>
                    <th className="text-left px-4 py-3 font-semibold">Steel Balls</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={row.property} className={i % 2 === 0 ? "bg-white" : "bg-titanium-white"}>
                      <td className="px-4 py-3 text-graphite-500 font-medium">{row.property}</td>
                      <td className="px-4 py-3 text-navy font-semibold bg-industrial-orange/5">{row.zirconia}</td>
                      <td className="px-4 py-3 text-graphite-400">{row.glass}</td>
                      <td className="px-4 py-3 text-graphite-400">{row.alumina}</td>
                      <td className="px-4 py-3 text-graphite-400">{row.steel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Summary */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="bg-white p-6 rounded border border-green-200">
              <h3 className="font-heading font-semibold text-navy mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" /> Why Choose Zirconia
              </h3>
              <ul className="space-y-2 text-sm text-graphite-500">
                <li>Highest grinding efficiency due to superior density</li>
                <li>Lowest total cost of ownership despite higher unit price</li>
                <li>Low contamination (tested) for sensitive applications</li>
                <li>Longest service life among all grinding media</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded border border-red-200">
              <h3 className="font-heading font-semibold text-navy mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500" /> Common Issues with Alternatives
              </h3>
              <ul className="space-y-2 text-sm text-graphite-500">
                <li>Glass beads: frequent breakage, high replacement cost</li>
                <li>Alumina beads: lower density reduces grinding efficiency</li>
                <li>Steel balls: metal contamination, corrosion issues</li>
                <li>All alternatives: shorter lifespan, higher long-term cost</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-navy">
        <div className="container text-center">
          <h2 className="font-heading text-2xl font-bold text-white mb-4">Ready to See Results Like These?</h2>
          <p className="text-white/60 mb-6 max-w-lg mx-auto">
            Request a free sample and test our zirconia beads in your own process.
          </p>
          <div className="flex justify-center gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-industrial-orange text-white font-semibold text-sm rounded hover:bg-industrial-orange-hover transition-colors">
              Request Free Sample <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-semibold text-sm rounded hover:bg-white/10 transition-colors">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
