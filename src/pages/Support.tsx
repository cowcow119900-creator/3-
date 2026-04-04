import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, Phone, Mail } from 'lucide-react';

export default function Support() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "입금까지 시간이 얼마나 걸리나요?",
      a: "신청 완료 후 본인 확인 절차를 거쳐 고객님의 계좌로 입금되기까지 평균 3분 내외가 소요됩니다. 은행 점검 시간(보통 자정 전후)에는 다소 지연될 수 있습니다."
    },
    {
      q: "본인 명의의 휴대폰/계좌가 아니어도 되나요?",
      a: "사고 예방 및 안전한 거래를 위해 반드시 본인 명의의 휴대폰과 본인 명의의 계좌로만 이용이 가능합니다. 타인 명의 도용 시 서비스 이용이 제한될 수 있습니다."
    },
    {
      q: "한도는 어떻게 되나요?",
      a: "소액결제 한도는 통신사 정책에 따라 매월 1일 초기화되며, 최대 100만원까지 가능합니다. 상품권의 경우 별도의 한도 없이 보유하신 수량만큼 매입이 가능합니다."
    },
    {
      q: "24시간 언제든 가능한가요?",
      a: "네, 링크페이는 365일 24시간 연중무휴로 운영됩니다. 주말이나 공휴일에도 평일과 동일하게 실시간 상담 및 입금 서비스를 이용하실 수 있습니다."
    },
    {
      q: "수수료는 얼마인가요?",
      a: "수수료는 상품 종류 및 시장 상황에 따라 변동됩니다. 자세한 내용은 '단가안내' 페이지를 참고하시거나 상담원에게 문의하시면 실시간으로 안내해 드립니다."
    }
  ];

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">고객센터</h1>
          <p className="text-gray-600">궁금하신 점을 빠르게 해결해 드립니다.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <a 
            href="https://t.me/linkpay119"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-center hover:bg-gray-50 transition-colors"
          >
            <div className="w-12 h-12 bg-[#FEE500]/20 text-[#3C1E1E] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">채팅문의</h3>
            <p className="text-gray-600">텔레그램 연결</p>
          </a>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">이메일 문의</h3>
            <p className="text-gray-600 text-sm">goodpay1100@gmail.com</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">자주 묻는 질문 (FAQ)</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-800 pr-4">Q. {faq.q}</span>
                  {openIndex === i ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
                    <div className="pt-2 border-t border-gray-50">
                      A. {faq.a}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
