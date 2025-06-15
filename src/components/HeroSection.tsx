
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=1974&auto=format&fit=crop')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            Premium Materials.
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Honest Prices.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light max-w-4xl mx-auto leading-relaxed">
            While others sell you cheap materials at premium prices, we believe in transparency. 
            Get the finest quality materials at their true value—no markups, no compromises.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
            <p className="text-lg md:text-xl text-amber-200 font-semibold mb-4">
              Our Promise to You:
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-white/90">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-3">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <p className="text-center font-medium">Premium Quality Materials Only</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-3">
                  <span className="text-white font-bold text-xl">₹</span>
                </div>
                <p className="text-center font-medium">Factory-Direct Pricing</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-3">
                  <span className="text-white font-bold text-xl">❤</span>
                </div>
                <p className="text-center font-medium">Complete Transparency</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-black px-12 py-8 text-xl rounded-2xl font-bold group transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get Your Free Quote
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-white px-12 py-8 text-xl rounded-2xl font-bold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              See Our Materials
            </Button>
          </div>

          <p className="text-sm text-white/70 mt-8 italic">
            "Stop paying premium prices for cheap materials. Experience the difference quality makes."
          </p>
        </div>
      </div>
    </section>
  );
}
