import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { Particles } from './Particles';

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="bg-noise"></div>
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-primary mb-6">Стоимость услуг</h2>
          <p className="text-lg text-brand-muted">Честная цена без скрытых платежей. Фиксируется в договоре.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto bg-brand-primary rounded-[3rem] p-8 md:p-14 text-white relative overflow-hidden shadow-2xl border border-brand-accent/20"
        >
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
          <Particles />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            
            {/* Left Col */}
            <div className="flex-1">
              <h3 className="text-3xl font-heading font-bold mb-3">Банкротство «Под ключ»</h3>
              <p className="text-white/70 mb-10 text-lg">Полное сопровождение процедуры от сбора документов до списания долгов.</p>
              
              <div className="flex items-baseline gap-3 mb-10">
                <span className="text-6xl md:text-7xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-200">150 000</span>
                <span className="text-2xl text-brand-accent/80">₽</span>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
                <h4 className="font-bold mb-4 flex items-center gap-3 text-lg">
                  <span className="w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(212,175,55,0.8)]"></span>
                  Удобная рассрочка
                </h4>
                <ul className="space-y-3 text-white/80">
                  <li className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span>Первые 2 месяца:</span>
                    <span className="font-bold text-lg">по 30 000 ₽</span>
                  </li>
                  <li className="flex justify-between items-center pt-1">
                    <span>Далее ежемесячно:</span>
                    <span className="font-bold text-lg">по 15 000 ₽</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Col */}
            <div className="flex-1 w-full bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <ul className="space-y-5 mb-10">
                {[
                  "Сбор всех необходимых документов",
                  "Подготовка и подача заявления в суд",
                  "Участие в судебных заседаниях",
                  "Услуги финансового управляющего",
                  "Публикации в ЕФРСБ и Коммерсантъ",
                  "Защита от коллекторов и приставов",
                  "Гарантия списания долгов в договоре"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="bg-brand-accent/20 p-1 rounded-full shrink-0 mt-0.5">
                      <Check className="text-brand-accent" size={16} strokeWidth={3} />
                    </div>
                    <span className="text-white/90 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact-section" className="block w-full text-center bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/40 hover:-translate-y-1">
                Рассчитать стоимость
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
