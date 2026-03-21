import { motion } from 'motion/react';

export function Cases() {
  const cases = [
    {
      id: "А42-1234/2023",
      debt: "1 250 000 ₽",
      duration: "7 месяцев",
      situation: "Потеря работы, 3 кредита в разных банках, 5 микрозаймов. Начались звонки коллекторов родственникам.",
      result: "Долг полностью списан. Сохранено единственное жилье (квартира). Звонки прекратились через неделю после обращения."
    },
    {
      id: "А57-5678/2023",
      debt: "840 000 ₽",
      duration: "6 месяцев",
      situation: "Бизнес не пошел, остались долги как ИП перед поставщиками и налоги. Приставы арестовали счета.",
      result: "Процедура завершена успешно. Списаны все долги, включая налоги. Сняты аресты со всех банковских счетов."
    },
    {
      id: "А12-9012/2023",
      debt: "2 100 000 ₽",
      duration: "8 месяцев",
      situation: "Кредит на лечение родственника. Платежи превысили ежемесячный доход. Угроза потери автомобиля.",
      result: "Долг списан в полном объеме. Автомобиль удалось сохранить благодаря грамотной стратегии защиты имущества."
    }
  ];

  return (
    <section id="cases" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="bg-noise"></div>
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-primary mb-6">Успешные дела</h2>
          <p className="text-lg text-brand-muted">Более 130 человек уже избавились от долгов с нашей помощью. Вот некоторые из них.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 sm:p-10 rounded-[2rem] border border-brand-border/50 shadow-lg hover:shadow-2xl hover:border-brand-accent/30 transition-all duration-500 flex flex-col h-full group"
            >
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-brand-border/50">
                <span className="text-xs font-mono text-brand-muted bg-brand-bg px-3 py-1.5 rounded-md border border-brand-border/50">Дело № {c.id}</span>
                <span className="text-sm font-medium text-brand-accent bg-brand-accent/10 px-3 py-1.5 rounded-md">{c.duration}</span>
              </div>
              
              <div className="mb-8">
                <p className="text-sm text-brand-muted mb-2">Сумма списанного долга:</p>
                <p className="text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">{c.debt}</p>
              </div>

              <div className="space-y-6 mb-10 flex-grow">
                <div>
                  <p className="text-sm font-bold text-brand-primary mb-2 uppercase tracking-wider">Ситуация:</p>
                  <p className="text-base text-brand-muted leading-relaxed">{c.situation}</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-success mb-2 uppercase tracking-wider">Результат:</p>
                  <p className="text-base text-brand-text leading-relaxed">{c.result}</p>
                </div>
              </div>

              <a href="#contact-section" className="mt-auto text-center w-full py-4 px-6 rounded-xl border-2 border-brand-primary text-brand-primary font-bold hover:bg-brand-primary hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-brand-primary/20">
                Хочу так же
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
