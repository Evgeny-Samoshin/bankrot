import React, { useState } from 'react';
import { Lock } from 'lucide-react';

export function ContactForm({ className = '' }: { className?: string }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{name?: string, phone?: string}>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrors({});
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    const name = (data.name as string || '').trim();
    const phone = (data.phone as string || '').trim();
    const newErrors: {name?: string, phone?: string} = {};

    // Name validation: 2-50 characters, letters (Cyrillic/Latin), spaces, hyphens
    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s\-]{2,50}$/;
    if (!nameRegex.test(name)) {
      newErrors.name = 'Введите корректное имя (только буквы, от 2 до 50 символов)';
    }

    // Phone validation: allows +7, 8, 7, optional brackets, spaces, dashes, 10 digits total
    const phoneRegex = /^(\+7|8|7)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    if (!phoneRegex.test(phone)) {
      newErrors.phone = 'Введите корректный номер (например, +7 999 000-00-00)';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus('idle');
      return;
    }

    // Simulate API call to Telegram Bot
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form data:', data);
      // TODO: Implement actual Telegram Bot API call here
      // const BOT_TOKEN = 'YOUR_BOT_TOKEN';
      // const CHAT_ID = 'YOUR_CHAT_ID';
      // const text = `Новая заявка!\nИмя: ${data.name}\nТелефон: ${data.phone}\nДолг: ${data.debt}\nОписание: ${data.description || 'Нет'}`;
      // await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ chat_id: CHAT_ID, text }),
      // });
      
      setStatus('success');
      e.currentTarget.reset();
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`bg-white p-8 sm:p-10 rounded-[2rem] shadow-2xl border border-brand-border/50 ${className}`}>
      <h3 className="text-2xl font-heading font-bold text-brand-primary mb-8">Получить консультацию</h3>
      
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-text/80 mb-2">Ваше имя</label>
          <input 
            required 
            type="text" 
            id="name" 
            name="name" 
            className={`w-full px-4 py-3.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-accent bg-brand-bg/30 transition-all duration-300 ${errors.name ? 'border-red-500' : 'border-brand-border hover:border-brand-accent/50'}`} 
            placeholder="Иван Иванов" 
            onChange={() => setErrors(prev => ({ ...prev, name: undefined }))}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brand-text/80 mb-2">Номер телефона</label>
          <input 
            required 
            type="tel" 
            id="phone" 
            name="phone" 
            className={`w-full px-4 py-3.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-accent bg-brand-bg/30 transition-all duration-300 ${errors.phone ? 'border-red-500' : 'border-brand-border hover:border-brand-accent/50'}`} 
            placeholder="+7 (999) 000-00-00" 
            onChange={() => setErrors(prev => ({ ...prev, phone: undefined }))}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>}
        </div>
        
        <div>
          <label htmlFor="debt" className="block text-sm font-medium text-brand-text/80 mb-2">Сумма долга (примерно)</label>
          <select id="debt" name="debt" className="w-full px-4 py-3.5 rounded-xl border border-brand-border hover:border-brand-accent/50 focus:outline-none focus:ring-2 focus:ring-brand-accent bg-brand-bg/30 transition-all duration-300 appearance-none">
            <option value="less_300k">До 300 000 ₽</option>
            <option value="300k_500k">От 300 000 до 500 000 ₽</option>
            <option value="500k_1m">От 500 000 до 1 000 000 ₽</option>
            <option value="more_1m">Более 1 000 000 ₽</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-brand-text/80 mb-2">Кратко опишите ситуацию (необязательно)</label>
          <textarea id="description" name="description" rows={3} className="w-full px-4 py-3.5 rounded-xl border border-brand-border hover:border-brand-accent/50 focus:outline-none focus:ring-2 focus:ring-brand-accent bg-brand-bg/30 resize-none transition-all duration-300" placeholder="Например: есть ипотека, просрочки 2 месяца..."></textarea>
        </div>
        
        <button 
          type="submit" 
          disabled={status === 'loading' || status === 'success'}
          className="w-full bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 disabled:opacity-70 mt-4 shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/40"
        >
          {status === 'loading' ? 'Отправка...' : status === 'success' ? 'Заявка отправлена!' : 'Оставить заявку'}
        </button>
        
        {status === 'error' && (
          <p className="text-red-500 text-sm text-center mt-2">Произошла ошибка. Пожалуйста, попробуйте позже или позвоните нам.</p>
        )}
        
        <div className="flex items-center justify-center gap-2 text-brand-muted text-sm mt-6 pt-6 border-t border-brand-border/50">
          <Lock size={14} className="text-brand-accent" />
          <span>Данные защищены и не передаются третьим лицам</span>
        </div>
      </div>
    </form>
  );
}
