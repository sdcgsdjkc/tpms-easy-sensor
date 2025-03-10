
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Calendar, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import CustomButton from '../ui/CustomButton';
import FadeIn from '../animations/FadeIn';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    car: '',
    message: '',
    date: '',
    time: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        car: '',
        message: '',
        date: '',
        time: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-tpms-grey">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Связаться с нами</h2>
            <p className="text-gray-600 text-lg">
              Запишитесь на прошивку датчика TPMS или задайте интересующий вопрос. 
              Мы с радостью поможем вам решить любые задачи, связанные с системой контроля давления в шинах.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-10">
          <FadeIn delay={100} className="lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-soft h-full">
              <h3 className="text-xl font-semibold mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-tpms-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Адрес</h4>
                    <p className="text-gray-600">Усть-Каменогорск, ВКО, Казахстан</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-tpms-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Телефон</h4>
                    <a href="tel:+77777777777" className="text-gray-600 hover:text-tpms-blue transition-colors">
                      +7 (777) 777-7777
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-tpms-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:info@tpms-easy.kz" className="text-gray-600 hover:text-tpms-blue transition-colors">
                      info@tpms-easy.kz
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-tpms-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Часы работы</h4>
                    <p className="text-gray-600">
                      Пн-Пт: 9:00 - 18:00<br />
                      Сб: 9:00 - 14:00<br />
                      Вс: Выходной
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-3">Мы на карте</h4>
                <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75603.72458272601!2d82.5423573!3d49.95353695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42f84e7cf73043cb%3A0x59e3a75fb4a7b0d4!2z0KPRgdGC0Ywt0JrQsNC80LXQvdC-0LPQvtGA0YHQuiDQmtCw0LfQsNGF0YHRgtCw0L0!5e0!3m2!1sru!2s!4v1684338972983!5m2!1sru!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Карта расположения"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={200} className="lg:w-2/3">
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <h3 className="text-xl font-semibold mb-6">Запись на прошивку</h3>
              
              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6">
                  <h4 className="font-medium mb-2">Заявка успешно отправлена!</h4>
                  <p>Спасибо за обращение. Мы свяжемся с вами в ближайшее время для подтверждения записи.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tpms-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tpms-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tpms-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="car" className="block text-sm font-medium text-gray-700 mb-1">
                      Марка и модель авто *
                    </label>
                    <input
                      type="text"
                      id="car"
                      name="car"
                      value={formData.car}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tpms-blue"
                      placeholder="Например: Toyota Camry 70"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Предпочтительная дата *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tpms-blue"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                      Предпочтительное время *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Clock className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tpms-blue"
                      >
                        <option value="">Выберите время</option>
                        <option value="09:00">09:00 - 10:00</option>
                        <option value="10:00">10:00 - 11:00</option>
                        <option value="11:00">11:00 - 12:00</option>
                        <option value="13:00">13:00 - 14:00</option>
                        <option value="14:00">14:00 - 15:00</option>
                        <option value="15:00">15:00 - 16:00</option>
                        <option value="16:00">16:00 - 17:00</option>
                        <option value="17:00">17:00 - 18:00</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Дополнительная информация
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tpms-blue"
                    placeholder="Напишите любую дополнительную информацию, которая может быть важна..."
                  ></textarea>
                </div>
                
                <div className="flex justify-end">
                  <CustomButton 
                    type="submit" 
                    size="lg"
                    isLoading={isSubmitting}
                    disabled={isSubmitting}
                  >
                    Отправить заявку
                  </CustomButton>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
