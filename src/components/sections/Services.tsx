
import React from 'react';
import { Gauge, Wrench, Copy, ShieldCheck } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';
import FadeIn from '../animations/FadeIn';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Gauge />,
      title: 'Продажа датчиков',
      price: '15 000',
      description: 'Универсальный датчик давления в шинах, совместимый с большинством автомобилей. Идеальное решение для установки на зимний комплект дисков.',
      delay: 100
    },
    {
      icon: <Wrench />,
      title: 'Прошивка датчиков',
      price: '2 500',
      description: 'Профессиональная прошивка датчиков TPMS под ваш автомобиль. После прошивки ошибка отсутствия датчика не будет отображаться на приборной панели.',
      delay: 200
    },
    {
      icon: <Copy />,
      title: 'Клонирование',
      description: 'Услуга клонирования параметров с оригинальных датчиков на новые. Обеспечивает полную совместимость с системой вашего автомобиля.',
      delay: 300
    },
    {
      icon: <ShieldCheck />,
      title: 'Гарантия',
      description: 'Предоставляем гарантию на все датчики и выполненные работы. Наша цель — обеспечить вашу безопасность и комфорт на дороге.',
      delay: 400
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Наши услуги</h2>
            <p className="text-gray-600 text-lg">
              Предлагаем комплексное решение для системы контроля давления в шинах вашего автомобиля.
              Специализируемся на прошивке датчиков TPMS для установки на зимний комплект дисков.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              price={service.price}
              delay={service.delay}
            />
          ))}
        </div>

        <FadeIn delay={500}>
          <div className="bg-tpms-grey mt-16 p-6 md:p-8 rounded-lg border border-gray-100 shadow-soft">
            <h3 className="text-xl font-semibold mb-4">Важная информация</h3>
            <p className="text-gray-700">
              Обратите внимание, что мы не осуществляем установку датчиков. После приобретения и прошивки 
              датчика, вы самостоятельно устанавливаете его на шиномонтаже. Наша основная услуга — программирование 
              и настройка датчиков под конкретную модель автомобиля.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Services;
