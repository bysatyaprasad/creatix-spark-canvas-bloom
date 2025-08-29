import { ArrowRight, Sparkles, Shield, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-16 pb-8 sm:pt-28 sm:pb-16"
      style={{ 
        background: `
          linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.85) 100%),
          url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=1974&auto=format&fit=crop')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-amber-400/15 to-orange-500/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-[28rem] h-[28rem] bg-gradient-to-br from-blue-400/15 to-purple-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-400/15 to-teal-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-32 right-1/4 w-32 h-32 bg-gradient-to-br from-pink-400/10 to-rose-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced trust badge */}
          <div className="inline-flex flex-col xs:flex-row items-center gap-2 xs:gap-4 px-6 xs:px-8 py-3 sm:py-4 bg-white/15 backdrop-blur-lg rounded-full border border-white/30 mb-6 sm:mb-10 animate-fade-in shadow-2xl hover:bg-white/20 transition-all duration-500 w-full max-w-fit mx-auto">
            <Sparkles className="w-6 h-6 text-amber-400 animate-pulse" />
            <span className="text-base font-semibold tracking-wide whitespace-nowrap">Trusted by 500+ Happy Clients</span>
            <div className="flex -space-x-2 xs:-space-x-3 mt-2 xs:mt-0">
              <div className="w-7 h-7 xs:w-8 xs:h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="w-7 h-7 xs:w-8 xs:h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="w-7 h-7 xs:w-8 xs:h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full border-4 border-white shadow-lg"></div>
            </div>
          </div>

          {/* Enhanced headline */}
          <h1 className="font-playfair text-4xl xs:text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[1] mb-6 sm:mb-10 animate-fade-in">
            <span className="block text-white/95 drop-shadow-2xl">Transform Your Space.</span>
            <span className="block bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-300 bg-clip-text text-transparent animate-pulse-glow drop-shadow-2xl text-2xl xs:text-3xl sm:text-5xl md:text-7xl">
              Transparent Process.
            </span>
            <span className="block text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white/80 font-light mt-4 sm:mt-6 drop-shadow-xl">
              Exceptional Results.
            </span>
          </h1>
          
          {/* Enhanced description */}
          <p className="text-base xs:text-lg md:text-2xl lg:text-3xl text-gray-100 mb-10 sm:mb-16 font-light max-w-2xl sm:max-w-5xl mx-auto leading-relaxed animate-fade-in drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
            Experience complete interior transformation with our end-to-end design and build services for homes, offices, and commercial spaces. 
            From concept to completion, we deliver <span className="text-amber-300 font-semibold bg-amber-900/20 px-2 py-1 rounded-lg">stunning interiors</span> with 
            full transparency in pricing, process, and timeline—no surprises, just results.
          </p>

          {/* Enhanced value proposition cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20 max-w-2xl sm:max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-6 xs:p-8 sm:p-10 border border-white/20 hover:bg-white/20 transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-102 sm:hover:scale-105 animate-fade-in shadow-2xl" style={{ animationDelay: '0.3s' }}>
              <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-3xl flex items-center justify-center mb-4 sm:mb-8 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white">End-to-End Service</h3>
              <p className="text-white/90 leading-relaxed text-base sm:text-lg">Complete design and execution from concept to final installation. One team, seamless process.</p>
            </div>
            {/* Card 2 */}
            <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-6 xs:p-8 sm:p-10 border border-white/20 hover:bg-white/20 transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-102 sm:hover:scale-105 animate-fade-in shadow-2xl" style={{ animationDelay: '0.4s' }}>
              <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl flex items-center justify-center mb-4 sm:mb-8 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                <TrendingDown className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white">Transparent Pricing</h3>
              <p className="text-white/90 leading-relaxed text-base sm:text-lg">Clear breakdowns of costs, timelines, and processes. Know exactly what you're investing in.</p>
            </div>
            {/* Card 3 */}
            <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-6 xs:p-8 sm:p-10 border border-white/20 hover:bg-white/20 transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-102 sm:hover:scale-105 animate-fade-in shadow-2xl" style={{ animationDelay: '0.5s' }}>
              <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center mb-4 sm:mb-8 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white">Quality Guaranteed</h3>
              <p className="text-white/90 leading-relaxed text-base sm:text-lg">Premium materials and expert craftsmanship with comprehensive warranties on all work.</p>
            </div>
          </div>

          {/* Enhanced CTA Section with Call/WhatsApp */}
          <div className="animate-fade-in flex flex-col items-center w-full gap-4" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Button 
                size="lg" 
                className="w-full xs:w-auto max-w-[340px] sm:max-w-none bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white px-8 xs:px-12 sm:px-16 py-5 sm:py-8 text-lg xs:text-xl sm:text-xl rounded-2xl sm:rounded-3xl font-bold group transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 shadow-2xl hover:shadow-amber-500/40 border-0"
                onClick={() => window.open('tel:+917842640744')}
              >
                Call +91 7842640744
                <ArrowRight className="ml-4 h-6 sm:h-7 w-6 sm:w-7 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              
              <Button 
                size="lg" 
                className="w-full xs:w-auto max-w-[340px] sm:max-w-none bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white px-8 xs:px-12 sm:px-16 py-5 sm:py-8 text-lg xs:text-xl sm:text-xl rounded-2xl sm:rounded-3xl font-bold group transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 shadow-2xl hover:shadow-amber-500/40 border-0"
                onClick={() => window.open('tel:+916304746801')}
              >
                Call +91 6304746801
                <ArrowRight className="ml-4 h-6 sm:h-7 w-6 sm:w-7 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-6 sm:mb-8">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full xs:w-auto max-w-[340px] sm:max-w-none border-2 border-white/30 text-white bg-white/10 hover:bg-white/20 hover:border-white/50 px-8 xs:px-12 sm:px-16 py-5 sm:py-8 text-lg xs:text-xl sm:text-xl rounded-2xl sm:rounded-3xl font-bold group transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 shadow-2xl backdrop-blur-lg"
                onClick={() => window.open('https://wa.me/917842640744', '_blank')}
              >
                WhatsApp +91 7842640744
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="w-full xs:w-auto max-w-[340px] sm:max-w-none border-2 border-white/30 text-white bg-white/10 hover:bg-white/20 hover:border-white/50 px-8 xs:px-12 sm:px-16 py-5 sm:py-8 text-lg xs:text-xl sm:text-xl rounded-2xl sm:rounded-3xl font-bold group transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 shadow-2xl backdrop-blur-lg"
                onClick={() => window.open('https://wa.me/916304746801', '_blank')}
              >
                WhatsApp +91 6304746801
              </Button>
            </div>
            
            {/* Enhanced testimonial */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 xs:p-8 max-w-full xs:max-w-2xl mx-auto border border-white/20 shadow-2xl">
              <p className="text-base xs:text-lg text-white/90 mb-4 xs:mb-6 italic leading-relaxed">
                "Finally, a design service that delivers exactly what they promise. The transparency throughout was refreshing!"
              </p>
              
              <div className="flex flex-col xs:flex-row items-center justify-center gap-2 xs:gap-6 text-xs xs:text-sm text-white/70">
                <div className="flex items-center gap-1 xs:gap-2 mb-2 xs:mb-0">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-sm xs:text-lg">★</span>
                    ))}
                  </div>
                  <span className="font-semibold">4.9/5</span>
                </div>
                <span className="hidden xs:inline">•</span>
                <span>200+ verified reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-40 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
    </section>
  );
}
