
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">TPMS Easy Sensor</h3>
            <p className="text-gray-600 mb-4">
              Специализированный сервис по прошивке датчиков давления в шинах с возможностью установки на зимний комплект дисков.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-600 hover:text-tpms-blue transition-colors">Продажа датчиков</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-tpms-blue transition-colors">Прошивка датчиков</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-tpms-blue transition-colors">Клонирование</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-tpms-blue transition-colors">Комплектующие</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-600 hover:text-tpms-blue transition-colors">Услуги</a></li>
              <li><a href="#benefits" className="text-gray-600 hover:text-tpms-blue transition-colors">Преимущества</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-tpms-blue transition-colors">О нас</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-tpms-blue transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-tpms-blue mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600">Усть-Каменогорск, ВКО, Казахстан</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-tpms-blue mr-2 flex-shrink-0" />
                <a href="tel:+77777777777" className="text-gray-600 hover:text-tpms-blue transition-colors">+7 (777) 777-7777</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-tpms-blue mr-2 flex-shrink-0" />
                <a href="mailto:info@tpms-easy.kz" className="text-gray-600 hover:text-tpms-blue transition-colors">info@tpms-easy.kz</a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-tpms-blue mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600">Пн-Пт: 9:00 - 18:00<br />Сб: 9:00 - 14:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} TPMS Easy Sensor. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
