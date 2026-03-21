import { AlertCircle, CreditCard, ShieldAlert, Frown } from 'lucide-react';
import { motion } from 'motion/react';

export function Problems() {
  const problems = [
    {
      icon: <ShieldAlert size={32} className="text-red-500" />,
      title: "Звонят коллекторы",
      desc: "Постоянные звонки вам, родственникам и на работу с угрозами и требованиями вернуть долг."
    },
    {
      icon: <CreditCard size={32} className="text-brand-accent" />,
      title: "Нечем платить кредиты",
      desc: "Доходов не хватает на внесение ежемесячных платежей, копятся пени и штрафы."
    },
    {
      icon: <AlertCircle size={32} className="text-brand-primary" />,
      title: "Арестовали счета",
      desc: "Приставы списывают 50% зарплаты, заблокировали банковские карты и запретили выезд за границу."
    },
    {
      icon: <Frown size={32} className="text-brand-muted" />,
      title: "Постоянный стресс",
      desc: "Страх за будущее, невозможность планировать жизнь и обеспечивать семью из-за долгов."
    }
  ];

  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Thematic Background Image with Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop" 
          alt="Financial Stress" 
          className="w-full h-full object-cover opacity-[0.03] animate-slow-pan mix-blend-multiply" 
          referrerPolicy="no-referrer" 
        />
      </div>
      <div className="bg-noise"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-primary mb-6">Узнаёте свою ситуацию?</h2>
          <p className="text-lg text-brand-muted">Если вы столкнулись хотя бы с одной из этих проблем, закон о банкротстве (№127-ФЗ) поможет вам начать жизнь с чистого листа.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-brand-bg p-8 sm:p-10 rounded-[2rem] border border-brand-border/50 hover:shadow-xl hover:border-brand-accent/30 transition-all duration-500 group"
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform duration-500">
                {prob.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-primary mb-4">{prob.title}</h3>
              <p className="text-brand-muted leading-relaxed">{prob.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
