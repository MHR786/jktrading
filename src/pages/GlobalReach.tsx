import { Globe2, Ship, Plane, Truck, MapPin, ArrowRight, Target } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "wouter";

export default function GlobalReach() {
  return (
    <div className="w-full bg-background min-h-screen">
      {/* Page Header */}
      <section className="bg-primary py-24 border-b-4 border-accent">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Global Reach</h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Exporting premium Japanese auto parts to over 150 countries. Our robust logistics network ensures fast, secure, and cost-effective delivery to any port in the world.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Logistics Process */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Export Process</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">Seamless International Logistics</h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "1. Sourcing", desc: "Parts are sourced directly from Japanese factories and thoroughly inspected." },
              { icon: Ship, title: "2. Consolidation", desc: "Orders are packed into LCL or FCL containers at our Tokyo facility." },
              { icon: Globe2, title: "3. Customs & Export", desc: "We handle all Japanese export documentation and clearances." },
              { icon: Truck, title: "4. Final Delivery", desc: "Ocean or air freight delivery to your designated destination port." }
            ].map((step, i) => {
              // using fallback icons since Target isn't imported from lucide-react above, fixing import
              const Icon = step.icon === Target ? MapPin : step.icon; 
              return (
                <ScrollReveal key={i} delay={i * 0.1} direction="up" className="relative">
                  {i < 3 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border border-dashed border-2 border-transparent border-t-border z-0" />
                  )}
                  <div className="bg-card border border-border p-8 rounded-sm text-center relative z-10 hover:border-accent transition-colors h-full">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-lg text-foreground mb-3">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regions Served */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('/hero-shipyard.png')] bg-cover bg-center" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Serving Major Global Markets</h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Our deep understanding of regional import regulations allows us to efficiently serve diverse markets. We provide localized support and documentation tailored to your country's requirements.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Middle East (UAE, Saudi Arabia, Oman)",
                  "Africa (Kenya, Nigeria, South Africa)",
                  "Asia Pacific (Australia, NZ, Malaysia)",
                  "Europe (UK, Germany, Poland)",
                  "Americas (USA, Chile, Caribbean)"
                ].map((region, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0" />
                    <span className="font-medium text-white/90">{region}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="bg-white/10 p-8 rounded-sm border border-white/20 backdrop-blur-sm">
                <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Plane className="text-accent w-6 h-6" /> Shipping Options
                </h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="font-bold text-lg text-accent mb-2">Ocean Freight (FCL/LCL)</h5>
                    <p className="text-white/70 text-sm">Most cost-effective for bulk distributor orders. We load 20ft and 40ft containers directly from our warehouse.</p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <h5 className="font-bold text-lg text-accent mb-2">Air Freight</h5>
                    <p className="text-white/70 text-sm">Express delivery for urgent parts, electronics, and high-value lightweight components.</p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <h5 className="font-bold text-lg text-accent mb-2">Courier Services</h5>
                    <p className="text-white/70 text-sm">DHL, FedEx, and UPS integration for small sample orders and emergency replacements.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-foreground mb-6">Need a shipping estimate for your region?</h2>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-sm font-bold text-lg transition-all">
              Contact our Logistics Team <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}