
import { ArrowRight, Sparkles, Shield, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
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
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/15 backdrop-blur-lg rounded-full border border-white/30 mb-10 animate-fade-in shadow-2xl hover:bg-white/20 transition-all duration-500">
            <Sparkles className="w-6 h-6 text-amber-400 animate-pulse" />
            <span className="text-base font-semibold tracking-wide">Trusted by 500+ Happy Homeowners</span>
            <div className="flex -space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full border-3 border-white shadow-lg"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full border-3 border-white shadow-lg"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full border-3 border-white shadow-lg"></div>
            </div>
          </div>

          {/* Enhanced headline */}
          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-10 animate-fade-in">
            <span className="block text-white/95 drop-shadow-2xl">Transform Your Home.</span>
            <span className="block bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-300 bg-clip-text text-transparent animate-pulse-glow drop-shadow-2xl">
              Transparent Process.
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl text-white/80 font-light mt-6 drop-shadow-xl">
              Exceptional Results.
            </span>
          </h1>
          
          {/* Enhanced description */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 mb-16 font-light max-w-5xl mx-auto leading-relaxed animate-fade-in drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
            Experience complete interior transformation with our end-to-end design and build services. 
            From concept to completion, we deliver <span className="text-amber-300 font-semibold bg-amber-900/20 px-3 py-1 rounded-lg">stunning interiors</span> with 
            full transparency in pricing, process, and timeline—no surprises, just results.
          </p>

          {/* Enhanced value proposition cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
            <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 hover:bg-white/20 transition-all duration-700 hover:-translate-y-4 hover:scale-105 animate-fade-in shadow-2xl" style={{ animationDelay: '0.3s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">End-to-End Service</h3>
              <p className="text-white/90 leading-relaxed text-lg">Complete design and execution from concept to final installation. One team, seamless process.</p>
            </div>

            <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 hover:bg-white/20 transition-all duration-700 hover:-translate-y-4 hover:scale-105 animate-fade-in shadow-2xl" style={{ animationDelay: '0.4s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                <TrendingDown className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Transparent Pricing</h3>
              <p className="text-white/90 leading-relaxed text-lg">Clear breakdowns of costs, timelines, and processes. Know exactly what you're investing in.</p>
            </div>

            <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 hover:bg-white/20 transition-all duration-700 hover:-translate-y-4 hover:scale-105 animate-fade-in shadow-2xl" style={{ animationDelay: '0.5s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Quality Guaranteed</h3>
              <p className="text-white/90 leading-relaxed text-lg">Premium materials and expert craftsmanship with comprehensive warranties on all work.</p>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white px-20 py-10 text-2xl rounded-3xl font-bold group transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-amber-500/40 border-0 mb-8"
            >
              Get Your Honest Quote
              <ArrowRight className="ml-4 h-7 w-7 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            
            {/* Enhanced testimonial */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto border border-white/20 shadow-2xl">
              <p className="text-lg text-white/90 mb-6 italic leading-relaxed">
                "Finally, a design service that delivers exactly what they promise. The transparency throughout was refreshing!"
              </p>
              
              <div className="flex items-center justify-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-lg">★</span>
                    ))}
                  </div>
                  <span className="font-semibold">4.9/5</span>
                </div>
                <span>•</span>
                <span>200+ verified reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
    </section>
  );
}
