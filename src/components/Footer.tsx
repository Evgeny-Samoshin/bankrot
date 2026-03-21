import { MapPin, Phone, Mail } from 'lucide-react';
import { Particles } from './Particles';

export function Footer() {
  return (
    <footer id="contacts" className="bg-brand-primary text-white pt-24 pb-12 relative overflow-hidden">
      <div className="bg-noise"></div>
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <Particles />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-heading font-bold mb-6">Мокреньков Анатолий</h2>
            <p className="text-white/70 mb-8 max-w-md leading-relaxed text-lg">
              Арбитражный управляющий. Законное списание долгов физических лиц через суд по всей России.
            </p>
            <div className="space-y-5">
              <a href="tel:+79372220407" className="flex items-center gap-4 text-xl font-bold hover:text-brand-accent transition-colors">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Phone size={24} className="text-brand-accent" />
                </div>
                +7 937 222 04 07
              </a>
              <div className="flex items-center gap-4 text-white/80">
                <div className="bg-white/10 p-3 rounded-xl shrink-0">
                  <MapPin size={24} className="text-brand-accent" />
                </div>
                <span className="text-lg">г. Саратов, ул. Бабушкин взвоз, д. 10</span>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <div className="bg-white/10 p-3 rounded-xl shrink-0">
                  <Mail size={24} className="text-brand-accent" />
                </div>
                <span className="text-lg">Пн-Пт: 09:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="text-xl font-heading font-bold mb-8">Офис</h3>
            <div className="w-full h-72 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Replace with actual Yandex Maps iframe */}
              <iframe 
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A9c8b7a6f5e4d3c2b1a0&amp;source=constructor" 
                width="100%" 
                height="100%" 
                frameBorder="0"
                title="Офис на карте"
                className="bg-white/5"
              ></iframe>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Мокреньков Анатолий. Все права защищены.</p>
          <a href="/privacy.html" className="hover:text-white transition-colors">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
}
