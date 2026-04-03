import { Clock, TrendingUp, ShieldCheck, Headphones } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: <Clock className="text-primary" size={32} />,
    title: "3분 이내 입금",
    description: "신청부터 입금까지 단 3분! 기다림 없는 신속한 서비스를 제공합니다."
  },
  {
    icon: <TrendingUp className="text-secondary" size={32} />,
    title: "업계 최고가 매입",
    description: "중간 수수료를 최소화하여 고객님께 업계 최고 수준의 매입가를 보장합니다."
  },
  {
    icon: <ShieldCheck className="text-green-500" size={32} />,
    title: "안전 거래 보장",
    description: "정식 등록 업체로서 개인정보 유출 걱정 없는 안전한 거래를 약속합니다."
  },
  {
    icon: <Headphones className="text-orange-500" size={32} />,
    title: "24시간 연중무휴",
    description: "365일 24시간 언제 어디서나 실시간 상담 및 입금이 가능합니다."
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            왜 <span className="text-primary">3분머니</span> 인가요?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            수많은 고객님들이 선택해주신 이유, <br className="sm:hidden" />
            차별화된 서비스로 보답하겠습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-6 bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
