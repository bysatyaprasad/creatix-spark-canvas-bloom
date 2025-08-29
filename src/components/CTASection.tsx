import { ArrowRight, Phone, Mail, MapPin, Sparkles, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function CTASection() {
  return (
    <section className="py-16 xs:py-24 sm:py-40 bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-48 h-48 bg-white/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-white/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-white/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-32 right-1/4 w-24 h-24 border border-white/10 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-white/10 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Enhanced pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-3 xs:px-6 sm:px-8 relative z-10">
        <div className="max-w-3xl sm:max-w-7xl mx-auto text-center mb-14 xs:mb-20 animate-fade-in">
          {/* Enhanced badge */}
          <div className="inline-flex items-center gap-2 xs:gap-4 px-6 xs:px-10 py-2 xs:py-5 bg-white/15 backdrop-blur-lg rounded-full border border-white/30 mb-6 xs:mb-12 shadow-2xl">
            <Sparkles className="h-6 xs:h-7 w-6 xs:w-7 text-amber-300 animate-pulse" />
            <span className="text-base xs:text-xl text-white font-bold tracking-wide">Ready to Begin Your Journey?</span>
          </div>

          {/* Enhanced headline */}
          <h2 className="text-3xl xs:text-6xl lg:text-8xl font-bold text-white mb-6 xs:mb-10 leading-tight font-playfair drop-shadow-2xl">
            Transform Your Vision
            <span className="block bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300 bg-clip-text text-transparent mt-2 xs:mt-4">
              Into Reality
            </span>
          </h2>
          
          <p className="text-base xs:text-lg lg:text-3xl text-white/95 mb-8 xs:mb-16 leading-relaxed font-light max-w-2xl xs:max-w-5xl mx-auto drop-shadow-lg">
            Experience the pinnacle of interior design excellence with premium materials at transparent prices. 
            Let's create a space that exceeds expectations without hidden costs.
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-col xs:flex-row flex-wrap justify-center items-center gap-4 xs:gap-8 mb-8 xs:mb-16 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span className="font-medium text-sm xs:text-base">No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span className="font-medium text-sm xs:text-base">Premium Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span className="font-medium text-sm xs:text-base">500+ Happy Customers</span>
            </div>
          </div>
          
          {/* Enhanced CTA buttons with Call/WhatsApp */}
          <div className="flex flex-col gap-4 justify-center items-center mb-12 xs:mb-20">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center">
              <Button 
                size="lg" 
                className="w-full sm:w-auto max-w-xs sm:max-w-none bg-white text-amber-900 hover:bg-gray-100 px-8 sm:px-20 py-5 sm:py-10 text-lg sm:text-2xl rounded-2xl sm:rounded-3xl group font-bold shadow-2xl transform hover:scale-105 transition-all duration-500"
                onClick={() => window.open('tel:+917842640744')}
              >
                Call +91 7842640744
                <ArrowRight className="ml-3 sm:ml-4 h-7 sm:h-8 w-7 sm:w-8 group-hover:translate-x-2 transition-transform duration-500" />
              </Button>
              
              <Button 
                size="lg" 
                className="w-full sm:w-auto max-w-xs sm:max-w-none bg-white text-amber-900 hover:bg-gray-100 px-8 sm:px-20 py-5 sm:py-10 text-lg sm:text-2xl rounded-2xl sm:rounded-3xl group font-bold shadow-2xl transform hover:scale-105 transition-all duration-500"
                onClick={() => window.open('tel:+916304746801')}
              >
                Call +91 6304746801
                <ArrowRight className="ml-3 sm:ml-4 h-7 sm:h-8 w-7 sm:w-8 group-hover:translate-x-2 transition-transform duration-500" />
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto max-w-xs sm:max-w-none border-2 sm:border-3 border-white text-white bg-transparent hover:bg-white/15 hover:border-white/80 px-8 sm:px-20 py-5 sm:py-10 text-lg sm:text-2xl rounded-2xl sm:rounded-3xl font-bold backdrop-blur-lg transform hover:scale-105 transition-all duration-500 shadow-2xl"
                onClick={() => window.open('https://wa.me/917842640744', '_blank')}
              >
                WhatsApp +91 7842640744
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto max-w-xs sm:max-w-none border-2 sm:border-3 border-white text-white bg-transparent hover:bg-white/15 hover:border-white/80 px-8 sm:px-20 py-5 sm:py-10 text-lg sm:text-2xl rounded-2xl sm:rounded-3xl font-bold backdrop-blur-lg transform hover:scale-105 transition-all duration-500 shadow-2xl"
                onClick={() => window.open('https://wa.me/916304746801', '_blank')}
              >
                WhatsApp +91 6304746801
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced contact card - Phone only */}
        <div className="flex justify-center max-w-2xl mx-auto">
          <Card className="bg-white/15 backdrop-blur-xl border-white/30 hover:bg-white/25 transition-all duration-700 group animate-fade-in shadow-2xl rounded-2xl xs:rounded-3xl overflow-hidden">
            <CardContent className="p-6 xs:p-12 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Phone className="h-12 w-12 text-white mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
              <h3 className="text-3xl font-bold text-white mb-6 font-playfair">Call Us</h3>
              <p className="text-white/90 text-xl font-medium">+91 7842640744</p>
              <p className="text-white/90 text-xl font-medium">+91 6304746801</p>
              <p className="text-white/70 text-sm mt-2">Available 9 AM - 8 PM</p>
            </CardContent>
          </Card>
        </div>

        {/* Final trust element */}
        <div className="text-center mt-10 xs:mt-20 animate-fade-in">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 xs:p-8 max-w-full xs:max-w-2xl mx-auto border border-white/20 shadow-2xl">
            <div className="flex items-center justify-center gap-1 xs:gap-2 mb-3 xs:mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 xs:w-6 h-5 xs:h-6 text-amber-400 fill-current" />
              ))}
            </div>
            <p className="text-white/90 text-base xs:text-lg italic mb-1 xs:mb-2">"Exceptional quality, honest pricing, and transparent service."</p>
            <p className="text-white/70 text-xs xs:text-sm">4.9/5 from 500+ verified customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
