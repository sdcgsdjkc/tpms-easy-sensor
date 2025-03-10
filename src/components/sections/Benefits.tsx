
import React from 'react';
import { CreditCard, Clock, Shield, AlertTriangle, Zap, Wrench } from 'lucide-react';
import BenefitCard from '../ui/BenefitCard';
import FadeIn from '../animations/FadeIn';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <AlertTriangle />,
      title: 'Нет ошибок на панели',
      description: 'После установки наших датчиков на зимний комплект дисков, ошибка отсутствия датчика не будет отображаться на приборной панели.',
      delay: 100,
      direction: 'right' as const
    },
    {
      icon: <CreditCard />,
      title: 'Низкая цена',
      description: 'Предлагаем датчики по цене 15 000 тенге и услугу прошивки всего за 2 500 тенге — одни из самых выгодных предложений на рынке.',
      delay: 150,
      direction: 'right' as const
    },
    {
      icon: <Clock />,
      title: 'Быстрое обслуживание',
      description: 'Прошивка датчиков занимает минимум времени. Вы получите готовый запрограммированный датчик в кратчайшие сроки.',
      delay: 200,
      direction: 'right' as const
    },
    {
      icon: <Shield />,
      title: 'Гарантия качества',
      description: 'Предоставляем гарантию на все датчики и работы по их прошивке. Вы можете быть уверены в надежности наших услуг.',
      delay: 250,
      direction: 'left' as const
    },
    {
      icon: <Zap />,
      title: 'Универсальность',
      description: 'Наши датчики совместимы с большинством марок и моделей автомобилей. Мы подберем и настроим датчик именно под ваш автомобиль.',
      delay: 300,
      direction: 'left' as const
    },
    {
      icon: <Wrench />,
      title: 'Профессиональный подход',
      description: 'Используем современное оборудование и профессиональное программное обеспечение для прошивки датчиков.',
      delay: 350,
      direction: 'left' as const
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-tpms-grey">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Преимущества наших услуг</h2>
            <p className="text-gray-600 text-lg">
              Узнайте, почему клиенты выбирают именно нас для решения задач, связанных с датчиками TPMS.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={benefit.delay}
              direction={benefit.direction}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
