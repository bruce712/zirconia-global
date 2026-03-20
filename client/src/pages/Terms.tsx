/*
 * Terms & Conditions (B2B) Page
 * Google Ads compliant, B2B professional style
 */
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-titanium-white border-b border-graphite-100">
        <div className="container py-3 flex items-center gap-2 text-xs text-graphite-400">
          <Link href="/" className="hover:text-navy transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-navy font-medium">Terms &amp; Conditions</span>
        </div>
      </div>

      <main className="flex-1 bg-white">
        <div className="container py-16 max-w-4xl">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-2">Terms &amp; Conditions (B2B)</h1>
          <p className="text-graphite-400 text-sm mb-10">Last updated: February 24, 2026</p>

          <div className="prose prose-sm max-w-none text-graphite-600 leading-relaxed space-y-6">
            <p>
              These Terms &amp; Conditions ("Terms") apply to business-to-business transactions and govern the sale of
              products and services by Nanjing Kerec Equipment Co., Ltd. (南京科睿才设备有限公司) ("Seller", "we", "us")
              to the buyer ("Buyer", "you"). By requesting a quotation, sample, placing an order, or using this Site,
              you agree to these Terms unless otherwise agreed in writing.
            </p>

            <h2 className="font-heading text-xl font-semibold text-navy mt-8 mb-3">1) Quotations &amp; Orders</h2>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>A binding contract is formed only when Seller issues an order confirmation (or proforma invoice) and Buyer accepts it in writing.</li>
              <li>Buyer is responsible for confirming specifications, size, quantity, packaging, and intended application prior to order confirmation.</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-navy mt-8 mb-3">2) Product Specifications &amp; COA</h2>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Products will conform to the specifications stated in the confirmed purchase order and the corresponding COA for the relevant batch/lot.</li>
              <li>Performance-related data may be based on specific test conditions and is for reference.</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-navy mt-8 mb-3">3) Samples (DHL Freight Collect)</h2>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Samples may be provided for evaluation. Sample cost may be waived; however shipping/handling is collected.</li>
              <li>Samples are typically shipped via DHL. Freight is collected using Buyer's DHL account, or paid by Buyer in advance where applicable.</li>
              <li>Sample availability and quantity are subject to stock.</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-navy mt-8 mb-3">4) Prices, Payment &amp; Banking</h2>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Payment terms are stated in the proforma invoice/order confirmation.</li>
              <li>Unless otherwise agreed, T/T is commonly used.</li>
              <li>Buyer bears bank charges on Buyer side.</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-navy mt-8 mb-3">5) Delivery, Incoterms &amp; Risk of Loss</h2>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Delivery terms (including Incoterms) will be stated in the order confirmation/proforma invoice.</li>
              <li>Risk transfers according to Incoterms.</li>
              <li>Delivery dates are estimates unless guaranteed in writing.</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-navy mt-8 mb-3">6) Inspection &amp; Claims (7-Day Appearance / 30-Day Quality)</h2>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Quantity, packaging condition, and obvious damage/shortage: notify Seller within 7 days after receipt.</li>
              <li>Quality-related claims: notify Seller within 30 days after receipt, relating to conformity with confirmed specs and COA.</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-navy mt-8 mb-3">7) Claim Requirements</h2>
            <p>
              Provide: PO/invoice, lot/batch no., photos/videos, test results with method/conditions,
              and retain 1–2 kg sample upon request.
            </p>

            <h2 className="font-heading text-xl font-semibold text-navy mt-8 mb-3">8) Remedies</h2>
            <p>
              If nonconformity is confirmed: replacement, partial refund/price adjustment, or return &amp; refund
              (only for confirmed nonconforming goods), at Seller's discretion.
            </p>
            <p>No return without prior written approval (RMA).</p>

            <h2 className="font-heading text-xl font-semibold text-navy mt-8 mb-3">9) Exclusions</h2>
            <p>
              No coverage for improper storage/handling/contamination, incorrect mill settings/equipment issues,
              mixing with foreign materials, normal wear &amp; tear for consumables.
            </p>

            <h2 className="font-heading text-xl font-semibold text-navy mt-8 mb-3">10) Third-Party Inspection</h2>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Buyer may appoint third-party inspection (e.g., SGS) at Buyer's cost unless otherwise agreed.</li>
              <li>Scope/standards/sampling/timing must be agreed in advance.</li>
              <li>Reports do not replace claim process unless accepted in writing.</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-navy mt-8 mb-3">11) Limitation of Liability</h2>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Total liability not exceed invoiced value of affected batch.</li>
              <li>No indirect/incidental/consequential/special damages.</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-navy mt-8 mb-3">12) Compliance</h2>
            <p>Buyer responsible for local laws/import requirements.</p>

            <h2 className="font-heading text-xl font-semibold text-navy mt-8 mb-3">13) Force Majeure</h2>
            <p>No liability for delays beyond reasonable control.</p>

            <h2 className="font-heading text-xl font-semibold text-navy mt-8 mb-3">14) Governing Law &amp; Dispute Resolution</h2>
            <p>
              Negotiate first; otherwise competent court at Seller's location unless mandatory law provides otherwise.
            </p>

            <h2 className="font-heading text-xl font-semibold text-navy mt-8 mb-3">15) Contact Information</h2>
            <p>
              Nanjing Kerec Equipment Co., Ltd. (南京科睿才设备有限公司)<br />
              Website: zirconiamedia.com<br />
              Email/Phone/WhatsApp/Address: as shown on the Site or in official quotations.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
