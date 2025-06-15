
import { ArrowRight, Sparkles, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Scene3D from './Scene3D';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Enhanced Content */}
          <div className="space-y-10 animate-slide-in-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-purple-500/30">
                <Award className="h-5 w-5 text-purple-400" />
                <span className="text-purple-300 font-semibold">Award-Winning Design Studio</span>
                <Sparkles className="h-4 w-4 text-pink-400" />
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-black text-white leading-none tracking-tight">
                Design
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Excellence
                </span>
                <span className="block text-4xl lg:text-5xl font-light text-gray-300 mt-2">
                  Redefined
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-xl font-light">
                We craft extraordinary spaces that transcend ordinary living. Every project is a masterpiece of innovation, luxury, and personal expression.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 text-white px-10 py-7 text-xl rounded-2xl font-semibold group transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/25"
              >
                Begin Your Journey
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-300/30 text-white hover:bg-white/10 hover:border-white/50 px-10 py-7 text-xl rounded-2xl font-semibold backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
              >
                <Users className="mr-3 h-6 w-6" />
                Meet Our Team
              </Button>
            </div>

            {/* Enhanced stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-black text-white mb-2 group-hover:text-purple-400 transition-colors">750+</div>
                <div className="text-sm lg:text-base text-gray-400 font-medium">Luxury Projects</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-black text-white mb-2 group-hover:text-pink-400 transition-colors">99%</div>
                <div className="text-sm lg:text-base text-gray-400 font-medium">Client Satisfaction</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors">25+</div>
                <div className="text-sm lg:text-base text-gray-400 font-medium">Years Mastery</div>
              </div>
            </div>
          </div>

          {/* Right side - Enhanced 3D Scene */}
          <div className="h-[700px] relative animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-3xl blur-3xl transform rotate-6"></div>
            <div className="absolute inset-4 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl blur-2xl transform -rotate-3"></div>
            <div className="relative z-10 h-full rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm bg-black/20">
              <Scene3D />
            </div>
            
            {/* Floating design elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full opacity-15 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-3 animate-bounce">
          <div className="text-white/60 text-sm font-medium">Scroll to explore</div>
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center relative">
            <div className="w-1.5 h-4 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
