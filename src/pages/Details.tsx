export default function Details() {
  const rates = [
    { name: "컬쳐랜드 상품권", rate: "90%", status: "매입중" },
    { name: "해피머니 상품권", rate: "90%", status: "매입중" },
    { name: "북앤라이프 도서문화", rate: "88%", status: "매입중" },
    { name: "구글 기프트카드", rate: "85%", status: "매입중" },
    { name: "신세계/롯데 모바일", rate: "92%", status: "매입중" },
    { name: "소액결제 현금화", rate: "80~85%", status: "매입중" },
    { name: "정보이용료(콘텐츠)", rate: "60~70%", status: "매입중" },
  ];

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-primary p-8 text-white">
            <h1 className="text-2xl font-bold mb-2">실시간 매입 단가표</h1>
            <p className="text-white/80 text-sm">현재 시장 상황에 따른 실시간 매입 시세입니다. (2024년 기준)</p>
          </div>
          
          <div className="p-6 sm:p-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-4 font-bold text-gray-900">상품 종류</th>
                    <th className="py-4 font-bold text-gray-900">매입 단가</th>
                    <th className="py-4 font-bold text-gray-900 text-right">상태</th>
                  </tr>
                </thead>
                <tbody>
                  {rates.map((item, i) => (
                    <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 text-gray-700 font-medium">{item.name}</td>
                      <td className="py-4 text-primary font-bold text-lg">{item.rate}</td>
                      <td className="py-4 text-right">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">※ 단가 안내 사항</h3>
              <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
                <li>위 단가는 시장 상황에 따라 실시간으로 변동될 수 있습니다.</li>
                <li>대량 매입 시 추가 우대 단가 적용이 가능하오니 상담원에게 문의 바랍니다.</li>
                <li>매입이 완료된 후에는 취소가 불가능하오니 신중히 결정해 주시기 바랍니다.</li>
                <li>불법적인 경로로 획득한 상품권은 매입이 거부되며 수사기관에 통보됩니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
