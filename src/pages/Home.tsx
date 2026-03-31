import { Link } from "wouter";
import { ArrowRight, ShieldCheck, Globe2, Clock, ChevronRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-primary/90 z-10" />
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-shipyard.png')" }}
        />
        <div className="container relative z-20 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <ScrollReveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 border border-accent/50 text-white rounded-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-bold tracking-widest uppercase">Global Distribution Network</span>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
                Sourced in Japan.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                  Delivered Worldwide.
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
                Premium genuine OEM and high-performance aftermarket auto parts. 
                We bridge the gap between Japan's world-class automotive manufacturing and global buyers who demand uncompromising quality.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-sm font-bold flex items-center justify-center gap-2 transition-all">
                  Explore Catalog <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-sm font-bold flex items-center justify-center transition-all">
                  Request a Quote
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary border-b border-white/10 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            <ScrollReveal delay={0.1} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter end={20} suffix="+" />
              </div>
              <div className="text-sm font-medium text-white/60 uppercase tracking-widest">Years Experience</div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter end={150} suffix="+" />
              </div>
              <div className="text-sm font-medium text-white/60 uppercase tracking-widest">Countries Served</div>
            </ScrollReveal>
            <ScrollReveal delay={0.3} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter end={50} suffix="k+" />
              </div>
              <div className="text-sm font-medium text-white/60 uppercase tracking-widest">Parts Available</div>
            </ScrollReveal>
            <ScrollReveal delay={0.4} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter end={99.8} decimals={1} suffix="%" />
              </div>
              <div className="text-sm font-medium text-white/60 uppercase tracking-widest">Client Satisfaction</div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/5 transform -skew-y-3 rounded-sm z-0" />
                <img src="/product-engine.png" alt="High Performance Engine Block" className="relative z-10 w-full rounded-sm shadow-2xl" />
                <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-sm shadow-xl z-20 max-w-xs hidden md:block">
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck className="text-accent w-8 h-8" />
                    <span className="font-bold text-xl">ISO 9001</span>
                  </div>
                  <p className="text-sm text-white/80">Certified Global Supply Chain</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">About JK Trading</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Precision engineering,<br />global reach.
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                JK Trading has spent two decades building direct relationships with Japan's top automotive manufacturers. We cut out the middlemen to bring you genuine parts at competitive B2B rates.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Direct access to genuine Japanese OEM parts",
                  "Consolidated shipping container logistics",
                  "Dedicated account managers for international buyers",
                  "Rigorous quality control and export documentation"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    <span className="font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="inline-flex items-center gap-2 font-bold text-primary hover:text-accent transition-colors">
                Learn more about our company <ChevronRight className="w-5 h-5" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Our Catalog</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Comprehensive Parts Supply</h3>
            <p className="text-lg text-muted-foreground">From core engine components to advanced electronics, we supply exactly what your fleet or distributorship needs.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Transmission & Drivetrain", img: "/product-transmission.png", desc: "Complete gearboxes, clutch kits, and differential assemblies." },
              { title: "Braking Systems", img: "/product-brakes.png", desc: "High-performance rotors, OEM calipers, and premium pads." },
              { title: "Suspension & Steering", img: "/product-suspension.png", desc: "Struts, shocks, control arms, and precision steering racks." }
            ].map((prod, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <Link href="/products" className="group block bg-card rounded-sm border border-border overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="aspect-[4/3] bg-primary relative overflow-hidden">
                    <img src={prod.img} alt={prod.title} className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-xl mb-2 text-foreground group-hover:text-accent transition-colors">{prod.title}</h4>
                    <p className="text-muted-foreground text-sm">{prod.desc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/products" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-sm font-bold transition-all">
              View Full Catalog <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Value Prop */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <ScrollReveal delay={0.1}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm h-full hover:bg-white/10 transition-colors">
                <Globe2 className="w-12 h-12 text-accent mb-6" />
                <h4 className="font-bold text-2xl mb-4">Global Logistics</h4>
                <p className="text-white/70 leading-relaxed">
                  We handle end-to-end export logistics, offering LCL and FCL container shipments, complete with customs clearance and documentation.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm h-full hover:bg-white/10 transition-colors">
                <ShieldCheck className="w-12 h-12 text-accent mb-6" />
                <h4 className="font-bold text-2xl mb-4">Guaranteed Quality</h4>
                <p className="text-white/70 leading-relaxed">
                  Every part is sourced from vetted Japanese manufacturers. We stand behind our products with comprehensive B2B warranties.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm h-full hover:bg-white/10 transition-colors">
                <Clock className="w-12 h-12 text-accent mb-6" />
                <h4 className="font-bold text-2xl mb-4">Rapid Sourcing</h4>
                <p className="text-white/70 leading-relaxed">
                  Need a rare part? Our deep network allows us to locate and secure specialty components that other exporters cannot find.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/product-engine.png')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to upgrade your supply chain?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Contact our international sales team today for a custom quote on your next bulk parts order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-sm font-bold transition-all text-lg">
                Contact Sales
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}