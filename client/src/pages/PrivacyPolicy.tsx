/*
 * Privacy Policy Page
 * Google Ads compliant, B2B professional style
 */
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-titanium-white border-b border-graphite-100">
        <div className="container py-3 flex items-center gap-2 text-xs text-graphite-400">
          <Link href="/" className="hover:text-navy transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-navy font-medium">Privacy Policy</span>
        </div>
      </div>

      <main className="flex-1 bg-white">
        <div className="container py-16 max-w-4xl">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-2">Privacy Policy</h1>
          <p className="text-graphite-400 text-sm mb-10">Last updated: February 24, 2026</p>

          <div className="prose prose-sm max-w-none text-graphite-600 leading-relaxed space-y-6">
            <p>
              This Privacy Policy explains how Nanjing Kerec Equipment Co., Ltd. (Chinese name: 南京科睿才设备有限公司)
              ("we", "us", "our") collects, uses, and protects personal information when you visit zirconiamedia.com
              (the "Site") or contact us for quotations, samples, or technical support.
            </p>

            <h2 className="font-heading text-xl font-semibold text-navy mt-8 mb-3">1) Information We Collect</h2>

            <h3 className="font-heading text-base font-semibold text-navy mt-4 mb-2">A. Information you provide to us</h3>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Contact details (e.g., name, company name, email, phone/WhatsApp)</li>
              <li>Business details (e.g., country/region, industry, application, product requirements)</li>
              <li>Messages and attachments you send (e.g., specs, drawings, photos, test results)</li>
              <li>Shipping details for samples or orders (e.g., address, consignee)</li>
            </ul>

            <h3 className="font-heading text-base font-semibold text-navy mt-4 mb-2">B. Information collected automatically</h3>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Device and usage data (e.g., IP address, browser type, pages visited, time on Site)</li>
              <li>Approximate location (derived from IP)</li>
              <li>Cookies and similar tracking technologies (see Section 6)</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-navy mt-8 mb-3">2) How We Use Your Information</h2>
            <p>We use information to:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Respond to inquiries, provide quotations, and confirm product specifications</li>
              <li>Arrange samples (including DHL freight collect when applicable) and shipments</li>
              <li>Provide technical support and product recommendations</li>
              <li>Improve the Site, diagnose issues, and prevent fraud or abuse</li>
              <li>Comply with legal obligations and enforce our terms</li>
            </ul>
            <p className="font-medium">We do not sell your personal information.</p>

            <h2 className="font-heading text-xl font-semibold text-navy mt-8 mb-3">3) Legal Bases (Where Applicable)</h2>
            <p>Depending on your location, we process information based on:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Our legitimate interests (e.g., responding to B2B inquiries, improving services)</li>
              <li>Your consent (e.g., marketing emails where required)</li>
              <li>Performance of a contract or steps prior to entering a contract (e.g., quotation/order processing)</li>
              <li>Compliance with legal obligations</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-navy mt-8 mb-3">4) Sharing of Information</h2>
            <p>We may share information with:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Service providers (e.g., website hosting, email systems, analytics, CRM)</li>
              <li>Logistics partners (e.g., DHL or freight forwarders) to deliver samples or orders</li>
              <li>Professional advisers (e.g., accountants, legal counsel)</li>
              <li>Authorities if required by law or to protect rights and safety</li>
            </ul>
            <p>We only share what is necessary.</p>

            <h2 className="font-heading text-xl font-semibold text-navy mt-8 mb-3">5) International Transfers</h2>
            <p>
              Our operations are based in China. Your information may be processed in China or other countries where our
              service providers operate. We take reasonable steps to protect information during transfers.
            </p>

            <h2 className="font-heading text-xl font-semibold text-navy mt-8 mb-3">6) Cookies and Analytics</h2>
            <p>
              We may use cookies and similar technologies to enable site functionality and understand usage.
              You can control cookies through browser settings.
            </p>

            <h2 className="font-heading text-xl font-semibold text-navy mt-8 mb-3">7) Data Retention</h2>
            <p>
              We retain information as long as necessary for inquiries, business records, legal compliance,
              dispute resolution, and enforcement.
            </p>

            <h2 className="font-heading text-xl font-semibold text-navy mt-8 mb-3">8) Security</h2>
            <p>We use reasonable safeguards, but no method is 100% secure.</p>

            <h2 className="font-heading text-xl font-semibold text-navy mt-8 mb-3">9) Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may request access/correction/deletion, object or restrict processing,
              or withdraw consent. Contact us to exercise rights.
            </p>

            <h2 className="font-heading text-xl font-semibold text-navy mt-8 mb-3">10) Marketing Communications</h2>
            <p>You may unsubscribe at any time.</p>

            <h2 className="font-heading text-xl font-semibold text-navy mt-8 mb-3">11) Third-Party Links</h2>
            <p>We are not responsible for third-party privacy practices.</p>

            <h2 className="font-heading text-xl font-semibold text-navy mt-8 mb-3">12) Contact Us</h2>
            <p>
              Nanjing Kerec Equipment Co., Ltd. (南京科睿才设备有限公司)<br />
              Website: zirconiamedia.com<br />
              Email/Phone/WhatsApp/Address: use the official contact details shown on the Site.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
