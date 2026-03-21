import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Particles } from './Particles';
import heroImage from '../assets/hero3.png';
import heroBg from '../assets/1600x1114-legal-unfiltered-AdobeStock-sergign-308429830.jpeg';

function AnimatedCounter({ end, suffix = '', duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span className="text-3xl md:text-4xl font-heading font-bold text-brand-accent">{count}{suffix}</span>;
}

export function Hero() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-0 overflow-hidden bg-brand-primary text-white">
      <div className="bg-noise"></div>
      {/* Thematic Background Image with Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Защита прав"
          className="w-full h-full object-cover opacity-20 animate-slow-pan"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/90 via-brand-primary/70 to-brand-primary"></div>
      </div>
      <Particles />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {/* Spacer to maintain vertical positioning */}
            <div className="h-[38px] mb-8"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Спишем ваши долги <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-200 italic font-normal">законно</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light">
              Официальное банкротство физических лиц.
            </p>

            {/* Counters */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 border-t border-white/10 pt-4 mb-10">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <AnimatedCounter end={9} suffix=" лет" />
                <p className="text-sm text-white/80 mt-2 font-medium uppercase tracking-wider">опыта работы</p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                <AnimatedCounter end={450} suffix="+" />
                <p className="text-sm text-white/80 mt-2 font-medium uppercase tracking-wider">дел завершено</p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                <AnimatedCounter end={500} suffix=" млн₽" />
                <p className="text-sm text-white/80 mt-2 font-medium uppercase tracking-wider">долгов списано</p>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex justify-center mt-4">
              <a
                href="#contact-section"
                className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-5 px-14 w-full sm:w-auto text-center rounded-2xl transition-all duration-300 shadow-xl shadow-brand-accent/30 hover:shadow-brand-accent/50 hover:-translate-y-1 text-xl md:text-2xl"
              >
                Списать долги
              </a>
            </motion.div>
          </motion.div>

          {/* Image & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:ml-auto w-full max-w-md relative z-10 flex flex-col items-center justify-end self-end"
          >
            <div className="relative w-full flex justify-center items-end">
              {/* Decorative glow behind the person */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl -z-10"></div>

              <img
                src={heroImage}
                alt="Анатолий Мокреньков"
                className="w-full max-w-[450px] h-auto object-contain drop-shadow-2xl pointer-events-none transform-gpu"
                style={{ backfaceVisibility: 'hidden' }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
