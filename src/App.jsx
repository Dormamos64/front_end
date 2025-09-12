import { useState } from 'react';
import './index.css'; 
// Componente para a Página Home
const HomePage = ({ onNavigate }) => (
  <main className="container mx-auto mt-10 px-6 py-20 text-center">
    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
      Bem-vindo ao Mundo do Futebol
    </h1>
    <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
      Seu portal completo de informações sobre jogos de futebol.
    </p>
    <button 
      onClick={() => onNavigate('jogos')} 
      className="mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
      Ver Jogos de Futebol
    </button>
  </main>
);

// Componente para a Página Sobre Nós
const AboutPage = () => (
  <main className="container mx-auto mt-10 px-6 py-10">
    <h1 className="text-4xl font-bold text-gray-800 mb-6">Sobre Nós</h1>
    <div className="bg-white p-8 rounded-lg shadow-md">
      <p className="text-gray-700 mb-4 text-lg">
        Somos apaixonados por futebol e criamos este site para ser o seu destino para informações, estatísticas e curiosidades sobre o esporte mais popular do mundo.
      </p>
      <p className="text-gray-700 text-lg">
        Nossa equipe é formada por desenvolvedores e entusiastas do futebol.
      </p>
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
            Site de Futebol
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
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Site de Futebol. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}