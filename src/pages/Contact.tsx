import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate form submission
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Page Header */}
      <section className="bg-primary py-24 border-b-4 border-accent">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Our international sales team is ready to assist you. Request a
                quote, ask about specific parts availability, or inquire about
                our export logistics.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <ScrollReveal direction="up" delay={0.1}>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Global Headquarters
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted flex items-center justify-center rounded-sm shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Address</h4>
                      <p className="text-muted-foreground mt-1">
                        76 Sato Nishitoriguchi, Kamo-cho, Kizugawa City, Kyoto
                        Prefecture, 619-115, Japan
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted flex items-center justify-center rounded-sm shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Phone</h4>
                      <p className="text-muted-foreground mt-1">
                        +81 90 6609 7786
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted flex items-center justify-center rounded-sm shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Email</h4>
                      <p className="text-muted-foreground mt-1">
                        info@jktrading.jp
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#25D366]/10 flex items-center justify-center rounded-sm shrink-0">
                      <MessageSquare className="w-6 h-6 text-[#25D366]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">WhatsApp</h4>
                      <p className="text-muted-foreground mt-1">
                        +81 90 6609 7786
                        <br />
                        <span className="text-sm">
                          (For International Inquiries)
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 bg-muted p-6 rounded-sm border-l-4 border-primary">
                  <h4 className="font-bold text-foreground mb-2">
                    Business Hours
                  </h4>
                  <p className="text-muted-foreground text-sm flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium text-foreground">
                      9:00 AM - 6:00 PM (JST)
                    </span>
                  </p>
                  <p className="text-muted-foreground text-sm flex justify-between mt-2">
                    <span>Saturday - Sunday:</span>
                    <span className="font-medium text-foreground">Closed</span>
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="up" delay={0.2}>
                <div className="bg-card border border-border p-8 md:p-10 rounded-sm shadow-lg">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Send an Inquiry
                  </h3>

                  {formStatus === "success" ? (
                    <div className="bg-green-50 text-green-800 p-6 rounded-sm border border-green-200 flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <Send className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">
                        Inquiry Sent Successfully
                      </h4>
                      <p>
                        Thank you for reaching out to JK Trading. One of our
                        international sales representatives will contact you
                        within 24 hours.
                      </p>
                      <button
                        onClick={() => setFormStatus("idle")}
                        className="mt-6 text-primary font-bold hover:underline"
                      >
                        Send another inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-foreground">
                            Company Name *
                          </label>
                          <input
                            required
                            type="text"
                            className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            placeholder="Your Company Ltd."
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-foreground">
                            Contact Person *
                          </label>
                          <input
                            required
                            type="text"
                            className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-foreground">
                            Email Address *
                          </label>
                          <input
                            required
                            type="email"
                            className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            placeholder="john@company.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-foreground">
                            Country *
                          </label>
                          <input
                            required
                            type="text"
                            className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            placeholder="United Arab Emirates"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground">
                          Inquiry Type *
                        </label>
                        <select
                          required
                          className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        >
                          <option value="">Select an option...</option>
                          <option value="parts">
                            Parts Pricing & Availability
                          </option>
                          <option value="bulk">Bulk / Container Order</option>
                          <option value="shipping">Shipping & Logistics</option>
                          <option value="partnership">
                            Distributor Partnership
                          </option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground">
                          Message / Parts List *
                        </label>
                        <textarea
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-y"
                          placeholder="Please include OEM part numbers if available..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-sm transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {formStatus === "submitting" ? (
                          "Sending..."
                        ) : (
                          <>
                            Submit Inquiry <Send className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
