
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <HowItWorksSection />
      
      {/* Cities We Serve Section for SEO */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
            Interior Design Services Across India
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            We provide premium interior design services across major cities in India. Click on your city to explore our local services and portfolio.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <a href="/interior-design-vizianagaram" className="group bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">Vizianagaram</h3>
              <p className="text-sm text-gray-600">Andhra Pradesh</p>
            </a>
            <a href="/interior-design-visakhapatnam" className="group bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">Visakhapatnam</h3>
              <p className="text-sm text-gray-600">Andhra Pradesh</p>
            </a>
            <a href="/interior-design-hyderabad" className="group bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">Hyderabad</h3>
              <p className="text-sm text-gray-600">Telangana</p>
            </a>
            <a href="/interior-design-vijayawada" className="group bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">Vijayawada</h3>
              <p className="text-sm text-gray-600">Andhra Pradesh</p>
            </a>
            <a href="/interior-design-guntur" className="group bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">Guntur</h3>
              <p className="text-sm text-gray-600">Andhra Pradesh</p>
            </a>
            <a href="/interior-design-nellore" className="group bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">Nellore</h3>
              <p className="text-sm text-gray-600">Andhra Pradesh</p>
            </a>
            <a href="/interior-design-kakinada" className="group bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">Kakinada</h3>
              <p className="text-sm text-gray-600">Andhra Pradesh</p>
            </a>
            <a href="/interior-design-rajahmundry" className="group bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">Rajahmundry</h3>
              <p className="text-sm text-gray-600">Andhra Pradesh</p>
            </a>
            <a href="/interior-design-tirupati" className="group bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">Tirupati</h3>
              <p className="text-sm text-gray-600">Andhra Pradesh</p>
            </a>
            <a href="/interior-design-anantapur" className="group bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">Anantapur</h3>
              <p className="text-sm text-gray-600">Andhra Pradesh</p>
            </a>
            <a href="/interior-design-kurnool" className="group bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">Kurnool</h3>
              <p className="text-sm text-gray-600">Andhra Pradesh</p>
            </a>
            <a href="/interior-design-kadapa" className="group bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">Kadapa</h3>
              <p className="text-sm text-gray-600">Andhra Pradesh</p>
            </a>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Don't see your city? We serve many more locations across India.</p>
            <a href="/contact" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold">
              Contact us for your area
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      <CTASection />
    </div>
  );
};

export default Index;
