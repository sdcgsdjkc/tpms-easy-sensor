import React, { useEffect, useState } from 'react';
import CustomButton from '../ui/CustomButton';
import { ArrowDown, Send, Car } from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import { useToast } from '@/hooks/use-toast';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [carModel, setCarModel] = useState('Toyota Camry');
  const [carYear, setCarYear] = useState('2020');
  const { toast } = useToast();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openWhatsApp = () => {
    const message = `Здравствуйте! Хочу записаться на прошивку TPMS. Моя машина: ${carModel} ${carYear}`;
    const phone = "77781929139"; // Without the + as it's added in the URL
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    
    toast({
      title: "Открываем WhatsApp",
      description: "Переходим в приложение для записи",
    });
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
                        <option value="Toyota C-HR">Toyota C-HR</option>
                        <option value="Toyota Tundra">Toyota Tundra</option>
                        <option value="Toyota Hilux">Toyota Hilux</option>
                        <option value="Toyota Sienna">Toyota Sienna</option>
                        <option value="Toyota 4Runner">Toyota 4Runner</option>
                        <option value="Toyota Sequoia">Toyota Sequoia</option>
                        <option value="Lexus RX">Lexus RX</option>
                        <option value="Lexus LX">Lexus LX</option>
                        <option value="Lexus NX">Lexus NX</option>
                        <option value="Lexus ES">Lexus ES</option>
                        <option value="Lexus LS">Lexus LS</option>
                        <option value="Lexus GX">Lexus GX</option>
                        <option value="Lexus UX">Lexus UX</option>
                        <option value="Lexus IS">Lexus IS</option>
                        <option value="Lexus RC">Lexus RC</option>
                        <option value="Lexus LC">Lexus LC</option>
                        <option value="Honda Accord">Honda Accord</option>
                        <option value="Honda CR-V">Honda CR-V</option>
                        <option value="Honda Civic">Honda Civic</option>
                        <option value="Honda Pilot">Honda Pilot</option>
                        <option value="Honda HR-V">Honda HR-V</option>
                        <option value="Honda Odyssey">Honda Odyssey</option>
                        <option value="Honda Ridgeline">Honda Ridgeline</option>
                        <option value="Honda Fit">Honda Fit</option>
                        <option value="Honda Passport">Honda Passport</option>
                        <option value="Honda Insight">Honda Insight</option>
                        <option value="Mazda CX-5">Mazda CX-5</option>
                        <option value="Mazda CX-9">Mazda CX-9</option>
                        <option value="Mazda CX-30">Mazda CX-30</option>
                        <option value="Mazda 6">Mazda 6</option>
                        <option value="Mazda 3">Mazda 3</option>
                        <option value="Mazda MX-5">Mazda MX-5</option>
                        <option value="Mazda CX-8">Mazda CX-8</option>
                        <option value="Mazda CX-90">Mazda CX-90</option>
                        <option value="Nissan X-Trail">Nissan X-Trail</option>
                        <option value="Nissan Qashqai">Nissan Qashqai</option>
                        <option value="Nissan Patrol">Nissan Patrol</option>
                        <option value="Nissan Murano">Nissan Murano</option>
                        <option value="Nissan Pathfinder">Nissan Pathfinder</option>
                        <option value="Nissan Teana">Nissan Teana</option>
                        <option value="Nissan Juke">Nissan Juke</option>
                        <option value="Nissan Rogue">Nissan Rogue</option>
                        <option value="Nissan Altima">Nissan Altima</option>
                        <option value="Nissan Maxima">Nissan Maxima</option>
                        <option value="Nissan Sentra">Nissan Sentra</option>
                        <option value="Nissan Armada">Nissan Armada</option>
                        <option value="Nissan Kicks">Nissan Kicks</option>
                        <option value="Nissan GT-R">Nissan GT-R</option>
                        <option value="Nissan 370Z">Nissan 370Z</option>
                        <option value="Infiniti QX80">Infiniti QX80</option>
                        <option value="Infiniti QX60">Infiniti QX60</option>
                        <option value="Infiniti QX50">Infiniti QX50</option>
                        <option value="Infiniti Q50">Infiniti Q50</option>
                        <option value="Infiniti Q60">Infiniti Q60</option>
                        <option value="Infiniti QX30">Infiniti QX30</option>
                        <option value="Infiniti QX55">Infiniti QX55</option>
                        <option value="Infiniti QX70">Infiniti QX70</option>
                        <option value="Mitsubishi Outlander">Mitsubishi Outlander</option>
                        <option value="Mitsubishi Pajero">Mitsubishi Pajero</option>
                        <option value="Mitsubishi Pajero Sport">Mitsubishi Pajero Sport</option>
                        <option value="Mitsubishi ASX">Mitsubishi ASX</option>
                        <option value="Mitsubishi Eclipse Cross">Mitsubishi Eclipse Cross</option>
                        <option value="Mitsubishi L200">Mitsubishi L200</option>
                        <option value="Mitsubishi Lancer">Mitsubishi Lancer</option>
                        <option value="Mitsubishi Galant">Mitsubishi Galant</option>
                        <option value="Mitsubishi Montero">Mitsubishi Montero</option>
                        <option value="Mitsubishi Mirage">Mitsubishi Mirage</option>
                        <option value="Subaru Forester">Subaru Forester</option>
                        <option value="Subaru Outback">Subaru Outback</option>
                        <option value="Subaru XV">Subaru XV</option>
                        <option value="Subaru Legacy">Subaru Legacy</option>
                        <option value="Subaru Crosstrek">Subaru Crosstrek</option>
                        <option value="Subaru Impreza">Subaru Impreza</option>
                        <option value="Subaru WRX">Subaru WRX</option>
                        <option value="Subaru Ascent">Subaru Ascent</option>
                        <option value="Subaru BRZ">Subaru BRZ</option>
                        <option value="Suzuki Grand Vitara">Suzuki Grand Vitara</option>
                        <option value="Suzuki SX4">Suzuki SX4</option>
                        <option value="Suzuki Vitara">Suzuki Vitara</option>
                        <option value="Suzuki Swift">Suzuki Swift</option>
                        <option value="Suzuki Jimny">Suzuki Jimny</option>
                        <option value="Suzuki Kizashi">Suzuki Kizashi</option>
                        <option value="Suzuki Ignis">Suzuki Ignis</option>
                        <option value="Suzuki S-Cross">Suzuki S-Cross</option>
                        <option value="Acura MDX">Acura MDX</option>
                        <option value="Acura RDX">Acura RDX</option>
                        <option value="Acura TLX">Acura TLX</option>
                        <option value="Acura ILX">Acura ILX</option>
                        <option value="Acura NSX">Acura NSX</option>
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
                        <option value="Hyundai Venue">Hyundai Venue</option>
                        <option value="Hyundai Veloster">Hyundai Veloster</option>
                        <option value="Hyundai Azera">Hyundai Azera</option>
                        <option value="Hyundai Genesis">Hyundai Genesis</option>
                        <option value="Hyundai Ioniq">Hyundai Ioniq</option>
                        <option value="Hyundai Nexo">Hyundai Nexo</option>
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
                        <option value="Kia Forte">Kia Forte</option>
                        <option value="Kia Cadenza">Kia Cadenza</option>
                        <option value="Kia K900">Kia K900</option>
                        <option value="Kia Niro">Kia Niro</option>
                        <option value="Kia EV6">Kia EV6</option>
                        <option value="Genesis G80">Genesis G80</option>
                        <option value="Genesis G90">Genesis G90</option>
                        <option value="Genesis GV80">Genesis GV80</option>
                        <option value="Genesis GV70">Genesis GV70</option>
                        <option value="Genesis G70">Genesis G70</option>
                        <option value="Genesis GV60">Genesis GV60</option>
                        <option value="Ssangyong Rexton">Ssangyong Rexton</option>
                        <option value="Ssangyong Korando">Ssangyong Korando</option>
                        <option value="Ssangyong Tivoli">Ssangyong Tivoli</option>
                        <option value="Ssangyong Actyon">Ssangyong Actyon</option>
                        <option value="Ssangyong Kyron">Ssangyong Kyron</option>
                        <option value="Ssangyong Musso">Ssangyong Musso</option>
                        <option value="Ssangyong Rodius">Ssangyong Rodius</option>
                      </optgroup>
                      
                      {/* Chinese Brands */}
                      <optgroup label="Китайские автомобили">
                        <option value="Chery Tiggo 4">Chery Tiggo 4</option>
                        <option value="Chery Tiggo 7 Pro">Chery Tiggo 7 Pro</option>
                        <option value="Chery Tiggo 8 Pro">Chery Tiggo 8 Pro</option>
                        <option value="Chery Tiggo 8 Pro Max">Chery Tiggo 8 Pro Max</option>
                        <option value="Chery Tiggo 4 Pro">Chery Tiggo 4 Pro</option>
                        <option value="Chery Tiggo 2">Chery Tiggo 2</option>
                        <option value="Chery Tiggo 2 Pro">Chery Tiggo 2 Pro</option>
                        <option value="Chery Tiggo 3">Chery Tiggo 3</option>
                        <option value="Chery Tiggo 5">Chery Tiggo 5</option>
                        <option value="Chery Tiggo 5x">Chery Tiggo 5x</option>
                        <option value="Chery Arrizo 5">Chery Arrizo 5</option>
                        <option value="Chery Arrizo 6">Chery Arrizo 6</option>
                        <option value="Chery Arrizo 7">Chery Arrizo 7</option>
                        <option value="Chery Arrizo 8">Chery Arrizo 8</option>
                        <option value="Haval F7">Haval F7</option>
                        <option value="Haval F7x">Haval F7x</option>
                        <option value="Haval Jolion">Haval Jolion</option>
                        <option value="Haval H9">Haval H9</option>
                        <option value="Haval H6">Haval H6</option>
                        <option value="Haval Dargo">Haval Dargo</option>
                        <option value="Haval H2">Haval H2</option>
                        <option value="Haval H4">Haval H4</option>
                        <option value="Haval H5">Haval H5</option>
                        <option value="Haval M6">Haval M6</option>
                        <option value="Haval F5">Haval F5</option>
                        <option value="Haval Big Dog">Haval Big Dog</option>
                        <option value="Geely Coolray">Geely Coolray</option>
                        <option value="Geely Tugella">Geely Tugella</option>
                        <option value="Geely Atlas">Geely Atlas</option>
                        <option value="Geely Atlas Pro">Geely Atlas Pro</option>
                        <option value="Geely Monjaro">Geely Monjaro</option>
                        <option value="Geely Emgrand">Geely Emgrand</option>
                        <option value="Geely GC9">Geely GC9</option>
                        <option value="Geely Azkarra">Geely Azkarra</option>
                        <option value="Geely Okavango">Geely Okavango</option>
                        <option value="Geely Boyue">Geely Boyue</option>
                        <option value="Geely Icon">Geely Icon</option>
                        <option value="JAC S3">JAC S3</option>
                        <option value="JAC S7">JAC S7</option>
                        <option value="JAC JS4">JAC JS4</option>
                        <option value="JAC T6">JAC T6</option>
                        <option value="JAC T8">JAC T8</option>
                        <option value="JAC S2">JAC S2</option>
                        <option value="JAC S4">JAC S4</option>
                        <option value="JAC S5">JAC S5</option>
                        <option value="JAC J7">JAC J7</option>
                        <option value="Exeed TXL">Exeed TXL</option>
                        <option value="Exeed VX">Exeed VX</option>
                        <option value="Exeed LX">Exeed LX</option>
                        <option value="Exeed TXL">Exeed TXL</option>
                        <option value="Exeed RX">Exeed RX</option>
                        <option value="FAW Bestune T77">FAW Bestune T77</option>
                        <option value="FAW Bestune T99">FAW Bestune T99</option>
                        <option value="FAW Bestune B70">FAW Bestune B70</option>
                        <option value="FAW Bestune X40">FAW Bestune X40</option>
                        <option value="FAW Bestune X80">FAW Bestune X80</option>
                        <option value="Changan CS35 Plus">Changan CS35 Plus</option>
                        <option value="Changan CS55 Plus">Changan CS55 Plus</option>
                        <option value="Changan CS75 Plus">Changan CS75 Plus</option>
                        <option value="Changan CS85">Changan CS85</option>
                        <option value="Changan UNI-T">Changan UNI-T</option>
                        <option value="Changan UNI-K">Changan UNI-K</option>
                        <option value="Changan UNI-V">Changan UNI-V</option>
                        <option value="Changan Eado">Changan Eado</option>
                        <option value="Changan CS95">Changan CS95</option>
                        <option value="Great Wall Poer">Great Wall Poer</option>
                        <option value="Great Wall Wingle 7">Great Wall Wingle 7</option>
                        <option value="Great Wall Hover">Great Wall Hover</option>
                        <option value="Great Wall Safe">Great Wall Safe</option>
                        <option value="Great Wall Cannon">Great Wall Cannon</option>
                        <option value="Great Wall VV5">Great Wall VV5</option>
                        <option value="Great Wall VV6">Great Wall VV6</option>
                        <option value="Great Wall VV7">Great Wall VV7</option>
                        <option value="Omoda C5">Omoda C5</option>
                        <option value="Omoda 5">Omoda 5</option>
                        <option value="Omoda 7">Omoda 7</option>
                        <option value="Jetour X70 Plus">Jetour X70 Plus</option>
                        <option value="Jetour Dashing">Jetour Dashing</option>
                        <option value="Jetour X90">Jetour X90</option>
                        <option value="Jetour X95">Jetour X95</option>
                        <option value="Jetour T1">Jetour T1</option>
                        <option value="BYD Song Plus">BYD Song Plus</option>
                        <option value="BYD Tang">BYD Tang</option>
                        <option value="BYD Han">BYD Han</option>
                        <option value="BYD Yuan">BYD Yuan</option>
                        <option value="BYD Atto 3">BYD Atto 3</option>
                        <option value="BYD Seal">BYD Seal</option>
                        <option value="BYD Dolphin">BYD Dolphin</option>
                        <option value="Hongqi H9">Hongqi H9</option>
                        <option value="Hongqi E-HS9">Hongqi E-HS9</option>
                        <option value="Hongqi HS5">Hongqi HS5</option>
                        <option value="Hongqi HS7">Hongqi HS7</option>
                        <option value="Hongqi H5">Hongqi H5</option>
                        <option value="BAIC X55">BAIC X55</option>
                        <option value="BAIC X7">BAIC X7</option>
                        <option value="BAIC BJ40">BAIC BJ40</option>
                        <option value="BAIC EU5">BAIC EU5</option>
                        <option value="Lifan X60">Lifan X60</option>
                        <option value="Lifan X70">Lifan X70</option>
                        <option value="Foton Tunland">Foton Tunland</option>
                        <option value="Foton Sauvana">Foton Sauvana</option>
                        <option value="Brilliance V5">Brilliance V5</option>
                        <option value="Brilliance V6">Brilliance V6</option>
                        <option value="Wey VV5">Wey VV5</option>
                        <option value="Wey VV6">Wey VV6</option>
                        <option value="Wey VV7">Wey VV7</option>
                        <option value="Wuling Almaz">Wuling Almaz</option>
                        <option value="Zotye T600">Zotye T600</option>
                        <option value="Zotye T700">Zotye T700</option>
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
                        <option value="Volkswagen Jetta">Volkswagen Jetta</option>
                        <option value="Volkswagen Arteon">Volkswagen Arteon</option>
                        <option value="Volkswagen ID.4">Volkswagen ID.4</option>
                        <option value="Volkswagen ID.3">Volkswagen ID.3</option>
                        <option value="Volkswagen Teramont">Volkswagen Teramont</option>
                        <option value="Volkswagen T-Roc">Volkswagen T-Roc</option>
                        <option value="Volkswagen T-Cross">Volkswagen T-Cross</option>
                        <option value="Skoda Kodiaq">Skoda Kodiaq</option>
                        <option value="Skoda Octavia">Skoda Octavia</option>
                        <option value="Skoda Karoq">Skoda Karoq</option>
                        <option value="Skoda Superb">Skoda Superb</option>
                        <option value="Skoda Rapid">Skoda Rapid</option>
                        <option value="Skoda Fabia">Skoda Fabia</option>
                        <option value="Skoda Scala">Skoda Scala</option>
                        <option value="Skoda Kamiq">Skoda Kamiq</option>
                        <option value="Skoda Enyaq">Skoda Enyaq</option>
                        <option value="BMW X5">BMW X5</option>
                        <option value="BMW X7">BMW X7</option>
                        <option value="BMW X3">BMW X3</option>
                        <option value="BMW X6">BMW X6</option>
                        <option value="BMW 5-Series">BMW 5-Series</option>
                        <option value="BMW 7-Series">BMW 7-Series</option>
                        <option value="BMW 3-Series">BMW 3-Series</option>
                        <option value="BMW X1">BMW X1</option>
                        <option value="BMW X2">BMW X2</option>
                        <option value="BMW X4">BMW X4</option>
                        <option value="BMW 1-Series">BMW 1-Series</option>
                        <option value="BMW 2-Series">BMW 2-Series</option>
                        <option value="BMW 4-Series">BMW 4-Series</option>
                        <option value="BMW 8-Series">BMW 8-Series</option>
                        <option value="BMW Z4">BMW Z4</option>
                        <option value="BMW i3">BMW i3</option>
                        <option value="BMW i4">BMW i4</option>
                        <option value="BMW iX">BMW iX</option>
                        <option value="BMW iX3">BMW iX3</option>
                        <option value="Mercedes-Benz GLE">Mercedes-Benz GLE</option>
                        <option value="Mercedes-Benz GLS">Mercedes-Benz GLS</option>
                        <option value="Mercedes-Benz GLC">Mercedes-Benz GLC</option>
                        <option value="Mercedes-Benz E-Class">Mercedes-Benz E-Class</option>
                        <option value="Mercedes-Benz S-Class">Mercedes-Benz S-Class</option>
                        <option value="Mercedes-Benz C-Class">Mercedes-Benz C-Class</option>
                        <option value="Mercedes-Benz A-Class">Mercedes-Benz A-Class</option>
                        <option value="Mercedes-Benz B-Class">Mercedes-Benz B-Class</option>
                        <option value="Mercedes-Benz CLA">Mercedes-Benz CLA</option>
                        <option value="Mercedes-Benz CLS">Mercedes-Benz CLS</option>
                        <option value="Mercedes-Benz GLA">Mercedes-Benz GLA</option>
                        <option value="Mercedes-Benz GLB">Mercedes-Benz GLB</option>
                        <option value="Mercedes-Benz GLE Coupe">Mercedes-Benz GLE Coupe</option>
                        <option value="Mercedes-Benz GLC Coupe">Mercedes-Benz GLC Coupe</option>
                        <option value="Mercedes-Benz G-Class">Mercedes-Benz G-Class</option>
                        <option value="Mercedes-Benz EQC">Mercedes-Benz EQC</option>
                        <option value="Mercedes-Benz EQA">Mercedes-Benz EQA</option>
                        <option value="Mercedes-Benz EQB">Mercedes-Benz EQB</option>
                        <option value="Mercedes-Benz EQS">Mercedes-Benz EQS</option>
                        <option value="Audi Q7">Audi Q7</option>
                        <option value="Audi Q5">Audi Q5</option>
                        <option value="Audi Q3">Audi Q3</option>
                        <option value="Audi A6">Audi A6</option>
                        <option value="Audi A4">Audi A4</option>
                        <option value="Audi A8">Audi A8</option>
                        <option value="Audi Q8">Audi Q8</option>
                        <option value="Audi A3">Audi A3</option>
                        <option value="Audi A5">Audi A5</option>
                        <option value="Audi A7">Audi A7</option>
                        <option value="Audi Q2">Audi Q2</option>
                        <option value="Audi Q4">Audi Q4</option>
                        <option value="Audi TT">Audi TT</option>
                        <option value="Audi R8">Audi R8</option>
                        <option value="Audi e-tron">Audi e-tron</option>
                        <option value="Audi e-tron GT">Audi e-tron GT</option>
                        <option value="Volvo XC90">Volvo XC90</option>
                        <option value="Volvo XC60">Volvo XC60</option>
                        <option value="Volvo XC40">Volvo XC40</option>
                        <option value="Volvo S90">Volvo S90</option>
                        <option value="Volvo S60">Volvo S60</option>
                        <option value="Volvo V60">Volvo V60</option>
                        <option value="Volvo V90">Volvo V90</option>
                        <option value="Volvo C40">Volvo C40</option>
                        <option value="Renault Duster">Renault Duster</option>
                        <option value="Renault Kaptur">Renault Kaptur</option>
                        <option value="Renault Arkana">Renault Arkana</option>
                        <option value="Renault Koleos">Renault Koleos</option>
                        <option value="Renault Sandero">Renault Sandero</option>
                        <option value="Renault Logan">Renault Logan</option>
                        <option value="Renault Megane">Renault Megane</option>
                        <option value="Renault Clio">Renault Clio</option>
                        <option value="Renault Talisman">Renault Talisman</option>
                        <option value="Renault Zoe">Renault Zoe</option>
                        <option value="Peugeot 3008">Peugeot 3008</option>
                        <option value="Peugeot 5008">Peugeot 5008</option>
                        <option value="Peugeot 2008">Peugeot 2008</option>
                        <option value="Peugeot 308">Peugeot 308</option>
                        <option value="Peugeot 508">Peugeot 508</option>
                        <option value="Peugeot 208">Peugeot 208</option>
                        <option value="Peugeot 408">Peugeot 408</option>
                        <option value="Land Rover Range Rover">Land Rover Range Rover</option>
                        <option value="Land Rover Range Rover Sport">Land Rover Range Rover Sport</option>
                        <option value="Land Rover Discovery">Land Rover Discovery</option>
                        <option value="Land Rover Defender">Land Rover Defender</option>
                        <option value="Land Rover Range Rover Evoque">Land Rover Range Rover Evoque</option>
                        <option value="Land Rover Range Rover Velar">Land Rover Range Rover Velar</option>
                        <option value="Land Rover Discovery Sport">Land Rover Discovery Sport</option>
                        <option value="Porsche Cayenne">Porsche Cayenne</option>
                        <option value="Porsche Macan">Porsche Macan</option>
                        <option value="Porsche Panamera">Porsche Panamera</option>
                        <option value="Porsche 911">Porsche 911</option>
                        <option value="Porsche Taycan">Porsche Taycan</option>
                        <option value="Porsche Boxster">Porsche Boxster</option>
                        <option value="Porsche Cayman">Porsche Cayman</option>
                        <option value="Maserati Levante">Maserati Levante</option>
                        <option value="Maserati Ghibli">Maserati Ghibli</option>
                        <option value="Maserati Quattroporte">Maserati Quattroporte</option>
                        <option value="Jaguar F-Pace">Jaguar F-Pace</option>
                        <option value="Jaguar E-Pace">Jaguar E-Pace</option>
                        <option value="Jaguar I-Pace">Jaguar I-Pace</option>
                        <option value="Jaguar XF">Jaguar XF</option>
                        <option value="Jaguar XE">Jaguar XE</option>
                        <option value="Jaguar XJ">Jaguar XJ</option>
                        <option value="MINI Cooper">MINI Cooper</option>
                        <option value="MINI Countryman">MINI Countryman</option>
                        <option value="MINI Clubman">MINI Clubman</option>
                        <option value="Fiat 500">Fiat 500</option>
                        <option value="Fiat Tipo">Fiat Tipo</option>
                        <option value="Opel Astra">Opel Astra</option>
                        <option value="Opel Corsa">Opel Corsa</option>
                        <option value="Opel Crossland">Opel Crossland</option>
                        <option value="Opel Grandland">Opel Grandland</option>
                        <option value="Citroën C3">Citroën C3</option>
                        <option value="Citroën C4">Citroën C4</option>
                        <option value="Citroën C5 Aircross">Citroën C5 Aircross</option>
                        <option value="Alfa Romeo Giulia">Alfa Romeo Giulia</option>
                        <option value="Alfa Romeo Stelvio">Alfa Romeo Stelvio</option>
                        <option value="Ferrari Roma">Ferrari Roma</option>
                        <option value="Ferrari SF90 Stradale">Ferrari SF90 Stradale</option>
                        <option value="Ferrari F8 Tributo">Ferrari F8 Tributo</option>
                        <option value="Lamborghini Urus">Lamborghini Urus</option>
                        <option value="Lamborghini Huracán">Lamborghini Huracán</option>
                        <option value="Lamborghini Aventador">Lamborghini Aventador</option>
                        <option value="Bentley Bentayga">Bentley Bentayga</option>
                        <option value="Bentley Continental">Bentley Continental</option>
                        <option value="Bentley Flying Spur">Bentley Flying Spur</option>
                        <option value="Rolls-Royce Cullinan">Rolls-Royce Cullinan</option>
                        <option value="Rolls-Royce Ghost">Rolls-Royce Ghost</option>
                        <option value="Rolls-Royce Phantom">Rolls-Royce Phantom</option>
                        <option value="Aston Martin DBX">Aston Martin DBX</option>
                        <option value="Aston Martin DB11">Aston Martin DB11</option>
                        <option value="Aston Martin Vantage">Aston Martin Vantage</option>
                      </optgroup>
                      
                      {/* American Brands */}
                      <optgroup label="Американские автомобили">
                        <option value="Chevrolet Tahoe">Chevrolet Tahoe</option>
                        <option value="Chevrolet Traverse">Chevrolet Traverse</option>
                        <option value="Chevrolet Captiva">Chevrolet Captiva</option>
                        <option value="Chevrolet Trailblazer">Chevrolet Trailblazer</option>
                        <option value="Chevrolet Cruze">Chevrolet Cruze</option>
                        <option value="Chevrolet Malibu">Chevrolet Malibu</option>
                        <option value="Chevrolet Suburban">Chevrolet Suburban</option>
                        <option value="Chevrolet Equinox">Chevrolet Equinox</option>
                        <option value="Chevrolet Blazer">Chevrolet Blazer</option>
                        <option value="Chevrolet Silverado">Chevrolet Silverado</option>
                        <option value="Chevrolet Camaro">Chevrolet Camaro</option>
                        <option value="Chevrolet Corvette">Chevrolet Corvette</option>
                        <option value="Chevrolet Bolt">Chevrolet Bolt</option>
                        <option value="Cadillac Escalade">Cadillac Escalade</option>
                        <option value="Cadillac XT5">Cadillac XT5</option>
                        <option value="Cadillac XT6">Cadillac XT6</option>
                        <option value="Cadillac XT4">Cadillac XT4</option>
                        <option value="Cadillac CT4">Cadillac CT4</option>
                        <option value="Cadillac CT5">Cadillac CT5</option>
                        <option value="Cadillac CT6">Cadillac CT6</option>
                        <option value="Cadillac Lyriq">Cadillac Lyriq</option>
                        <option value="Ford Explorer">Ford Explorer</option>
                        <option value="Ford Expedition">Ford Expedition</option>
                        <option value="Ford Focus">Ford Focus</option>
                        <option value="Ford F-150">Ford F-150</option>
                        <option value="Ford Ranger">Ford Ranger</option>
                        <option value="Ford Edge">Ford Edge</option>
                        <option value="Ford Escape">Ford Escape</option>
                        <option value="Ford Mustang">Ford Mustang</option>
                        <option value="Ford Bronco">Ford Bronco</option>
                        <option value="Ford Bronco Sport">Ford Bronco Sport</option>
                        <option value="Ford EcoSport">Ford EcoSport</option>
                        <option value="Ford Maverick">Ford Maverick</option>
                        <option value="Ford Mustang Mach-E">Ford Mustang Mach-E</option>
                        <option value="Ford F-250">Ford F-250</option>
                        <option value="Ford Fusion">Ford Fusion</option>
                        <option value="Jeep Grand Cherokee">Jeep Grand Cherokee</option>
                        <option value="Jeep Wrangler">Jeep Wrangler</option>
                        <option value="Jeep Compass">Jeep Compass</option>
                        <option value="Jeep Cherokee">Jeep Cherokee</option>
                        <option value="Jeep Renegade">Jeep Renegade</option>
                        <option value="Jeep Gladiator">Jeep Gladiator</option>
                        <option value="Jeep Wagoneer">Jeep Wagoneer</option>
                        <option value="Jeep Grand Wagoneer">Jeep Grand Wagoneer</option>
                        <option value="Dodge Durango">Dodge Durango</option>
                        <option value="Dodge Journey">Dodge Journey</option>
                        <option value="Dodge Challenger">Dodge Challenger</option>
                        <option value="Dodge Charger">Dodge Charger</option>
                        <option value="Dodge Ram 1500">Dodge Ram 1500</option>
                        <option value="GMC Yukon">GMC Yukon</option>
                        <option value="GMC Acadia">GMC Acadia</option>
                        <option value="GMC Terrain">GMC Terrain</option>
                        <option value="GMC Sierra">GMC Sierra</option>
                        <option value="GMC Canyon">GMC Canyon</option>
                        <option value="Lincoln Navigator">Lincoln Navigator</option>
                        <option value="Lincoln Aviator">Lincoln Aviator</option>
                        <option value="Lincoln Corsair">Lincoln Corsair</option>
                        <option value="Lincoln Nautilus">Lincoln Nautilus</option>
                        <option value="Tesla Model S">Tesla Model S</option>
                        <option value="Tesla Model 3">Tesla Model 3</option>
                        <option value="Tesla Model X">Tesla Model X</option>
                        <option value="Tesla Model Y">Tesla Model Y</option>
                        <option value="Tesla Cybertruck">Tesla Cybertruck</option>
                        <option value="Rivian R1T">Rivian R1T</option>
                        <option value="Rivian R1S">Rivian R1S</option>
                        <option value="Lucid Air">Lucid Air</option>
                        <option value="Chrysler 300">Chrysler 300</option>
                        <option value="Chrysler Pacifica">Chrysler Pacifica</option>
                        <option value="Buick Encore">Buick Encore</option>
                        <option value="Buick Envision">Buick Envision</option>
                        <option value="Buick Enclave">Buick Enclave</option>
                      </optgroup>
                      
                      {/* Russian Brands */}
                      <optgroup label="Российские автомобили">
                        <option value="Lada Vesta">Lada Vesta</option>
                        <option value="Lada X-Ray">Lada X-Ray</option>
                        <option value="Lada Niva">Lada Niva</option>
                        <option value="Lada Granta">Lada Granta</option>
                        <option value="Lada Largus">Lada Largus</option>
                        <option value="Lada Kalina">Lada Kalina</option>
                        <option value="Lada Priora">Lada Priora</option>
                        <option value="UAZ Patriot">UAZ Patriot</option>
                        <option value="UAZ Pickup">UAZ Pickup</option>
                        <option value="UAZ Hunter">UAZ Hunter</option>
                        <option value="UAZ Profi">UAZ Profi</option>
                        <option value="GAZ Sobol">GAZ Sobol</option>
                        <option value="GAZ Gazelle">GAZ Gazelle</option>
                        <option value="GAZ Gazelle Next">GAZ Gazelle Next</option>
                        <option value="GAZ Volga Siber">GAZ Volga Siber</option>
                        <option value="Moskvich 3">Moskvich 3</option>
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
                  src="/lovable-uploads/d56d6d5c-1e14-4910-81c3-010b0b8a3cd2.png" 
                  alt="Индикатор TPMS на приборной панели" 
                  className={`w-full h-auto object-cover transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setIsLoaded(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-lg font-bold">Желтая ошибка TPMS на приборной панели</p>
                    <p className="text-sm">Мы поможем избавиться от этой ошибки при смене зимних колес</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <div className="mt-6">
              <FadeIn delay={350} direction="left">
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-center gap-3">
                    <Car className="text-tpms-blue flex-shrink-0" size={24} />
                    <p className="text-sm text-gray-600">
                      У нас есть датчики для всех популярных моделей автомобилей с системой TPMS
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
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

