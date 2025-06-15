
import { ArrowRight, Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function CTASection() {
  return (
    <section className="py-32 bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-16 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-56 h-56 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Premium pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-16 animate-fade-in">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Sparkles className="h-6 w-6 text-amber-300" />
            <span className="text-white font-bold text-xl tracking-wide">Ready to Begin?</span>
          </div>

          {/* Premium headline */}
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Transform Your Vision
            <span className="block bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300 bg-clip-text text-transparent">
              Into Reality
            </span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-white/90 mb-12 leading-relaxed font-light max-w-4xl mx-auto">
            Experience the pinnacle of interior design excellence. Let's create a space that transcends 
            expectations and defines luxury living.
          </p>
          
          {/* Premium CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-amber-900 hover:bg-gray-100 px-16 py-8 text-2xl rounded-2xl group font-bold shadow-2xl transform hover:scale-105 transition-all duration-500"
            >
              Schedule Consultation
              <ArrowRight className="ml-4 h-7 w-7 group-hover:translate-x-2 transition-transform duration-500" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-16 py-8 text-2xl rounded-2xl font-bold backdrop-blur-sm transform hover:scale-105 transition-all duration-500"
            >
              Explore Services
            </Button>
          </div>
        </div>

        {/* Premium contact cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/20 transition-all duration-500 group animate-slide-in-left">
            <CardContent className="p-10 text-center">
              <Phone className="h-10 w-10 text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-2xl font-bold text-white mb-4">Call Us</h3>
              <p className="text-white/80 text-lg">+91 98765 43210</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/20 transition-all duration-500 group animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-10 text-center">
              <Mail className="h-10 w-10 text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-2xl font-bold text-white mb-4">Email Us</h3>
              <p className="text-white/80 text-lg">hello@luxeinteriors.in</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/20 transition-all duration-500 group animate-slide-in-right">
            <CardContent className="p-10 text-center">
              <MapPin className="h-10 w-10 text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-2xl font-bold text-white mb-4">Visit Us</h3>
              <p className="text-white/80 text-lg">Major Cities Across India</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
