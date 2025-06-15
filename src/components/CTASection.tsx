
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's bring your vision to life. Get a free consultation and discover how we can create the perfect space for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full group">
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
              Browse Our Portfolio
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group animate-slide-in-left">
            <CardContent className="p-6 text-center">
              <Phone className="h-8 w-8 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-white/80">+1 (555) 123-4567</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6 text-center">
              <Mail className="h-8 w-8 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-white/80">hello@creatixinteriors.com</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group animate-slide-in-right">
            <CardContent className="p-6 text-center">
              <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-purple-600 font-bold text-sm">24/7</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Available</h3>
              <p className="text-white/80">Round the clock support</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
