
import React from 'react';
import FadeIn from '../animations/FadeIn';
import { Award, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">О нашем сервисе</h2>
              <p className="text-gray-600 text-lg mb-6">
                Мы специализируемся на продаже и прошивке датчиков давления в шинах (TPMS) в Усть-Каменогорске. 
                Наша цель - обеспечить автовладельцев качественным и доступным решением проблемы 
                контроля давления в шинах при сезонной смене колес.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Главное преимущество наших услуг - возможность установки универсального датчика на зимний 
                комплект дисков, при этом ошибка отсутствия датчика не будет отображаться на приборной панели 
                вашего автомобиля.
              </p>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Award className="mr-2 text-tpms-blue" />
                  Почему нам доверяют
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-tpms-blue mr-2 mt-1 flex-shrink-0" />
                    <span>Более 5 лет опыта работы с датчиками TPMS</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-tpms-blue mr-2 mt-1 flex-shrink-0" />
                    <span>Профессиональное оборудование для прошивки</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-tpms-blue mr-2 mt-1 flex-shrink-0" />
                    <span>Большой каталог совместимости с различными марками авто</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-tpms-blue mr-2 mt-1 flex-shrink-0" />
                    <span>Сотни довольных клиентов по всему Казахстану</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-tpms-blue mr-2 mt-1 flex-shrink-0" />
                    <span>Оперативное обслуживание и индивидуальный подход</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
          
          <div className="lg:w-1/2">
            <FadeIn direction="left" delay={300}>
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-xl shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1652712446131-bbc62cab35ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                    alt="Процесс прошивки TPMS датчика" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                  <div className="text-lg font-bold text-tpms-blue">1000+</div>
                  <div className="text-gray-600">успешно прошитых датчиков</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
