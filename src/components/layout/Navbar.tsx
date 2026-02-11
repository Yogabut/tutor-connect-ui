import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logo from '@/assets/image.png';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/about', label: 'Tentang Kami' },
  { href: '/services', label: 'Layanan' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/documentation', label: 'Dokumentasi' },
  { href: '/feedback', label: 'Hubungi Kami' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-hero shadow-glow">
             <img src={logo} alt="Logo" className='rounded-md' />
            </div>
            <span className="text-xl font-bold text-foreground">
              Les Private Denpasar
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  location.pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          {/* <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/login">Masuk</Link>
            </Button>
            <Button variant="accent" asChild>
              <Link to="/register">Daftar Sekarang</Link>
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-slide-up">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <Button variant="outline" asChild className="w-full">
                <Link to="/login" onClick={() => setIsOpen(false)}>Masuk</Link>
              </Button>
              <Button variant="accent" asChild className="w-full">
                <Link to="/register" onClick={() => setIsOpen(false)}>Daftar Sekarang</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
