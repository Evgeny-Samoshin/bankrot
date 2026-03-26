import { motion } from 'motion/react';

export function Timeline() {
  const steps = [
    {
      num: "01",
      title: "Бесплатная консультация",
      desc: "Анализируем вашу ситуацию, оцениваем риски и составляем план действий. Заключаем договор с гарантией результата."
    },
    {
      num: "02",
      title: "Сбор документов",
      desc: "Мы сами собираем все необходимые справки, выписки и документы для подачи заявления в Арбитражный суд."
    },
    {
      num: "03",
      title: "Подача заявления",
      desc: "Составляем грамотное заявление и направляем его в суд. С этого момента прекращаются звонки коллекторов и начисление пеней."
    },
    {
      num: "04",
      title: "Первое заседание",
      desc: "Суд признает вас банкротом и вводит процедуру реализации имущества. Назначается финансовый управляющий (Анатолий Мокреньков)."
    },
    {
      num: "05",
      title: "Процедура банкротства",
      desc: "Длится в среднем 6 месяцев. Управляющий проводит финансовый анализ, защищает ваш доход (прожиточный минимум) и имущество."
    },
    {
      num: "06",
      title: "Списание долгов",
      desc: "Финальное заседание суда. Вынесение определения о завершении процедуры и полном освобождении вас от долгов."
    }
  ];

  return (
    <section id="timeline" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="bg-noise"></div>
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-primary mb-6">Как проходит процедура</h2>
          <p className="text-lg text-brand-muted">Прозрачный процесс списания долгов от первого звонка до решения суда.</p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-accent/30 -translate-x-1/2"></div>

          <div className="space-y-16">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Content */}
                <div className={`md:w-1/2 w-full ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="bg-white p-8 sm:p-10 rounded-[2rem] shadow-lg border border-brand-border/50 relative z-10 hover:shadow-2xl hover:border-brand-accent/30 transition-colors duration-500 group">
                    <span className="text-6xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-brand-primary/10 to-transparent absolute top-4 right-6 group-hover:from-brand-accent/20 transition-colors duration-500">{step.num}</span>
                    <h3 className="text-2xl font-heading font-bold text-brand-primary mb-4 relative z-10">{step.title}</h3>
                    <p className="text-brand-muted leading-relaxed relative z-10">{step.desc}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-white border-4 border-brand-accent/20 rounded-full items-center justify-center shadow-md z-20">
                  <div className="w-6 h-6 bg-brand-accent rounded-full shadow-[0_0_15px_rgba(212,175,55,0.6)]"></div>
                </div>

                {/* Empty Space for layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
