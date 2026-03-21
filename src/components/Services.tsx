import { Scale, FileText, CheckCircle, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

export function Services() {
  const services = [
    {
      icon: <Scale size={32} className="text-brand-accent" />,
      title: "Банкротство через суд",
      desc: "Полное списание долгов по кредитам, микрозаймам, налогам и ЖКХ через Арбитражный суд. Защита имущества и доходов."
    },
    {
      icon: <FileText size={32} className="text-brand-accent" />,
      title: "Реструктуризация долгов",
      desc: "Изменение условий выплаты долга без статуса банкрота. Фиксация суммы долга, остановка начисления процентов и штрафов."
    },
    {
      icon: <CheckCircle size={32} className="text-brand-accent" />,
      title: "Сопровождение под ключ",
      desc: "Берем на себя сбор всех справок, общение с кредиторами, составление заявлений и представительство в суде."
    },
    {
      icon: <PhoneCall size={32} className="text-brand-accent" />,
      title: "Бесплатная консультация",
      desc: "Анализ вашей финансовой ситуации, оценка рисков и подбор оптимального варианта решения проблемы с долгами."
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-primary text-white relative overflow-hidden">
      {/* Thematic Background Image with Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop" 
          alt="Legal Documents" 
          className="w-full h-full object-cover opacity-10 animate-slow-pan" 
          referrerPolicy="no-referrer" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-brand-primary/90 to-brand-primary"></div>
      </div>
      <div className="bg-noise"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Наши услуги</h2>
          <p className="text-lg text-white/70">Мы предлагаем комплексные решения для законного избавления от долгов.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((srv, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col sm:flex-row gap-6 p-8 sm:p-10 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-brand-accent/30 transition-all duration-500 group"
            >
              <div className="bg-white/10 w-20 h-20 shrink-0 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-500">
                {srv.icon}
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-white mb-3">{srv.title}</h3>
                <p className="text-white/70 leading-relaxed">{srv.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
