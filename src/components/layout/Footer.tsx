import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-800 pb-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-white flex items-center gap-1 mb-4">
              <span className="bg-primary text-white px-2 py-0.5 rounded italic">링크</span>
              <span>페이</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-md">
              링크페이는 정식 사업자 등록 업체로서 고객님의 소중한 자산을 안전하고 신속하게 현금화해 드립니다. 
              24시간 연중무휴 상담원이 대기 중이며, 개인정보 보호를 최우선으로 합니다.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">서비스 메뉴</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/details" className="hover:text-white">실시간 매입단가</Link></li>
              <li><Link to="/services" className="hover:text-white">이용방법 안내</Link></li>
              <li><Link to="/about" className="hover:text-white">안전거래 가이드</Link></li>
              <li><Link to="/support" className="hover:text-white">자주 묻는 질문</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">고객센터</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-primary font-bold text-lg">1588-0000</li>
              <li>상담시간: 365일 24시간</li>
              <li>카카오톡: linkpay</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 text-xs flex flex-col md:flex-row justify-between gap-4">
          <div>
            <p>상호명: 링크페이 | 대표자: 홍길동 | 사업자등록번호: 000-00-00000</p>
            <p className="mt-1">주소: 서울특별시 강남구 테헤란로 123, 4층 | 통신판매업신고: 제2024-서울강남-0000호</p>
          </div>
          <p>© 2024 Link Pay. All rights reserved.</p>
        </div>
        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg text-[10px] leading-tight">
          <p className="text-gray-500 font-bold mb-1">※ 주의사항</p>
          <p>타인의 정보를 도용하여 결제하는 행위는 형사처벌의 대상이 될 수 있습니다. 보이스피싱 및 사기 연루 시 즉시 수사기관에 신고 조치됩니다. 과도한 소액결제 이용은 가계 경제에 부담이 될 수 있으니 계획적인 이용을 권장합니다.</p>
        </div>
      </div>
    </footer>
  );
}
