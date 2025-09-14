import { useState } from 'react';
import './index.css'; 
// Componente para a Página Home
const HomePage = ({ onNavigate }) => (
  <main className="container mx-auto mt-10 px-6 py-10">
    <div className="text-center mb-12">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
        Bem-vindo ao <span className="text-blue-600">Passa a Bola</span>
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        Seu portal completo de informações sobre jogos de futebol e muito mais.
      </p>
    </div>

    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card 1: Notícia */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Análise do Jogo de Ontem</h2>
        <p className="text-gray-600 mb-4">
          Confira os destaques, estatísticas e a performance dos jogadores na partida que agitou a última rodada do campeonato.
        </p>
        <button 
          onClick={() => onNavigate('jogos')} 
          className="text-blue-600 font-semibold hover:text-blue-800 transition">
          Ver Análise &raquo;
        </button>
      </div>

      {/* Card 2: Sobre a Empresa */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Quem Somos Nós?</h2>
        <p className="text-gray-600 mb-4">
          Nossa missão é trazer as melhores informações e análises para a comunidade do futebol. Conheça a equipe por trás do "Passa a Bola".
        </p>
        <button 
          onClick={() => onNavigate('sobre')} 
          className="text-blue-600 font-semibold hover:text-blue-800 transition">
          Saber Mais &raquo;
        </button>
      </div>
      
      {/* Card 3: Próximos Jogos */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Tabela de Jogos</h2>
        <p className="text-gray-600 mb-4">
          Fique por dentro dos próximos confrontos, horários e onde assistir. Não perca nenhum lance!
        </p>
        <button 
          onClick={() => onNavigate('jogos')} 
          className="text-blue-600 font-semibold hover:text-blue-800 transition">
          Ver Tabela &raquo;
        </button>
      </div>
    </section>
  </main>
);

// Componente para a Página Sobre Nós
// Componente para a Página Sobre Nós
const AboutPage = () => (
    <main className="container mx-auto mt-10 px-6 py-10">
        <div className="bg-white p-8 rounded-lg shadow-lg">

            {/* Seção 1: Missão e Introdução */}
            <section className="mb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                    Sobre o <span className="text-blue-600">Passa a Bola</span>
                </h1>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    O Passa a Bola é mais do que um coletivo de futebol feminino. Somos uma comunidade de paixão, empoderamento e união. Nossa missão é usar o esporte para transformar vidas e quebrar barreiras, criando um espaço onde todas se sintam valorizadas e inspiradas.
                </p>
            </section>

            <hr className="border-gray-300 my-8" />

            {/* Seção 2: Nossa Jornada */}
            <section className="mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">Nossa Jornada</h2>
                <div className="md:flex items-center space-y-6 md:space-y-0 md:space-x-8">
                    <p className="text-gray-600 text-lg md:w-1/2">
                        Tudo começou com a vontade de um grupo de amigas de ter um espaço seguro e inclusivo para praticar o futebol, que historicamente foi dominado por homens. O que era um simples encontro semanal se transformou em um movimento que hoje inspira dezenas de mulheres a calçarem suas chuteiras e entrarem em campo.
                    </p>
                    <p className="text-gray-600 text-lg md:w-1/2">
                        Com cada passe, cada gol e cada vitória, seja dentro ou fora de campo, o Passa a Bola cresceu. Nosso projeto se tornou um refúgio de amizade, respeito e dedicação, mostrando que a paixão pelo futebol não tem gênero.
                    </p>
                </div>
            </section>

            <hr className="border-gray-300 my-8" />

            {/* Seção 3: Nossos Valores */}
            <section className="mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">O Que Nos Move</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="p-4 rounded-md border border-gray-200">
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">Comunidade</h3>
                        <p className="text-gray-700">Construímos uma rede de apoio mútua, dentro e fora de campo.</p>
                    </div>
                    <div className="p-4 rounded-md border border-gray-200">
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">Empoderamento</h3>
                        <p className="text-gray-700">Encorajamos cada mulher a descobrir sua força e sua voz através do esporte.</p>
                    </div>
                    <div className="p-4 rounded-md border border-gray-200">
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">Respeito</h3>
                        <p className="text-gray-700">Promovemos um ambiente de inclusão, onde a diversidade é celebrada.</p>
                    </div>
                </div>
            </section>

        </div>
    </main>
);

// Componente para a Página de Jogos
const GamesPage = () => (
  <main className="container mx-auto mt-10 px-6 py-10">
    <h1 className="text-4xl font-bold text-gray-800 mb-8">Próximos Jogos</h1>
    
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col md:flex-row justify-between items-center">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h2 className="text-2xl font-bold text-gray-900">Time A vs. Time B</h2>
        <p className="text-gray-600 text-lg">Campeonato Brasileiro</p>
        <p className="text-gray-500 text-sm">Sábado, 28 de Setembro, 16:00h</p>
      </div>
      <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full">
        Ao Vivo
      </div>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h2 class="text-2xl font-bold text-gray-900">Time C vs. Time D</h2>
        <p class="text-gray-600 text-lg">Copa do Mundo</p>
        <p class="text-gray-500 text-sm">Domingo, 29 de Setembro, 19:30h</p>
      </div>
      <div class="bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full">
        Finalizado: 3 - 1
      </div>
    </div>
  </main>
);

// Componente Principal da Aplicação
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    if (currentPage === 'home') {
      return <HomePage onNavigate={setCurrentPage} />;
    } else if (currentPage === 'sobre') {
      return <AboutPage />;
    } else if (currentPage === 'jogos') {
      return <GamesPage />;
    }
    return <div>Página não encontrada!</div>;
  };

  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal min-h-screen flex flex-col">
      {/* Navbar (componente reutilizável) */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <button 
            onClick={() => setCurrentPage('home')} 
            className="text-2xl font-bold text-gray-800 focus:outline-none">
            Passa a Bola
          </button>
          <div className="space-x-6">
            <button 
              onClick={() => setCurrentPage('home')} 
              className={`text-gray-600 hover:text-gray-900 transition ${currentPage === 'home' ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : ''}`}>
              Início
            </button>
            <button 
              onClick={() => setCurrentPage('sobre')} 
              className={`text-gray-600 hover:text-gray-900 transition ${currentPage === 'sobre' ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : ''}`}>
              Sobre Nós
            </button>
            <button 
              onClick={() => setCurrentPage('jogos')} 
              className={`text-gray-600 hover:text-gray-900 transition ${currentPage === 'jogos' ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : ''}`}>
              Jogos
            </button>
          </div>
        </nav>
      </header>
      
      {renderPage()}
      
      {/* Rodapé (componente reutilizável) */}
      <footer className="bg-purple-400 text-white py-6 mt-auto">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Passa a Bola. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}