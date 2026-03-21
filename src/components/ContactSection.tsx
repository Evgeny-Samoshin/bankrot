import { motion } from 'motion/react';
import { ContactForm } from './ContactForm';

export function ContactSection() {
  return (
    <section id="contact-section" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="bg-noise"></div>
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-primary mb-6">Остались вопросы?</h2>
          <p className="text-lg text-brand-muted">Оставьте заявку, и мы свяжемся с вами для бесплатной консультации.</p>
        </motion.div>
        
        <div className="max-w-md mx-auto relative">
          <div className="absolute -inset-1 bg-gradient-to-br from-brand-accent/30 to-transparent rounded-[2.5rem] blur-xl -z-10"></div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
