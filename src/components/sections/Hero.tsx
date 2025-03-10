
import React, { useEffect, useState } from 'react';
import CustomButton from '../ui/CustomButton';
import { ArrowDown } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-10 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent -z-10"></div>
      
      {/* Floating circles decoration */}
      <div className="absolute top-1/4 right-10 w-60 h-60 bg-tpms-blue opacity-5 rounded-full animate-float -z-10"></div>
      <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-tpms-blue opacity-5 rounded-full animate-float animation-delay-1000 -z-10"></div>
      <div className="absolute top-2/3 right-1/4 w-20 h-20 bg-tpms-blue opacity-5 rounded-full animate-float animation-delay-2000 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className={`lg:w-1/2 lg:pr-10 mb-10 lg:mb-0 transition-opacity duration-700 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <FadeIn delay={100}>
              <div className="inline-block px-3 py-1 bg-tpms-blue bg-opacity-10 text-tpms-blue-dark rounded-full text-sm font-medium mb-6">
                Датчики TPMS в Усть-Каменогорске
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Универсальный датчик TPMS – <span className="text-tpms-blue">надежность без ошибок!</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={300}>
              <p className="text-lg text-gray-600 mb-8">
                Установите универсальный датчик на зимний комплект дисков и забудьте о ошибках на приборной панели. 
                Профессиональная прошивка датчиков TPMS по доступной цене.
              </p>
            </FadeIn>
            
            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-4">
                <CustomButton
                  onClick={() => {
                    const servicesSection = document.getElementById('services');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  size="lg"
                >
                  Наши услуги
                </CustomButton>
                <CustomButton
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  variant="outline"
                  size="lg"
                >
                  Записаться на прошивку
                </CustomButton>
              </div>
            </FadeIn>
            
            <FadeIn delay={500}>
              <div className="mt-10 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-tpms-blue">15 000 ₸</div>
                  <div className="text-sm text-gray-600">цена датчика</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tpms-blue">2 500 ₸</div>
                  <div className="text-sm text-gray-600">стоимость прошивки</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tpms-blue">100%</div>
                  <div className="text-sm text-gray-600">гарантия качества</div>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <div className="lg:w-1/2 relative">
            <FadeIn delay={300} direction="left">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1635770311293-b9e451adbd1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="TPMS датчик" 
                  className={`w-full h-auto object-cover transition-all duration-1000 image-lazy ${isLoaded ? 'loaded' : 'loading'}`}
                  onLoad={() => setIsLoaded(true)}
                />
              </div>
            </FadeIn>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <button 
            onClick={() => {
              const servicesSection = document.getElementById('services');
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-white rounded-full p-2 shadow-lg text-tpms-blue hover:text-tpms-blue-dark transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
