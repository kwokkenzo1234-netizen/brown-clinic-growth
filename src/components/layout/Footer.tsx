import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center">
                <span className="text-foreground font-display font-bold text-lg">B</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-lg">Brown Clinic</span>
                <span className="text-xs text-primary-foreground/70 -mt-0.5">Dental & Aesthetic Care</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Klinik gigi dan estetika terpercaya dengan layanan profesional dan dokter berpengalaman untuk senyum terbaik Anda.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Beranda
              </Link>
              <Link to="/layanan" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Layanan
              </Link>
              <Link to="/tim-dokter" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Tim Dokter
              </Link>
              <Link to="/booking" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Booking
              </Link>
              <Link to="/faq" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-lg">Layanan Kami</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/layanan" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Dental Check Up
              </Link>
              <Link to="/layanan" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Teeth Whitening
              </Link>
              <Link to="/layanan" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Veneer & Estetika
              </Link>
              <Link to="/layanan" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Behel & Aligners
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-lg">Hubungi Kami</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <p className="text-sm text-primary-foreground/70">
                  Jl. Sudirman No. 123, Jakarta Selatan, 12190
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <p className="text-sm text-primary-foreground/70">(021) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <p className="text-sm text-primary-foreground/70">info@brownclinic.id</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div className="text-sm text-primary-foreground/70">
                  <p>Sen - Jum: 09:00 - 20:00</p>
                  <p>Sabtu: 09:00 - 17:00</p>
                  <p>Minggu: Tutup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2024 Brown Clinic. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
