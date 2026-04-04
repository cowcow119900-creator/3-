import { motion } from 'motion/react';
import { MessageCircle, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-20 lg:pt-20 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
              <Zap size={16} />
              <span>업계 최단시간 3분 입금 보장</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.15] mb-6">
              복잡한 절차 없이 <br />
              <span className="text-primary">3분 안에!</span> <br />
              24시간 안전 비상금
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
              소액결제부터 각종 상품권까지, 업계 최고가 매입을 약속합니다. 
              365일 24시간 전문 상담원이 실시간으로 대기하고 있습니다.
            </p>

            <div className="flex justify-center">
              <a 
                href="https://t.me/linkpay119"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FEE500] text-[#3C1E1E] px-12 py-5 rounded-2xl font-bold text-xl shadow-lg shadow-yellow-400/20 hover:brightness-95 transition-all flex items-center justify-center gap-3"
              >
                <MessageCircle size={26} />
                채팅문의
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={18} className="text-green-500" />
                정식 등록 업체
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={18} className="text-green-500" />
                개인정보 100% 보호
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
