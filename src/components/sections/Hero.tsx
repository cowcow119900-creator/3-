import { motion } from 'motion/react';
import { MessageCircle, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-20 lg:pt-20 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
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
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              소액결제부터 각종 상품권까지, 업계 최고가 매입을 약속합니다. 
              365일 24시간 전문 상담원이 실시간으로 대기하고 있습니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 sm:flex-none bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                지금 바로 신청하기
              </button>
              <button className="flex-1 sm:flex-none bg-[#FEE500] text-[#3C1E1E] px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-yellow-400/20 hover:brightness-95 transition-all flex items-center justify-center gap-2">
                <MessageCircle size={22} />
                카톡 상담하기
              </button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-gray-500 font-medium">
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

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">01</span>
              빠른 상담 신청
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">성함</label>
                <input 
                  type="text" 
                  placeholder="성함을 입력해주세요"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">연락처</label>
                <input 
                  type="tel" 
                  placeholder="010-0000-0000"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">문의내용</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                  <option>소액결제 현금화</option>
                  <option>상품권 매입</option>
                  <option>정보이용료/콘텐츠이용료</option>
                  <option>기타 문의</option>
                </select>
              </div>
              <div className="pt-2">
                <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-black transition-all">
                  상담 신청하기
                </button>
                <p className="text-center text-xs text-gray-400 mt-3">
                  ※ 신청 즉시 담당 상담원이 순차적으로 연락드립니다.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
