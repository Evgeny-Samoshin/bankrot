import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Услуги', href: '#services' },
    { name: 'Процедура', href: '#timeline' },
    { name: 'Стоимость', href: '#pricing' },
    { name: 'Кейсы', href: '#cases' },
    { name: 'Контакты', href: '#contact-section' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
        <a href="#" className="flex flex-col">
          <span className={`text-xl md:text-2xl font-heading font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-brand-primary' : 'text-white'}`}>
            Мокреньков Анатолий
          </span>
          <span className={`text-xs md:text-sm font-medium tracking-wide mt-0.5 transition-colors duration-300 ${isScrolled ? 'text-brand-primary/70' : 'text-brand-accent'}`}>
            Арбитражный управляющий
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`text-base font-medium transition-colors duration-300 ${isScrolled ? 'text-brand-text hover:text-brand-accent' : 'text-white hover:text-yellow-200'}`}>
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contact-section" className="bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-2.5 px-6 rounded-xl transition-colors duration-300 text-base shadow-lg shadow-brand-accent/20">
            Получить консультацию
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`lg:hidden p-2 transition-colors duration-300 ${isScrolled ? 'text-brand-primary' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-brand-border py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-brand-text py-2 border-b border-brand-border/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact-section" 
            className="bg-brand-accent text-white font-bold py-3 px-6 rounded-xl text-center mt-2 shadow-lg shadow-brand-accent/20"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Получить консультацию
          </a>
        </div>
      )}
    </header>
  );
}
