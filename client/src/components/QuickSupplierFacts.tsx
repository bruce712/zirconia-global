import { Package, Ruler, Scale, Box, FlaskConical, Anchor, CreditCard, Clock } from "lucide-react";

const facts = [
  { icon: Package, label: "Main Product", value: "95% YSZ Zirconia Beads" },
  { icon: Ruler, label: "Size Range", value: "0.1–100 mm" },
  { icon: Scale, label: "MOQ", value: "50 kg" },
  { icon: Box, label: "Standard Packing", value: "25 kg/drum" },
  { icon: FlaskConical, label: "Sample", value: "Available" },
  { icon: Anchor, label: "Port", value: "Qingdao, China" },
  { icon: CreditCard, label: "Payment", value: "T/T" },
  { icon: Clock, label: "Lead Time", value: "Regular sizes in stock / Custom sizes on request" },
];

export default function QuickSupplierFacts() {
  return (
    <section className="bg-navy-light py-8 lg:py-10">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {facts.map((fact, index) => (
            <div key={index} className="flex flex-col items-center text-center text-white/80">
              <fact.icon className="w-6 h-6 text-industrial-orange mb-2" />
              <p className="text-xs font-medium uppercase tracking-wider mb-1">{fact.label}</p>
              <p className="text-sm font-semibold text-white leading-tight">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
