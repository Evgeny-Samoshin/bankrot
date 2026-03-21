import { CheckCircle2, CreditCard, Home, Zap, Clock, Scale } from 'lucide-react';
import { motion } from 'motion/react';
import { Particles } from './Particles';

export function Advantages() {
  const advantages = [
    {
      icon: <CheckCircle2 size={24} className="text-brand-accent" />,
      title: "Гарантия результата",
      desc: "Прописываем в договоре финансовую ответственность за результат процедуры."
    },
    {
      icon: <CreditCard size={24} className="text-brand-accent" />,
      title: "Удобная рассрочка",
      desc: "Комфортные платежи от 15 000 ₽/мес. Первые 2 платежа по 30 000 ₽."
    },
    {
      icon: <Home size={24} className="text-brand-accent" />,
      title: "Сохраняем имущество",
      desc: "Законно защищаем единственное жилье и другие важные активы от реализации."
    },
    {
      icon: <Zap size={24} className="text-brand-accent" />,
      title: "Скорость работы",
      desc: "Быстрый сбор документов и подача заявления в суд в кратчайшие сроки."
    },
    {
      icon: <Clock size={24} className="text-brand-accent" />,
      title: "9 лет опыта",
      desc: "Более 130 успешно завершенных дел и около 500 млн рублей списанных долгов."
    },
    {
      icon: <Scale size={24} className="text-brand-accent" />,
      title: "Штатный управляющий",
      desc: "Работаем без посредников. Анатолий Мокреньков лично контролирует ход дела."
    }
  ];

  return (
    <section className="py-24 bg-brand-primary text-white relative overflow-hidden">
      <div className="bg-noise"></div>
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-light/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
      <Particles />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Почему выбирают нас</h2>
          <p className="text-lg text-white/70">Мы делаем процедуру банкротства прозрачной, безопасной и предсказуемой для каждого клиента.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 hover:border-brand-accent/30 transition-all duration-500 group"
            >
              <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {adv.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{adv.title}</h3>
              <p className="text-base text-white/80 leading-relaxed">{adv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
