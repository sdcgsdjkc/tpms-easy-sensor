
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
                      {/* Japanese Brands */}
                      <option value="Toyota Camry">Toyota Camry</option>
                      <option value="Toyota Land Cruiser">Toyota Land Cruiser</option>
                      <option value="Toyota RAV4">Toyota RAV4</option>
                      <option value="Toyota Highlander">Toyota Highlander</option>
                      <option value="Toyota Corolla">Toyota Corolla</option>
                      <option value="Lexus RX">Lexus RX</option>
                      <option value="Lexus LX">Lexus LX</option>
                      <option value="Lexus NX">Lexus NX</option>
                      <option value="Lexus ES">Lexus ES</option>
                      <option value="Honda Accord">Honda Accord</option>
                      <option value="Honda CR-V">Honda CR-V</option>
                      <option value="Honda Civic">Honda Civic</option>
                      <option value="Mazda CX-5">Mazda CX-5</option>
                      <option value="Mazda CX-9">Mazda CX-9</option>
                      <option value="Mazda 6">Mazda 6</option>
                      <option value="Nissan X-Trail">Nissan X-Trail</option>
                      <option value="Nissan Qashqai">Nissan Qashqai</option>
                      <option value="Nissan Patrol">Nissan Patrol</option>
                      <option value="Mitsubishi Outlander">Mitsubishi Outlander</option>
                      <option value="Mitsubishi Pajero">Mitsubishi Pajero</option>
                      <option value="Subaru Forester">Subaru Forester</option>
                      <option value="Subaru Outback">Subaru Outback</option>
                      
                      {/* Korean Brands */}
                      <option value="Hyundai Sonata">Hyundai Sonata</option>
                      <option value="Hyundai Santa Fe">Hyundai Santa Fe</option>
                      <option value="Hyundai Tucson">Hyundai Tucson</option>
                      <option value="Hyundai Creta">Hyundai Creta</option>
                      <option value="Hyundai Palisade">Hyundai Palisade</option>
                      <option value="Kia K5">Kia K5</option>
                      <option value="Kia Sportage">Kia Sportage</option>
                      <option value="Kia Sorento">Kia Sorento</option>
                      <option value="Kia Seltos">Kia Seltos</option>
                      <option value="Kia Carnival">Kia Carnival</option>
                      
                      {/* Chinese Brands */}
                      <option value="Chery Tiggo 4">Chery Tiggo 4</option>
                      <option value="Chery Tiggo 7 Pro">Chery Tiggo 7 Pro</option>
                      <option value="Chery Tiggo 8 Pro">Chery Tiggo 8 Pro</option>
                      <option value="Haval F7">Haval F7</option>
                      <option value="Haval Jolion">Haval Jolion</option>
                      <option value="Haval H9">Haval H9</option>
                      <option value="Geely Coolray">Geely Coolray</option>
                      <option value="Geely Tugella">Geely Tugella</option>
                      <option value="JAC S3">JAC S3</option>
                      <option value="JAC S7">JAC S7</option>
                      <option value="Exeed TXL">Exeed TXL</option>
                      <option value="Exeed VX">Exeed VX</option>
                      
                      {/* European Brands */}
                      <option value="Volkswagen Tiguan">Volkswagen Tiguan</option>
                      <option value="Volkswagen Touareg">Volkswagen Touareg</option>
                      <option value="Skoda Kodiaq">Skoda Kodiaq</option>
                      <option value="Skoda Octavia">Skoda Octavia</option>
                      <option value="BMW X5">BMW X5</option>
                      <option value="BMW X7">BMW X7</option>
                      <option value="Mercedes GLE">Mercedes GLE</option>
                      <option value="Mercedes GLS">Mercedes GLS</option>
                      <option value="Audi Q7">Audi Q7</option>
                      <option value="Audi Q5">Audi Q5</option>
                      
                      {/* American Brands */}
                      <option value="Chevrolet Tahoe">Chevrolet Tahoe</option>
                      <option value="Chevrolet Traverse">Chevrolet Traverse</option>
                      <option value="Cadillac Escalade">Cadillac Escalade</option>
                      <option value="Ford Explorer">Ford Explorer</option>
                      <option value="Jeep Grand Cherokee">Jeep Grand Cherokee</option>
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
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>
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
                  src="https://images.unsplash.com/photo-1589641757663-2a39055eed80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Датчик давления в шинах TPMS" 
                  className={`w-full h-auto object-cover transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
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
