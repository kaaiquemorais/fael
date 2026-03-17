import { CheckCircle, XCircle, Phone, Instagram, MapPin, Clock, Award, Shield } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [expandedReviews, setExpandedReviews] = useState<{ [key: number]: boolean }>({});

  const services = [
    {
      name: 'Guarda-roupas',
      image: 'https://i.postimg.cc/YCFLpM09/guarda-roupa-casal-arizona-6-portas-6-gavetas-com-espelho-i01-malbec-clique-chique-moveis-2975-1-746.webp'
    },
    {
      name: 'Cozinhas Planejadas',
      image: 'https://i.postimg.cc/Zng0SMSt/COZINHAS-PLANEJADAS-1.jpg'
    },
    {
      name: 'Estantes e Racks',
      image: 'https://i.postimg.cc/Gt0hgsPj/Design-sem-nome.png'
    },
    {
      name: 'Mesas e Cadeiras',
      image: 'https://i.postimg.cc/y8CYy96m/2-conjutode-mesae-4-cadeira-smadeira-macica-em-mdf-natural.webp'
    },
    {
      name: 'Berços e Cômodas',
      image: 'https://i.postimg.cc/k5nJkmth/large.jpg'
    },
    {
      name: 'Home Office',
      image: 'https://i.postimg.cc/ydxV8yjj/Decoracao-com-moveis-planejados-para-home-office-com-estilo-classico-Foto-BY-Arq-EDesign.jpg'
    },
    {
      name: 'Armários',
      image: 'https://i.postimg.cc/XJPnGBDV/armario-para-cozinha-6-portas-1-gaveta-120-cm-freijo-chumbo-cristal-erva-doce-nicioli-5949-1-fc6f6b8.webp'
    },
    {
      name: 'E muito mais',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];


  const toggleReview = (index: number) => {
    setExpandedReviews(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const reviews = [
    {
      text: "Os móveis ficaram impecáveis e até um ajuste de redução do tamanho de um mesa ele fez. Serviço muito bom!",
      author: "Rosane"
    },
    {
      text: "Encontrei o contato do Fael pelo Google e as avaliações positivas me chamaram a atenção. Ao enviar mensagem, ele me atendeu prontamente pelo WhatsApp, demostrando organização e profissionalismo desde o início.\nEle foi muito pontual no horário agendado e durante o serviço, ficou claro o quanto ele entende do que faz. Trabalhou com muito conhecimento, deixou o armário perfeitamente alinhado e instalou a pia com um acabamento impecável.\nO resultado ficou ótimo! É um profissional caprichoso, competente e que realmente entrega o que promete. Recomendo sem nenhuma dúvida.",
      author: "Jéssica"
    },
    {
      text: "Fael é um profissional muito proativo que além de montar um guarda-roupa modulado grande, rack e painel para minha casa, fez instalações elétricas que ficaram incríveis. Indico demais!",
      author: "Rayani"
    },
    {
      text: "Rafael foi pontual e muito caprichoso. Atendeu nossas expectativas. Super recomendo, quando precisarem de montagem.",
      author: "Josiane"
    },
    {
      text: "Achei o contato pelo Google e vi avaliações positivas. Chamei para montar duas estantes . Executa serviço rápido e demonstra muita segurança no que faz. Gostei muito do atendimento e chamarei mais vezes quando necessário e recomendo os serviços do Rafael.",
      author: "Marina"
    },
    {
      text: "Contratei os serviços do Rafael em janeiro de 2025. Pessoa extremamente ágil, prestativa, solicita e cordial. Em poucos minutos me mandou um orçamento, no mesmo dia veio em casa e resolveu meu problema.Recomendo muito e virei cliente",
      author: "Ariel"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      {/* Fixed CTA Button */}
      <a
        href="https://wa.me/5511944731979?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-full text-base font-bold hover:scale-110 transition-all duration-300 shadow-lg"
        style={{
          fontFamily: 'Poppins, sans-serif'
        }}
      >
        <Phone className="w-5 h-5" />
        <span className="hidden sm:inline">Solicitar Orçamento</span>
      </a>

      {/* Hero Section with Images */}
      <section className="relative w-full">
        {/* Desktop Hero with Image and Overlay Content */}
        <div className="hidden md:block relative w-full">
          <img
            src="https://i.postimg.cc/8cZ1rHdh/HERO-FAEL-(1920-x-880-px).png"
            alt="Fael Montador de Móveis - Seus móveis montados com perfeição e segurança em Bragança Paulista"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="w-full max-w-7xl mx-auto px-8 lg:px-12">
              <div className="max-w-2xl">
                <h1
                  className="text-white text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    textShadow: '0 2px 10px rgba(0,0,0,0.9), 0 4px 20px rgba(0,0,0,0.7)'
                  }}
                >
                  SEUS MÓVEIS MONTADOS<br /><span className="text-4xl lg:text-5xl">COM PERFEIÇÃO<br />E SEGURANÇA</span>
                </h1>
                <p
                  className="text-white text-2xl lg:text-3xl font-medium mb-8 leading-relaxed"
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    textShadow: '0 2px 10px rgba(0,0,0,0.9), 0 4px 20px rgba(0,0,0,0.7)'
                  }}
                >
                  Rapidez, acabamento impecável<br />e zero dor de cabeça
                </p>
                <a
                  href="https://wa.me/5511944731979?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[#5D4037] px-12 py-5 rounded-full text-xl lg:text-2xl font-bold hover:scale-105 transition-all duration-300 shadow-lg border-2 border-[#8B4513]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  AGENDE SUA MONTAGEM
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Hero with Image */}
        <div className="block md:hidden relative w-full">
          <img
            src="https://i.postimg.cc/m2LzwmTm/663e0c.png"
            alt="Fael Montador de Móveis - Seus móveis montados com perfeição e segurança"
            className="w-full h-auto object-contain"
          />
          <div className="absolute bottom-12 left-0 right-0 px-6 pb-6 text-center z-10">
            <h1
              className="text-white text-2xl font-bold mb-4 leading-tight"
              style={{
                fontFamily: 'Poppins, sans-serif',
                textShadow: '0 2px 10px rgba(0,0,0,0.9), 0 4px 20px rgba(0,0,0,0.7)'
              }}
            >
              SEUS MÓVEIS MONTADOS<br /><span className="text-lg">COM PERFEIÇÃO E SEGURANÇA</span>
            </h1>
            <p
              className="text-white text-lg font-medium mb-6 leading-relaxed"
              style={{
                fontFamily: 'Nunito, sans-serif',
                textShadow: '0 2px 10px rgba(0,0,0,0.9), 0 4px 20px rgba(0,0,0,0.7)'
              }}
            >
              Rapidez, acabamento impecável<br />e zero dor de cabeça
            </p>
            <a
              href="https://wa.me/5511944731979?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#5D4037] px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition-all duration-300 shadow-lg border-2 border-[#8B4513]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              AGENDE SUA MONTAGEM
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">

        {/* Headline & Subtitle */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-lg md:text-2xl text-[#5D4037] max-w-4xl mx-auto font-semibold leading-relaxed" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Chega de passar horas tentando entender manuais confusos. Deixe um profissional experiente cuidar da montagem enquanto você aproveita seu tempo com o que realmente importa.
          </p>

          {/* Image */}
          <div className="mt-8 mb-8 flex justify-center">
            <img
              src="https://i.postimg.cc/2ydrqC9x/Sem-nome-(52-916-x-52-916-cm)-(4).png"
              alt="Serviço de Montagem"
              className="mx-auto max-w-full h-auto md:hidden rounded-3xl"
            />
          </div>

          <a
            href="https://wa.me/5511944731979?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white px-12 py-5 rounded-full text-xl font-bold hover:scale-105 hover:shadow-[0_0_40px_rgba(139,69,19,0.6)] transition-all duration-300 shadow-[0_0_20px_rgba(139,69,19,0.4)]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Solicitar Orçamento
          </a>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-[#8B4513] to-[#A0522D] backdrop-blur-sm p-10 rounded-[2rem] shadow-[0_0_30px_rgba(139,69,19,0.3)] hover:scale-105 hover:shadow-[0_0_50px_rgba(139,69,19,0.5)] transition-all duration-300 group">
            <div className="flex justify-center mb-6">
              <Clock className="w-16 h-16 text-[#FFE4B5] group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-[#FFE4B5] mb-4 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>Rapidez Garantida</h3>
            <p className="text-white text-base font-medium text-center leading-relaxed" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Montagem rápida e eficiente, respeitando seu tempo e sua rotina. Atendimento em até 24 horas.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#8B4513] to-[#A0522D] backdrop-blur-sm p-10 rounded-[2rem] shadow-[0_0_30px_rgba(139,69,19,0.3)] hover:scale-105 hover:shadow-[0_0_50px_rgba(139,69,19,0.5)] transition-all duration-300 group">
            <div className="flex justify-center mb-6">
              <Award className="w-16 h-16 text-[#FFE4B5] group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-[#FFE4B5] mb-4 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>Experiência Comprovada</h3>
            <p className="text-white text-base font-medium text-center leading-relaxed" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Anos de experiência na montagem de todos os tipos de móveis. Trabalho impecável e profissional.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#8B4513] to-[#A0522D] backdrop-blur-sm p-10 rounded-[2rem] shadow-[0_0_30px_rgba(139,69,19,0.3)] hover:scale-105 hover:shadow-[0_0_50px_rgba(139,69,19,0.5)] transition-all duration-300 group">
            <div className="flex justify-center mb-6">
              <Shield className="w-16 h-16 text-[#FFE4B5] group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-[#FFE4B5] mb-4 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>Segurança Total</h3>
            <p className="text-white text-base font-medium text-center leading-relaxed" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Seus móveis montados com todo cuidado e segurança. Garantia de qualidade em cada serviço.
            </p>
          </div>
        </div>

        {/* Pros vs Cons Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#5D4037] text-center mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Por Que Contratar um Profissional?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pros */}
            <div className="bg-gradient-to-br from-[#0a3d0a] to-[#1a5d1a] backdrop-blur-sm p-10 rounded-[2rem] shadow-[0_0_40px_rgba(34,197,94,0.4)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-3xl font-bold text-[#90EE90] mb-8 text-center relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>Com um Profissional</h3>
              <ul className="space-y-5 relative z-10">
                {[
                  'Economia de tempo e energia',
                  'Montagem perfeita sem erros',
                  'Ferramentas adequadas para o serviço',
                  'Experiência em todos os tipos de móveis',
                  'Acabamento profissional impecável',
                  'Sem risco de danificar peças',
                  'Garantia de qualidade no serviço',
                  'Móveis prontos para usar rapidamente'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4 animate-bounce-in opacity-0" style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}>
                    <CheckCircle className="w-7 h-7 text-[#90EE90] flex-shrink-0 mt-0.5 animate-spin-slow" />
                    <span className="text-white text-lg font-medium leading-relaxed" style={{ fontFamily: 'Nunito, sans-serif' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="bg-gradient-to-br from-[#3d0a0a] to-[#5a1a1a] backdrop-blur-sm p-10 rounded-[2rem] shadow-[0_0_40px_rgba(239,68,68,0.4)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-3xl font-bold text-[#FF6B6B] mb-8 text-center relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>Tentando Sozinho</h3>
              <ul className="space-y-5 relative z-10">
                {[
                  'Horas perdidas tentando entender manuais',
                  'Alto risco de montagem incorreta',
                  'Falta de ferramentas adequadas',
                  'Frustração e estresse garantidos',
                  'Acabamento amador e imperfeito',
                  'Risco de quebrar ou danificar peças',
                  'Sem garantia se algo der errado',
                  'Dores nas costas e cansaço extremo'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4 animate-shake opacity-0" style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}>
                    <XCircle className="w-7 h-7 text-[#FF6B6B] flex-shrink-0 mt-0.5 animate-pulse" />
                    <span className="text-white text-lg font-medium leading-relaxed" style={{ fontFamily: 'Nunito, sans-serif' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#5D4037] text-center mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Serviços Oferecidos
          </h2>
          <div style={{ overflow: 'hidden', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
            <div style={{ display: 'flex', animation: 'marquee 15s linear infinite', willChange: 'transform' }}>
              {/* Grupo A */}
              <div style={{ display: 'flex', flexShrink: 0 }}>
                {services.map((service, index) => (
                  <div key={index} style={{ flexShrink: 0, width: '180px', paddingRight: '20px', pointerEvents: 'none', userSelect: 'none' }}>
                    <div style={{ background: 'linear-gradient(135deg, #8B4513, #6B3410)', borderRadius: '1.25rem', padding: '10px', boxShadow: '0 0 20px rgba(139,69,19,0.4)' }}>
                      <img src={service.image} alt={service.name} draggable="false" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '0.75rem', display: 'block' }} />
                      <p style={{ color: '#FFE4B5', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.85rem', textAlign: 'center', marginTop: '8px', marginBottom: 0 }}>
                        {service.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Grupo B (cópia idêntica para loop contínuo) */}
              <div style={{ display: 'flex', flexShrink: 0 }} aria-hidden="true">
                {services.map((service, index) => (
                  <div key={index} style={{ flexShrink: 0, width: '180px', paddingRight: '20px', pointerEvents: 'none', userSelect: 'none' }}>
                    <div style={{ background: 'linear-gradient(135deg, #8B4513, #6B3410)', borderRadius: '1.25rem', padding: '10px', boxShadow: '0 0 20px rgba(139,69,19,0.4)' }}>
                      <img src={service.image} alt={service.name} draggable="false" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '0.75rem', display: 'block' }} />
                      <p style={{ color: '#FFE4B5', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.85rem', textAlign: 'center', marginTop: '8px', marginBottom: 0 }}>
                        {service.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Google Reviews Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#5D4037] text-center mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            O Que Nossos Clientes Dizem
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => {
              const isLongReview = review.text.length > 150;
              const isExpanded = expandedReviews[index];
              const displayText = !isLongReview || isExpanded ? review.text : truncateText(review.text, 150);

              return (
                <div key={index} className="bg-gradient-to-br from-[#8B4513] to-[#A0522D] backdrop-blur-sm p-8 rounded-[2rem] shadow-[0_0_30px_rgba(139,69,19,0.3)] hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#FFE4B5] text-2xl">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-white text-base mb-4 leading-relaxed whitespace-pre-line" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    "<span className="md:hidden">{review.text}</span><span className="hidden md:inline">{displayText}</span>"
                  </p>
                  {isLongReview && (
                    <button
                      onClick={() => toggleReview(index)}
                      className="text-[#FFE4B5] text-sm font-bold mb-4 hover:underline hidden md:block"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {isExpanded ? 'Ver menos' : 'Ver mais'}
                    </button>
                  )}
                  <p className="text-[#FFE4B5] font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>{review.author}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Location Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#5D4037] text-center mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Atendimento em Bragança Paulista e Região
          </h2>
          <div className="bg-gradient-to-br from-[#8B4513] to-[#A0522D] backdrop-blur-sm p-10 rounded-[2rem] shadow-[0_0_30px_rgba(139,69,19,0.4)]">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="w-10 h-10 text-[#FFE4B5]" />
              <p className="text-white text-xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Bragança Paulista e Região</p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-[0_0_20px_rgba(139,69,19,0.3)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29434.89463184765!2d-46.56381647431643!3d-22.951924299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf264cf7b40141%3A0x4b8b0b7c1e8c8b8a!2sBragan%C3%A7a%20Paulista%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização - Bragança Paulista"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[#8B4513] to-[#A0522D] p-12 md:p-16 rounded-[2rem] shadow-[0_0_50px_rgba(139,69,19,0.5)] text-center mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Pronto Para Ter Seus Móveis Montados Perfeitamente?
          </h2>
          <p className="text-lg md:text-xl text-white mb-10 max-w-3xl mx-auto font-medium leading-relaxed relative z-10" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Entre em contato agora e receba um orçamento personalizado sem compromisso. Atendimento rápido, profissional e com garantia de qualidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 relative z-10">
            <a
              href="https://wa.me/5511944731979?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:scale-110 transition-all duration-300 shadow-lg"
              style={{
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              <Phone className="w-7 h-7" />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/rafaeloliveira.francisco/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-12 py-5 rounded-full text-xl font-bold hover:scale-110 hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.4)]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <Instagram className="w-7 h-7" />
              Instagram
            </a>
          </div>
          <div className="pt-8 border-t border-white/20 relative z-10">
            <p className="text-white text-base font-medium text-center" style={{ fontFamily: 'Nunito, sans-serif' }}>
              <strong className="text-[#FFE4B5]">Atendimento:</strong> Bragança Paulista e Região
            </p>
            <p className="text-white text-base font-medium mt-2 text-center" style={{ fontFamily: 'Nunito, sans-serif' }}>
              <strong className="text-[#FFE4B5]">Horário:</strong> Todos os dias, das 7h às 22h
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-[#8B4513] to-[#6B3410] rounded-[2rem] shadow-[0_0_50px_rgba(139,69,19,0.3)] py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <img
                  src="https://i.postimg.cc/5ynBtyjK/1.png"
                  alt="Fael Montador de Móveis Logo"
                  className="h-40 md:h-48 hover:scale-105 transition-all duration-300 drop-shadow-[0_0_20px_rgba(139,69,19,0.5)]"
                />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#FFE4B5] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Fael Montador de Móveis
              </h3>
              <p className="text-white text-lg mb-6 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Transformando sua casa com móveis perfeitamente montados. Qualidade, rapidez e profissionalismo em cada serviço.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Phone className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h4 className="text-[#d4af37] text-lg mb-2 uppercase" style={{ fontFamily: 'Anton, sans-serif', fontWeight: 'bold' }}>Contato</h4>
                <a href="https://wa.me/5511944731979" className="text-white hover:text-[#d4af37] transition-colors">
                  (11) 94473-1979
                </a>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <MapPin className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h4 className="text-[#d4af37] text-lg mb-2 uppercase" style={{ fontFamily: 'Anton, sans-serif', fontWeight: 'bold' }}>Localização</h4>
                <p className="text-white">
                  Bragança Paulista e Região
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Instagram className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h4 className="text-[#d4af37] text-lg mb-2 uppercase" style={{ fontFamily: 'Anton, sans-serif', fontWeight: 'bold' }}>Redes Sociais</h4>
                <a
                  href="https://www.instagram.com/rafaeloliveira.francisco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#d4af37] transition-colors"
                >
                  @rafaeloliveira.francisco
                </a>
              </div>
            </div>

            <div className="border-t border-[#d4af37]/30 pt-6 text-center">
              <p className="text-white/90 text-sm">
                © Fael Montador de Móveis. Todos os direitos reservados.
              </p>
            </div>

            {/* Credit */}
            <div className="mt-6 pt-6 text-center">
              <div className="w-16 h-px bg-white/30 mx-auto mb-4"></div>
              <a
                href="https://avyxyva.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="https://i.postimg.cc/gjYjz7LH/MARKETING-(2).png"
                  alt="AVYXYVA"
                  className="mx-auto h-8 opacity-70 hover:opacity-100 transition-opacity duration-300 mb-2"
                />
                <p className="text-white/70 text-[10px] font-bold uppercase mb-1 hover:text-white transition-colors" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px' }}>
                  AVYXYVA
                </p>
                <p className="text-white/60 text-[9px] uppercase hover:text-white/70 transition-colors" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px' }}>
                  MARKETING DIGITAL
                </p>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
