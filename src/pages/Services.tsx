import { Smartphone, ClipboardCheck, Banknote, ArrowRight } from 'lucide-react';

export default function Services() {
  const steps = [
    {
      icon: <Smartphone size={32} />,
      title: "상담 신청",
      desc: "홈페이지 신청 폼 또는 텔레그램/전화로 상담을 요청합니다.(카카오톡은 운영정책상 이용불가합니다.)"
    },
    {
      icon: <ClipboardCheck size={32} />,
      title: "본인 확인 및 승인",
      desc: "간단한 본인 확인 절차 후 매입 가능 여부를 확인합니다."
    },
    {
      icon: <Banknote size={32} />,
      title: "즉시 입금",
      desc: "승인 즉시 고객님의 계좌로 3분 이내에 입금됩니다."
    }
  ];

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">이용 방법 안내</h1>
          <p className="text-gray-600">누구나 쉽고 빠르게 이용할 수 있는 3단계 프로세스</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center relative z-10">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 z-20 text-gray-300">
                  <ArrowRight size={32} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">링크페이 서비스의 장점</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">비대면 무방문 서비스</h4>
                <p className="text-sm text-gray-600 leading-relaxed">전국 어디서나 스마트폰 하나로 간편하게 신청하고 즉시 입금 받을 수 있습니다.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">365일 24시간 운영</h4>
                <p className="text-sm text-gray-600 leading-relaxed">주말, 공휴일, 늦은 밤 상관없이 언제든 필요할 때 바로 이용 가능합니다.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">투명한 수수료 정책</h4>
                <p className="text-sm text-gray-600 leading-relaxed">숨겨진 수수료 없이 안내된 단가 그대로 정직하게 입금해 드립니다.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">철저한 보안 시스템</h4>
                <p className="text-sm text-gray-600 leading-relaxed">고객님의 소중한 개인정보는 거래 완료 즉시 파기하여 안전하게 보호합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
