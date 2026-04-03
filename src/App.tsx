import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import QuickMenu from './components/layout/QuickMenu';
import Home from './pages/Home';
import Details from './pages/Details';
import Services from './pages/Services';
import About from './pages/About';
import Support from './pages/Support';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
        <Footer />
        <QuickMenu />
      </div>
    </Router>
  );
}
