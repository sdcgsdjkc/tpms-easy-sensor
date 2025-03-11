
import React, { useEffect, useState } from 'react';
import CustomButton from '../ui/CustomButton';
import { ArrowDown, Send } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [carModel, setCarModel] = useState('Toyota Camry');
  const [carYear, setCarYear] = useState('2020');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openWhatsApp = () => {
    const message = `Здравствуйте! Хочу записаться на прошивку TPMS. Моя машина: ${carModel} ${carYear}`;
    const phone = "77764863666"; // Without the + as it's added in the URL
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

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
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
            
            <FadeIn delay={450}>
              <div className="mb-8 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-3 text-tpms-blue">Запись через WhatsApp:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label htmlFor="carModel" className="block text-sm font-medium text-gray-700 mb-1">Модель автомобиля</label>
                    <select 
                      id="carModel"
                      value={carModel}
                      onChange={(e) => setCarModel(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-tpms-blue focus:border-tpms-blue"
                    >
                      <option value="Toyota Camry">Toyota Camry</option>
                      <option value="Toyota Land Cruiser">Toyota Land Cruiser</option>
                      <option value="Toyota RAV4">Toyota RAV4</option>
                      <option value="Lexus RX">Lexus RX</option>
                      <option value="Lexus LX">Lexus LX</option>
                      <option value="Honda Accord">Honda Accord</option>
                      <option value="Honda CR-V">Honda CR-V</option>
                      <option value="Hyundai Sonata">Hyundai Sonata</option>
                      <option value="Hyundai Santa Fe">Hyundai Santa Fe</option>
                      <option value="Kia K5">Kia K5</option>
                      <option value="Kia Sportage">Kia Sportage</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="carYear" className="block text-sm font-medium text-gray-700 mb-1">Год выпуска</label>
                    <select 
                      id="carYear"
                      value={carYear}
                      onChange={(e) => setCarYear(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-tpms-blue focus:border-tpms-blue"
                    >
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                    </select>
                  </div>
                </div>
                <button 
                  onClick={openWhatsApp}
                  className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-md flex items-center justify-center gap-2 transition-colors"
                >
                  <Send size={18} /> Записаться через WhatsApp
                </button>
              </div>
            </FadeIn>
            
            <FadeIn delay={500}>
              <div className="grid grid-cols-3 gap-4">
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
                  src="https://i.imgur.com/XVXxQUK.jpg" 
                  alt="Autel TPMS датчик" 
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
