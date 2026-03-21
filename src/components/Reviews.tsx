import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Reviews() {
  const reviews = [
    {
      name: "Елена В.",
      text: "Спасибо огромное Анатолию за помощь! Долги душили, коллекторы звонили каждый день. Обратилась по рекомендации. Все прошло гладко, как и обещали. Теперь я свободна от кредитов!",
      date: "15.02.2024"
    },
    {
      name: "Сергей М.",
      text: "Профессионал своего дела. Всегда на связи, все объясняет доступным языком. Процедура заняла 7 месяцев, долг 1.2 млн списан полностью. Рекомендую всем, кто попал в сложную ситуацию.",
      date: "03.11.2023"
    },
    {
      name: "Ольга П.",
      text: "Очень переживала за квартиру, но Анатолий успокоил и все грамотно оформил. Жилье сохранили, долги списали. Жалею только, что не обратилась раньше и столько нервов потратила.",
      date: "28.08.2023"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="bg-noise"></div>
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-primary mb-6">Отзывы клиентов</h2>
          <p className="text-lg text-brand-muted">Реальные истории людей, которые уже начали жизнь с чистого листа.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden rounded-[3rem] bg-brand-bg border border-brand-border/50 p-8 md:p-16 shadow-xl relative">
            <Quote className="absolute top-8 right-8 text-brand-accent/10 w-24 h-24 rotate-180" />
            
            <div className="flex gap-1.5 mb-8 relative z-10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-brand-accent fill-brand-accent drop-shadow-sm" />
              ))}
            </div>
            
            <div className="min-h-[180px] relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-xl md:text-2xl text-brand-primary leading-relaxed mb-10 font-heading italic">
                    «{reviews[currentIndex].text}»
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-brand-border/50 pt-6">
                    <div>
                      <p className="font-bold text-lg text-brand-primary">{reviews[currentIndex].name}</p>
                      <p className="text-sm text-brand-muted mt-1">{reviews[currentIndex].date}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-10">
            <button 
              onClick={prevReview}
              className="w-14 h-14 rounded-full border-2 border-brand-primary/20 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={nextReview}
              className="w-14 h-14 rounded-full border-2 border-brand-primary/20 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
