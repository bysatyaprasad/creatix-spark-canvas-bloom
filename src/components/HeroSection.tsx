
import { ArrowRight, Sparkles, Shield, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
      style={{ 
        background: `
          linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%),
          url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=1974&auto=format&fit=crop')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-400/10 to-orange-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-teal-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-fade-in">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-medium">Trusted by 500+ Happy Homeowners</span>
            <div className="flex -space-x-2">
              <div className="w-6 h-6 bg-amber-400 rounded-full border-2 border-white"></div>
              <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-white"></div>
              <div className="w-6 h-6 bg-emerald-400 rounded-full border-2 border-white"></div>
            </div>
          </div>

          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 animate-fade-in">
            <span className="block text-white/90">Premium Materials.</span>
            <span className="block bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-300 bg-clip-text text-transparent animate-pulse-glow">
              Fair Prices.
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl text-white/70 font-light mt-4">
              No Hidden Markups.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 font-light max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            While others sell you ordinary materials at premium prices, we believe in transparency. 
            Get access to <span className="text-amber-300 font-semibold">high-quality materials</span> through our 
            trusted supplier network—no inflated markups, no compromises on quality.
          </p>

          {/* Value proposition cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
            <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Premium Quality Only</h3>
              <p className="text-white/80 leading-relaxed">Every material meets our strict quality standards. No compromises, no shortcuts.</p>
            </div>

            <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <TrendingDown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Honest Pricing</h3>
              <p className="text-white/80 leading-relaxed">Fair margins, transparent costs. See exactly what you're paying for.</p>
            </div>

            <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Complete Transparency</h3>
              <p className="text-white/80 leading-relaxed">Know exactly where your money goes. No hidden fees or surprise charges.</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-16 py-8 text-xl rounded-2xl font-bold group transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/25 border-0"
            >
              Get Your Honest Quote
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-sm text-white/60 mt-6 italic max-w-md mx-auto">
              "Finally, someone who doesn't overcharge for quality materials. The transparency is refreshing!"
            </p>
            
            <div className="flex items-center justify-center gap-4 mt-4 text-xs text-white/50">
              <span>★★★★★</span>
              <span>4.9/5 from 200+ reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-transparent to-transparent"></div>
    </section>
  );
}
