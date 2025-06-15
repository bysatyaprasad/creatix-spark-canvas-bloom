
import { ArrowRight, Award, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Scene3D from './Scene3D';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Professional Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full border border-amber-200">
                <Award className="h-5 w-5 text-amber-600" />
                <span className="text-amber-800 font-semibold">India's Premier Interior Design Studio</span>
                <Star className="h-4 w-4 text-amber-500 fill-current" />
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                  Dream Home
                </span>
                <span className="block text-3xl lg:text-4xl font-light text-gray-600 mt-2">
                  Into Reality
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                We specialize in creating bespoke interiors that reflect Indian sensibilities while embracing contemporary luxury. From traditional haveli-inspired designs to modern minimalist spaces, we craft homes that tell your unique story.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-10 py-7 text-xl rounded-xl font-semibold group transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-10 py-7 text-xl rounded-xl font-semibold transform hover:scale-105 transition-all duration-300"
              >
                <Users className="mr-3 h-6 w-6" />
                View Our Work
              </Button>
            </div>

            {/* Professional stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-amber-600 mb-2">500+</div>
                <div className="text-sm lg:text-base text-gray-600 font-medium">Luxury Homes Designed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-orange-600 mb-2">15+</div>
                <div className="text-sm lg:text-base text-gray-600 font-medium">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">98%</div>
                <div className="text-sm lg:text-base text-gray-600 font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right side - Professional 3D Scene */}
          <div className="h-[700px] relative animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 to-orange-100/30 rounded-3xl blur-3xl"></div>
            <div className="relative z-10 h-full rounded-3xl overflow-hidden border border-gray-200 bg-gradient-to-b from-white/80 to-gray-50/80 backdrop-blur-sm shadow-2xl">
              <Scene3D />
            </div>
            
            {/* Professional accents */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-15 blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Professional scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-3 animate-bounce">
          <div className="text-gray-500 text-sm font-medium">Discover Our Services</div>
          <div className="w-8 h-12 border-2 border-gray-300 rounded-full flex justify-center relative">
            <div className="w-1.5 h-4 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
