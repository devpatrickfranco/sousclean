import React from 'react';
import sofaImage from './assets/images/sofá-meio-sujo-meio-limpo.png'
import sofaVideo from './assets/videos/videoplayback.mp4'
import logo from './assets/images/logo.png'
import sofaLimpo from './assets/images/sofa-limpo.png'
import sofaSujo from './assets/images/sofa-sujo.png'
import BeforeAfterSlider from './components/BeforeAfterSlider'
import {  
  Star,
  Shield,
  Sparkles,
  Bug,
  Clock,
  Heart,
  CheckCircle2,
  PhoneCall,
  MessageCircle,
  PlayCircle,
  Split,
  Users,
  HelpCircle,
  Workflow,
} from 'lucide-react';



function App() {
  
const [videoUrl, setVideoUrl] = React.useState('') 
const openModal = (url: string) => {
  setVideoUrl(url);
  setIsModalOpen(true);
};

const [isModalOpen, setIsModalOpen] = React.useState(false);
const closeModal = () => {
  setIsModalOpen(false);
};

  return (
<div className="min-h-screen bg-white">
  {/* Hero Section */}
  <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
    
    {/* Coluna 1 - Texto e Botões */}
    <div className="p-8 lg:p-34 flex flex-col justify-center order-1 relative">
      {/* Logo ajustada para mobile */}
      <div className="absolute top-0 left-0 lg:top-1 lg:left-1 z-10">
        <img 
          src={logo} 
          alt="Logo Sousas Clean" 
          className="h-32 lg:h-48 w-auto"
        />
      </div>

      {/* Adicionei margem no topo apenas no mobile para evitar sobreposição */}
      <div className="mt-20 lg:mt-0"> {/* Esta div envolve o conteúdo abaixo da logo */}
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          <span className="block">Diga adeus à sujeira</span>
          <span className="bg-gradient-to-r from-[#0B9D88] via-[#36E1C5] to-[#B9FFF5] bg-clip-text text-transparent block">
            Diga olá ao Conforto
          </span>
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-[600px]">
          Mais de 100 famílias em Sousas, Campinas e região confiaram em nós para dar vida nova aos seus móveis queridos. Limpeza especializada de estofados que transforma sua casa em um espaço mais saudável e bonito.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-[#0B9D88] hover:bg-[#36E1C5] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            <a href="https://wa.me/5519981947148">Agende agora</a>
          </button>
          <button
            onClick={() => openModal(sofaVideo)}
            className="inline-flex items-center justify-center border-2 border-[#0B9D88] text-[#0B9D88] font-semibold py-4 px-8 rounded-lg hover:bg-[#0B9D88] hover:text-white transition-all duration-300 transform hover:scale-105">
            <PlayCircle className="w-5 h-5 mr-2" />
            Veja como
          </button>
        </div>
      </div>
    </div>

          {/* Efeito de sombra no fundo da coluna 1 */}

          {/* Coluna 2 - Imagem */}
          <div className="relative order-2 h-full min-h-[400px] lg:min-h-0">
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={sofaImage}
                alt="sofa sujo antes da limpeza e limpo depois o trabalho da sousas clean"
                className="w-full h-full object-cover lg:object-[center_30%] transform hover:scale-105 transition-transform duration-500"
              />
              {/* Efeitos de gradiente e iluminação */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent lg:from-transparent"></div>
              {/* Efeito de brilho sutil */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.2)_0%,_rgba(255,255,255,0)_70%)]"></div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-[#36E1C5] opacity-20 blur-xl"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-[#0B9D88] opacity-10 blur-xl"></div>
            
            {/* Badge decorativo */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg flex items-center">
              <div className="w-2 h-2 bg-[#0B9D88] rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Antes & Depois</span>
            </div>
          </div>
      </section>
      {/* Services Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Nossos Serviços Especializados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-8 h-8 text-[#0B9D88]" />,
                title: 'Limpeza de Sofá',
                description: 'Limpeza profunda que remove manchas, odores e alérgenos, restaurando a beleza original do seu sofá e prolongando sua vida útil.'
              },
              {
                icon: <Shield className="w-8 h-8 text-[#0B9D88]" />,
                title: 'Lavagem de tapetes e carpetes',
description: 'Serviço especializado para remover sujeira, manchas e odores, mantendo seus tapetes e carpetes limpos, frescos e bem cuidados.'
              },
              {
                icon: <Bug className="w-8 h-8 text-[#0B9D88]" />,
                title: 'Higienização de Colchões',
                description: 'Eliminação completa de ácaros, bactérias e alérgenos, garantindo um ambiente de sono mais saudável para sua família.'
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                {service.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Nosso Processo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Inspeção', description: 'Avaliação completa do estado dos seus móveis' },
              { step: '02', title: 'Plano personalizado', description: 'Abordagem de limpeza personalizada para melhores resultados' },
              { step: '03', title: 'Limpeza profunda', description: 'Limpeza profissional com produtos ecológicos' },
              { step: '04', title: 'Proteção', description: 'Toques finais e tratamento protetor' },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-[#0B9D88]/20 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Veja a diferença</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Componente BeforeAfterSlider substituindo a primeira coluna */}
            <BeforeAfterSlider 
              beforeImage={sofaSujo}
              afterImage={sofaLimpo} 
            />
            <div
              onClick={() => openModal(sofaVideo)}
              className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition"
              >
               <div className="absolute inset-0 flex items-center justify-center">
               <PlayCircle className="w-12 h-12 text-[#0B9D88]" />
               <p className="text-gray-600 mt-4">Veja o processo</p>
            </div>
          </div>      
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Os diferencias da Sousas Clean</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Heart className="w-6 h-6" />, title: 'Saúde em primeiro lugar', description: 'Ambiente livre de alérgenos para sua família' },
              { icon: <Clock className="w-6 h-6" />, title: 'Duradouro', description: 'Resultados que resistem ao teste do tempo' },
              { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Especialistas Certificados', description: 'Profissionais treinados e experientes' },
              { icon: <Shield className="w-6 h-6" />, title: 'Resultados Garantidos', description: 'Promessa de 100% de satisfação' },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#36E1C5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {React.cloneElement(benefit.icon, { className: 'w-8 h-8 text-[#0B9D88]' })}
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* FAQ Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Perguntas frequentes</h2>
          <div className="space-y-8">
            {[
              {
                question: 'Quanto tempo demora o processo de limpeza?',
                answer: 'A maioria dos serviços leva de 1 a 2 horas, dependendo do tamanho e das condições dos móveis. Garantimos uma limpeza completa, respeitando o seu tempo.'
              },
              {
                question: 'Seus produtos de limpeza são seguros para crianças e animais de estimação?',
                answer: 'Sim! Usamos soluções de limpeza ecológicas e hipoalergênicas, totalmente seguras para toda a sua família, incluindo crianças e animais de estimação.'
              },
              {
                question: 'Com que frequência devo limpar meus estofados?',
                answer: 'Recomendamos limpeza profissional a cada 6 meses para manutenção ideal, ou com mais frequência para móveis de alto tráfego e casas com animais de estimação.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-[#0B9D88] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">O que nossos clientes dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "Resultados incríveis! Meu sofá de 5 anos parece novinho em folha. A equipe foi profissional, pontual e cuidadosa. Altamente recomendado!",
                name: "Maria Silva",
                location: "Cambuí, Campinas"
              },
              {
                text: "Como dona de animal de estimação, fiquei impressionada com a forma como eles removeram todos os pelos e odores. Mudou tudo!",
                name: "João Santos",
                location: "Taquaral, Campinas"
              },
              {
                text: "Serviço excepcional! Restauraram minhas cadeiras antigas com perfeição. Equipe muito experiente e excelente atendimento ao cliente.",
                name: "Ana Costa",
                location: "Barão Geraldo, Campinas"
              }
            ].map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{review.text}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#0B9D88] rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-[#0B9D88]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Pronto para uma transformação?</h2>
          <p className="text-white/90 text-lg mb-8">Agende sua limpeza profissional hoje mesmo e desfrute de uma casa mais fresca e saudável amanhã.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5519981947148"
              className="inline-flex items-center justify-center bg-white text-[#0B9D88] font-semibold py-4 px-8 rounded-lg hover:bg-[#36E1C5] hover:text-white transition-all"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Agora
            </a>
            <button 
              className="inline-flex items-center justify-center bg-[#36E1C5] text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-[#0B9D88] transition-all"
              onClick={() => {
                // Verifica se é um dispositivo móvel
                const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                
                if (isMobile) {
                  // Abre o discador para ligação
                  window.location.href = "tel:+5519981947148";
                } else {
                  // Abre o WhatsApp no desktop
                  window.open("https://wa.me/5519981947148", "_blank");
                }
              }}
            >
              <PhoneCall className="w-5 h-5 mr-2" />
              Obtenha um orçamento gratuito
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sousas Clean</h3>
            <p className="text-gray-400">Transformando lares em Campinas e região com serviços profissionais de limpeza de estofados desde 2022</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p className="text-gray-400">Telefone: +55 (19) 98194-7148</p>
            <p className="text-gray-400">Email: contato@sousasclean.com</p>
            <p className="text-gray-400">Endereço: Sousas, Campinas - SP</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Horário comercial</h3>
            <p className="text-gray-400">Segunda a sexta: 8h - 18h</p>
            <p className="text-gray-400">Sábado: 8h - 14h</p>
            <p className="text-gray-400">Domingo: Fechado</p>
          </div>
        </div>
      </footer>

      {/* Modal de Vídeo */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-xl shadow-xl max-w-2xl w-full relative">
            <button
              className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-800"
              onClick={closeModal}
            >
              &times;
            </button>
            <video
              src={videoUrl}
              controls
              autoPlay
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>  
  );
}

export default App;
