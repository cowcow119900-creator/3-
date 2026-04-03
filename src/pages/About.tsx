import { ShieldCheck, FileText, Lock, AlertTriangle } from 'lucide-react';

export default function About() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">업체 소개 및 안전 안내</h1>
          <p className="text-gray-600">정직과 신뢰를 바탕으로 고객님과 함께합니다.</p>
        </div>

        <div className="space-y-8">
          <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="text-primary" size={28} />
              <h2 className="text-xl font-bold text-gray-900">정식 등록 업체 인증</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              링크페이는 관계 법령을 준수하며 정식으로 사업자 등록을 마친 합법적인 업체입니다. 
              일부 불법 무등록 업체들의 과장 광고와 사기 행위로부터 고객님을 보호하기 위해 모든 거래 과정을 투명하게 공개하고 있습니다.
            </p>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="text-secondary" size={28} />
              <h2 className="text-xl font-bold text-gray-900">개인정보 보호 정책</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              고객님의 성함, 연락처, 계좌번호 등 모든 민감 정보는 오직 본인 확인 및 입금 목적으로만 사용됩니다. 
              거래가 완료된 데이터는 당일 즉시 파기하는 것을 원칙으로 하며, 어떠한 경우에도 제3자에게 제공하거나 마케팅 용도로 활용하지 않습니다.
            </p>
          </section>

          <section className="bg-red-50 rounded-3xl p-8 border border-red-100">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="text-primary" size={28} />
              <h2 className="text-xl font-bold text-gray-900">사기 업체 주의 안내</h2>
            </div>
            <div className="space-y-4 text-sm text-gray-700">
              <p className="font-bold">※ 아래와 같은 경우에는 사기일 가능성이 높으니 주의하시기 바랍니다.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>타 업체에 비해 비정상적으로 높은 매입가를 제시하는 경우</li>
                <li>선입금을 요구하거나 수수료 명목으로 추가 비용을 요청하는 경우</li>
                <li>사업자 정보가 불분명하거나 고객센터 연결이 되지 않는 경우</li>
                <li>개인 카톡 아이디로만 상담을 유도하고 공식 채널이 없는 경우</li>
              </ul>
              <p className="mt-4 text-xs text-red-600">
                링크페이는 어떠한 경우에도 고객님께 선입금을 요구하지 않습니다.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
