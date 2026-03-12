/*
 * Swiss Industrial Design - Applications Page
 * Dynamic industry-specific content based on route parameter
 */
import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, CheckCircle, Paintbrush, Beaker, Pill, Battery, Cpu, Factory } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { IMAGES } from "@/lib/images";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

type IndustryData = {
  title: string;
  icon: typeof Paintbrush;
  heroDesc: string;
  painPoints: string[];
  solutions: string[];
  recommendedSizes: string[];
  benefits: string[];
};

const industryData: Record<string, IndustryData> = {
  "coatings-inks": {
    title: "Coatings & Inks",
    icon: Paintbrush,
    heroDesc: "Achieve superior pigment dispersion and nano-grinding performance in paint, coating, and ink production with our high-density zirconia beads.",
    painPoints: [
      "High media wear contaminates final product color",
      "Inconsistent particle size distribution affects coating quality",
      "Frequent media replacement increases production costs",
      "Difficulty achieving nano-scale particle sizes",
    ],
    solutions: [
      "Ultra-low wear rate (<0.01%) eliminates contamination concerns",
      "Tight size distribution ensures consistent grinding results batch after batch",
      "3-5x longer lifespan vs. glass beads reduces total cost of ownership",
      "Available in 0.1-0.3mm for nano-grinding down to <100nm",
    ],
    recommendedSizes: ["0.1 – 0.3 mm for nano pigments", "0.3 – 0.6 mm for standard pigments", "0.6 – 1.0 mm for coarse grinding"],
    benefits: ["30% faster grinding time", "Minimal color contamination", "Consistent batch quality", "Lower total cost"],
  },
  "food-health": {
    title: "Food & Health Powder",
    icon: Beaker,
    heroDesc: "Food-grade certified zirconia grinding media for safe and efficient processing of food ingredients, health supplements, and nutraceuticals.",
    painPoints: [
      "Strict food safety regulations require certified materials",
      "Metal contamination from grinding media is unacceptable",
      "Need to achieve fine particle sizes without heat degradation",
      "Cleaning and cross-contamination between batches",
    ],
    solutions: [
      "SGS food-grade certified, meets FDA and EU food contact regulations",
      "Chemically inert zirconia ensures very low metallic contamination (tested)",
      "Efficient grinding at lower temperatures preserves nutritional value",
      "Smooth surface finish enables easy cleaning between batches",
    ],
    recommendedSizes: ["0.3 – 0.6 mm for fine powders", "0.6 – 1.0 mm for standard grinding", "1.0 – 2.0 mm for coarse processing"],
    benefits: ["Food-grade certified", "Very low metal contamination", "Easy to clean", "Temperature control"],
  },
  "chemical-pharma": {
    title: "Chemical & Pharmaceutical",
    icon: Pill,
    heroDesc: "High-purity zirconia grinding media for pharmaceutical milling, chemical processing, and API particle size reduction with strict contamination control.",
    painPoints: [
      "GMP compliance requires documented material traceability",
      "Cross-contamination between API batches must be eliminated",
      "Achieving target particle size for bioavailability optimization",
      "Media breakage can halt production and contaminate product",
    ],
    solutions: [
      "Full batch traceability with certificates of analysis for each lot",
      "Ultra-smooth surface and chemical inertness prevent cross-contamination",
      "Precise size control enables targeted particle size distribution",
      "High fracture toughness (>10 MPa·m^½) prevents bead breakage",
    ],
    recommendedSizes: ["0.1 – 0.3 mm for nano-milling APIs", "0.3 – 0.6 mm for fine milling", "0.6 – 1.0 mm for standard milling"],
    benefits: ["GMP compatible", "Full traceability", "No breakage risk", "Consistent results"],
  },
  "battery": {
    title: "Battery Materials",
    icon: Battery,
    heroDesc: "Premium zirconia beads for cathode and anode material processing, enabling uniform particle size distribution critical for battery performance.",
    painPoints: [
      "Cathode/anode materials require extremely uniform particle sizes",
      "Metal contamination affects battery electrochemical performance",
      "High-energy milling generates excessive heat",
      "Scaling from lab to production while maintaining quality",
    ],
    solutions: [
      "Tight size distribution ensures uniform electrode material particles",
      "Very low metallic contamination preserves electrochemical properties",
      "High thermal conductivity helps dissipate grinding heat",
      "Consistent performance from sample to bulk production scale",
    ],
    recommendedSizes: ["0.1 – 0.3 mm for nano cathode materials", "0.3 – 0.6 mm for LFP/NMC processing", "0.6 – 1.0 mm for anode materials"],
    benefits: ["Ultra-pure processing", "Uniform particle size", "Scalable results", "Heat management"],
  },
  "electronics": {
    title: "Electronics & Semiconductor",
    icon: Cpu,
    heroDesc: "Ultra-high purity zirconia grinding media for electronic material processing, CMP slurry preparation, and semiconductor-grade powder production.",
    painPoints: [
      "Semiconductor materials demand ppb-level purity",
      "Particle size must be controlled at nanometer precision",
      "Any contamination can cause device failure",
      "Consistent quality across large production volumes",
    ],
    solutions: [
      "95% high-purity YSZ minimizes trace element contamination",
      "Available in 0.05-0.2mm for precise nano-grinding control",
      "Chemically inert in both acidic and alkaline slurry environments",
      "Rigorous QC ensures batch-to-batch consistency",
    ],
    recommendedSizes: ["0.05 – 0.2 mm for CMP slurry", "0.2 – 0.4 mm for electronic pastes", "0.4 – 0.8 mm for ceramic substrates"],
    benefits: ["ppb-level purity", "Nano precision", "Chemical stability", "Batch consistency"],
  },
  "ceramics": {
    title: "Ceramic Manufacturing",
    icon: Factory,
    heroDesc: "Reliable zirconia grinding media for ceramic raw material processing, glaze preparation, and advanced ceramic powder production.",
    painPoints: [
      "Hard ceramic raw materials cause rapid media wear",
      "Need consistent particle size for uniform sintering",
      "High-volume production requires durable media",
      "Color contamination in white ceramic bodies",
    ],
    solutions: [
      "Superior hardness (HV 1250) withstands abrasive ceramic materials",
      "Precise grinding delivers uniform particle size for consistent sintering",
      "Ultra-low wear rate means less frequent media replacement",
      "White zirconia beads eliminate color contamination in white bodies",
    ],
    recommendedSizes: ["0.6 – 1.0 mm for fine ceramic powders", "1.0 – 3.0 mm for standard grinding", "3.0 – 20 mm for ball mill applications"],
    benefits: ["Extreme durability", "No color contamination", "Cost effective", "Consistent quality"],
  },
};

const allIndustries = [
  { slug: "coatings-inks", label: "Coatings & Inks", icon: Paintbrush },
  { slug: "food-health", label: "Food & Health", icon: Beaker },
  { slug: "chemical-pharma", label: "Chemical & Pharma", icon: Pill },
  { slug: "battery", label: "Battery Materials", icon: Battery },
  { slug: "electronics", label: "Electronics", icon: Cpu },
  { slug: "ceramics", label: "Ceramics Mfg", icon: Factory },
];

export default function Applications() {
  const params = useParams<{ industry?: string }>();
  const industry = params.industry;
  const data = industry ? industryData[industry] : null;

  // Overview page if no specific industry
  if (!data) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="bg-titanium-white border-b border-graphite-100">
          <div className="container py-3 flex items-center gap-2 text-xs text-graphite-400">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-navy font-medium">Applications</span>
          </div>
        </div>

        <section className="py-12 lg:py-20">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="max-w-3xl mb-14">
              <span className="text-xs text-industrial-orange font-semibold uppercase tracking-widest">Industry Solutions</span>
              <h1 className="font-heading text-3xl lg:text-4xl font-bold text-navy mt-2 mb-4">Application Industries</h1>
              <p className="text-graphite-400 leading-relaxed">
                Our zirconia products serve a wide range of industries. Select your industry below to learn how our 
                grinding media can solve your specific challenges.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allIndustries.map((ind, i) => (
                <motion.div key={ind.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} variants={fadeUp}>
                  <Link href={`/applications/${ind.slug}`}
                    className="block bg-white p-8 rounded border border-graphite-100 hover:border-industrial-orange/30 hover:shadow-md transition-all group">
                    <ind.icon className="w-10 h-10 text-industrial-orange mb-4" />
                    <h3 className="font-heading text-lg font-bold text-navy mb-2">{ind.label}</h3>
                    <p className="text-sm text-graphite-400 mb-4">
                      {industryData[ind.slug]?.heroDesc.substring(0, 100)}...
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-industrial-orange font-medium group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application image section */}
        <section className="py-16 relative">
          <div className="absolute inset-0">
            <img src={IMAGES.applicationGrinding} alt="Grinding application" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-navy/80" />
          </div>
          <div className="container relative z-10 text-center">
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-4">Not Sure Which Solution Fits?</h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">
              Tell us about your application and our engineers will recommend the optimal grinding media solution.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-industrial-orange text-white font-semibold text-sm rounded hover:bg-industrial-orange-hover transition-colors">
              Get Expert Advice <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <Footer />
        <WhatsAppFloat />
      </div>
    );
  }

  // Specific industry page
  const Icon = data.icon;
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-titanium-white border-b border-graphite-100">
        <div className="container py-3 flex items-center gap-2 text-xs text-graphite-400">
          <Link href="/" className="hover:text-navy transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/applications" className="hover:text-navy transition-colors">Applications</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-navy font-medium">{data.title}</span>
        </div>
      </div>

      {/* Industry Hero */}
      <section className="py-12 lg:py-20 bg-navy">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Icon className="w-8 h-8 text-industrial-orange" />
              <span className="text-xs text-white/60 font-semibold uppercase tracking-widest">Application</span>
            </div>
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Zirconia Beads for {data.title}
            </h1>
            <p className="text-white/60 leading-relaxed mb-8">{data.heroDesc}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-industrial-orange text-white font-semibold text-sm rounded hover:bg-industrial-orange-hover transition-colors">
                Get Industry Solution <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold text-sm rounded hover:bg-white/10 transition-colors">
                Request Sample
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points & Solutions */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <h2 className="font-heading text-2xl font-bold text-navy mb-6">Industry Challenges</h2>
              <div className="space-y-4">
                {data.painPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-red-50 rounded border border-red-100">
                    <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
                    <span className="text-sm text-graphite-500">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
              <h2 className="font-heading text-2xl font-bold text-navy mb-6">Our Solutions</h2>
              <div className="space-y-4">
                {data.solutions.map((sol, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-green-50 rounded border border-green-100">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-graphite-500">{sol}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recommended Sizes & Benefits */}
      <section className="py-16 bg-titanium-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-6">Recommended Bead Sizes</h2>
              <div className="space-y-3">
                {data.recommendedSizes.map((size) => (
                  <div key={size} className="flex items-center gap-3 p-4 bg-white rounded border border-graphite-100">
                    <span className="w-2 h-2 bg-industrial-orange rounded-full shrink-0" />
                    <span className="text-sm text-graphite-500 font-medium">{size}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-6">Key Benefits</h2>
              <div className="grid grid-cols-2 gap-4">
                {data.benefits.map((benefit) => (
                  <div key={benefit} className="bg-white p-5 rounded border border-graphite-100 text-center">
                    <div className="font-heading font-semibold text-navy text-sm">{benefit}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Industries */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8">Explore Other Industries</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {allIndustries.filter((ind) => ind.slug !== industry).map((ind) => (
              <Link key={ind.slug} href={`/applications/${ind.slug}`}
                className="p-4 bg-titanium-white rounded border border-graphite-100 hover:border-industrial-orange/30 transition-colors text-center group">
                <ind.icon className="w-6 h-6 text-graphite-400 group-hover:text-industrial-orange transition-colors mx-auto mb-2" />
                <span className="text-sm text-graphite-500 font-medium">{ind.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-navy">
        <div className="container text-center">
          <h2 className="font-heading text-2xl font-bold text-white mb-4">Ready to Improve Your {data.title} Process?</h2>
          <p className="text-white/60 mb-6 max-w-lg mx-auto">
            Contact our industry specialists for a tailored grinding media recommendation.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-industrial-orange text-white font-semibold text-sm rounded hover:bg-industrial-orange-hover transition-colors">
            Get Industry Solution <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
