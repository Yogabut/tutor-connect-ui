import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const quickLinks = [
  { href: '/about', label: 'Tentang Kami' },
  { href: '/services', label: 'Layanan' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/documentation', label: 'Dokumentasi' },
  { href: '/feedback', label: 'Hubungi Kami' },
];

const services = [
  { label: 'Les Matematika' },
  { label: 'Les Fisika' },
  { label: 'Les Kimia' },
  { label: 'Les Bahasa Inggris' },
  { label: 'Les Biologi' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-hero">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">LesPrivat</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Platform les privat terpercaya untuk membantu siswa meraih prestasi akademik terbaik dengan metode pembelajaran yang efektif dan menyenangkan.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan Kami</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <span className="text-background/70 text-sm">{service.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Jl. Pendidikan No. 123, Jakarta Selatan, Indonesia 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+6281234567890" className="text-background/70 hover:text-primary text-sm transition-colors">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@lesprivat.com" className="text-background/70 hover:text-primary text-sm transition-colors">
                  info@lesprivat.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © 2024 LesPrivat. Hak Cipta Dilindungi.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-background/60 hover:text-primary text-sm transition-colors">
                Kebijakan Privasi
              </Link>
              <Link to="/terms" className="text-background/60 hover:text-primary text-sm transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
