import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t-4 border-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl rounded-sm">
                JK
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-white">JK TRADING</span>
                <span className="text-[10px] uppercase tracking-widest text-primary-foreground/70 leading-tight">Global Auto Parts</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-6">
              Premium genuine and aftermarket Japanese auto parts sourced directly from Japan and exported to clients worldwide. Quality, reliability, and precision.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-primary-foreground/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/products" className="text-sm text-primary-foreground/70 hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/about" className="text-sm text-primary-foreground/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/global" className="text-sm text-primary-foreground/70 hover:text-white transition-colors">Global Reach</Link></li>
              <li><Link href="/contact" className="text-sm text-primary-foreground/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Categories</h4>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-sm text-primary-foreground/70 hover:text-white transition-colors">Engine Parts</Link></li>
              <li><Link href="/products" className="text-sm text-primary-foreground/70 hover:text-white transition-colors">Transmission</Link></li>
              <li><Link href="/products" className="text-sm text-primary-foreground/70 hover:text-white transition-colors">Suspension & Steering</Link></li>
              <li><Link href="/products" className="text-sm text-primary-foreground/70 hover:text-white transition-colors">Braking Systems</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">76 Sato Nishitoriguchi, Kamo-cho, Kizugawa City, Kyoto Prefecture, 619-115</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm text-primary-foreground/70">+81 90 6609 7786</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm text-primary-foreground/70">info@jktrading.jp</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            &copy; {new Date().getFullYear()} JK Trading. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-primary-foreground/50 hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-sm text-primary-foreground/50 hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}