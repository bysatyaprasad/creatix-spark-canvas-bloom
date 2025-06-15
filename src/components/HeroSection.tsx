
import { ArrowRight, Users, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
      
      {/* Sophisticated overlay pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #d4af37 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Premium accent gradients */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-amber-600/10 via-orange-600/5 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-amber-500/8 via-yellow-600/4 to-transparent blur-3xl"></div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Premium Content Section */}
          <div className="space-y-10 animate-slide-in-left">
            <div className="space-y-8">
              {/* Luxury Badge */}
              <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-amber-900/20 via-amber-800/20 to-orange-900/20 rounded-full border border-amber-700/30 backdrop-blur-sm">
                <Sparkles className="h-6 w-6 text-amber-400" />
                <span className="text-amber-200 font-semibold text-lg tracking-wide">Luxury Interior Design Excellence</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                  ))}
                </div>
              </div>
              
              {/* Premium Headline */}
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                  <span className="text-white">Exquisite</span>
                  <br />
                  <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                    Interiors
                  </span>
                  <br />
                  <span className="text-2xl lg:text-3xl font-light text-gray-300 block mt-4">
                    Crafted to Perfection
                  </span>
                </h1>
                
                <p className="text-2xl lg:text-3xl text-gray-300 leading-relaxed max-w-3xl font-light">
                  We create breathtaking interiors that seamlessly blend timeless elegance with contemporary sophistication. 
                  Each space is meticulously designed to reflect your unique vision and elevate your lifestyle.
                </p>
              </div>
            </div>

            {/* Premium CTA Section */}
            <div className="flex flex-col sm:flex-row gap-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 hover:from-amber-700 hover:via-amber-600 hover:to-yellow-600 text-black px-12 py-8 text-2xl rounded-2xl font-bold group transform hover:scale-105 transition-all duration-500 shadow-2xl shadow-amber-500/25"
              >
                Begin Your Journey
                <ArrowRight className="ml-4 h-7 w-7 group-hover:translate-x-3 transition-transform duration-500" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-600 text-gray-200 hover:bg-white/5 hover:border-gray-400 hover:text-white px-12 py-8 text-2xl rounded-2xl font-bold transform hover:scale-105 transition-all duration-500 backdrop-blur-sm"
              >
                <Users className="mr-4 h-7 w-7" />
                Explore Portfolio
              </Button>
            </div>

            {/* Premium Statistics */}
            <div className="grid grid-cols-3 gap-12 pt-12 border-t border-gray-700/50">
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-3">
                  1000+
                </div>
                <div className="text-lg text-gray-400 font-medium">Luxury Projects</div>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-3">
                  20+
                </div>
                <div className="text-lg text-gray-400 font-medium">Years Mastery</div>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent mb-3">
                  100%
                </div>
                <div className="text-lg text-gray-400 font-medium">Excellence</div>
              </div>
            </div>
          </div>

          {/* Premium Image Showcase */}
          <div className="h-[800px] relative animate-slide-in-right">
            {/* Sophisticated background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-orange-500/3 to-yellow-500/5 rounded-3xl blur-3xl"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-600/20 via-transparent to-orange-600/20 rounded-3xl blur-xl"></div>
            
            {/* Main Image container */}
            <div className="relative z-10 h-full rounded-3xl overflow-hidden border border-amber-700/20 bg-gradient-to-b from-gray-900/40 via-gray-800/30 to-gray-900/40 backdrop-blur-xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=1974&auto=format&fit=crop"
                alt="Luxurious modern living room"
                className="w-full h-full object-cover"
              />
              
              {/* Premium overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-orange-500/5 pointer-events-none"></div>
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-br from-yellow-400/15 to-amber-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Premium scroll indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-4 animate-bounce">
          <div className="text-gray-400 text-base font-medium tracking-wider uppercase">Discover Excellence</div>
          <div className="w-10 h-16 border-2 border-amber-600/50 rounded-full flex justify-center relative">
            <div className="w-2 h-6 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full mt-3 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
