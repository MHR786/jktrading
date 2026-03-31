import { Building2, Award, Target, Users, MapPin, CheckCircle2, Shield } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <div className="w-full bg-background min-h-screen">
      {/* Page Header */}
      <section className="bg-primary py-24 border-b-4 border-accent relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 bg-[url('/hero-shipyard.png')] bg-cover bg-center mask-image-to-l" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About JK Trading</h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Over 20 years of bridging the gap between Japan's automotive excellence and the global market. We are your trusted partner in precision auto parts sourcing.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Our History</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Founded on Japanese Engineering Excellence</h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Established in Japan, JK Trading began as a small export office assisting local mechanics in finding genuine Japanese parts. Recognizing the global demand for reliable, high-quality automotive components, we expanded our operations to serve international B2B clients.
                </p>
                <p>
                  Today, we operate a sophisticated supply chain network, working directly with original equipment manufacturers (OEMs) and top-tier aftermarket producers across Japan.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="bg-muted p-10 rounded-sm border-l-4 border-accent">
                <Target className="w-12 h-12 text-primary mb-6" />
                <h4 className="text-2xl font-bold text-foreground mb-4">Our Mission</h4>
                <p className="text-muted-foreground text-lg italic">
                  "To deliver the uncompromising quality of Japanese automotive engineering to the world, providing our partners with the reliable parts they need to drive their businesses forward."
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Core Values</h2>
            <p className="text-white/70 text-lg">The principles that guide our international operations and partnerships.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Uncompromising Quality", desc: "We never substitute inferior parts. If it bears our name, it meets strict Japanese manufacturing standards." },
              { icon: Building2, title: "Long-Term Partnerships", desc: "We don't look for quick sales. We build lasting logistical partnerships that help our clients grow." },
              { icon: Award, title: "Absolute Integrity", desc: "Transparent pricing, honest condition reporting, and accurate shipping timelines without excuses." }
            ].map((val, i) => {
              const Icon = val.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1} direction="up">
                  <div className="bg-white/5 border border-white/10 p-8 rounded-sm text-center hover:bg-white/10 transition-colors h-full">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-4">{val.title}</h4>
                    <p className="text-white/70">{val.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Japan */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right" className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img src="/product-engine.png" alt="Engine" className="rounded-sm shadow-lg w-full" />
                <img src="/product-suspension.png" alt="Suspension" className="rounded-sm shadow-lg w-full mt-8" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" className="order-1 lg:order-2">
              <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">The Advantage</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why Source from Japan?</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Japanese manufacturing is globally recognized for its precision, durability, and technological advancement. By sourcing directly from Japan, you ensure your vehicles are equipped with components built to last.
              </p>
              <ul className="space-y-4">
                {[
                  "Strict domestic quality control standards (JIS)",
                  "Superior metallurgy and materials engineering",
                  "Exact fitment guarantees for JDM vehicles",
                  "Lower long-term replacement costs due to durability"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    <span className="font-medium text-foreground text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}