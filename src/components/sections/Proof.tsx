import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, CheckCircle } from 'lucide-react';

const names = ["김*수", "이*희", "박*준", "최*영", "정*우", "강*민", "조*아", "윤*성"];
const amounts = ["50,000", "100,000", "150,000", "200,000", "300,000", "500,000"];
const types = ["소액결제", "컬쳐랜드", "해피머니", "구글기프트", "정보이용료"];

export default function Proof() {
  const [deposits, setDeposits] = useState<any[]>([]);

  useEffect(() => {
    const generateDeposit = () => {
      const newDeposit = {
        id: Date.now(),
        name: names[Math.floor(Math.random() * names.length)],
        amount: amounts[Math.floor(Math.random() * amounts.length)],
        type: types[Math.floor(Math.random() * types.length)],
        time: "방금 전"
      };
      setDeposits(prev => [newDeposit, ...prev.slice(0, 4)]);
    };

    const interval = setInterval(generateDeposit, 3000);
    generateDeposit();
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
              실시간 입금 현황
            </h2>
            <div className="space-y-3">
              <AnimatePresence mode="popLayout">
                {deposits.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                        {item.name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{item.name}님</p>
                        <p className="text-xs text-gray-500">{item.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">{item.amount}원</p>
                      <p className="text-[10px] text-green-600 font-bold flex items-center justify-end gap-1">
                        <CheckCircle size={10} /> 입금완료
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
              고객 리얼 후기
            </h2>
            <div className="grid gap-6">
              {[
                { name: "이*진", rating: 5, text: "급하게 돈이 필요했는데 상담원분이 너무 친절하시고 3분도 안돼서 바로 입금됐어요. 감사합니다!" },
                { name: "최*호", rating: 5, text: "다른 곳보다 매입가가 훨씬 높네요. 앞으로 여기만 이용할 것 같아요. 강추합니다!" }
              ].map((review, i) => (
                <div key={i} className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed italic">"{review.text}"</p>
                  <p className="text-sm font-bold text-gray-900">{review.name}님</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
