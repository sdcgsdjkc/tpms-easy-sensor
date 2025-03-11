
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
                      <optgroup label="Японские автомобили">
                        <option value="Toyota Camry">Toyota Camry</option>
                        <option value="Toyota Land Cruiser">Toyota Land Cruiser</option>
                        <option value="Toyota Land Cruiser Prado">Toyota Land Cruiser Prado</option>
                        <option value="Toyota RAV4">Toyota RAV4</option>
                        <option value="Toyota Highlander">Toyota Highlander</option>
                        <option value="Toyota Corolla">Toyota Corolla</option>
                        <option value="Toyota Alphard">Toyota Alphard</option>
                        <option value="Toyota Harrier">Toyota Harrier</option>
                        <option value="Toyota Fortuner">Toyota Fortuner</option>
                        <option value="Toyota Venza">Toyota Venza</option>
                        <option value="Lexus RX">Lexus RX</option>
                        <option value="Lexus LX">Lexus LX</option>
                        <option value="Lexus NX">Lexus NX</option>
                        <option value="Lexus ES">Lexus ES</option>
                        <option value="Lexus LS">Lexus LS</option>
                        <option value="Lexus GX">Lexus GX</option>
                        <option value="Lexus UX">Lexus UX</option>
                        <option value="Honda Accord">Honda Accord</option>
                        <option value="Honda CR-V">Honda CR-V</option>
                        <option value="Honda Civic">Honda Civic</option>
                        <option value="Honda Pilot">Honda Pilot</option>
                        <option value="Honda HR-V">Honda HR-V</option>
                        <option value="Mazda CX-5">Mazda CX-5</option>
                        <option value="Mazda CX-9">Mazda CX-9</option>
                        <option value="Mazda CX-30">Mazda CX-30</option>
                        <option value="Mazda 6">Mazda 6</option>
                        <option value="Mazda 3">Mazda 3</option>
                        <option value="Nissan X-Trail">Nissan X-Trail</option>
                        <option value="Nissan Qashqai">Nissan Qashqai</option>
                        <option value="Nissan Patrol">Nissan Patrol</option>
                        <option value="Nissan Murano">Nissan Murano</option>
                        <option value="Nissan Pathfinder">Nissan Pathfinder</option>
                        <option value="Nissan Teana">Nissan Teana</option>
                        <option value="Nissan Juke">Nissan Juke</option>
                        <option value="Mitsubishi Outlander">Mitsubishi Outlander</option>
                        <option value="Mitsubishi Pajero">Mitsubishi Pajero</option>
                        <option value="Mitsubishi Pajero Sport">Mitsubishi Pajero Sport</option>
                        <option value="Mitsubishi ASX">Mitsubishi ASX</option>
                        <option value="Mitsubishi Eclipse Cross">Mitsubishi Eclipse Cross</option>
                        <option value="Subaru Forester">Subaru Forester</option>
                        <option value="Subaru Outback">Subaru Outback</option>
                        <option value="Subaru XV">Subaru XV</option>
                        <option value="Subaru Legacy">Subaru Legacy</option>
                        <option value="Suzuki Grand Vitara">Suzuki Grand Vitara</option>
                        <option value="Suzuki SX4">Suzuki SX4</option>
                        <option value="Suzuki Vitara">Suzuki Vitara</option>
                        <option value="Infiniti QX80">Infiniti QX80</option>
                        <option value="Infiniti QX60">Infiniti QX60</option>
                        <option value="Infiniti QX50">Infiniti QX50</option>
                        <option value="Infiniti Q50">Infiniti Q50</option>
                      </optgroup>
                      
                      {/* Korean Brands */}
                      <optgroup label="Корейские автомобили">
                        <option value="Hyundai Sonata">Hyundai Sonata</option>
                        <option value="Hyundai Santa Fe">Hyundai Santa Fe</option>
                        <option value="Hyundai Tucson">Hyundai Tucson</option>
                        <option value="Hyundai Palisade">Hyundai Palisade</option>
                        <option value="Hyundai Creta">Hyundai Creta</option>
                        <option value="Hyundai Elantra">Hyundai Elantra</option>
                        <option value="Hyundai i30">Hyundai i30</option>
                        <option value="Hyundai Accent">Hyundai Accent</option>
                        <option value="Hyundai Kona">Hyundai Kona</option>
                        <option value="Kia K5">Kia K5</option>
                        <option value="Kia Optima">Kia Optima</option>
                        <option value="Kia Sportage">Kia Sportage</option>
                        <option value="Kia Sorento">Kia Sorento</option>
                        <option value="Kia Carnival">Kia Carnival</option>
                        <option value="Kia Seltos">Kia Seltos</option>
                        <option value="Kia Cerato">Kia Cerato</option>
                        <option value="Kia Rio">Kia Rio</option>
                        <option value="Kia Soul">Kia Soul</option>
                        <option value="Kia Telluride">Kia Telluride</option>
                        <option value="Kia Stinger">Kia Stinger</option>
                        <option value="Genesis G80">Genesis G80</option>
                        <option value="Genesis G90">Genesis G90</option>
                        <option value="Genesis GV80">Genesis GV80</option>
                        <option value="Genesis GV70">Genesis GV70</option>
                        <option value="Ssangyong Rexton">Ssangyong Rexton</option>
                        <option value="Ssangyong Korando">Ssangyong Korando</option>
                      </optgroup>
                      
                      {/* Chinese Brands */}
                      <optgroup label="Китайские автомобили">
                        <option value="Chery Tiggo 4">Chery Tiggo 4</option>
                        <option value="Chery Tiggo 7 Pro">Chery Tiggo 7 Pro</option>
                        <option value="Chery Tiggo 8 Pro">Chery Tiggo 8 Pro</option>
                        <option value="Chery Tiggo 8 Pro Max">Chery Tiggo 8 Pro Max</option>
                        <option value="Chery Tiggo 4 Pro">Chery Tiggo 4 Pro</option>
                        <option value="Haval F7">Haval F7</option>
                        <option value="Haval F7x">Haval F7x</option>
                        <option value="Haval Jolion">Haval Jolion</option>
                        <option value="Haval H9">Haval H9</option>
                        <option value="Haval H6">Haval H6</option>
                        <option value="Haval Dargo">Haval Dargo</option>
                        <option value="Geely Coolray">Geely Coolray</option>
                        <option value="Geely Tugella">Geely Tugella</option>
                        <option value="Geely Atlas">Geely Atlas</option>
                        <option value="Geely Atlas Pro">Geely Atlas Pro</option>
                        <option value="Geely Monjaro">Geely Monjaro</option>
                        <option value="JAC S3">JAC S3</option>
                        <option value="JAC S7">JAC S7</option>
                        <option value="JAC JS4">JAC JS4</option>
                        <option value="Exeed TXL">Exeed TXL</option>
                        <option value="Exeed VX">Exeed VX</option>
                        <option value="Exeed LX">Exeed LX</option>
                        <option value="Exeed TXL">Exeed TXL</option>
                        <option value="FAW Bestune T77">FAW Bestune T77</option>
                        <option value="FAW Bestune T99">FAW Bestune T99</option>
                        <option value="Changan CS35 Plus">Changan CS35 Plus</option>
                        <option value="Changan CS55 Plus">Changan CS55 Plus</option>
                        <option value="Changan CS75 Plus">Changan CS75 Plus</option>
                        <option value="Great Wall Poer">Great Wall Poer</option>
                        <option value="Great Wall Wingle 7">Great Wall Wingle 7</option>
                        <option value="Omoda C5">Omoda C5</option>
                        <option value="Jetour X70 Plus">Jetour X70 Plus</option>
                        <option value="Jetour Dashing">Jetour Dashing</option>
                        <option value="BYD Song Plus">BYD Song Plus</option>
                        <option value="BYD Tang">BYD Tang</option>
                      </optgroup>
                      
                      {/* European Brands */}
                      <optgroup label="Европейские автомобили">
                        <option value="Volkswagen Tiguan">Volkswagen Tiguan</option>
                        <option value="Volkswagen Touareg">Volkswagen Touareg</option>
                        <option value="Volkswagen Taos">Volkswagen Taos</option>
                        <option value="Volkswagen Polo">Volkswagen Polo</option>
                        <option value="Volkswagen Golf">Volkswagen Golf</option>
                        <option value="Volkswagen Passat">Volkswagen Passat</option>
                        <option value="Volkswagen Atlas">Volkswagen Atlas</option>
                        <option value="Skoda Kodiaq">Skoda Kodiaq</option>
                        <option value="Skoda Octavia">Skoda Octavia</option>
                        <option value="Skoda Karoq">Skoda Karoq</option>
                        <option value="Skoda Superb">Skoda Superb</option>
                        <option value="BMW X5">BMW X5</option>
                        <option value="BMW X7">BMW X7</option>
                        <option value="BMW X3">BMW X3</option>
                        <option value="BMW X6">BMW X6</option>
                        <option value="BMW 5-Series">BMW 5-Series</option>
                        <option value="BMW 7-Series">BMW 7-Series</option>
                        <option value="BMW 3-Series">BMW 3-Series</option>
                        <option value="Mercedes-Benz GLE">Mercedes-Benz GLE</option>
                        <option value="Mercedes-Benz GLS">Mercedes-Benz GLS</option>
                        <option value="Mercedes-Benz GLC">Mercedes-Benz GLC</option>
                        <option value="Mercedes-Benz E-Class">Mercedes-Benz E-Class</option>
                        <option value="Mercedes-Benz S-Class">Mercedes-Benz S-Class</option>
                        <option value="Mercedes-Benz C-Class">Mercedes-Benz C-Class</option>
                        <option value="Audi Q7">Audi Q7</option>
                        <option value="Audi Q5">Audi Q5</option>
                        <option value="Audi Q3">Audi Q3</option>
                        <option value="Audi A6">Audi A6</option>
                        <option value="Audi A4">Audi A4</option>
                        <option value="Audi A8">Audi A8</option>
                        <option value="Volvo XC90">Volvo XC90</option>
                        <option value="Volvo XC60">Volvo XC60</option>
                        <option value="Volvo XC40">Volvo XC40</option>
                        <option value="Volvo S90">Volvo S90</option>
                        <option value="Renault Duster">Renault Duster</option>
                        <option value="Renault Kaptur">Renault Kaptur</option>
                        <option value="Renault Arkana">Renault Arkana</option>
                        <option value="Renault Koleos">Renault Koleos</option>
                        <option value="Peugeot 3008">Peugeot 3008</option>
                        <option value="Peugeot 5008">Peugeot 5008</option>
                        <option value="Land Rover Range Rover">Land Rover Range Rover</option>
                        <option value="Land Rover Range Rover Sport">Land Rover Range Rover Sport</option>
                        <option value="Land Rover Discovery">Land Rover Discovery</option>
                        <option value="Land Rover Defender">Land Rover Defender</option>
                        <option value="Porsche Cayenne">Porsche Cayenne</option>
                        <option value="Porsche Macan">Porsche Macan</option>
                      </optgroup>
                      
                      {/* American Brands */}
                      <optgroup label="Американские автомобили">
                        <option value="Chevrolet Tahoe">Chevrolet Tahoe</option>
                        <option value="Chevrolet Traverse">Chevrolet Traverse</option>
                        <option value="Chevrolet Captiva">Chevrolet Captiva</option>
                        <option value="Chevrolet Trailblazer">Chevrolet Trailblazer</option>
                        <option value="Chevrolet Cruze">Chevrolet Cruze</option>
                        <option value="Cadillac Escalade">Cadillac Escalade</option>
                        <option value="Cadillac XT5">Cadillac XT5</option>
                        <option value="Cadillac XT6">Cadillac XT6</option>
                        <option value="Ford Explorer">Ford Explorer</option>
                        <option value="Ford Expedition">Ford Expedition</option>
                        <option value="Ford Focus">Ford Focus</option>
                        <option value="Ford F-150">Ford F-150</option>
                        <option value="Jeep Grand Cherokee">Jeep Grand Cherokee</option>
                        <option value="Jeep Wrangler">Jeep Wrangler</option>
                        <option value="Jeep Compass">Jeep Compass</option>
                        <option value="Dodge Durango">Dodge Durango</option>
                        <option value="Dodge Journey">Dodge Journey</option>
                        <option value="Dodge Challenger">Dodge Challenger</option>
                        <option value="Dodge Charger">Dodge Charger</option>
                      </optgroup>
                      
                      {/* Russian Brands */}
                      <optgroup label="Российские автомобили">
                        <option value="Lada Vesta">Lada Vesta</option>
                        <option value="Lada X-Ray">Lada X-Ray</option>
                        <option value="UAZ Patriot">UAZ Patriot</option>
                        <option value="UAZ Pickup">UAZ Pickup</option>
                      </optgroup>
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
                      <option value="2011">2011</option>
                      <option value="2010">2010</option>
                      <option value="2009">2009</option>
                      <option value="2008">2008</option>
                      <option value="2007">2007</option>
                      <option value="2006">2006</option>
                      <option value="2005">2005</option>
                      <option value="2004">2004</option>
                      <option value="2003">2003</option>
                      <option value="2002">2002</option>
                      <option value="2001">2001</option>
                      <option value="2000">2000</option>
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
                  src="/tpms-sensor.jpg" 
                  alt="Датчик давления в шинах TPMS Autel" 
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
