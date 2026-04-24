import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Zap, Users, TrendingUp, Droplet, Shield, Star, CheckCircle, Globe, Sprout } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [rating, setRating] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', comment: '', category: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', comment: '', category: '' });
    setRating(0);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-[#1B4D3E]" />
            <span className="text-xl font-bold text-[#1B4D3E]">Agro Forte</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#sobre" className="text-[#1A1A1A] hover:text-[#1B4D3E] transition">Sobre</a>
            <a href="#inovacao" className="text-[#1A1A1A] hover:text-[#1B4D3E] transition">Inovação</a>
            <a href="#sustentabilidade" className="text-[#1A1A1A] hover:text-[#1B4D3E] transition">Sustentabilidade</a>
            <a href="#futuro" className="text-[#1A1A1A] hover:text-[#1B4D3E] transition">Futuro</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663175874071/FgJJbHBM52euW4xd8ApC6r/hero-agro-RzDgNwXznmrcSafgwCLqHB.webp"
            alt="Agricultura Sustentável"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative container py-32 md:py-48">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Agro Forte, <span className="text-[#B8E034]">Futuro Sustentável</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Transformando a agricultura com tecnologia de ponta e práticas sustentáveis. Construindo um futuro onde a produtividade e a preservação ambiental caminham juntas.
            </p>
            <div className="flex gap-4">
              <Button className="btn-primary flex items-center gap-2">
                Saiba Mais <ArrowRight className="w-4 h-4" />
              </Button>
              <Button className="btn-secondary flex items-center gap-2">
                Conheça Nossas Soluções
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="container py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] mb-6">
              O Que é Agro Forte?
            </h2>
            <p className="text-lg text-[#1A1A1A] mb-4 leading-relaxed">
              Agro Forte é um movimento transformador que une a força da agricultura tradicional com as inovações tecnológicas mais avançadas. Representa a evolução do agronegócio brasileiro, onde produtividade, rentabilidade e responsabilidade ambiental convergem para criar um modelo de desenvolvimento verdadeiramente sustentável.
            </p>
            <p className="text-lg text-[#1A1A1A] mb-6 leading-relaxed">
              Nossa visão é empoderar agricultores e empresas do setor com ferramentas, conhecimento e práticas que permitam aumentar a produção enquanto preservam os recursos naturais para as gerações futuras. Cada decisão no campo hoje determina a saúde do planeta amanhã.
            </p>
            <div className="flex gap-4">
              <div className="flex items-start gap-3">
                <Leaf className="w-6 h-6 text-[#2D8659] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#1B4D3E]">Sustentável</h4>
                  <p className="text-sm text-[#757575]">Preservação ambiental</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-[#C85A17] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#1B4D3E]">Inovador</h4>
                  <p className="text-sm text-[#757575]">Tecnologia de ponta</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663175874071/FgJJbHBM52euW4xd8ApC6r/technology-agro-fExEkTDqfQnsCbqwezAAtN.webp"
              alt="Tecnologia Agrícola"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Inovação Section */}
      <section id="inovacao" className="container py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] mb-4">
            Inovação Tecnológica
          </h2>
          <p className="text-xl text-[#757575] max-w-2xl mx-auto">
            A tecnologia é o alicerce do agronegócio moderno. Conheça as inovações que estão revolucionando o setor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="card-elevated">
            <div className="hexagon-badge mb-4 mx-auto">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#1B4D3E] mb-3 text-center">
              Agricultura de Precisão
            </h3>
            <p className="text-[#1A1A1A] leading-relaxed">
              Utilizando drones, sensores IoT e inteligência artificial, os agricultores podem monitorar cada metro quadrado de suas plantações em tempo real. Essa precisão permite otimizar o uso de água, fertilizantes e pesticidas, reduzindo custos e impacto ambiental.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card-elevated">
            <div className="hexagon-badge mb-4 mx-auto">
              <Droplet className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#1B4D3E] mb-3 text-center">
              Gestão Inteligente de Água
            </h3>
            <p className="text-[#1A1A1A] leading-relaxed">
              Sistemas de irrigação automatizados e inteligentes garantem que cada planta receba exatamente a quantidade de água necessária. Sensores de umidade do solo e previsão de chuvas permitem economizar até 40% de água mantendo a produtividade.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card-elevated">
            <div className="hexagon-badge mb-4 mx-auto">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#1B4D3E] mb-3 text-center">
              Análise de Dados Avançada
            </h3>
            <p className="text-[#1A1A1A] leading-relaxed">
              Big data e machine learning transformam informações agrícolas em insights acionáveis. Previsões de safra, detecção de pragas e recomendações de plantio baseadas em dados históricos e condições climáticas aumentam a rentabilidade.
            </p>
          </div>
        </div>
      </section>

      {/* Sustentabilidade Section */}
      <section id="sustentabilidade" className="bg-[#1B4D3E] text-white py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Sustentabilidade no Coração
              </h2>
              <p className="text-lg mb-4 leading-relaxed">
                A sustentabilidade não é uma meta futura — é a realidade do agronegócio moderno. Práticas como rotação de culturas, conservação do solo, proteção da biodiversidade e redução de emissões de carbono são fundamentais para garantir a viabilidade econômica e ambiental das operações agrícolas.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                Cada hectare cultivado com responsabilidade contribui para a segurança alimentar global, a preservação de ecossistemas e o combate às mudanças climáticas. Essa é a verdadeira força do agronegócio sustentável.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Shield className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Solo Saudável</h4>
                    <p className="text-sm text-gray-200">Práticas de conservação que preservam a fertilidade</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Leaf className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Biodiversidade</h4>
                    <p className="text-sm text-gray-200">Proteção de habitats naturais e espécies</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Droplet className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Água Limpa</h4>
                    <p className="text-sm text-gray-200">Gestão responsável dos recursos hídricos</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663175874071/FgJJbHBM52euW4xd8ApC6r/sustainability-agro-c49NxKDtqAncLvY49rMEXE.webp"
                alt="Sustentabilidade"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Futuro Section */}
      <section id="futuro" className="container py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] mb-4">
            O Futuro do Agronegócio
          </h2>
          <p className="text-xl text-[#757575] max-w-2xl mx-auto">
            Tendências e oportunidades que moldarão o setor nos próximos anos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-[#1B4D3E]">
            <h3 className="text-2xl font-bold text-[#1B4D3E] mb-3">
              Economia Circular
            </h3>
            <p className="text-[#1A1A1A] leading-relaxed mb-4">
              O futuro da agricultura passa pela economia circular, onde resíduos de uma atividade se tornam insumos para outra. Biomassa, biofertilizantes e energia renovável gerada na fazenda criam um sistema autossustentável e mais rentável.
            </p>
            <ul className="space-y-2 text-[#757575]">
              <li className="flex gap-2">
                <span className="text-[#C85A17]">•</span>
                Aproveitamento de resíduos agrícolas
              </li>
              <li className="flex gap-2">
                <span className="text-[#C85A17]">•</span>
                Produção de energia renovável
              </li>
              <li className="flex gap-2">
                <span className="text-[#C85A17]">•</span>
                Redução de dependência de insumos externos
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-[#0F3A4D]">
            <h3 className="text-2xl font-bold text-[#1B4D3E] mb-3">
              Conectividade e Dados
            </h3>
            <p className="text-[#1A1A1A] leading-relaxed mb-4">
              A transformação digital conecta fazendas, fornecedores, processadores e consumidores em uma rede integrada de informações. Rastreabilidade total, transparência na cadeia de suprimentos e certificações digitais ganham importância crescente.
            </p>
            <ul className="space-y-2 text-[#757575]">
              <li className="flex gap-2">
                <span className="text-[#C85A17]">•</span>
                Blockchain para rastreabilidade
              </li>
              <li className="flex gap-2">
                <span className="text-[#C85A17]">•</span>
                Plataformas de comercialização digital
              </li>
              <li className="flex gap-2">
                <span className="text-[#C85A17]">•</span>
                Certificações de sustentabilidade
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-[#2D8659]">
            <h3 className="text-2xl font-bold text-[#1B4D3E] mb-3">
              Biotecnologia Avançada
            </h3>
            <p className="text-[#1A1A1A] leading-relaxed mb-4">
              Variedades de plantas desenvolvidas por biotecnologia e melhoramento genético promovem maior produtividade com menor uso de recursos. Culturas resilientes a mudanças climáticas garantem segurança alimentar futura.
            </p>
            <ul className="space-y-2 text-[#757575]">
              <li className="flex gap-2">
                <span className="text-[#C85A17]">•</span>
                Sementes mais resistentes
              </li>
              <li className="flex gap-2">
                <span className="text-[#C85A17]">•</span>
                Maior eficiência nutricional
              </li>
              <li className="flex gap-2">
                <span className="text-[#C85A17]">•</span>
                Adaptação a climas extremos
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-[#C85A17]">
            <h3 className="text-2xl font-bold text-[#1B4D3E] mb-3">
              Comunidades e Conhecimento
            </h3>
            <p className="text-[#1A1A1A] leading-relaxed mb-4">
              O fortalecimento de comunidades agrícolas através de educação, capacitação e compartilhamento de conhecimento é essencial. Redes de cooperativas, associações e plataformas colaborativas amplificam o impacto positivo.
            </p>
            <ul className="space-y-2 text-[#757575]">
              <li className="flex gap-2">
                <span className="text-[#C85A17]">•</span>
                Programas de capacitação contínua
              </li>
              <li className="flex gap-2">
                <span className="text-[#C85A17]">•</span>
                Redes de cooperação
              </li>
              <li className="flex gap-2">
                <span className="text-[#C85A17]">•</span>
                Transferência de tecnologia
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-gradient-to-r from-[#1B4D3E] to-[#0F3A4D] text-white py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663175874071/FgJJbHBM52euW4xd8ApC6r/community-agro-c2U5eLi9CJcsYfoQFJX3SG.webp"
                alt="Comunidade Agrícola"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Comunidade e Colaboração
              </h2>
              <p className="text-lg mb-4 leading-relaxed">
                O agronegócio sustentável é construído sobre a base de comunidades fortes e colaborativas. Agricultores, pesquisadores, empresas de tecnologia e órgãos públicos trabalham juntos para criar soluções inovadoras e compartilhar melhores práticas.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                Através de associações, cooperativas e plataformas digitais, conhecimento é compartilhado, recursos são otimizados e impacto é amplificado. Juntos, construímos um futuro onde a agricultura é forte, próspera e sustentável.
              </p>
              <Button className="btn-secondary flex items-center gap-2">
                Junte-se ao Movimento <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-20">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-[#1B4D3E] mb-2">40%</div>
            <p className="text-[#757575]">Economia de água com irrigação inteligente</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-[#1B4D3E] mb-2">35%</div>
            <p className="text-[#757575]">Aumento de produtividade com tecnologia</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-[#1B4D3E] mb-2">50%</div>
            <p className="text-[#757575]">Redução de custos operacionais</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-[#1B4D3E] mb-2">100%</div>
            <p className="text-[#757575]">Rastreabilidade da produção</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1B4D3E] text-white py-20">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para Transformar Seu Agronegócio?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de agricultores e empresas que já estão colhendo os benefícios da agricultura sustentável e tecnológica.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="btn-secondary flex items-center gap-2">
              Solicitar Demonstração <ArrowRight className="w-4 h-4" />
            </Button>
            <Button className="bg-white text-[#1B4D3E] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300">
              Baixar Guia Completo
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] mb-4">Histórias de Sucesso</h2>
          <p className="text-xl text-[#757575] max-w-2xl mx-auto">Veja como agricultores e empresas transformaram seus negócios com Agro Forte.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "João Carlos Silva",
              role: "Produtor de Grãos - Mato Grosso",
              text: "A implementação da agricultura de precisão aumentou minha produtividade em 35% e reduziu significativamente meus custos. Recomendo Agro Forte!",
              stars: 5
            },
            {
              name: "Maria Beatriz Costa",
              role: "Produtora de Hortaliças - São Paulo",
              text: "Com a gestão inteligente de água, economizei 40% no consumo hídrico mantendo a qualidade. É um investimento que se paga rapidamente.",
              stars: 5
            },
            {
              name: "Roberto Campos",
              role: "Empresário Agrícola - Goiás",
              text: "A análise de dados fornecida pela plataforma me ajudou a tomar decisões mais assertivas. Minha rentabilidade aumentou consideravelmente.",
              stars: 5
            }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C85A17] text-[#C85A17]" />
                ))}
              </div>
              <p className="text-[#1A1A1A] mb-4 italic leading-relaxed">"{testimonial.text}"</p>
              <div>
                <h4 className="font-semibold text-[#1B4D3E]">{testimonial.name}</h4>
                <p className="text-sm text-[#757575]">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-r from-[#1B4D3E] to-[#0F3A4D] text-white py-20">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Por Que Escolher Agro Forte?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { icon: CheckCircle, title: "Comprovado", desc: "Resultados validados por milhares de agricultores em todo o Brasil" },
              { icon: TrendingUp, title: "Rentável", desc: "Aumento de produtividade e redução de custos operacionais garantidos" },
              { icon: Globe, title: "Sustentável", desc: "Práticas que preservam o meio ambiente e garantem futuro" },
              { icon: Sprout, title: "Inovador", desc: "Tecnologia de ponta que evolui constantemente" }
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <benefit.icon className="w-12 h-12 flex-shrink-0 text-[#B8E034]" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-200 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] mb-4">Galeria de Inovações</h2>
          <p className="text-xl text-[#757575]">Conheça as práticas e tecnologias transformando o agronegócio</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663175874071/FgJJbHBM52euW4xd8ApC6r/drone-agro-NNgVCmLTutrGEpJQdokj8L.webp", title: "Visão Aérea", desc: "Monitoramento com drones" },
            { img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663175874071/FgJJbHBM52euW4xd8ApC6r/soil-analysis-TuC8ciBA8qz739BA9hSM3Z.webp", title: "Análise de Solo", desc: "Testes científicos avançados" },
            { img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663175874071/FgJJbHBM52euW4xd8ApC6r/innovation-lab-HtcrtdxYcKpmxVahoF8VvS.webp", title: "Lab de Inovação", desc: "Pesquisa e desenvolvimento" }
          ].map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src={item.img} alt={item.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                <p className="text-gray-200 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ratings Section */}
      <section className="bg-[#1B4D3E] text-white py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Avalie Agro Forte</h2>
            <p className="text-xl text-gray-200">Sua opinião é importante para nós. Compartilhe sua experiência!</p>
          </div>

          <div className="max-w-2xl mx-auto bg-white text-[#1A1A1A] rounded-lg p-8 shadow-2xl">
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Avaliação enviada com sucesso! Obrigado pelo feedback.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Nome Completo *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-[#E8E4E0] rounded-lg focus:outline-none focus:border-[#1B4D3E]"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-[#E8E4E0] rounded-lg focus:outline-none focus:border-[#1B4D3E]"
                  placeholder="seu.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-4">Avaliação do Site *</label>
                <div className="flex gap-3 justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="transition-transform hover:scale-125"
                    >
                      <Star
                        className={`w-10 h-10 ${
                          star <= rating
                            ? 'fill-[#C85A17] text-[#C85A17]'
                            : 'text-[#E8E4E0]'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Seu Comentário *</label>
                <textarea
                  required
                  value={formData.comment}
                  onChange={(e) => setFormData({...formData, comment: e.target.value})}
                  className="w-full px-4 py-2 border border-[#E8E4E0] rounded-lg focus:outline-none focus:border-[#1B4D3E] resize-none"
                  rows={5}
                  placeholder="Compartilhe sua experiência com Agro Forte..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Categoria de Interesse</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full px-4 py-2 border border-[#E8E4E0] rounded-lg focus:outline-none focus:border-[#1B4D3E]"
                >
                  <option value="">Selecione uma categoria</option>
                  <option value="agricultura-precisao">Agricultura de Precisão</option>
                  <option value="gestao-agua">Gestão de Água</option>
                  <option value="analise-dados">Análise de Dados</option>
                  <option value="sustentabilidade">Sustentabilidade</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                Enviar Avaliação <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] mb-4">Perguntas Frequentes</h2>
          <p className="text-xl text-[#757575]">Tire suas dúvidas sobre Agro Forte</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: "Como funciona a agricultura de precisão?", a: "A agricultura de precisão utiliza drones, sensores e IA para monitorar cada área da plantação em tempo real, otimizando recursos." },
            { q: "Quanto posso economizar com a gestão inteligente de água?", a: "Nossos clientes relatam economia de até 40% no consumo de água mantendo ou aumentando a produtividade." },
            { q: "Qual é o tempo de retorno do investimento?", a: "Geralmente, o ROI ocorre entre 12 a 18 meses, dependendo do tamanho da propriedade e tecnologias implementadas." },
            { q: "Agro Forte oferece suporte técnico?", a: "Sim! Oferecemos suporte 24/7, treinamento de equipe e acompanhamento contínuo." }
          ].map((faq, idx) => (
            <details key={idx} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
              <summary className="flex items-center justify-between font-semibold text-[#1B4D3E] group-open:text-[#C85A17]">
                {faq.q}
                <span className="text-2xl group-open:rotate-180 transition-transform">▶</span>
              </summary>
              <p className="mt-4 text-[#757575] leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-6 h-6 text-[#2D8659]" />
                <span className="font-bold">Agro Forte</span>
              </div>
              <p className="text-gray-400">Transformando a agricultura para um futuro sustentável.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Soluções</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Agricultura de Precisão</a></li>
                <li><a href="#" className="hover:text-white transition">Gestão de Água</a></li>
                <li><a href="#" className="hover:text-white transition">Análise de Dados</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition">Termos</a></li>
                <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Agro Forte. Todos os direitos reservados. Construindo um futuro sustentável juntos.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
