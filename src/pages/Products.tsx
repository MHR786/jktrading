import { Link } from "wouter";
import { Wrench, Settings, Disc, Zap, Car, Shield, Thermometer, Wind, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const categories = [
  {
    id: "engine",
    title: "Engine Parts",
    icon: Wrench,
    desc: "Cylinder heads, pistons, camshafts, and complete engine block assemblies for peak performance.",
    image: "/product-engine.png"
  },
  {
    id: "transmission",
    title: "Transmission & Drivetrain",
    icon: Settings,
    desc: "Manual and automatic gearboxes, clutches, flywheels, and differential parts.",
    image: "/product-transmission.png"
  },
  {
    id: "braking",
    title: "Braking Systems",
    icon: Disc,
    desc: "High-performance brake rotors, OEM calipers, premium pads, and ABS modules.",
    image: "/product-brakes.png"
  },
  {
    id: "suspension",
    title: "Suspension & Steering",
    icon: Shield,
    desc: "Coilover struts, shock absorbers, control arms, and precision steering racks.",
    image: "/product-suspension.png"
  },
  {
    id: "electrical",
    title: "Electrical & Lighting",
    icon: Zap,
    desc: "Alternators, starters, ECU modules, and OEM LED/HID headlamp assemblies.",
    image: "/product-engine.png" // reused placeholder
  },
  {
    id: "body",
    title: "Body Parts & Accessories",
    icon: Car,
    desc: "OEM bumpers, fenders, hoods, mirrors, and structural reinforcement components.",
    image: "/product-transmission.png" // reused placeholder
  },
  {
    id: "cooling",
    title: "Cooling System",
    icon: Thermometer,
    desc: "Radiators, water pumps, thermostats, and cooling fans for thermal management.",
    image: "/product-suspension.png" // reused placeholder
  },
  {
    id: "exhaust",
    title: "Exhaust System",
    icon: Wind,
    desc: "Manifolds, catalytic converters, mufflers, and complete performance exhaust systems.",
    image: "/product-brakes.png" // reused placeholder
  }
];

export default function Products() {
  return (
    <div className="w-full bg-background min-h-screen">
      {/* Page Header */}
      <section className="bg-primary py-24 border-b-4 border-accent">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Product Catalog</h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Comprehensive inventory of genuine Japanese OEM and aftermarket auto parts, 
                ready for global export. We supply everything from core mechanical components to electrical systems.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <ScrollReveal key={cat.id} delay={i * 0.05} direction="up">
                  <div className="group bg-card border border-border rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-accent/50 flex flex-col h-full">
                    <div className="h-48 bg-primary relative overflow-hidden border-b border-border">
                      <div className="absolute inset-0 bg-primary/40 z-10 group-hover:bg-transparent transition-colors duration-300" />
                      <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute bottom-4 left-4 z-20 bg-background p-2 rounded-sm shadow-md">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-accent transition-colors">{cat.title}</h3>
                      <p className="text-sm text-muted-foreground mb-6 flex-1">
                        {cat.desc}
                      </p>
                      <Link href="/contact" className="inline-flex items-center text-sm font-bold text-primary hover:text-accent transition-colors mt-auto">
                        Inquire About This <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bulk Order Banner */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="bg-primary rounded-sm p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 max-w-2xl">
                <h3 className="text-3xl font-bold text-white mb-4">Looking for wholesale bulk orders?</h3>
                <p className="text-white/80 text-lg">
                  We specialize in container-load shipments for distributors and fleet managers. Get access to our exclusive B2B pricing tiers.
                </p>
              </div>
              <div className="relative z-10 shrink-0 w-full md:w-auto">
                <Link href="/contact" className="block w-full text-center bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-sm font-bold text-lg transition-all">
                  Request Wholesale Pricing
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}