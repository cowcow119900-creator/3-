import { Link } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: '홈', path: '/' },
    { name: '단가안내', path: '/details' },
    { name: '이용방법', path: '/services' },
    { name: '업체소개', path: '/about' },
    { name: '고객센터', path: '/support' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-1">
              <span className="bg-primary text-white px-2 py-0.5 rounded italic">3분</span>
              <span>머니</span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-600 hover:text-primary font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:1588-0000" className="flex items-center gap-1 text-gray-700 font-semibold">
              <Phone size={18} className="text-primary" />
              1588-0000
            </a>
            <button className="bg-[#FEE500] text-[#3C1E1E] px-4 py-2 rounded-full font-bold flex items-center gap-2 hover:brightness-95 transition-all">
              <MessageCircle size={18} />
              카톡상담
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary border-b border-gray-100 last:border-0"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a href="tel:1588-0000" className="flex items-center justify-center gap-2 py-3 bg-gray-100 rounded-xl font-bold text-gray-800">
                  <Phone size={20} className="text-primary" />
                  전화상담 연결
                </a>
                <button className="flex items-center justify-center gap-2 py-3 bg-[#FEE500] rounded-xl font-bold text-[#3C1E1E]">
                  <MessageCircle size={20} />
                  카카오톡 실시간 상담
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
