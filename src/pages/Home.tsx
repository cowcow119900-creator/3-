import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Proof from '../components/sections/Proof';
import { MessageCircle, Phone } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Proof />
      
      {/* Final CTA Section */}
      <section className="py-20 bg-primary overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[60px] border-white rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            지금 바로 실시간 입금 받기
          </h2>
          <p className="text-white/80 mb-10 max-w-xl mx-auto text-lg">
            고민은 입금만 늦출 뿐! <br className="sm:hidden" />
            24시간 대기 중인 상담원에게 문의하세요.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="https://t.me/linkpay119"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FEE500] text-[#3C1E1E] px-10 py-5 rounded-2xl font-bold text-xl shadow-xl hover:brightness-95 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={24} />
              채팅문의
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
