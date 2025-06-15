
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
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            Timeless Designs,
            <br />
            Perfectly Executed.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 font-light max-w-3xl mx-auto">
            We craft exquisite interiors that blend elegance with modern sophistication, transforming your vision into a breathtaking reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-black px-10 py-7 text-xl rounded-lg font-semibold group transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-gray-400 text-gray-100 hover:bg-white/10 hover:border-white px-10 py-7 text-xl rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
