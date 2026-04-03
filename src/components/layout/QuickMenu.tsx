import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function QuickMenu() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 flex h-16 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <a 
          href="tel:1588-0000" 
          className="flex-1 flex flex-col items-center justify-center gap-1 text-gray-700 active:bg-gray-50"
        >
          <Phone size={20} className="text-primary" />
          <span className="text-[10px] font-bold">전화상담</span>
        </a>
        <button 
          className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#FEE500] text-[#3C1E1E] active:brightness-90"
        >
          <MessageCircle size={20} />
          <span className="text-[10px] font-bold">카톡상담</span>
        </button>
        <button 
          onClick={scrollToTop}
          className="flex-1 flex flex-col items-center justify-center gap-1 text-gray-700 active:bg-gray-50"
        >
          <ArrowUp size={20} />
          <span className="text-[10px] font-bold">TOP</span>
        </button>
      </div>

      {/* Desktop Floating Buttons */}
      <div className="hidden md:flex fixed bottom-8 right-8 flex-col gap-3 z-50">
        <button 
          onClick={scrollToTop}
          className={`p-3 bg-white border border-gray-200 rounded-full shadow-lg text-gray-600 hover:text-primary transition-all ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        >
          <ArrowUp size={24} />
        </button>
        <button className="w-16 h-16 bg-[#FEE500] rounded-full shadow-xl flex items-center justify-center text-[#3C1E1E] hover:scale-105 transition-transform">
          <MessageCircle size={32} />
        </button>
      </div>
    </>
  );
}
