/*
 * Swiss Industrial Design - Contact & Inquiry Page
 * Comprehensive inquiry form with structured data collection for B2B leads
 * Includes UTM tracking, honeypot anti-spam, and rate limiting
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronRight, Mail, Phone, MapPin, MessageCircle, Clock, Send, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const contactMethods = [
  { icon: Mail, title: "Email", value: "18100601781@163.com", href: "mailto:18100601781@163.com", desc: "Response within 12 hours" },
  { icon: Phone, title: "Phone", value: "+86 18100601781", href: "tel:+8618100601781", desc: "Mon-Sat 8:00-18:00 (CST)" },
  { icon: MessageCircle, title: "WhatsApp", value: "+86 18100601781", href: "https://wa.me/8618100601781", desc: "Instant messaging support" },
  { icon: Clock, title: "Response Time", value: "< 12 Hours", href: "#inquiry-form", desc: "For all inquiry submissions" },
];

// Popular countries list for searchable dropdown
const countries = [
  "United States", "Canada", "United Kingdom", "Germany", "France", "Italy", "Spain", "Netherlands",
  "Australia", "New Zealand", "Japan", "South Korea", "Singapore", "Malaysia", "Thailand", "Vietnam",
  "India", "Philippines", "Indonesia", "China", "Taiwan", "Hong Kong", "Brazil", "Mexico", "Argentina",
  "Chile", "Colombia", "Peru", "South Africa", "Egypt", "Turkey", "United Arab Emirates", "Saudi Arabia",
  "Poland", "Czech Republic", "Russia", "Ukraine", "Other"
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    product: "zirconia-beads",
    industry: "",
    currentMedia: "",
    targetSize: "",
    monthlyVolume: "",
    monthlyUnit: "kg/month",
    beadSize: "",
    message: "",
    // Honeypot field (hidden from users, bots will fill it)
    website: "",
    // UTM and tracking fields (auto-filled)
    pageUrl: "",
    referrer: "",
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
    utmContent: "",
    utmTerm: "",
    timestamp: "",
    userAgent: "",
  });

  // Capture UTM parameters and tracking data on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setFormData(prev => ({
      ...prev,
      pageUrl: window.location.href,
      referrer: document.referrer || "(direct)",
      utmSource: urlParams.get("utm_source") || "",
      utmMedium: urlParams.get("utm_medium") || "",
      utmCampaign: urlParams.get("utm_campaign") || "",
      utmContent: urlParams.get("utm_content") || "",
      utmTerm: urlParams.get("utm_term") || "",
      userAgent: navigator.userAgent,
    }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCountrySelect = (country: string) => {
    setFormData({ ...formData, country });
    setCountrySearch(country);
    setShowCountryDropdown(false);
  };

  const filteredCountries = countries.filter(c => 
    c.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.website) {
      console.warn("Spam detected via honeypot");
      return;
    }

    // Rate limiting check (localStorage)
    const lastSubmitTime = localStorage.getItem("lastSubmitTime");
    const now = Date.now();
    if (lastSubmitTime && now - parseInt(lastSubmitTime) < 60000) {
      toast.error("Please wait 60 seconds before submitting another inquiry.");
      return;
    }

    setSubmitting(true);

    // Add timestamp
    const submissionData = {
      ...formData,
      timestamp: new Date().toISOString(),
    };

    try {
      // TODO: Replace with actual Formspree endpoint
      // const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(submissionData),
      // });

      // if (!response.ok) throw new Error("Submission failed");

      // Simulate submission for now
      await new Promise(resolve => setTimeout(resolve, 1000));

      localStorage.setItem("lastSubmitTime", now.toString());
      setSubmitted(true);
      toast.success("Inquiry submitted successfully! We will respond within 12 hours.");
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to submit inquiry. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-titanium-white border-b border-graphite-100">
        <div className="container py-3 flex items-center gap-2 text-xs text-graphite-400">
          <Link href="/" className="hover:text-navy transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-navy font-medium">Contact Us</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 lg:py-16 bg-navy">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl">
            <span className="text-xs text-industrial-orange font-semibold uppercase tracking-widest">Get in Touch</span>
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-white mt-2 mb-4 leading-tight">
              Contact Us for a Free Quote
            </h1>
            <p className="text-white/60 leading-relaxed">
              Fill out the inquiry form below or reach us directly. Our team will respond within 12 hours 
              with a customized solution for your grinding media needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {contactMethods.map((method, i) => (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded p-5 hover:bg-white/15 transition-colors group"
              >
                <method.icon className="w-6 h-6 text-industrial-orange mb-3" />
                <div className="font-heading font-semibold text-white text-sm mb-0.5">{method.title}</div>
                <div className="text-xs text-white/80 mb-1">{method.value}</div>
                <div className="text-xs text-white/40">{method.desc}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Form */}
            <div className="lg:col-span-8">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
                <h2 className="font-heading text-2xl font-bold text-navy mb-2">Inquiry Form</h2>
                <p className="text-graphite-400 text-sm mb-8">
                  Please provide as much detail as possible so we can give you the most accurate quotation.
                </p>
              </motion.div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded p-10 text-center"
                >
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-bold text-navy mb-2">Inquiry Submitted Successfully!</h3>
                  <p className="text-graphite-400 mb-6">
                    Thank you for your interest. Our team will review your inquiry and respond within 12 hours.
                  </p>
                  <p className="text-sm text-graphite-500 mb-6">
                    For faster response, contact us via WhatsApp or email directly.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <a
                      href="https://wa.me/8618100601781"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white font-semibold text-sm rounded hover:bg-green-700 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                    <a
                      href="mailto:18100601781@163.com"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-navy text-navy font-semibold text-sm rounded hover:bg-navy/5 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </a>
                  </div>
                  <button
                    onClick={() => { 
                      setSubmitted(false); 
                      setFormData({ 
                        company: "", name: "", email: "", phone: "", country: "", product: "zirconia-beads", 
                        industry: "", currentMedia: "", targetSize: "", monthlyVolume: "", monthlyUnit: "kg/month",
                        beadSize: "", message: "", website: "", pageUrl: "", referrer: "", utmSource: "", 
                        utmMedium: "", utmCampaign: "", utmContent: "", utmTerm: "", timestamp: "", userAgent: "" 
                      }); 
                      setCountrySearch("");
                    }}
                    className="mt-6 text-sm text-industrial-orange font-semibold hover:text-industrial-orange-hover transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={1}
                  variants={fadeUp}
                  className="space-y-6"
                >
                  {/* Honeypot field (hidden) */}
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px" }}
                    aria-hidden="true"
                  />

                  {/* Contact Info */}
                  <div>
                    <h3 className="font-heading font-semibold text-navy text-sm mb-4 pb-2 border-b border-graphite-100">Contact Information</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-graphite-500 font-medium mb-1.5">Company Name *</label>
                        <input type="text" name="company" value={formData.company} onChange={handleChange} required
                          className="w-full px-4 py-2.5 border border-graphite-200 rounded text-sm text-navy focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange/20 outline-none transition-colors bg-white"
                          placeholder="Your company name" />
                      </div>
                      <div>
                        <label className="block text-xs text-graphite-500 font-medium mb-1.5">Contact Person *</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required
                          className="w-full px-4 py-2.5 border border-graphite-200 rounded text-sm text-navy focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange/20 outline-none transition-colors bg-white"
                          placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="block text-xs text-graphite-500 font-medium mb-1.5">Email Address *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required
                          className="w-full px-4 py-2.5 border border-graphite-200 rounded text-sm text-navy focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange/20 outline-none transition-colors bg-white"
                          placeholder="your@email.com" />
                      </div>
                      <div>
                        <label className="block text-xs text-graphite-500 font-medium mb-1.5">Phone / WhatsApp</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-graphite-200 rounded text-sm text-navy focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange/20 outline-none transition-colors bg-white"
                          placeholder="+1 234 567 8900" />
                      </div>
                      <div className="sm:col-span-2 relative">
                        <label className="block text-xs text-graphite-500 font-medium mb-1.5">Country / Region *</label>
                        <input
                          type="text"
                          value={countrySearch}
                          onChange={(e) => {
                            setCountrySearch(e.target.value);
                            setFormData({ ...formData, country: e.target.value });
                            setShowCountryDropdown(true);
                          }}
                          onFocus={() => setShowCountryDropdown(true)}
                          onBlur={() => setTimeout(() => setShowCountryDropdown(false), 200)}
                          required
                          className="w-full px-4 py-2.5 border border-graphite-200 rounded text-sm text-navy focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange/20 outline-none transition-colors bg-white"
                          placeholder="Search or select your country"
                        />
                        {showCountryDropdown && filteredCountries.length > 0 && (
                          <div className="absolute z-10 w-full mt-1 bg-white border border-graphite-200 rounded shadow-lg max-h-60 overflow-y-auto">
                            {filteredCountries.map((country) => (
                              <button
                                key={country}
                                type="button"
                                onClick={() => handleCountrySelect(country)}
                                className="w-full text-left px-4 py-2 text-sm text-navy hover:bg-navy/5 transition-colors"
                              >
                                {country}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Product Requirements */}
                  <div>
                    <h3 className="font-heading font-semibold text-navy text-sm mb-4 pb-2 border-b border-graphite-100">Product Requirements</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-graphite-500 font-medium mb-1.5">Product Interest *</label>
                        <select name="product" value={formData.product} onChange={handleChange} required
                          className="w-full px-4 py-2.5 border border-graphite-200 rounded text-sm text-navy focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange/20 outline-none transition-colors bg-white">
                          <option value="zirconia-beads">95% YSZ Zirconia Beads</option>
                          <option value="ceramic-parts">Ceramic Structural Parts</option>
                          <option value="both">Both Products</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-graphite-500 font-medium mb-1.5">Industry</label>
                        <select name="industry" value={formData.industry} onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-graphite-200 rounded text-sm text-navy focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange/20 outline-none transition-colors bg-white">
                          <option value="">Select your industry</option>
                          <option value="coatings">Coatings & Inks</option>
                          <option value="food">Food & Health</option>
                          <option value="pharma">Chemical & Pharmaceutical</option>
                          <option value="battery">Battery Materials</option>
                          <option value="electronics">Electronics & Semiconductor</option>
                          <option value="ceramics">Ceramic Manufacturing</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-graphite-500 font-medium mb-1.5">Bead Size Interested</label>
                        <select name="beadSize" value={formData.beadSize} onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-graphite-200 rounded text-sm text-navy focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange/20 outline-none transition-colors bg-white">
                          <option value="">Select bead size</option>
                          <option value="0.1-0.2">0.1–0.2 mm</option>
                          <option value="0.3-0.4">0.3–0.4 mm</option>
                          <option value="0.5-0.6">0.5–0.6 mm</option>
                          <option value="0.8-1.0">0.8–1.0 mm</option>
                          <option value="1.0-1.2">1.0–1.2 mm</option>
                          <option value="1.4-1.6">1.4–1.6 mm</option>
                          <option value="1.6-1.8">1.6–1.8 mm</option>
                          <option value="2.0+">2.0+ mm</option>
                          <option value="multiple">Multiple sizes</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-graphite-500 font-medium mb-1.5">Current Grinding Media</label>
                        <input type="text" name="currentMedia" value={formData.currentMedia} onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-graphite-200 rounded text-sm text-navy focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange/20 outline-none transition-colors bg-white"
                          placeholder="e.g., Glass beads 0.5mm" />
                      </div>
                      <div>
                        <label className="block text-xs text-graphite-500 font-medium mb-1.5">Target Particle Size</label>
                        <input type="text" name="targetSize" value={formData.targetSize} onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-graphite-200 rounded text-sm text-navy focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange/20 outline-none transition-colors bg-white"
                          placeholder="e.g., D90 < 1μm" />
                      </div>
                      <div>
                        <label className="block text-xs text-graphite-500 font-medium mb-1.5">Monthly Usage Volume</label>
                        <div className="grid grid-cols-2 gap-2">
                          <input type="text" name="monthlyVolume" value={formData.monthlyVolume} onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-graphite-200 rounded text-sm text-navy focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange/20 outline-none transition-colors bg-white"
                            placeholder="e.g., 500" />
                          <select name="monthlyUnit" value={formData.monthlyUnit} onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-graphite-200 rounded text-sm text-navy focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange/20 outline-none transition-colors bg-white">
                            <option value="kg/month">kg/month</option>
                            <option value="ton/month">ton/month</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <h3 className="font-heading font-semibold text-navy text-sm mb-4 pb-2 border-b border-graphite-100">Additional Details</h3>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2.5 border border-graphite-200 rounded text-sm text-navy focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange/20 outline-none transition-colors bg-white resize-none"
                      placeholder="Please describe your mill type/model, specific requirements, questions, or any additional information that would help us provide an accurate quotation..."
                    />
                  </div>

                  {/* Compliance consent */}
                  <div className="flex items-start gap-2.5">
                    <input
                      type="checkbox"
                      id="agree-terms"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      required
                      className="mt-1 w-4 h-4 rounded border-graphite-300 text-industrial-orange focus:ring-industrial-orange/20"
                    />
                    <label htmlFor="agree-terms" className="text-xs text-graphite-500 leading-relaxed">
                      By submitting this form, you agree to our{" "}
                      <Link href="/privacy-policy" className="text-industrial-orange hover:underline">Privacy Policy</Link>
                      {" "}and{" "}
                      <Link href="/terms" className="text-industrial-orange hover:underline">Terms</Link>.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={!agreeTerms || submitting}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-industrial-orange text-white font-semibold text-sm rounded hover:bg-industrial-orange-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Inquiry
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
                className="bg-navy rounded p-6">
                <h3 className="font-heading font-semibold text-white mb-4">Why Contact Us?</h3>
                <ul className="space-y-3">
                  {[
                    "Free samples available (freight collect)",
                    "Custom solutions for your specific needs",
                    "Technical support from experienced engineers",
                    "Competitive pricing with MOQ flexibility",
                    "Fast response within 12 hours",
                    "ISO 9001 certified quality assurance",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                      <CheckCircle className="w-4 h-4 text-industrial-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} variants={fadeUp}
                className="bg-titanium-white rounded p-6 border border-graphite-100">
                <h3 className="font-heading font-semibold text-navy mb-4">Office Address</h3>
                <div className="flex items-start gap-2.5 text-sm text-graphite-500 mb-4">
                  <MapPin className="w-4 h-4 text-industrial-orange shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-navy">ZircoMax Precision Ceramics Co., Ltd.</p>
                    <p className="text-xs text-graphite-400 mt-0.5">Legal Entity: NanJing Kerec Equipment Co., LTD (南京科睿才设备有限公司)</p>
                    <p>Building A1, Jingfeng Lechuang Center</p>
                    <p>Pukou District, Nanjing, Jiangsu</p>
                    <p>China</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <a href="mailto:18100601781@163.com" className="flex items-center gap-2 text-graphite-500 hover:text-navy transition-colors">
                    <Mail className="w-4 h-4 text-industrial-orange" />
                    18100601781@163.com
                  </a>
                  <a href="tel:+8618100601781" className="flex items-center gap-2 text-graphite-500 hover:text-navy transition-colors">
                    <Phone className="w-4 h-4 text-industrial-orange" />
                    +86 18100601781
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
