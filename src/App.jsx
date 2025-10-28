import { useState } from 'react';
import { Menu, X, ChevronDown, ChevronUp, Users, Grid, Shield, Calendar, MapPin, Clock } from 'lucide-react';

const JOGOS_FICTICIOS = [
  {
    id: 1,
    nome: "Final do Campeonato",
    data: "20/11/2025",
    hora: "19:00",
    local: "Arena Municipal",
    timeCasa: "Passa a Bola FC",
    timeFora: "Guerrilheiras Unidas",
    logoCasa: "https://placehold.co/80x80/5e3b63/ffffff?text=PB",
    logoFora: "https://placehold.co/80x80/a74e67/ffffff?text=GU"
  },
  {
    id: 2,
    nome: "Semifinal Regional",
    data: "15/11/2025",
    hora: "16:30",
    local: "Estádio do Bairro",
    timeCasa: "Amazonas FC",
    timeFora: "Passa a Bola FC",
    logoCasa: "https://placehold.co/80x80/598819/ffffff?text=AF",
    logoFora: "https://placehold.co/80x80/5e3b63/ffffff?text=PB"
  },
  {
    id: 3,
    nome: "Rodada 10 - Estadual",
    data: "08/11/2025",
    hora: "14:00",
    local: "Centro de Treinamento",
    timeCasa: "Atléticas Poderosas",
    timeFora: "Passa a Bola FC",
    logoCasa: "https://placehold.co/80x80/3b5e63/ffffff?text=AP",
    logoFora: "https://placehold.co/80x80/5e3b63/ffffff?text=PB"
  },
  {
    id: 4,
    nome: "Amistoso de Inverno",
    data: "01/11/2025",
    hora: "20:00",
    local: "Campo Neutro",
    timeCasa: "Passa a Bola FC",
    timeFora: "Novas Talentos",
    logoCasa: "https://placehold.co/80x80/5e3b63/ffffff?text=PB",
    logoFora: "https://placehold.co/80x80/4e67a7/ffffff?text=NT"
  },
];

const JOGADORAS_IMG_URL = "/images/jogadora.png";
const SOBRE_IMG_URL = "/images/jogadora.png";
const TABELA_IMG_URL = "/images/jogadora.png";


const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg transform transition-all duration-300 scale-100">
        <div className="flex justify-between items-center mb-4 border-b pb-3">
          <h3 className="text-2xl font-bold text-[#5e3b63]">{title}</h3>
          <button onClick={onClose} className="p-2 rounded-full text-gray-600 hover:bg-gray-200 transition">
            <X size={24} />
          </button>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

const HomePage = ({ onNavigate }) => (
  <main className="container mx-auto mt-10 px-4 py-10">
    <div className="text-center mb-12">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white bg-[#5e3b63] p-4 rounded-xl shadow-lg leading-tight mx-auto max-w-4xl">
        Bem-vindo ao Passa a Bola
      </h1>
      <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
        Seu portal completo de informações sobre jogos de futebol feminino e a nossa comunidade.
      </p>
    </div>

    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
        <img
          src={JOGADORAS_IMG_URL}
          alt="Análise do Jogo"
          className="w-full h-40 object-cover rounded-lg mb-4"
          onError={(e) => e.currentTarget.src = 'https://placehold.co/600x400/ccc/999?text=Imagem+N%C3%A3o+Encontrada'}
        />
        <h2 className="text-2xl font-bold text-[#5e3b63] mb-2">Análise dos Últimos Jogos</h2>
        <p className="text-gray-600 mb-4">
          Confira os destaques, estatísticas e a performance da equipe nas últimas partidas.
        </p>
        <button
          onClick={() => onNavigate('jogos')}
          className="bg-[#598819] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#497016] transition shadow-md">
          Ver Análise &raquo;
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
        <img
          src={SOBRE_IMG_URL}
          alt="Sobre o time"
          className="w-full h-40 object-cover rounded-lg mb-4"
          onError={(e) => e.currentTarget.src = 'https://placehold.co/600x400/ccc/999?text=Imagem+N%C3%A3o+Encontrada'}
        />
        <h2 className="text-2xl font-bold text-[#5e3b63] mb-2">Quem Somos Nós?</h2>
        <p className="text-gray-600 mb-4">
          Nossa missão é usar o esporte para transformar vidas e quebrar barreiras.
        </p>
        <button
          onClick={() => onNavigate('sobre')}
          className="bg-[#598819] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#497016] transition shadow-md">
          Saber Mais &raquo;
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
        <img
          src={TABELA_IMG_URL}
          alt="Tabela de jogos"
          className="w-full h-40 object-cover rounded-lg mb-4"
          onError={(e) => e.currentTarget.src = 'https://placehold.co/600x400/ccc/999?text=Imagem+N%C3%A3o+Encontrada'}
        />
        <h2 className="text-2xl font-bold text-[#5e3b63] mb-2">Próximos Confrontos</h2>
        <p className="text-gray-600 mb-4">
          Fique por dentro da tabela de jogos, horários e locais. Não perca nenhum lance!
        </p>
        <button
          onClick={() => onNavigate('jogos')}
          className="bg-[#598819] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#497016] transition shadow-md">
          Ver Tabela &raquo;
        </button>
      </div>
    </section>
  </main>
);

const AboutPage = () => (
  <main className="container mx-auto mt-10 px-4 py-10">
    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl">
      <section className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Sobre o <span className="text-[#598819]">Passa a Bola</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          O Passa a Bola é mais do que um coletivo de futebol feminino. Somos uma comunidade de paixão, empoderamento e união. Nossa missão é usar o esporte para transformar vidas e quebrar barreiras.
        </p>
      </section>

      <hr className="border-gray-200 my-10" />

      <section className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-[#598819] pb-2">Nossa Jornada</h2>
          <p className="text-gray-700 text-lg">
            Tudo começou com a vontade de um grupo de amigas de ter um espaço seguro e inclusivo para praticar o futebol. O que era um simples encontro semanal se transformou em um movimento que hoje inspira dezenas de mulheres.
          </p>
          <p className="text-gray-700 text-lg mt-4">
            Com cada passe, cada gol e cada vitória, o Passa a Bola cresceu, tornando-se um refúgio de amizade, respeito e dedicação, mostrando que a paixão pelo futebol não tem gênero.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-inner">
          <h2 className="text-3xl font-bold text-[#5e3b63] mb-6 text-center">O Que Nos Move</h2>
          <div className="space-y-4">
            <FeatureCard icon={Users} title="Comunidade" description="Construímos uma rede de apoio mútua, dentro e fora de campo." />
            <FeatureCard icon={Shield} title="Empoderamento" description="Encorajamos cada mulher a descobrir sua força e sua voz através do esporte." />
            <FeatureCard icon={Grid} title="Respeito" description="Promovemos um ambiente de inclusão, onde a diversidade é celebrada." />
          </div>
        </div>
      </section>
    </div>
  </main>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
    <Icon size={24} className="text-[#598819] mr-4 mt-1 flex-shrink-0" />
    <div>
      <h3 className="text-xl font-semibold text-[#5e3b63] mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const GameCard = ({ jogo, onOpenModal }) => (
  <div
    className='bg-[#a74e67] p-8 rounded-xl shadow-lg my-4 flex flex-col justify-center items-center w-full transform transition-all duration-300 hover:scale-[1.02] cursor-pointer'
    onClick={() => onOpenModal(jogo)}
  >
    <p className='font-sans text-3xl text-white font-bold mb-4 text-center'>{jogo.nome}</p>

    <div className='flex justify-around items-center w-full my-4'>
      <div className='flex flex-col items-center'>
        <img
          src={jogo.logoCasa}
          className='rounded-full w-20 h-20 shadow-md'
          alt={jogo.timeCasa}
          onError={(e) => e.currentTarget.src = `https://placehold.co/80x80/ccc/999?text=${jogo.timeCasa.substring(0, 2)}`}
        />
        <p className='mt-2 text-white font-semibold text-sm text-center'>{jogo.timeCasa}</p>
      </div>
      <p className='text-3xl font-extrabold text-[#598819] mx-4'>VS</p>
      <div className='flex flex-col items-center'>
        <img
          src={jogo.logoFora}
          className='rounded-full w-20 h-20 shadow-md'
          alt={jogo.timeFora}
          onError={(e) => e.currentTarget.src = `https://placehold.co/80x80/ccc/999?text=${jogo.timeFora.substring(0, 2)}`}
        />
        <p className='mt-2 text-white font-semibold text-sm text-center'>{jogo.timeFora}</p>
      </div>
    </div>

    <div className="mt-4 w-full border-t border-gray-400 border-opacity-50 pt-4 space-y-2 text-white text-base">
      <div className='flex items-center justify-center'><Calendar size={18} className="mr-2 text-[#598819]" /> {jogo.data}</div>
      <div className='flex items-center justify-center'><Clock size={18} className="mr-2 text-[#598819]" /> {jogo.hora}</div>
      <div className='flex items-center justify-center'><MapPin size={18} className="mr-2 text-[#598819]" /> {jogo.local}</div>
    </div>
  </div>
);

const GamesPage = () => {
  const [jogos] = useState(JOGOS_FICTICIOS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const handleOpenModal = (jogo) => {
    setSelectedGame(jogo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedGame(null);
  };

  return (
    <>
      <header className='flex justify-center bg-[#5e3b63] text-white p-10 shadow-xl'>
        <h1 className='font-sans text-5xl font-extrabold'>Tabela de Jogos</h1>
      </header>

      <main className='p-8 md:p-12 flex flex-col items-center min-h-[60vh]'>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Próximos Confrontos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
          {jogos.map(jogo => (
            <GameCard
              key={jogo.id}
              jogo={jogo}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedGame ? `Detalhes: ${selectedGame.nome}` : "Detalhes do Jogo"}
        >
          {selectedGame && (
            <div className='text-gray-700 space-y-3'>
              <p><strong>Time da Casa:</strong> {selectedGame.timeCasa}</p>
              <p><strong>Time Visitante:</strong> {selectedGame.timeFora}</p>
              <p><strong>Data:</strong> {selectedGame.data}</p>
              <p><strong>Hora:</strong> {selectedGame.hora}</p>
              <p><strong>Local:</strong> {selectedGame.local}</p>
              <button
                onClick={handleCloseModal}
                className="mt-4 w-full bg-[#5e3b63] text-white py-2 rounded-lg font-semibold hover:bg-[#4d2f52] transition"
              >
                Fechar
              </button>
            </div>
          )}
        </Modal>
      </main>
    </>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isGamesDropdownOpen, setIsGamesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'sobre':
        return <AboutPage />;
      case 'jogos':
        return <GamesPage />;
      default:
        return <div className="p-10 text-center text-gray-800 text-3xl">Página não encontrada!</div>;
    }
  };

  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal min-h-screen flex flex-col">
      <header className="bg-[#5e3b63] shadow-xl sticky top-0 z-40">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => setCurrentPage('home')}
            className="text-2xl md:text-3xl font-extrabold text-white focus:outline-none">
            Passa a Bola
          </button>

          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-[#4d2f52] transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="hidden md:flex space-x-8 items-center">
            <NavLink name="Início" page="home" currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <NavLink name="Sobre Nós" page="sobre" currentPage={currentPage} setCurrentPage={setCurrentPage} />

            <div className="relative">
              <button
                onMouseEnter={() => setIsGamesDropdownOpen(true)}
                onMouseLeave={() => setIsGamesDropdownOpen(false)}
                onClick={() => { setCurrentPage('jogos'); setIsGamesDropdownOpen(false); }}
                className={`text-white py-2 px-3 flex items-center hover:bg-[#4d2f52] rounded-lg transition ${currentPage === 'jogos' ? 'font-semibold bg-[#4d2f52]' : ''}`}
              >
                Jogos
                {isGamesDropdownOpen ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
              </button>

              {isGamesDropdownOpen && (
                <div
                  onMouseEnter={() => setIsGamesDropdownOpen(true)}
                  onMouseLeave={() => setIsGamesDropdownOpen(false)}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl overflow-hidden z-10"
                >
                  <DropdownItem
                    name="Tabela de Jogos"
                    onClick={() => { setCurrentPage('jogos'); setIsGamesDropdownOpen(false); }}
                  />
                  <DropdownItem
                    name="Próximos Treinos"
                    onClick={() => { setCurrentPage('jogos'); setIsGamesDropdownOpen(false); }}
                  />
                </div>
              )}
            </div>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#4d2f52] pb-2 px-6 transition-all duration-300">
            <MobileNavLink name="Início" page="home" currentPage={currentPage} setCurrentPage={setCurrentPage} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <MobileNavLink name="Sobre Nós" page="sobre" currentPage={currentPage} setCurrentPage={setCurrentPage} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <MobileNavLink name="Jogos" page="jogos" currentPage={currentPage} setCurrentPage={setCurrentPage} setIsMobileMenuOpen={setIsMobileMenuOpen} />
          </div>
        )}
      </header>

      {renderPage()}

      <footer className="bg-[#5e3b63] text-white py-6 mt-auto shadow-inner">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm md:text-base">&copy; 2025 Passa a Bola. Desenvolvido para a disciplina de JavaScript na FIAP.</p>
        </div>
      </footer>
    </div>
  );
}

const NavLink = ({ name, page, currentPage, setCurrentPage }) => (
  <button
    onClick={() => setCurrentPage(page)}
    className={`text-white text-lg py-1 hover:text-gray-200 transition border-b-2 focus:outline-none ${currentPage === page ? 'border-[#598819] font-semibold' : 'border-transparent hover:border-white'}`}
  >
    {name}
  </button>
);

const MobileNavLink = ({ name, page, currentPage, setCurrentPage, setIsMobileMenuOpen }) => (
  <button
    onClick={() => { setCurrentPage(page); setIsMobileMenuOpen(false); }}
    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition ${currentPage === page ? 'bg-[#598819] text-white' : 'text-gray-200 hover:bg-[#5e3b63] hover:text-white'}`}
  >
    {name}
  </button>
);

const DropdownItem = ({ name, onClick }) => (
  <a
    href="#"
    onClick={(e) => { e.preventDefault(); onClick(); }}
    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
  >
    {name}
  </a>
);

